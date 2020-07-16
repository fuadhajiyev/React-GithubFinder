import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
import "./Repos.css";


const Repos = ({ repos }) => {
  return (
    <ul className="card-list">
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
