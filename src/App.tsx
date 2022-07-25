import React from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;
