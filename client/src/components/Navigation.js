import { React, useState } from "react";
import { ImBooks } from "react-icons/im";
import { RiChatSmileFill } from "react-icons/ri";
import { IoBag } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import User from "../assets/user.png";

import "./Navigation.scss";

export default function Navigation() {
  const [dropdown, setDropDown] = useState(false);

  return (
    <div className="nav">
      <div className="nav__logo">logo</div>
      <div className="nav__links">
        <NavLink
          strict
          to="/"
          className={({ isActive }) =>
            "nav__links__link" + (isActive ? " active" : " ")
          }
        >
          <div>
            <ImBooks />
          </div>
          <p>Books</p>
        </NavLink>
        <NavLink
          strict
          to="/connect"
          className={({ isActive }) =>
            "nav__links__link" + (isActive ? " active" : " ")
          }
        >
          <div>
            <RiChatSmileFill />
          </div>
          <p>Connect</p>
        </NavLink>
      </div>
      <div className="nav__user">
        <div className="nav__user-issued">
          <div className="nav__user-issued-icon">
            <IoBag />
          </div>
          <div className="nav__user-issued-no">
            <p>4</p>
          </div>
        </div>
        <div className="nav__user-icon">
          <img
            src={User}
            alt="user"
            className="nav__user-icon"
            onClick={() => setDropDown((prev) => !prev)}
          />
          {dropdown && (
            <ul>
              <li>
                <div>
                  <IoEyeSharp />
                </div>
                View Profile
              </li>
              <li>
                <div>
                  <FiLogOut />
                </div>
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
