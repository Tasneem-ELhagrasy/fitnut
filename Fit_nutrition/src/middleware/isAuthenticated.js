import { Token } from "./../../DB/models/models.token.js";
import { catchError } from "./../utils/catchError.js";
import jwt from "jsonwebtoken";
import { User } from "./../../DB/models/models.userjs";

export const isAuthenticated = catchError(async (req, res, next) => {
  let token = res.headers["token"];
  // check token
  if (!token) return next(new Error("Token IS Required !", { cause: 400 }));
  // check BEARER_KEY
  if (!token.startsWith(process.env.BEARER_KEY))
    return next(new Error("Invalid token !", { cause: 404 }));
  token = token.split(process.env.BEARER_KEY)[1];
  // cehck token in data
  const tokenDB = await Token.findOne({ token, isValid: true });
  if (!tokenDB) return next(new Error("Token expired !"));
  // decode
  const decode = jwt.verify(token, process.env.TOKEN_KEY);
  const user = await User.findOne({ email: decode.email });
  if (!user) return next(new Error("User Not Found !"));
  req.user = user;
  return next();
});
