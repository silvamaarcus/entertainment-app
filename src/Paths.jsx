import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Movies from "./pages/Home/Movies";
import Series from "./pages/Home/Series";
import Bookmark from "./pages/Home/Bookmark";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Paths;
