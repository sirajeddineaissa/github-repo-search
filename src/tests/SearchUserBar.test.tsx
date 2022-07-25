import { render, screen } from "@testing-library/react";
import SearchUserBar from "../components/SearchUserBar";

test("Renders the Search User Bar", () => {
  render(
    <SearchUserBar
      setUsername={function (value: React.SetStateAction<string>): void {
        throw new Error("Function not implemented.");
      }}
      searchRepos={function (): void {
        throw new Error("Function not implemented.");
      }}
      loading={false}
    />
  );
  const searchBarElement = screen.getByPlaceholderText(
    "Type a GitHub username"
  );
  expect(searchBarElement).toBeInTheDocument;
});
