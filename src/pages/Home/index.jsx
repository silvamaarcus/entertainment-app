import { useRef } from "react";
import CardXl from "../../components/Cards/CardXl";
import CardMd from "../../components/Cards/CardMd";

const Home = () => {
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    carouselRef.current.isDown = true;
    carouselRef.current.startX = e.pageX - carouselRef.current.offsetLeft;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    carouselRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    carouselRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!carouselRef.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - carouselRef.current.startX) * 2; // Velocidade de rolagem
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - walk;
  };

  return (
    <>
      <section className="container">
        <div className="flex-start-row gap-1">
          <button className="btn-search"></button>
          <input
            type="text"
            placeholder="Search for movies or TV series"
            className="search-bar border-off"
          />
        </div>

        <div className="mt-4">
          <h4>Trending</h4>
          <div
            className="flex carousel-container"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="grid-5 carousel-item">
              <CardXl />
            </div>
            <div className="grid-5 carousel-item">
              <CardXl />
            </div>
            <div className="grid-5 carousel-item">
              <CardXl />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mt-4">
          <h4>Recommended for you</h4>
          <div>
            <div className="grid-4">
              <CardMd />
            </div>
            <div className="grid-4">
              <CardMd />
            </div>
            <div className="grid-4">
              <CardMd />
            </div>
            <div className="grid-4">
              <CardMd />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
