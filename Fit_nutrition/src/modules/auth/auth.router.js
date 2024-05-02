import Router from "express";
import { isValid } from "../../middleware/validation.js";
import {
  registerSchema,
  loginSchema,
  activateSchema,
  forgetPassSchema,
  resetPasswordSchema,
  OTPCodeSchema,
} from "./auth.vaildation.js";
import {
  activateAccount,
  login,
  register,
  resetPassword,
  sendForgetCode,
  OTPCode,
} from "./auth.controller.js";
const router = Router();

// register
router.post("/register", isValid(registerSchema), register);

// login

router.post("/login", isValid(loginSchema), login);
// confirmEmail
router.post(
  "/confirmEmail",
  isValid(activateSchema),
  activateAccount
);

// forget pass
router.patch("/forgetPass", isValid(forgetPassSchema), sendForgetCode);

/// resetPassword
router.patch("/resetPassword", isValid(resetPasswordSchema), resetPassword);

router.post("/OTPCode", isValid(OTPCodeSchema), OTPCode);

export default router;
