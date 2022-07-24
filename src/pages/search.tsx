import axios from "axios";
import { useState } from "react";
import SearchRepoBar from "../components/SearchRepoBar";
import SearchUserBar from "../components/SearchUserBar";
import { reposContext } from "../context/reposContext";

const Search: React.FC = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [invoke, setInvoke] = useState(false);
  const searchRepos = () => {
    setLoading(true);
    axios(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        setLoading(false);
        setInvoke(true);
        setRepos(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  console.log(repos);
  return (
    <reposContext.Provider value={repos}>
      {invoke ? (
        <>
          <SearchRepoBar />
        </>
      ) : (
        <SearchUserBar
          setUsername={setUsername}
          loading={loading}
          searchRepos={searchRepos}
        />
      )}
    </reposContext.Provider>
  );
};

export default Search;
