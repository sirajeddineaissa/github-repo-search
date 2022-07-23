import { FormControl, Input, Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import RepoCard from "./RepoCard";

const SearchBar: React.FC = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    searchRepos();
  };

  const searchRepos = () => {
    setLoading(true);
    axios(`https://api.github.com/users/${username}/repos`).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  };
  const showRepos = (repo: any) => {
    return (
      <RepoCard
        key={repo.id}
        name={repo.name}
        username={repo.owner.login}
        avatar={repo.owner.avatar_url}
        description={repo.description}
        stars={repo.stargazers_count}
        forks={repo.forks_count}
        watchers={repo.watchers_count}
        URL={repo.html_url}
        language={repo.language}
      />
    );
  };
  return (
    <>
      <FormControl w={{ base: "full", md: 7 / 12 }} pt={1} mx="auto" mb={8}>
        <Input
          mt={200}
          size="lg"
          placeholder="Type a GitHub username"
          value={username}
          onChange={handleChange}
          required
        />
        <Button
          variant="solid"
          size="lg"
          type="submit"
          colorScheme="blue"
          cursor="pointer"
          onClick={handleClick}
        >
          {loading ? "Searching..." : "Search"}
        </Button>
        <SimpleGrid
          mt={50}
          templateColumns="repeat(3, 1fr)"
          gap={6}
          minChildWidth="120px"
        >
          {repos.map(showRepos)}
        </SimpleGrid>
      </FormControl>
    </>
  );
};

export default SearchBar;
