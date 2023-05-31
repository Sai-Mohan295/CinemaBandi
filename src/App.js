import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Movies from "./components/Home/Movies";
import PopularMovies from "./components/Home/PopularMovies";
import Contact from "./components/Home/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        <Route path="/aboutus" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
