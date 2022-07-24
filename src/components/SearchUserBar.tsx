import {
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  SimpleGrid
} from "@chakra-ui/react";
import RepoCard from "./RepoCard";

interface SearchUserBarProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  searchRepos: () => void;
  loading: boolean;
  repos: any[];
  size: string;
}
const SearchUserBar: React.FC<SearchUserBarProps> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
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
      <FormControl w={["sm", "md", props.size]} pt={1} mx="auto" mb={8}>
        <HStack mt={200}>
          <Input
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
        </HStack>
        <Center>
          <SimpleGrid mt={50} gap={6}>
            {props.repos.map(showRepos)}
          </SimpleGrid>
        </Center>
      </FormControl>
    </>
  );
};

export default SearchUserBar;
