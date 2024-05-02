import React from "react";
import Style from "./Home.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import home from "../../Assets/images/home.png";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="row m-2">
        <div className="d-flex">
          <div className="col-5">
            <img src={home} width={500} alt="home" />
          </div>

          <div id="text-home" className="col-5">
            <h3 id="home-title">
              If you want to live healthy , integrated life , train fitnut
            </h3>
            <p id="home-para">
              Our app provides personalized fitness and nutrition plans to help
              you achieve your goals. Maintaining a healthy lifestyle not only
              makes a person confident and productive but also drives him to
              success. A person with a healthy lifestyle will enjoy both
              personal and social life.
            </p>
          </div>
        </div>
        <div className=" d-flex">
          <div className="col-5">
          <h3 id="water">Water consumation</h3>
          </div>
          <div className="col-5">
            <h3 id="weight">Weight</h3>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
