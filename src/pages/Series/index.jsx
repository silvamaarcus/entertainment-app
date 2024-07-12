import { useState, useEffect } from "react";

import CardMd from "../../components/Cards/CardMd";

const Series = () => {
  //* Setando classe de responsividade para o mobile
  const [classMobile, setClassMobile] = useState("grid-3");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(windowWidth);
      if (windowWidth < 620) {
        setClassMobile("grid-nobreak-6");
        console.log(windowWidth);
      } else {
        setClassMobile("grid-3");
      }
    };

    window.addEventListener("resize", handleResize);

    // Executa a função uma vez na montagem para definir o estado inicial corretamente
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="container pt-0">
        <div className="flex-start-row gap-1">
          <button className="btn-search"></button>
          <input
            type="text"
            placeholder="Search for series"
            className="search-bar border-off"
          />
        </div>

        <div className="mt-4">
          <h4>Series</h4>
          <div>
            <div className={classMobile}>
              <CardMd />
            </div>
            <div className={classMobile}>
              <CardMd />
            </div>
            <div className={classMobile}>
              <CardMd />
            </div>
            <div className={classMobile}>
              <CardMd />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Series;
