import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import githubContext from "../../context/github/githubContext";

const Repos = () => {
  const { repos } = useContext(githubContext);
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};
export default Repos;
