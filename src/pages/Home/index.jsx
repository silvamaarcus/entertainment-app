import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex change-direction">
        <Sidebar />

        <div className="mt-3 mr-4 w-100">
          <h1>Home.jsx</h1>
        </div>
      </div>
    </>
  );
};
export default Home;
