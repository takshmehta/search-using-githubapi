import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };
  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-success">
            Repo Name:<span className="text-info">{repo.name} </span>
          </div>
          <div>
            <a href={repo.clone_url} target="_blank">
              <span className="text-success"> Click here to open repo </span>
            </a>
          </div>
          <div className="text-success">
            Description: <span className="text-info"> {repo.description} </span>
          </div>
          <div className="text-success">
            Language: <span className="text-info"> {repo.language} </span>
          </div>
          <div className="text-success">
            {repo.homepage === "" ? (
              ""
            ) : (
              <a href={repo.homepage} target="_blank">
                Open Website
              </a>
            )}
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
