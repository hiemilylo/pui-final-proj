import React, { Component } from 'react';

import "./background.css";

class Background extends Component {
    state = { hasBack: true };
    vantaEffect = null;

    componentDidMount() {
        if (this.state.hasBack) {
            // this.vantaEffect = window.VANTA.DOTS({
            //     el: "#background-gl",
            //     color: 0xffffff,
            //     color2: 0x0,
            //     backgroundColor: 0x0,
            //     spacing: 34.00
            //   })
            this.vantaEffect = window.VANTA.NET({
              el: "#background-gl",
              color: 0x6f6a6c,
              backgroundColor: 0x0,
              maxDistance: 22.00
            })
        } else {
            this.vantaEffect.destroy()
        }
    }

    componentWillUnmount() {
      if (this.vantaEffect) {
          this.vantaEffect.destroy()
      }
    }

    toggleBackground() {
        let newBck = !this.state.hasBack;
        this.setState({hasBack: newBck});
    }

    render() {
      return (
        <div id="background-gl" style={{display: this.state.hasBack ? 'block' : 'none'}}>
            {/* <button id="toggle-bck" onClick={this.toggleBackground.bind(this)}>Background</button> */}
        </div>
      );
    }
  }

  export default Background;



