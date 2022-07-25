import { render, screen } from "@testing-library/react";
import SearchRepoBar from "../components/SearchRepoBar";

test("Renders the Search Repo Bar", () => {
  render(<SearchRepoBar />);
  const searchBarElement = screen.getByPlaceholderText(
    "Type a GitHub repository"
  );
  expect(searchBarElement).toBeInTheDocument;
});
