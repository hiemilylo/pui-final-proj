import React from "react";
// import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
// import MovieList from "../MoviesPage/movieList.js";

import logo from '../../logo.svg';
import Scrollspy from 'react-scrollspy';
import "./projectscroll.css";

const ProjectScrollList = () => {
  const print = () => {
      console.log('hi!');
      console.log(document.querySelector('.is-current'));
      console.log(document.querySelector('.is-current > a').innerHTML);
      let section = document.querySelector('.is-current > a').innerHTML;
      let bckgrnd = document.querySelector('.section-container');
      switch (section) {
        case 'section 1':
            bckgrnd.style.background = 'green';
            break;
        case 'section 2':
            bckgrnd.style.background = 'red';
            break;
        case 'section 3':
            bckgrnd.style.background = 'blue';
            break;
      }
  }
  return (
    <div className="scroll-container">
        <h3> hi! </h3>
        <div class="section-container">
            <section id="section-1">section 1</section>
            <section id="section-2">section 2</section>
            <section id="section-3">section 3</section>
        </div>
        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] }
                   rootEl=".section-container"
                   onUpdate = {print}
                   currentClassName="is-current">
            <li><a href="#section-1">section 1</a></li>
            <li><a href="#section-2">section 2</a></li>
            <li><a href="#section-3">section 3</a></li>
        </Scrollspy>
    </div>
  );
};

export default ProjectScrollList;
