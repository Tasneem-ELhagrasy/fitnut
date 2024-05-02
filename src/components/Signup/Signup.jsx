import React, { useState } from "react";
import Style from "./Signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import frameOne from "../../Assets/images/Frame 2045.png";

export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateSchema = Yup.object({
    fullName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(10, "Name cannot exceed 10 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
        "Password must contain at least 12 characters, 1 uppercase, 1 lowercase, 1 special character, and 1 number"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  async function submitRegister(values) {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://fit-nutrition.vercel.app/auth/register`,
        values
      );
      if (response.success === true) {
        setIsLoading(false);
        navigate("/login");
        console.log(response);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.response.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validateSchema,
    onSubmit: submitRegister,
  });

  return (
    <div className="container">
      <div className="row pl-10 d-flex">
        <div className="col-md-6 w-50">
          <img src={frameOne} width={450} alt="frameone" />
        </div>
        <div className="col-md-6 m-auto w-50 align-items-center">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={formik.handleSubmit} className="w-75 ">
            <div className="input-container">
              <label htmlFor="fullName" className="label">
                Full Name
              </label>
              <input
                className="form-control mb-2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.fullName}
                id="name"
                type="text"
                name="fullName"
                placeholder="Enter your name"
                required
              />
            </div>
            {formik.errors.fullName && formik.touched.fullName && (
              <div className="alert mt-2 p-2 alert-danger">
                {formik.errors.fullName}
              </div>
            )}
            <div className="input-container">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                className="form-control mb-2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            {formik.errors.email && formik.touched.email && (
              <div className="alert mt-2 p-2 alert-danger">
                {formik.errors.email}
              </div>
            )}
            <div className="input-container">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                className=" form-control mb-2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                type="password"
                name="password"
              />
            </div>
            {formik.errors.password && formik.touched.password && (
              <div className="alert mt-2 p-2 alert-danger">
                {formik.errors.password}
              </div>
            )}
            <div className="input-container">
              <label htmlFor="confirmPassword" className="label">
                Confirm Password
              </label>
              <input
                className="form-control mb-2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                id="rePassword"
                type="password"
                name="confirmPassword"
              />
            </div>
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <div className="alert mt-2 p-2 alert-danger">
                  {formik.errors.confirmPassword}
                </div>
              )}

            {isLoading ? (
              <button
                className="btn text-white mt-2 w-50 fw-bold fs-3"
                type="button"
                id="btnsignup"
              >
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button
                disabled={!(formik.isValid && formik.dirty)}
                className="btn text-white mt-2 w-100 fw-bold fs-3"
                id="btnsignup"
                type="submit"
              >
                Sign up
              </button>
            )}
            <div className="line d-flex">
              <div className="line1"></div>
              <div className="word">Or SignUp With</div>
              <div className="line2"></div>
            </div>
          </form>
          <div className="p-1 text-center " id="social">
            <Link to={"https://www.facebook.com/"}>
              <i
                className="fa-brands fa-facebook fa-lg p-2"
                id="fa-facebook"
              ></i>
            </Link>

            <Link to={"https://www.google.com/"}>
              <i className="fa-brands fa-google fa-lg p-3" id="fa-google"></i>
            </Link>

            <Link to={"https://twitter.com/?lang=en"}>
              <i className="fa-brands fa-twitter fa-lg p-2" id="fa-twitter"></i>
            </Link>
          </div>
          <div className="Already">
            Already Have An Account?
            <Link className="lo" to={"/login"}>
              Login{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
