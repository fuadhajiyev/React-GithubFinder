import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
import "./Repos.css";

const Repos = () => {
  const githubContext = useContext(GithubContext);
    const { repos } = githubContext
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
