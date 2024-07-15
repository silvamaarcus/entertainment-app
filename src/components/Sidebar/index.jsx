// Imagens
import logo from "/assets/svg/logo.svg";
import user from "/assets/img/user.png";

// Icons
import icon_main from "/assets/svg/icon-main.svg";
import icon_main_active from "/assets/svg/icon-main-active.svg";
import icon_movies from "/assets/svg/icon-movies.svg";
import icon_movies_active from "/assets/svg/icon-movies-active.svg";
import icon_series from "/assets/svg/icon-series.svg";
import icon_series_active from "/assets/svg/icon-series-active.svg";
import icon_bookmark from "/assets/svg/icon-bookmark.svg";
import icon_bookmark_active from "/assets/svg/icon-bookmark-active.svg";

// Hooks
import { useState } from "react";

// Routes
import { Link } from "react-router-dom";

const Sidebar = () => {

  //* Estado dos ícones
  const [activeIcons, setActiveIcons] = useState({
    home: icon_main_active,
    movies: icon_movies,
    series: icon_series,
    bookmark: icon_bookmark,
  });

  const handleContentChange = (content) => {
    setActiveContent(content);

    const updatedIcons = {
      home: icon_main,
      movies: icon_movies,
      series: icon_series,
      bookmark: icon_bookmark,
    };

    // Definir a chave do ícone ativo com base no conteúdo
    switch (content) {
      case "home":
        updatedIcons.home = icon_main_active;
        break;
      case "movies":
        updatedIcons.movies = icon_movies_active;
        break;
      case "series":
        updatedIcons.series = icon_series_active;
        break;
      case "bookmark":
        updatedIcons.bookmark = icon_bookmark_active;
        break;
      default:
        break;
    }

    setActiveIcons(updatedIcons);
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
            <Link to="/" onClick={() => handleContentChange("home")}>
              <img src={activeIcons.home} alt="Home" />
            </Link>
            <Link to="/movies" onClick={() => handleContentChange("movies")}>
              <img src={activeIcons.movies} alt="Movies" />
            </Link>
            <Link to="/series" onClick={() => handleContentChange("series")}>
              <img src={activeIcons.series} alt="Series" />
            </Link>
            <Link to="/bookmark" onClick={() => handleContentChange("bookmark")}>
              <img src={activeIcons.bookmark} alt="Bookmark" />
            </Link>
          </div>
          <div className="profile">
            <img src={user} alt="User" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
