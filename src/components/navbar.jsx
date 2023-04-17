import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div onClick={() => navigate("/")} className="nav-home">
        Home
      </div>
      <div onClick={() => navigate("/bookmark")} className="nav-bookmark">
        Bookmarks
      </div>
    </div>
  );
};
