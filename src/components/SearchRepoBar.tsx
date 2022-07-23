import {
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  SimpleGrid
} from "@chakra-ui/react";
import { useState } from "react";
import RepoCard from "./RepoCard";

interface SearchRepoBarProps {
  repos: any[];
  size: string;
}
const SearchRepoBar: React.FC<SearchRepoBarProps> = (props) => {
  const [input, setInput] = useState("");
  const inputHandler = (e: any) => {
    setInput(e.target.value.toLowerCase());
  };
  const filteredRepos = props.repos.filter((item) => {
    if (input === "") return item;

    return item.name.toLowerCase().includes(input);
  });

  const showFilteredData = (repo: any) => {
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
    <FormControl w={["sm", "md", props.size]} pt={1} mx="auto" mb={8}>
      <HStack mt={200}>
        <Input
          size="lg"
          placeholder="Type a GitHub repository"
          onChange={inputHandler}
          required
        />
        <Button
          variant="solid"
          size="lg"
          type="submit"
          colorScheme="blue"
          cursor="pointer"
        >Search</Button>
      </HStack>
      <Center>
        <SimpleGrid
          alignContent={"center"}
          mt={50}
          templateColumns="repeat(4, 1fr)"
          gap={6}
          minChildWidth="120px"
        >
          {filteredRepos.map(showFilteredData)}
        </SimpleGrid>
      </Center>
    </FormControl>
  );
};

export default SearchRepoBar;
