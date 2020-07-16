import React from "react";
import PropTypes from "prop-types";
import "./RepoItem.css";

const RepoItem = ({ repo }) => {
  return (
    <li>
      {" "}
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </a>
    </li>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
