import React from "react";
import { AiOutlineMail } from "react-icons/ai";
const About = () => {
  return (
    <div>
      <h1> About Page</h1>
      <p>
        This app created by <strong> Fuad Hajiyev</strong>
      </p>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap"}}>
       
       <AiOutlineMail size={"1.5rem"} style={{marginRight:"10px" }} />
        <span>hajiyev1996@gmail.com</span>
      </div>
    </div>
  );
};

export default About;
