import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
// import MovieList from "../MoviesPage/movieList.js";
import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
import { Waypoint } from 'react-waypoint';
import P1 from '../../assets/projects/p1.jpg';
import P2 from '../../assets/projects/p2.jpg';
import P3 from '../../assets/projects/p3.jpg';
import ScrollDown from '../../assets/scroll-down.png';

import FadeIn from 'react-fade-in';

import "./projectscroll.css";

class ProjectScrollList extends Component {
    _didMount = false;
    timer = null;
    state = { progress: 0,
              currBackground : P1,
              nextBackground : P1};
    flyEye = GLTransitions.find((x) => (x.name === 'flyeye'));

    changeBckgnd = (secId) => () => {
        console.log(secId);
        let bckgrnd = document.querySelector('.section-container');
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
            default:
                bckgrnd.style.background = 'white';
                break;
        }
        if (this._didMount &&
            this.state.currBackground !== this.state.nextBackground) {
            console.log('START');
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
                    console.log('END');
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
            <FadeIn transitionDuration={1000}>
            {/* <h3 className="project-header"> Scrolling section </h3> */}
            <div className="parent">
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
                <div className="section-container">
                    <div className="section-waypoint">
                        <Waypoint onEnter={this.changeBckgnd(1)}>
                            <section id="section-1">
                                <h3>Section 1</h3>
                            </section>
                        </Waypoint>
                    </div>
                    <div className="section-waypoint">
                        <Waypoint onEnter={this.changeBckgnd(2)}>
                            <section id="section-2">
                                <h3>Section 2</h3>
                            </section>
                        </Waypoint>
                    </div>
                    <div className="section-waypoint">
                        <Waypoint onEnter={this.changeBckgnd(3)}>
                            <section id="section-3">
                                <h3>Section 3</h3>
                            </section>
                        </Waypoint>
                    </div>
                </div>
            </div>
            </FadeIn>
            <div className="scroll-indicator-container">
                <img className="scroll-indicator" src={ScrollDown}/>
            </div>
        </div>
    );
  }
}

export default ProjectScrollList;
