import { render, screen } from "@testing-library/react";
import SearchRepoBar from "../components/SearchRepoBar";

test("Render the Search User Bar", () => {
  render(<SearchRepoBar />);
  const searchBarElement = screen.getByPlaceholderText(
    "Type a GitHub repository"
  );
  expect(searchBarElement).toBeInTheDocument;
});
