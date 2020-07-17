import React, { Fragment, useContext } from "react";
import UserItem from "../userItem/UsersItem";
import Spinner from "../../layout/spinner/Spinner";
import PropTypes from "prop-types";
import GithubContext from '../../../context/github/githubContext';
import Radium from "radium";
import "./Users.css";

const Users = () => {

  const githubContext = useContext(GithubContext)
  const { loading, users} = githubContext
  const spinner = loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} users={user} />
      ))}
    </div>
  );
  return <Fragment>{spinner}</Fragment>;
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
  "@media screen and (max-width: 1200px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@media screen and (max-width: 699px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media screen and (max-width: 450px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
};


Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Radium(Users);
