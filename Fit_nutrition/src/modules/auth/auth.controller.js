import { catchError } from "./../../utils/catchError.js";
import { User } from "./../../../DB/models/models.user.js";
import bcrypt from "bcryptjs";
import bcryptjs from "bcryptjs";
import { Token } from "./../../../DB/models/models.token.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "./../../utils/sendEmail.js";
import crypto from "crypto";
import randomstring from "randomstring";
import { snedMessage } from "../../utils/snedMSM.js";

// register
export const register = catchError(async (req, res, next) => {
  //data >> req
  const { fullName, email, password, phone } = req.body;
  // checks
  // check email
  const isEmail = await User.findOne({ email });
  if (isEmail) return next(new Error("Email Already Exists"));

  // phone
  const isPhone = await User.findOne({ phone });
  if (isPhone) return next(new Error("Phone Already Exists"));
  // hashPass
  const hashPass = bcrypt.hashSync(password, 8);
  // activationCode
  // const activationCode = crypto.randomBytes(64).toString("hex");
  //create User

  // // generate Code OTP

  const OTPCode = randomstring.generate({
    length: 4,
    charset: "numeric",
  });

  const activationCode = randomstring.generate({
    length: 4,
    charset: "numeric",
  });

  // snedMessage({
  //   to: `2${phone}`,
  //   from: "Fit_Nutrition",
  //   text: `*${OTPCode}* is your verification code. Do not share this code with anyone. `,
  // });

  const user = await User.create({
    fullName,
    email,
    password: hashPass,
    phone,
    activationCode,
    OTPCode,
  });

  //

  // generate link
  // const link = `http://localhost:3000/auth/confirmEmail/${activationCode}`;

  // send link

  const isSend = sendEmail({
    to: email,
    subject: "Confirm Eamil",
    text: `Hello ${user.fullName} From Giga Acadmay `,
    html: ` <h2> ${activationCode} this code to confirm Email  , don't share with anyone . </h2>`,
    // code,
  });

  //send response
  return isSend
    ? res.json({
        success: true,
        message: " successfully registered , Please review Your  Email",
      })
    : next(new Error("SomeThing Went wrong !"));
});

// login
export const login = catchError(async (req, res, next) => {
  // data >> body
  const { email, password } = req.body;

  // check email
  const user = await User.findOne({ email });

  if (!user) return next(new Error("Invalid Email!", { cause: 400 }));

  // check password
  const matchPass = bcrypt.compareSync(password, user.password);
  if (!matchPass) next(new Error("Invalid Password !", { cause: 400 }));
  // check phone

  if (user.OTPCode)
    return next(
      new Error(
        " Please check your number phone exists message , Please confirm phone !"
      )
    );

  // check confrim Email

  console.log(user.OTPCode);
  if (!user.isConfirmed)
    return next(
      new Error("Please  Check  review Your Email To Active Account", {
        cause: 400,
      })
    );
  // generate token
  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.TOKEN_KEY
  );

  // create token
  await Token.create({
    token,
    user: user._id,
    agent: req.headers["user_agent"],
  });

  user.status = "online";
  await user.save();
  // send Response
  return res.json({
    success: true,
    message: "Token created successfully",
    token,
  });
});

// activateAccount
export const activateAccount = catchError(async (req, res, next) => {
  const user = await User.findOneAndUpdate(
    { activationCode: req.body.activationCode },
    { isConfirmed: true, $unset: { activationCode: 1 } }
  );

  if (!user) return next(new Error("User Not Found !", { cause: 404 }));

  return res.json({
    success: true,
    message:
      "Congratuation , your Account  is Now  Activated , try to login now ",
  });
});

//send Forget Code
export const sendForgetCode = catchError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new Error("Invalid Email"));
  //generate code
  const code = randomstring.generate({
    length: 4,
    charset: "numeric",
  });
  user.forGetCode = code;
  await user.save();
  //send email
  sendEmail({
    to: user.email,
    subject: "rest Password",
    text: `Hello${user.userName}`,
    html: `<h1>${code}</h1>`,
  });
  return res.json({ success: true, message: "check your Eamil" });
});

export const resetPassword = catchError(async (req, res, next) => {
  let user = await User.findOne({ forGetCode: req.body.forGetCode });
  if (!user) return next(new Error("Invalid Code !"));
  user = await User.findOneAndUpdate(
    { email: req.body.email },

    { $unset: { forGetCode: 1 } }
  );
  if (!user) return next(new Error("Invalid Email"));

  user.password = bcryptjs.hashSync(req.body.password, 8);
  await user.save();

  const tokens = await Token.find({ user: user._id });
  tokens.forEach(async (token) => {
    token.isValid = false;
    await token.save();
  });
  return res.json({ success: true, message: " Try to login again !" });
});

export const OTPCode = catchError(async (req, res, next) => {
  /// data >> body  >>   OTPCode
  const { OTPCode, phone } = req.body;
  const user = await User.findOneAndUpdate(
    { OTPCode, phone },
    { $unset: { OTPCode: 1 } }
  );
  if (!user) return next(new Error("Invalid Code Or Phone Number  !"));
  return res.json({ success: true, message: " Try to login  again" });
});
