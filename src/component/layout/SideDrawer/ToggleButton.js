import React from "react";
import { BsList } from "react-icons/bs";
import Radium from "radium";
const ToggleButton = (props) => {
  return (
    <div style={OnlyMobile}>
      <BsList
        size={"2rem"}
        color={"#eee"}
        onClick={props.sideDrawerOpen}
      />
    </div>
  );
};

const OnlyMobile = {
  display: 'inline-flex',
  padding: "8px 0",
  cursor: "pointer",
  "@media screen and (min-width: 699px)": {
    display: "none",
  },
};

export default Radium(ToggleButton);
