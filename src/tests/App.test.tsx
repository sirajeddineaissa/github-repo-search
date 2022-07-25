import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import Hero from "../pages";
import { BrowserRouter } from "react-router-dom";

test("Renders the Header component", () => {
  render(<Header />);
  const headerElement = screen.getByAltText("logo");
  expect(headerElement).toBeInTheDocument();
});

test("Renders the Hero page", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
  const heroElement = screen.getByAltText("Homepage Image");
  expect(heroElement).toBeInTheDocument();
});

