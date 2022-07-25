import { Button, FormControl, HStack, Input } from "@chakra-ui/react";

interface SearchUserBarProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  searchRepos: () => void;
  loading: boolean;
}

const SearchUserBar: React.FC<SearchUserBarProps> = (props) => {
  /**
   * Runs on every keystroke typed inside the user search bar to update the React username state.
   * @param e
   *
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.setUsername(e.target.value);
  };

  /**
   * Runs when the search button is clicked to call the searchRepos() function
   * @param e
   *
   */
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    props.searchRepos();
  };

  /**
   * Runs when the the Enter key is pressed within the user search bar to call the searchRepos() function
   * @param e
   *
   */
  const onEnterPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") props.searchRepos();
  };

  return (
    <>
      <FormControl w={["xs", "sm", "md", "3xl"]} pt={1} mx="auto" mb={8}>
        <HStack mt={200}>
          <Input
            size={"lg"}
            fontSize={17}
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
      </FormControl>
    </>
  );
};

export default SearchUserBar;
