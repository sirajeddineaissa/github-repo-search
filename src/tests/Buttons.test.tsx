import { render, screen } from "@testing-library/react";
import HeaderButton from "../components/Header/Button";
import Hero from "../pages";
import MobileHeader from "../components/Header/mobile-header";
import { BrowserRouter } from "react-router-dom";

test("Checks if the Header Button redirects to the project's README page", () => {
  render(<HeaderButton />);
  const headerButton = screen.getByRole("headerbutton");
  expect(headerButton).toHaveAttribute(
    "href",
    "https://github.com/sirajeddineaissa/github-repo-search/blob/main/README.md"
  );
});

test("Checks if the Star Repo Button redirects to the project repository", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
  const starRepoButton = screen.getByRole("starrepo");
  expect(starRepoButton).toHaveAttribute(
    "href",
    "https://github.com/sirajeddineaissa/github-repo-search"
  );
});

test("Checks if the Get Started Button redirects to the search page", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
  const getStartedButton = screen.getByRole("getstartedbutton");
  expect(getStartedButton).toHaveAttribute("href", "/search");
});

test("Checks if the mobile header buttons work", () => {
  render(
    <MobileHeader
      isOpen={false}
      onClose={function (event: any): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  const detailsButton = screen.getByText("Project Details");
  const linkedinButton = screen.getByText("LinkedIn");
  const githubButton = screen.getByText("GitHub");

  expect(detailsButton).toHaveAttribute(
    "href",
    "https://github.com/sirajeddineaissa/github-repo-search/blob/main/README.md"
  );
  expect(linkedinButton).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/sirajeddineaissa"
  );
  expect(githubButton).toHaveAttribute(
    "href",
    "https://github.com/sirajeddineaissa"
  );
});
