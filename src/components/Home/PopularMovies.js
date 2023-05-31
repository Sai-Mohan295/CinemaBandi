import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

const apiKey = "608adb7aa2cc860d8a37648cdae66516";
const url = "https://api.themoviedb.org/3/";
const popular = "popular";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img, original_title, release_date }) => {
  return (
    <div>
      <img className="card" src={img} alt="cover" />
      <h3>{original_title}</h3>
      <p>{release_date}</p>
    </div>
  );
};
const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h1>{title}</h1>
    <div className="scrollable-element">
      {arr.map((item, index) => {
        return (
          <Card
            key={index}
            img={`${imgUrl}/${item.poster_path}`}
            original_title={item.original_title}
            release_date={item.release_date}
          />
        );
      })}
    </div>
  </div>
);
const Home = () => {
  const [popularMovies, setpopularMovies] = useState([]);

  const fetchPopular = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
    setpopularMovies(results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);
  return (
    <section className="home">
      <div>
        <Row title={"Popular on CinemaBandi"} arr={popularMovies} />
      </div>
    </section>
  );
};

export default Home;
