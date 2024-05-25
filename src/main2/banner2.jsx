import React from 'react'
import b2 from '../assets/b2.png';
import "../main.css"; 
const banner2 = () => {
  return (
    <div>
      <div className="box1 pt-5">
        <div className="search-container d-flex align-items-center justify-content-center ">
        <img
              src={b2}
              alt=""
              className="img-fluid rounded image2"
            />
          <div className="sec_container text-white ">
            <button className="btn btn-secondary m-2">Feat</button>
            <h3 className="text-white p-1 w-40">
            Crafting Your E-Home: Elevate Your Web Presence with Expert Guidance
            </h3>
            <p className="text-white p-1">
            Design Guidance: Get expert advice on creating a visually stunning and user-friendly website layout.
            </p>
            <ul className="text">
              <li className="pt-2">
                Quickly open a new tab to explore more topics without leaving
                your current page.
              </li>
              <li className="pt-2">
              Tech Support: Get assistance with coding, troubleshooting, and implementing advanced features
              </li>
              <li className="pt-2">
              Growth Strategies: Discover tactics to expand your online presence.
              </li>
            </ul>
          </div>



        </div>
      </div>
    </div>
  )
}

export default banner2;
