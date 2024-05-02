
import React, { useState } from "react";
import Style from "./Login.css";
import { useFormik } from "formik";
import login from "../../Assets/images/login.png";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  async function loginSumbint(values) {
    setisLoading(true);
    let { data } = await axios.post(
      `https://fit-nutrition.vercel.app/auth/login`,
      values
    ).catch((err) => {
      setisLoading(false);
      seterror(err.response.data.message);
    });
    if (data.message === "success") {
      setisLoading(false);
      navigate("/");
    }
  }

  let validateScheme = Yup.object({
    
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
        "Must contain at least 12 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number"
      )
      .required("Password is required"),
    
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateScheme,
    onSubmit: loginSumbint,
  });
  return (
    <>
      <div className="container">
        <div className="row pl-10 d-flex">
          <div className="col-md-6 w-50">
            <img src={login} width={450} alt="login" />
          </div>
          <div className=" col-md-6  m-auto w-50 align-items-center">
            {error !== null ? (
              <div className="alert alert-danger">{error}</div>
            ) : (
              ""
            )}
            <form onSubmit={formik.handleSubmit} className="w-75">
            <div className="input-container">
              <label htmlFor="email" className="label"> Email</label>
              <input
                className="form-control mb-2 "
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              </div>
              {formik.errors.email && formik.touched.email ? (
                <div className="alert mt-2 p-2 alert-danger">
                  {formik.errors.email}
                </div>
              ) : (
                ""
              )}
              <div className="input-container">
              <label htmlFor="password" className="label"> Password</label>
              <input
                className=" form-control mb-2 "
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              </div>
              {formik.errors.password && formik.touched.password ? (
                <div className="alert mt-2 p-2 alert-danger">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}
              <div className=" text-lg-end" >
              <Link className="lo"  to={"/password"}>
                  Forget password?
                </Link>
                </div>
              {isLoading ? (
                <button
                  className="btn  text-white mt-2 w-100 fw-bold fs-3 "
                  type="button"
                  id="btnlogin"
                >
                  <i className="fas fa-spinner fa-spin"></i>
                </button>
              ) : (
                
                  <button
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn b text-white mt-2 w-100 fw-bold fs-3"
                  type="submit"
                  id="btnlogin"
                >
                Log in
                </button>
              )}
              <div className="line d-flex">
              <div className="line1"></div>
              <div className="word">Or Login With</div>
              <div className="line2"></div>
            </div>
            </form>
            <div className="p-1 text-center " id="social">
            <Link to={"https://www.facebook.com/"}>
              <i className="fa-brands fa-facebook fa-lg p-2" id="fa-facebook"></i>
            </Link>

            <Link to={"https://www.google.com/"}>
              <i className="fa-brands fa-google fa-lg p-3" id="fa-google"></i>
            </Link>

            <Link to={"https://twitter.com/?lang=en"}>
              <i className="fa-brands fa-twitter fa-lg p-2" id="fa-twitter"></i>
            </Link>
          </div>
          <div className="Already">
          Don't Have An Account?
            <Link className="lo" to={"/signup"}>
            Sign UP
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
