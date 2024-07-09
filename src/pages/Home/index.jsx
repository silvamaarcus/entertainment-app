import CardXl from "../../components/CardXl";

const Home = () => {
  return (
    <>
      <section className="container">
        <div className="border">
          <h2>Trending</h2>
          <div className="mt-3 hidden">
            <div>
              <CardXl />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
