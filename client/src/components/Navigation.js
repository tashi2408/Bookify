import React from "react";
import { ImBooks } from "react-icons/im";
import { RiChatSmileFill } from "react-icons/ri";

export default function Navigation() {
  return (
    <div className="nav">
      <div className="nav__logo">logo</div>
      <div className="nav__links">
        <div>
          <div>
            <ImBooks />
          </div>
          <p>Books</p>
        </div>
        <div>
          <div>
            <RiChatSmileFill />
          </div>
          <p>Connect</p>
        </div>
      </div>
      <div className="nav__user"></div>
    </div>
  );
}
