import React from "react";
import "./Alert.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <span className="Alert-msg">
          {" "}
          <BsFillInfoCircleFill style={{margin:'0 10px'}}/> {alert.msg}{" "}
        </span>
      </div>
    )
  );
};

export default Alert;
