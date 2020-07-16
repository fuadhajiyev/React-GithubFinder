import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { GoMarkGithub } from "react-icons/go";
import NavigationItem from "./NavigationItems";
import ToggleButton from "../SideDrawer/ToggleButton";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "component/layout/BackDrop/BackDrop";

const Navbar = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };

  const backDropHandler = () => {
    setSideDrawerOpen(false);
  };

  let backDrop;
  if (sideDrawerOpen) {
    backDrop = <BackDrop backDropHandler={backDropHandler} />; 
  }
  return (
    <div className="row">
      <div className="container">
        <div className="Navbar">
          <div className="my-logo">
            <GoMarkGithub
              size={"3rem"}
              color={"#eee"}
              style={{ float: "left" }}
            />
            <span className="my-logo-title"> {props.title} </span>
          </div>
          <ToggleButton sideDrawerOpen={drawerToggleHandler} />
          <SideDrawer show={sideDrawerOpen} />
          {backDrop}

          <nav className="DesktopOnly">
            <NavigationItem />
          </nav>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
