import React from "react";
import "../main.css";
import lanlogo from "../assets/lan.png";
const lan = () => {
  return (
    <div>
      <div className="box3 pt-5">
        <div className="search-container">
          <div className="sec_container text-white ">
            <button className="btn btn-secondary m-2">Feat</button>
            <h4 className="text-white pt-3 w-40">
              Unlocking Multilingual Mastery: Empower Your Language Skills with
              Versatility
            </h4>
            <p className="text-white p-1">
             Get expert advice on creating a visually stunning
              and user-friendly website layout.
            </p>
            <ul className="text">
              <li className="pt-2">
              Access a wealth of knowledge and educational resources by being proficient in multiple languages.
              </li>
              <li className="pt-2">
              Foster meaningful relationships and build bridges with individuals from different linguistic backgrounds.
              </li>
              <li className="pt-2">
              Navigate the internet and access a vast array of online content in various languages seamlessly.
              </li>
            </ul>
          </div>
          <img
            src={lanlogo}
            alt=""
            className="img-fluid rounded image2"
          />
        </div>
      </div>
    </div>
  );
};

export default lan;
