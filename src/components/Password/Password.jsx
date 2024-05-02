import React, { useState } from "react";
import Style from "./Password.css";
import { useFormik } from "formik";
import repassword from "../../Assets/images/password.png";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RePassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    // phone: Yup.number()
    //   .typeError("That doesn't look like a phone number")
    //   .positive("A phone number can't start with a minus")
    //   .integer("A phone number can't include a decimal point")
    //   .min(8)
    //   .required("A phone number is required"),
  });

  async function submitReset(values) {
    setIsLoading(true);
    try {
      const response = await axios.patch(
        `https://fit-nutrition.vercel.app/auth/resetPassword`,
        values
      );
      if (response.data.message === "success") {
        setIsLoading(false);
        navigate("/otp");
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      // phone: "",
    },
    validationSchema: validateSchema,
    onSubmit: submitReset,
  });
  return (
    <div className="container">
      <div className="row pl-10 d-flex">
        <div className="col-md-6 w-50">
          <img src={repassword} width={450} alt="login" />
        </div>
        <div className=" col-md-6  m-auto w-50 align-items-center">
          {error !== null ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            ""
          )}
          <form onSubmit={formik.handleSubmit} className="w-75">
            <div className="repassword">
              Enter your email or phone number to rest your password
            </div>
            <label htmlFor="email"></label>
            <input
              className="form-control mb-2 "
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              type="email"
              name="email"
              placeholder="Enter your Email or Phone number"
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert mt-2 p-2 alert-danger">
                {formik.errors.email}
              </div>
            ) : (
              ""
            )}

            {isLoading ? (
              <button
                className="btn  text-white mt-2 w-50 fw-bold fs-3"
                type="button"
                id="btnsignup"
              >
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            ) : (
              <Link className="nav-link " to={"/otp"}><button
                disabled={!(formik.isValid && formik.dirty)}
                className="btn  text-white mt-2 w-100 fw-bold fs-3"
                id="btnsignup"
                type="submit"
              >
                Reset Password
              </button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
