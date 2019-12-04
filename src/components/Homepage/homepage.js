import React, { Component } from "react";
import "./homepage.css";
import FadeIn from 'react-fade-in';


class Homepage extends Component {
  state = { currentScrollHeight: 0 }
  componentDidMount () {
      window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 10) * 10;
      if (this.state.currentScrollHeight !== newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight})
      }
    }
  }

  render() {
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1);
    const fillers =
      [
        `This is some filler text so that I can scrol down the page. More filler text, since I really want to make sure the navigation works!`,
        `I'm a software engineer born and raised in California. I study CS at <a href="https://www.cs.cmu.edu/">Carnegie Mellon</a>.`,
        `Previously, I interned at <a href="https://www.amazonfutureengineer.com/">Amazon</a>, <a href="https://azure.microsoft.com/en-us/services/active-directory/">Microsoft</a>, and <a href="https://www.squarespace.com/">Squarespace</a>.`,
        `This March, I'm stoked to join Affirm.`
      ];

    return (
      <div className="container my-container">
          <FadeIn transitionDuration={1000}>
            <h3 className="home-name" style={{opacity}}>Emily Lo</h3>
            {fillers.map((content, idx) => {
              let opac = Math.min(opacity + (0.5 * (idx + 1)), 1);
              return (<h5 className="home-text" key={idx} style={{opacity: opac}}
                dangerouslySetInnerHTML={{__html: content}}/>);
            })}
          </FadeIn>
      </div>
    );
  }
}

export default Homepage;
