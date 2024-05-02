import React from "react";
import Style from "./Diet.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import bulk from "../../Assets/images/bulking.png";
import diet from "../../Assets/images/diet.png";
import strength from "../../Assets/images/strength.png";
import fit from "../../Assets/images/fitness.png";
export default function Diet() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
       <Link to={'/'}><i id="arrow-left" className="fa-solid fa-arrow-left"></i></Link> 
        <h2 id="text-diet">Choose your categroy</h2>
      </div>
      <div className="row m-2 ">
        <div className="col-6 ">
          <div className="service-box bg-white shadow-lg">
            <div className="bulk d-flex m-1">
              <img src={bulk} width={200} alt="bulk" />

              <Link id="diet" to={"/category"}>
              
                Bulking
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <div className="service-box bg-white shadow-lg">
            <div className="bulk d-flex m-1">
              <img src={diet} width={200} alt="diet" />
              <Link id="diet" to={"/category"}>
                Diet
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6  ">
          <div className="service-box bg-white shadow-lg">
            <div className="bulk d-flex m-1">
              <img src={strength} width={200} alt="strenght" />
              <Link id="diet" to={"/category"}>
                
                Strenght
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <div className="service-box bg-white shadow-lg">
            <div className="bulk d-flex m-1">
              <img src={fit} width={200} alt="fit" />
              <Link id="diet" to={"/category"}>
                Fitness
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <Footer />
    </>
  );
}
