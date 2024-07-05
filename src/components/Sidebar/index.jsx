// Imagens
import logo from "../../assets/svg/logo.svg";
import user from "../../assets/img/user.png";

// Icons
import icon_main from "../../assets/svg/icon-main.svg";
import icon_movies from "../../assets/svg/icon-movies.svg";
import icon_series from "../../assets/svg/icon-series.svg";
import icon_bookmark from "../../assets/svg/icon-bookmark.svg";

// Hooks
import { useState } from "react";

// Pages
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import Bookmark from "../../pages/Bookmark";

const Sidebar = () => {
  const [activeContent, setActiveContent] = useState("home");

  const handleContentChange = (id) => {
    setActiveContent(id);
  };

  return (
    <>
      <div className="flex">
        <section className="bg-black-20 flex-space w-100" id="sidebar">
          <div className="mt-5">
            <a href="" className=" flex-center-column">
              <img src={logo} alt="Entertaiment App" className="logo" />
            </a>
            <div className="mt-7 flex-center-column gap-5">
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
          </div>

          <div className="mb-5 flex-center">
            <div className="profile">
              <img src={user} alt="User" />
            </div>
          </div>
        </section>

        <div className="content mt-4">
          <div id="home" className={activeContent === "home" ? "" : "hidden-content"}>
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
