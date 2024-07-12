// Imagens
import logo from "/assets/svg/logo.svg";
import user from "/assets/img/user.png";

// Icons
import icon_main from "/assets/svg/icon-main.svg";
import icon_movies from "/assets/svg/icon-movies.svg";
import icon_series from "/assets/svg/icon-series.svg";
import icon_bookmark from "/assets/svg/icon-bookmark.svg";

// Hooks
import { useState } from "react";

// Pages
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import Bookmark from "../../pages/Bookmark";

const Sidebar = () => {
  //* Abrir e fechar links do menu
  const [activeContent, setActiveContent] = useState("home");

  const handleContentChange = (id) => {
    setActiveContent(id);
  };

  return (
    <>
      <div className="flex change-direction">
        <section className="bg-black-20 flex-between py-4" id="sidebar">
          <div>
            <a href="/" className="flex-center-column">
              <img src={logo} alt="Entertaiment App" className="logo" />
            </a>
          </div>
          <div className="flex-center-column gap-3 links">
            <a onClick={() => handleContentChange("home")}>
              <img src={icon_main} alt="Home" />
            </a>
            <a onClick={() => handleContentChange("movies")}>
              <img src={icon_movies} alt="Movies" />
            </a>
            <a onClick={() => handleContentChange("series")}>
              <img src={icon_series} alt="Series" />
            </a>
            <a onClick={() => handleContentChange("bookmark")}>
              <img src={icon_bookmark} alt="Bookmark" />
            </a>
          </div>
          <div className="profile">
            <img src={user} alt="User" />
          </div>
        </section>

        <div className="content mt-4">
          <div
            id="home"
            className={activeContent === "home" ? "" : "hidden-content"}
          >
            <Home />
          </div>
          <div
            id="movies"
            className={activeContent === "movies" ? "" : "hidden-content"}
          >
            <Movies />
          </div>
          <div
            id="series"
            className={activeContent === "series" ? "" : "hidden-content"}
          >
            <Series />
          </div>
          <div
            id="bookmark"
            className={activeContent === "bookmark" ? "" : "hidden-content"}
          >
            <Bookmark />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
