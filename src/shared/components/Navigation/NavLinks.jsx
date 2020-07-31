import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLink.css";

const NavLinks = (props) => (
  <ul className="nav-links">
    <li>
      <NavLink to={"/"} exact>
        ALL USERS
      </NavLink>
    </li>
    <li>
      <NavLink to={"/u1/places"}>MY PLACES</NavLink>
    </li>
    <li>
      <NavLink to={"/places/new"}>ADD PLACE</NavLink>
    </li>
    <li>
      <NavLink to={"/auth/login"}>AUTHENTICATE</NavLink>
    </li>
  </ul>
);
export default NavLinks;
