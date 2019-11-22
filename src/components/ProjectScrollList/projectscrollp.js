import React from "react";
// import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
// import MovieList from "../MoviesPage/movieList.js";

import logo from '../../logo.svg';
// import Scrollspy from 'react-scrollspy';
import "./projectscroll.css";
import ReactDOM  from 'react-dom';

import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

const durationFn = function(deltaTop) {
    return deltaTop;
};

class ProjectScrollListW extends React.Component{

    constructor (props){
        super(props);
        // this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
      Events.scrollEvent.register('begin', function() {
        console.log("begin", arguments);
      });

      Events.scrollEvent.register('end', function() {
        console.log("end", arguments);
      });
    }
    scrollTo(offset) {
      scroller.scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: offset
      })
    }
    scrollToWithContainer() {

      let goToContainer = new Promise((resolve, reject) => {

        Events.scrollEvent.register('end', () => {
          resolve();
          Events.scrollEvent.remove('end');
        });

        scroller.scrollTo('scroll-container', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });

      });

      goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
              containerId: 'scroll-container'
          }));
    }
    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
    render () {
      return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
                  <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} offset={-55}>Test 2</Link></li>
                  <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
                  <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
                  <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
                  <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li>
                  <li><Link activeClass="active" className="test7" to="test7" spy={true} smooth={true} duration={durationFn}>Test 7 (duration and container)</Link></li>
                  <li> <a onClick={() => animateScroll.scrollTo(100)}>Scroll To 100!</a></li>
                  <li> <a onClick={() => animateScroll.scrollToBottom()}>Scroll To Bottom</a></li>
                  <li> <a onClick={() => animateScroll.scrollMore(500)}>Scroll 500 More!</a></li>
                  <li> <a onClick={() => animateScroll.scrollMore(1000, { delay : 1500 })}>Scroll 1000 More! ( delay ) </a></li>
                  <li><Link activeClass="active" className="test8" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
                  <li><Link activeClass="active" className="test9" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
                  <li><a className="test1" to="test1" onClick={() => this.scrollTo()} >Scroll to element</a></li>
                  <li><a className="test1" to="test1" onClick={() => this.scrollTo(-50)} >Scroll to element (offset -50)</a></li>
                  <li><a className="test1" to="test1" onClick={() => this.scrollToWithContainer()} >Scroll to element within container</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <Element name="test1" className="element" >
            test 1
          </Element>

          <Element name="test2" className="element no-padding">
            test 2
          </Element>

          <Element name="test3" className="element">
            test 3
          </Element>

          <Element name="test4" className="element">
            test 4
          </Element>

          <Element name="test5" className="element">
            test 5
          </Element>

          <div id="anchor" className="element">
            test 6 (anchor)
          </div>

          <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
            Go to first element inside container
          </Link>

          <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
            Go to second element inside container
          </Link>

          <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height:'200px',
            overflow:'scroll',
            marginBottom: '100px'
          }}>

            <Element name="firstInsideContainer" style={{
              marginBottom: '200px'
            }}>
              first element inside container
            </Element>

            <Element name="secondInsideContainer" style={{
              marginBottom: '200px'
            }}>
              second element inside container
            </Element>
          </Element>


          <Element id="same" className="element">
            Two links point to this
          </Element>


          <Element name="scroll-to-element" className="element">
            Scroll to element
          </Element>

          <Element className="element" id="scroll-container" style={{
            position: 'relative',
            height:'200px',
            overflow:'scroll',
            marginBottom: '100px'
          }}>

            <Element name="scroll-container-first-element" style={{
              marginBottom: '200px'
            }}>
              first element inside container
            </Element>

            <Element name="scroll-container-second-element" style={{
              marginBottom: '200px'
            }}>
              second element inside container
            </Element>
          </Element>

          {/* <a onClick={this.scrollToTop}>To the top!</a> */}

        </div>
      );
    }
  };

class  ProjectScrollListR extends React.Component {
    constructor (props){
        super(props);
        // this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function() {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function() {
            console.log("end", arguments);
        });
        scrollSpy.update();

    }
    // function print = () => {
    //     let section = document.querySelector('.is-current > a').innerHTML;
    //     let bckgrnd = document.querySelector('.section-container');
    //     switch (section) {
    //     case 'section 1':
    //         bckgrnd.style.background = 'green';
    //         break;
    //     case 'section 2':
    //         bckgrnd.style.background = 'red';
    //         break;
    //     case 'section 3':
    //         bckgrnd.style.background = 'blue';
    //         break;
    //     }
    // }
    handleSetActive = (to) => {
        console.log(to);
    }
    render() {
        return (
            <div className="scroll-container">
                <h3> Scrolling section </h3>
                <div className="section-container">
                <section id="section-1">section 1
                </section>
                <section>
                    <Element name="test1" className="element">
                        test 1
                    </Element>
                </section>
                    <section id="section-2">section 2</section>
                    <section id="section-3">section 3</section>
                </div>
                <Link
                        activeClass="active"
                        to="test1"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        onSetActive={this.handleSetActive}>section 1</Link>
                {/* <Scrollspy items={ ['section-1', 'section-2', 'section-3'] }
                            rootEl=".section-container"
                            onUpdate = {print}
                            currentClassName="is-current">
                    <li><a href="#section-1">section 1</a></li>
                    <li><a href="#section-2">section 2</a></li>
                    <li><a href="#section-3">section 3</a></li>
                </Scrollspy> */}
            </div>
        );
    }
};

export default ProjectScrollListR;
