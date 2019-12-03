import React from "react";
// import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
// import MovieList from "../MoviesPage/movieList.js";

// import logo from '../../logo.svg';
// import { Waypoint } from 'react-waypoint';
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="body-container">
        <h3 className="home-name">Emily Lo</h3>
        <h5 className="home-text">I'm a software engineer born and raised in California. I study CS at Carnegie Mellon.</h5>
        <h5 className="home-text">Previously, I interned at Amazon, Microsoft, and Squarespace.</h5>
        <h5 className="home-text">This March, I'm stoked to join Affirm.</h5>
    </div>
  );
};

export default Homepage;
