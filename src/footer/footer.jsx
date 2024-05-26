import React from "react";
import "../main.css";
import Astro from "../assets/SpaceAstronaut.png";
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import footerimage from '../assets/footerbg.png';
const footer = () => {
  return (
    <div>
      <div className="footer-container d-flex align-items-center justify-content-center mt-5">
        <div className=" d-flex align-items-center justify-content-center">
          <img
            src={Astro}
            alt=""
            style={{ width: "60%" }}
            className="floating-image"
          />
        </div>
      </div>


      <div className="footer d-flex flex-column align-items-center justify-content-start mt-3 p-5">
        <div className="text text-center">
          <h4 className="text-white text-start">
            Follow us <FaYoutube /> <FaTwitter /> <FaFacebook />
          </h4>
        </div>
        <div className="studify text-white text-center">
        <h1 className="text-center">Studify</h1>
          <ul className="d-flex text-center gap-3 list-unstyled">
            <li >Privacy and Terms</li>
            <li >About Studify</li>
            <li>Studify Services</li>
          </ul>
        </div>
      </div>
      <div className="footer-img d-flex align-items-center justify-content-center">
            <img src={footerimage} alt="" style={{width:"90%"}}/>
      </div>
    </div> 
  );
};

export default footer;
