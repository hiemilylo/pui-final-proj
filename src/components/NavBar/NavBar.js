import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
// import Logo from "../../assets/imgs/star-wars-logo.png";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark my-stuck">
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
            <ul className="navbar-nav mr-auto navbar-right">
              <li className="nav-item">
                <NavLink className="nav-link" to={appRoutes.home} exact>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={appRoutes.projects}>
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
