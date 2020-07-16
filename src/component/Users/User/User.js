import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Repos from "../../repos/Repos";
import Spinner from "../../layout/spinner/Spinner";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FcCancel } from "react-icons/fc";

import "./User.css";

const User = ({ loading, repos, getUser, getUserRepos, user, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    email,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <div className="User-info">
      <div className="user-header">
        <Link to="/" className="btn">
          Back to Search
        </Link>
        <span style={{ marginLeft:"10px" }}>Hireable:</span>
        {hireable ? (
          <IoIosCheckmarkCircleOutline color="green" size="2em" />
        ) : (
          <FcCancel size="2em" />
        )}
      </div>
      <div className="card">
        <div className="card-body d-flex">
          <div className="card-body-left">
            <div className="card-body-left-img d-flex">
              <img src={avatar_url} alt="github avatar" />
            </div>
            <div className="card-body-left-title">
              <h1>{name}</h1>
              <span>{email}</span>
              <span>{location}</span>
            </div>
          </div>
          <div className="card-body-right">
            <h3 style={{ marginBottom: "0" }}>Bio:</h3>
            <p>{bio}</p>
            <a
              className="btn"
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Github Profile
            </a>
            <ul>
              <li>Username: {login}</li>
              <li>Company: {company}</li>
              <li>Website: {blog}</li>
            </ul>
          </div>
        </div>
        <div className="card-footer">
          <span className="badge badge-primary">Followers: {followers}</span>
          <span className="badge badge-success">Following: {following}</span>
          <span className="badge badge-light">
            Public Repos: {public_repos}
          </span>
          <span className="badge badge-dark">Public Gists: {public_gists}</span>
        </div>
      </div>

      <Repos repos={repos} />
    </div>
  );
};

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

User.defaultProps = {};
export default User;
