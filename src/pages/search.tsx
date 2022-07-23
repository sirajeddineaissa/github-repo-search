import axios from "axios";
import { useState } from "react";
import SearchRepoBar from "../components/SearchRepoBar";
import SearchUserBar from "../components/SearchUserBar";

const Search: React.FC = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const searchRepos = () => {
    setLoading(true);
    axios(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        setLoading(false);
        setRepos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <SearchUserBar
        setUsername={setUsername}
        loading={loading}
        repos={repos}
        searchRepos={searchRepos}
      />

      <SearchRepoBar repos={repos} />
    </>
  );
};

export default Search;
