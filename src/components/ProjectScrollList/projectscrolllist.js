import React from "react";
// import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
// import MovieList from "../MoviesPage/movieList.js";

// import logo from '../../logo.svg';
import { Waypoint } from 'react-waypoint';
import "./projectscroll.css";

const ProjectScrollList = () => {
  const changeBckgnd = (secId) => () => {
    let bckgrnd = document.querySelector('.section-container');
    switch (secId) {
      case 1:
          bckgrnd.style['background-image'] = 'url(https://dxaurk9yhilm4.cloudfront.net/images/569/chileno_landscape_2cbd80a0345be3b5a0b7649a1a2d057f.jpg)';
          bckgrnd.style.color = 'none';
          break;
      case 2:
          bckgrnd.style['background-image'] = 'url(https://dxaurk9yhilm4.cloudfront.net/images/291/Bakers-hero_e5c6ae03864007f58832dde55a8f653b.jpg)';
          bckgrnd.style.color = 'none';
          break;
      case 3:
          bckgrnd.style['background-image'] = 'url(https://dxaurk9yhilm4.cloudfront.net/images/352/driftwood3-carousel_2cbd80a0345be3b5a0b7649a1a2d057f.jpg)';
          bckgrnd.style.color = 'none';
          break;
      default:
          bckgrnd.style.background = 'white';
          break;
    }
  }

  return (
    <div className="scroll-container">
        <h3> Scrolling section </h3>
        <div className="section-container">
            <Waypoint onEnter={changeBckgnd(1)} >
                <section id="section-1">section 1
                </section>
            </Waypoint>
            <Waypoint onEnter={changeBckgnd(2)} >
                <section id="section-1">section 2
                </section>
            </Waypoint>
            <Waypoint onEnter={changeBckgnd(3)} >
                <section id="section-1">section 3
                </section>
            </Waypoint>
        </div>
    </div>
  );
};

export default ProjectScrollList;
