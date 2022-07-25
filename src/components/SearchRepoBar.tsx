import {
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  SimpleGrid,
  useMediaQuery
} from "@chakra-ui/react";
import { useState, useContext, ReactElement, Component } from "react";
import { reposContext } from "../context/reposContext";
import RepoCard from "./RepoCard";

const SearchRepoBar: React.FC = () => {
  const [input, setInput] = useState("");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const repos = useContext(reposContext) as unknown as Array<any>;

  /**
   * Runs on every keystroke typed inside the repo search bar to update the React input state.
   * @param e
   */
  const inputHandler = (e: any) => {
    setInput(e.target.value.toLowerCase());
  };

  /**
   * Filters the repositories of the searched user
   */
  const filteredRepos = repos?.filter((item: any) => {
    if (input === "") return item;

    return item.name.toLowerCase().includes(input);
  });

  /**
   * Returns a repository card with its data
   * @param repo
   * @returns {Component}
   */
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
    <>
      <FormControl w={["xs", "sm", "md"]} pt={1} mx="auto" mb={8}>
        <HStack mt={200}>
          <Input
            size="lg"
            fontSize={17}
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
          >
            Search
          </Button>
        </HStack>
      </FormControl>

      <Center>
        <SimpleGrid
          mt={50}
          gap={6}
          minChildWidth={300}
          templateColumns={isMobile ? "" : "repeat(3,1fr)"}
        > 
          {filteredRepos?.map(showFilteredData)}
        </SimpleGrid>
      </Center>
    </>
  );
};

export default SearchRepoBar;
