// Imagens
import logo from "../../assets/svg/logo.svg";
import user from "../../assets/img/user.png";

// Icons
import icon_main from "../../assets/svg/icon-main.svg";
import icon_movies from "../../assets/svg/icon-movies.svg";
import icon_series from "../../assets/svg/icon-series.svg";
import icon_bookmark from "../../assets/svg/icon-bookmark.svg";

import { useState } from "react";

const Sidebar = () => {
  return (
    <>
      <section className="bg-black-20 flex-space" id="sidebar">
        <div className="mt-5">
          <a href="" className=" flex-center-column">
            <img src={logo} alt="Entertaiment App" className="logo" />
          </a>
          <div className="mt-7 flex-center-column gap-5">
            <a href="">
              <img src={icon_main} alt="Home" />
            </a>
            <a href="">
              <img src={icon_movies} alt="Movies" />
            </a>
            <a href="">
              <img src={icon_series} alt="Series" />
            </a>
            <a href="">
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
    </>
  );
};
export default Sidebar;
