import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";

class NavBar extends Component {
//   state = { currentScrollHeight: 0 }
//   componentDidMount () {
//     window.onscroll = () => {
//      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
//      if (this.state.currentScrollHeight !== newScrollHeight){
//          this.setState({currentScrollHeight: newScrollHeight})
//      }
//    }
//  }

  render() {
    // const opacity = Math.min(100 / this.state.currentScrollHeight, 1);
    const opacity = 1;
    return (
    <div>
      <nav id="navigation-bar" style={{opacity}} className="navbar navbar-expand-lg navbar-dark my-stuck">
        <div className="container">
          <NavLink className="navbar-brand" to={appRoutes.home}>
             Emily Lo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={appRoutes.home} exact>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={appRoutes.projects}>
                  Places
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
  }
};

export default NavBar;
