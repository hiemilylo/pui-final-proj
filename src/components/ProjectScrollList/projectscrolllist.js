import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
// import MovieList from "../MoviesPage/movieList.js";
import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
import { Waypoint } from 'react-waypoint';
import P1 from '../../assets/projects/1.jpg';
import P2 from '../../assets/projects/2.jpg';
import P3 from '../../assets/projects/p3.jpg';
import P4 from '../../assets/projects/4.jpg';

import ScrollDown from '../../assets/scroll-down.png';

import FadeIn from 'react-fade-in';

import "./projectscroll.css";

class ProjectScrollList extends Component {
    _didMount = false;
    timer = null;
    mapLoc = { 1: 'Pittsburgh',
               2: 'Seattle',
               3: 'California',
               4: 'New York'};
    mapTxt = { 1: 'Most recently, I have been living in Pittsburgh. 4 years has taught me a lot about the cold.',
               2: 'Lucky enough to only spend time in the summer at Seattle. Beautiful place, beautiful people.',
               3: 'Grew up here: always find myself missing this place.',
               4: 'One summer here, duration undetermined. Excited.'};
    state = { progress: 0,
              currBackground : P1,
              nextBackground : P1,
              currLoc: 'Pittsburgh',
              currLocTxt: 'Spent 4 years of my life here.'};
    flyEye = GLTransitions.find((x) => (x.name === 'flyeye'));

    changeBckgnd = (secId) => () => {
        // console.log(secId);
        let bckgrnd = document.querySelector('.section-container');
        this.setState({currLoc: this.mapLoc[secId],
                       currLocTxt: this.mapTxt[secId]});
        switch (secId) {
            case 1:
                // bckgrnd.style['background-image'] = 'url(https://dxaurk9yhilm4.cloudfront.net/images/569/chileno_landscape_2cbd80a0345be3b5a0b7649a1a2d057f.jpg)';
                this.setState({nextBackground: P1});
                bckgrnd.style.color = 'none';
                break;
            case 2:
                // bckgrnd.style['background-image'] = 'url(https://dxaurk9yhilm4.cloudfront.net/images/291/Bakers-hero_e5c6ae03864007f58832dde55a8f653b.jpg)';
                this.setState({nextBackground: P2});
                bckgrnd.style.color = 'none';
                break;
            case 3:
                // bckgrnd.style['background-image'] = 'url(https://dxaurk9yhilm4.cloudfront.net/images/352/driftwood3-carousel_2cbd80a0345be3b5a0b7649a1a2d057f.jpg)';
                this.setState({nextBackground: P3});
                bckgrnd.style.color = 'none';
                break;
            case 4:
                this.setState({nextBackground: P4});
                bckgrnd.style.color = 'none';
                break;
            default:
                bckgrnd.style.background = 'white';
                break;
        }
        if (this._didMount &&
            this.state.currBackground !== this.state.nextBackground) {
            // console.log('START');
            if (this.timer) {
                while(this.state.progress <= 1) {
                    // Speed up
                    let newProg = this.state.progress + 0.04;
                    this.setState({progress: newProg});
                }
                this.setState({progress: 0, currBackground: this.state.nextBackground});
                clearInterval(this.timer);
            }
            this.timer = setInterval(() => {
                while (this.state.progress >= 1) {
                    this.setState({progress: 0, currBackground: this.state.nextBackground});
                    clearInterval(this.timer);
                    this.timer = null;
                    // console.log('END');
                }
                let newProg = this.state.progress + 0.02;
                this.setState({progress: newProg});
              }, 20);
        }
  }

  componentDidMount() {
    this._didMount = true;
  }

  render() {
    return (
        <div className="scroll-container container">
            <div className="parent">
                <FadeIn transitionDuration={1000}>
                <div className="col">
                    <div id="desktop-surface">
                        <Surface width={600} height={400}>
                            {this.state.progress > 0 ?
                            <GLTransition
                                from={this.state.currBackground}
                                to={this.state.nextBackground}
                                transition={this.flyEye}
                                progress={this.state.progress}
                            />
                            : <LinearCopy>{this.state.currBackground}</LinearCopy>}
                        </Surface>
                    </div>
                    <div id="mobile-surface">
                        <Surface width={350} height={200}>
                            {this.state.progress > 0 ?
                            <GLTransition
                                from={this.state.currBackground}
                                to={this.state.nextBackground}
                                transition={this.flyEye}
                                progress={this.state.progress}
                            />
                            : <LinearCopy>{this.state.currBackground}</LinearCopy>}
                        </Surface>
                    </div>
                    <div className="section-container">
                        <div className="section-waypoint">
                            <Waypoint onEnter={this.changeBckgnd(1)}>
                                <section id="section-1">
                                    <h3>1  Pittsburgh</h3>
                                </section>
                            </Waypoint>
                        </div>
                        <div className="section-waypoint">
                            <Waypoint onEnter={this.changeBckgnd(2)}>
                                <section id="section-2">
                                    <h3>2  Seattle</h3>
                                </section>
                            </Waypoint>
                        </div>
                        <div className="section-waypoint">
                            <Waypoint onEnter={this.changeBckgnd(3)}>
                                <section id="section-3">
                                    <h3>3  California</h3>
                                </section>
                            </Waypoint>
                        </div>
                        <div className="section-waypoint">
                            <Waypoint onEnter={this.changeBckgnd(4)}>
                                <section id="section-4">
                                    <h3>4  New York</h3>
                                </section>
                            </Waypoint>
                        </div>
                    </div>
                </div>
                </FadeIn>
                <FadeIn transitionDuration={1000}>
                    <div className="col col-mobile">
                        <h3 className="location-name">{this.state.currLoc}</h3>
                        <p className="location-desc">{this.state.currLocTxt}</p>
                    </div>
                </FadeIn>
            </div>
            <div className="scroll-indicator-container">
                <img alt="Scroll down indicator" className="scroll-indicator" src={ScrollDown}/>
            </div>
        </div>
    );
  }
}

export default ProjectScrollList;
