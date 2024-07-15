import Card_Carousel from "../../components/Cards/Card_Carousel";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <>
      <section className="flex change-direction">
        <Sidebar />

        <div className="mt-3 mr-4 w-100 border">
          <div className="flex gap-1">
            <div className="btn-search"></div>
            <input type="text" placeholder="Search for movies" />
          </div>
          <div className="mt-4">
            <h4>Trending</h4>
            <div>
              <div className="grid-5">
                <Card_Carousel />
              </div>
              <div className="grid-5 border"></div>
              <div className="grid-2 border"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
