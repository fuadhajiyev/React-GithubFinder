import React, { useContext } from "react";
import "./Alert.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import AlertContext from "../../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <span className="Alert-msg">
          {" "}
          <BsFillInfoCircleFill
            color="#cb2431"
            style={{ margin: "0 10px" }}
          />{" "}
          {alert.msg}{" "}
        </span>
      </div>
    )
  );
};

export default Alert;
