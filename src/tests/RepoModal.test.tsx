import { render, screen } from "@testing-library/react";
import RepoModal from "../components/RepoModal";

test("Renders the Repository Modal", () => {
  render(
    <RepoModal
      isOpen={true}
      onClose={function (): void {
        throw new Error("Function not implemented.");
      }}
      avatar={""}
      name={"test-name"}
      description={""}
      URL={""}
      stars={0}
      forks={0}
      watchers={0}
    />
  );
  const repoModalElement = screen.getByText("test-name");
  expect(repoModalElement).toBeInTheDocument;
});

test("Check if the star, fork and watcher icons change color if they exceed 0 in the Repository Modal", () => {
  render(
    <RepoModal
      isOpen={true}
      onClose={function (): void {
        throw new Error("Function not implemented.");
      }}
      avatar={""}
      name={""}
      description={""}
      URL={""}
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
