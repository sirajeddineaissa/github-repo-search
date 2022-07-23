import { Routes, Route } from "react-router";
import Main from "./pages";
import Search from "./pages/search";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default Router;
