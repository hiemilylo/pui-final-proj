import React from "react";
// import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
// import MovieList from "../MoviesPage/movieList.js";

// import logo from '../../logo.svg';
// import { Waypoint } from 'react-waypoint';
import "./homepage.css";
import FadeIn from 'react-fade-in';


const Homepage = () => {
  return (
    <div className="container my-container">
        <FadeIn transitionDuration={1000}>
          <h3 className="home-name">Emily Lo</h3>
          <h5 className="home-text">This is some filler text so that I can scrol down the page. More filler text, since I really want to make sure the navigation works!</h5>
          <h5 className="home-text">I'm a software engineer born and raised in California. I study CS at Carnegie Mellon.</h5>
          <h5 className="home-text">Previously, I interned at Amazon, Microsoft, and Squarespace.</h5>
          <h5 className="home-text">This March, I'm stoked to join Affirm.</h5>
        </FadeIn>
    </div>
  );
};

export default Homepage;
