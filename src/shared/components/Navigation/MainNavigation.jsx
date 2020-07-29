import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && <Backdrop onClick={handleDrawerClose} />}

      <SideDrawer show={isOpen} onClick={handleDrawerClose}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className={"main-navigation__menu-btn"}
          onClick={handleDrawerOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to={"/"}>Your Places</Link>
        </h1>
        <nav className={"main-navigation__header-nav"}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};
export default MainNavigation;
