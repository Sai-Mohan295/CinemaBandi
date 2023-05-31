import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import ImageSlider from "../ImageSlider/ImageSlider";

const apiKey = "608adb7aa2cc860d8a37648cdae66516";
const url = "https://api.themoviedb.org/3/";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;
const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h1>{title}</h1>
    <div className="scrollable-element">
      {arr.map((item, index) => {
        return <Card key={index} img={`${imgUrl}/${item.poster_path}`} />;
      })}
    </div>
  </div>
);
const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);

  const fetchUpcoming = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
    setUpcomingMovies(results);
  };
  const fetchNowPlaying = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
    setNowPlayingMovies(results);
  };
  const fetchPopular = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
    setpopularMovies(results);
  };
  const fetchTopRated = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
    settopRatedMovies(results);
  };
  useEffect(() => {
    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, []);
  return (
    <section className="home">
      <div className="banner">
        <ImageSlider />
      </div>
      <div>
        <Row title={"Upcoming Movies"} arr={upcomingMovies} />
        <Row title={"Now playing"} arr={nowPlayingMovies} />
        <Row title={"Popular on CinemaBandi"} arr={popularMovies} />
        <Row title={"Top Rated on CinemaBandi"} arr={topRatedMovies} />
      </div>
    </section>
  );
};

export default Home;
