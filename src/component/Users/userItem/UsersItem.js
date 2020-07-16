import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UserItem.css";

const UsersItem = (props) => {
  // state = {
  //   id: "45",
  //   login: "mojodna",
  //   avatar_url: "https://avatars2.githubusercontent.com/u/45?v=4",
  //   html_url: "https://github.com/mojodna",
  // };

  const { login, avatar_url } = props.users;

  return (
    <Fragment>
      <div className="card">
        <img src={avatar_url} alt="github avatar" className="card-img" />
        <h3 style={{ textTransform: "capitalize" }}>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn">
            More
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

UsersItem.propTypes = {
  users: PropTypes.object.isRequired,
};

export default UsersItem;
