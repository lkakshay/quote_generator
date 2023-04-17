
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Bookmark } from "../pages/bookmark";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmarks" element={<Bookmark />} />
    </Routes>
  );
};

export default MainRoutes;