import React, { useState } from "react";
import Style from "./Newpassword.css";
import { useFormik } from "formik";
import Nwpassword from "../../Assets/images/repassword.png";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Newpassword() {
  let navigate = useNavigate();
  const [error, seterror] = useState(null);
  const [isLoading,setisLoading] = useState(false);

  async function Newpassword(values) {
    setisLoading(true);
    let { data } = await axios.patch(
      `https://fit-nutrition.vercel.app/auth/forgetPass`,
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
    password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
      "Password must contain at least 12 characters, 1 uppercase, 1 lowercase, 1 special character, and 1 number"
    )
    .required("Password is required"),
  newPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  });
  let formik = useFormik({
    initialValues: {
      password: "",
      newPassword:"",
    },
    validateScheme,
    onSubmit: Newpassword,
  });
  return (
    <>
      <div className="container">
      
        <div className="row pl-10 d-flex">
          <div className="col-md-6 w-50">
            <img src={Nwpassword} width={450} alt="nwpassword" />
          </div>
          <div className=" col-md-6  m-auto w-50 align-items-center">
          
            {error !== null ? (
              <div className="alert alert-danger">{error}</div>
            ) : (
              ""
            )}
             
            <form onSubmit={formik.handleSubmit} className="w-75">
            <div className="re">Rest password</div>
                <div className="input-container">
              <label htmlFor="password" className="label">
              New password
              </label>
              <input
                className=" form-control mb-2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                type="password"
                name="password"
                placeholder="Enter New Password"
              />
            </div>
              {formik.errors.password && formik.touched.password ? (
                <div className="alert mt-2 p-2 alert-danger">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}
               <div className="input-container">
              <label htmlFor="rePassword" className="label">
                Confirm Password
              </label>
              <input
                className="form-control mb-2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.rePassword}
                id="rePassword"
                type="password"
                name="rePassword"
                placeholder="Repeat Password"
              />
            </div>
            {formik.errors.rePassword && formik.touched.rePassword && (
              <div className="alert mt-2 p-2 alert-danger">
                {formik.errors.rePassword}
              </div>
            )}
               {isLoading ? (
                <button
                  className="btn text-white mt-2 w-100 fw-bold fs-3 "
                  type="button"
                  id="btnsignup"
                >
                  <i className="fas fa-spinner fa-spin"></i>
                </button>
              ) : (
                
                 <Link className="nav-link " to={"/success"}> <button
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn text-white mt-2 w-100 fw-bold fs-3"
                  type="submit"
                  id="btnsignup"
                >
                Rest Password
                </button>
                </Link>
              )}
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
