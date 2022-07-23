import { FormControl, Input, Button, SimpleGrid } from "@chakra-ui/react";
import RepoCard from "./RepoCard";

interface SearchUserBarProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  searchRepos: () => void;
  loading: boolean;
  repos: any[];
}
const SearchUserBar: React.FC<SearchUserBarProps> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUsername(e.target.value);
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    props.searchRepos();
  };
  const onEnterPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") props.searchRepos();
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
          onChange={handleChange}
          onKeyDown={onEnterPress}
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
          {props.loading ? "Searching..." : "Search"}
        </Button>
        <SimpleGrid
          mt={50}
          templateColumns="repeat(3, 1fr)"
          gap={6}
          minChildWidth="120px"
        >
          {props.repos.map(showRepos)}
        </SimpleGrid>
      </FormControl>
    </>
  );
};

export default SearchUserBar;
