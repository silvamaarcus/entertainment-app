import CardBig from "../../components/Cards/CardBig";
import InputSearch from "../../components/InputSearch";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <>
      <section className="flex change-direction">
        <Sidebar />
        <div className="container w-100 flex flex-column gap-4 mt-4 hidden ">
          <InputSearch />
          <div className="flex gap-3 cards-carousel mr-1">
            <div className="card">
              <CardBig />
            </div>
            <div className="card">
              <CardBig />
            </div>
            <div className="card">
              <CardBig />
            </div>
            <div className="card">
              <CardBig />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
