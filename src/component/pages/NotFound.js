import React from "react";
import { GiStopSign } from "react-icons/gi";
const NotFound = () => {
  return (
    <div>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap"}}>
        <GiStopSign size={"5rem"} color={"red"} style={{marginRight:"10px" }}/> 
      <h1>
      Not Found Page
      </h1>

        </div>
      <p>The page you are looking for does not exist...</p>
    </div>
  );
};

export default NotFound;
