import React from "react";
import NavigationItem from "../Navbar/NavigationItems";
import "./SideDrawer.css";
import { GoLogoGithub } from "react-icons/go";

const sideDrawer = (props) => {

  let drawerClasses = 'side-drawer'
  if(props.show){
    drawerClasses ='side-drawer open'
  }
  return (
    <div className={drawerClasses}>
      <div style={GitLogo}>
        <GoLogoGithub size={"4rem"} color={"#eee"} style={{ margin: "15px"}} />
        <nav>
          <NavigationItem />
        </nav>
      </div>
    </div>
  );
};

const GitLogo = {
  display:"flex",
  flexFlow: "column",
  alignItems: "flex-start",
  justifyContent: "center ",
  padding:"15px"
};
export default sideDrawer;
