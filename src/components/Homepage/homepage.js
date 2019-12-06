import React, { Component } from "react";
import "./homepage.css";
import FadeIn from 'react-fade-in';


class Homepage extends Component {
  state = { currentScrollHeight: 0 }
  componentDidMount () {
      // window.onscroll = () => {
      // const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      // if (this.state.currentScrollHeight !== newScrollHeight){
      //     this.setState({currentScrollHeight: newScrollHeight})
      // }
      // }
  }

  render() {
    // const opacity = Math.min(100 / this.state.currentScrollHeight, 1);
    const opacity = 1;
    const fillers =
      [
        `I'm a software engineer born and raised in California. I study CS at <a href="https://www.cs.cmu.edu/">Carnegie Mellon</a>.`,
        `My goal is to enable diverse communities through the intersection between software engineering and design.`,
        `Previously, I interned at <a href="https://www.amazonfutureengineer.com/">Amazon</a>, <a href="https://azure.microsoft.com/en-us/services/active-directory/">Microsoft</a>, and <a href="https://www.squarespace.com/">Squarespace</a>.`,
        `This March, I'm stoked to join <a href="https://www.affirm.com/">Affirm</a>.`
      ];

    return (
      <div className="container my-container">
          <FadeIn transitionDuration={1000}>
            <h3 className="home-name" style={{opacity}}>Emily Lo</h3>
            {fillers.map((content, idx) => {
              // let opac = Math.min(opacity + (0.3 * (idx + 1)), 1);
              let opac = 1;
              return (<h5 className="home-text" key={idx} style={{opacity: opac}}
                dangerouslySetInnerHTML={{__html: content}}/>);
            })}
          </FadeIn>
      </div>
    );
  }
}

export default Homepage;
