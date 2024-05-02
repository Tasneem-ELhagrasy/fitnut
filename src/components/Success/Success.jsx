import React from "react";
import Style from "./Success.css";
import success from "../../Assets/images/success.png";
import { Link } from "react-router-dom";
export default function Success() {
  
    return (
      <div className="image-stack-container">
        <Link to={'/login'}><img src={success} alt="done" className="image"/></Link>
        
      </div>
    );
  };
  


