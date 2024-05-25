import React from "react";
import "../main.css";
import one from "../assets/1.png";
const header = () => {
  return (
    <div>
      <h1 className="main-container">
        <h1 className="text-center pt-5 text-white">What’s in Studify </h1>
        <p className="text-center fs-6 text-white pt-2">
          Empowering learners with accessible, flexible, and engaging online
          education.
        </p>
      </h1>
      <div className="box  pt-5">
        <div className="search-container d-flex align-items-center justify-content-center  ">
    
          <div className="sec_container text-white  ">
            <button className="btn btn-secondary m-2">search</button>
            <h3 className="text-white p-1 ">
              Search and get related <br />
              suggestions
            </h3>
            <p className="text-white p-1">
              Get suggestions in the search box related to your previous
              searches based on similar things others are looking for.
            </p>
            <ul className="text">
              <li className="pt-2">
                Quickly open a new tab to explore more topics without leaving
                your current page.
              </li>
              <li className="pt-2">
                Click on the search box to reveal related suggestions instantly.
              </li>
              <li className="pt-2">
                Select any suggested topic to dive into search results and
                discover more.
              </li>
            </ul>
          </div>
          <img
              src={one}
              alt=""
              className="img-fluid rounded"
            />
          <hr className="text-white "/>
        </div>
      </div>
    </div>
  );
};

export default header;
