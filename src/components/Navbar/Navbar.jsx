import React from "react";
import Style from "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/Main logo.svg";
import icon from "../../Assets/images/icon serch.png";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid ">
          <Link className="navbar-brand p-2" to="/">
            <img src={logo} width={150} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto fw-bold ">
              <li className="nav-item p-2 b">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/articles">
                  Articles
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/diet">
                  Diet
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/calories">
                  Calories
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/category">
                Categroy
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/chat">
                  Chat
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <input
                type="text"
                oninput="searchProduct(this.value)"
                placeholder="Search.... "
                className="form-control w-75 my-2 ms-5 p-2"
              ></input>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex ">
                <i className="fa-solid fa-globe mx-3 "></i>
                <i className="fa-solid fa-bars-staggered mx-2"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
