import React from "react";
import Style from "./Footer.css";
import logo from "../../Assets/images/Main logo.svg";
import Qr from "../../Assets/images/QR.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="contact-details ">
      <div className="container">
        <div className="contact-row">
          <img src={logo} width={195} alt="logo" />
          <div id="follow" className="text-light">
            Follow us
          </div>
          <div id="social">
            <Link to={"https://www.facebook.com/"}>
              <i className="fa-brands fa-facebook p-1" id="face"></i>
            </Link>

            <Link to={"https://www.instagram.com/accounts/login/?hl=en"}>
              <i className="fa-brands fa-instagram p-2" id="insta"></i>
            </Link>
            <Link to={"https://www.linkedin.com/learning-login/"}>
              <i className="fa-brands fa-linkedin p-2" id="linked"></i>
            </Link>
            <Link to={"https://twitter.com/?lang=en"}>
              <i className="fa-brands fa-twitter  p-2" id="twitter"></i>
            </Link>
          </div>
        </div>
        <div className="contact-row">
          <h3 className=" text-light ms-4 p-2">Support</h3>
          <ul>
            <li id="text">Contact us</li>
            <li id="text">About us</li>
            <li id="text">Privacy police</li>
            <li id="text">Terms of service</li>
          </ul>
        </div>
        <div className="contact-row">
          <h3 className=" text-light ms-5 p-2">Useful link</h3>
          <ul id="list">
            <li>
              <Link id="text" className="text-decoration-none " to={"/"}>
                Home
              </Link>
            </li>

            <li>
              <Link id="text" className="text-decoration-none" to={"/articles"}>
                Articles
              </Link>
            </li>

            <li>
              <Link id="text" className="text-decoration-none" to={"/calories"}>
                Calories
              </Link>
            </li>

            <li>
              <Link
                id="text"
                className="text-decoration-none "
                to={"/category"}
              >
                Category
              </Link>
            </li>

            <li>
              <Link id="text" className="text-decoration-none " to={"/myprofile"}>
                Profile
              </Link>
            </li>
          </ul>
          <ul className="list">
            <li>
              <Link id="text" className="link" to={"/articles"}>
                Drinking water
              </Link>
            </li>
            <li>
              {" "}
              <Link id="text" className="link" to={"/articles"}>
                Weight
              </Link>
            </li>
            <li>
              <Link id="text" className="link" to={"/articles"}>
                Steps
              </Link>
            </li>
            <li>
              <Link id="text" className="link" to={"/articles"}>
                Heart rate
              </Link>
            </li>
            <li>
              <Link id="text" className="link" to={"/signup"}>
                Signup
              </Link>
              <Link id="text" className="text-decoration-none " to={"/login"}>
                /Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact-row">
          <h3 className=" text-light ms-5 p-2 float-end">Download App</h3>
          <ul>
            <li>
              <h6 id="download">Save $3 with App New User Only</h6>
            </li>
            <li>
              <img id="qr" src={Qr} width={195} alt="logo" />
            </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  );
}
