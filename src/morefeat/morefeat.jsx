import React from "react";
import "../main.css";

const morefeat = (props) => {
  return (
    <div>
        {/* <h1 className="text-white text-center">Explore more features</h1> */}
      <div className="Container">
        <div className="card1 text-white">
          <div className="card1 bg-grey p-2 " style={{ width: "18rem" }}>
            <div className="card-body c1">
                <h3>{props.date}</h3>
              <p className="card-text">
              {props.disc}
              </p>
                <h4>{props.proj}</h4>
              <img
              src={props.image}
              className="card-img-top"
              alt="Placeholder Image"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default morefeat;
