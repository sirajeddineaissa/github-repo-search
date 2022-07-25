import { render, screen } from "@testing-library/react";
import RepoCard from "../components/RepoCard";

test("Render the Repository Card", () => {
  render(
    <RepoCard
      avatar={""}
      name={"test-name"}
      username={""}
      description={""}
      URL={""}
      language={""}
      stars={0}
      forks={0}
      watchers={0}
    />
  );
  const repoCardElement = screen.getByText("test-name");
  expect(repoCardElement).toBeInTheDocument;
});

test("Check if the star, fork and watcher icons change color they exceed 0 in the Repository Card", () => {
  render(
    <RepoCard
      avatar={""}
      name={""}
      username={""}
      description={""}
      URL={""}
      language={""}
      stars={1}
      forks={1}
      watchers={1}
    />
  );
  const starElement = screen.getByRole("staricon");
  const forkElement = screen.getByRole("forkicon");
  const watcherElement = screen.getByRole("watchericon");
  expect(starElement).toHaveStyle({ color: "gold" });
  expect(forkElement).toHaveStyle({ color: "#E460C3" });
  expect(watcherElement).toHaveStyle({ color: "#E83852" });
});
