import axios from "axios";
import { useState } from "react";
import SearchRepoBar from "../components/SearchRepoBar";
import SearchUserBar from "../components/SearchUserBar";
import { reposContext, reposContextProps } from "../context/reposContext";

const Search: React.FC = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState<reposContextProps | null>(null);
  const [invoke, setInvoke] = useState(false);

  /**
   * Makes an HTTP Get request to the GitHub REST API using an the Axios library and fetches the repos data of the searched username
   */
  const searchRepos = () => {
    setLoading(true);
    axios(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        setLoading(false);
        setInvoke(true); // If the request is successful then set the invoke state to true to replace the search bar with the repo bar
        setRepos(res.data); // Store the fetched data into the Repos state
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    /**
     * The context provider is used to wrap both the search user and search repo bars with the value of the repos array so that it becomes accessible for both components
     */
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
