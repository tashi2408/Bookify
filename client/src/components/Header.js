import React from "react";
import "./Header.scss";
import Book1 from "../assets/RemindersOfHim.jpg";
import Book2 from "../assets/TheFaultInOurStars.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="header__grid">
        <div>
          <h1>
            New & <br />
            Trending
          </h1>
          <p>Explore new worlds from authors</p>
        </div>
        <div>
          <div>
            <img src={Book1} alt="Book1" />
          </div>
          <div>
            <img src={Book2} alt="Book2" />
          </div>
        </div>
      </div>
      <div className="social">
        <div></div>
      </div>
    </div>
  );
}
