import React from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>
          <i className={props.icon}></i>
          {props.title}
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>

    // responsive navbar
    // <nav className="navbar navbar-expand-lg navbar-mainbg bg-dark">
    //   <div className="container">
    //     <h1 className="text-white">
    //       <i className={props.icon}></i>
    //       {props.title}
    //     </h1>
    //   </div>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navabrSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <i className="fas fa-bars text-white"></i>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav ml-auto">
    //       <div className="hori-selected">
    //         <div className="left"></div>
    //         <div className="right"></div>
    //       </div>
    //       <li className="nav-item active">
    //         <Link className="nav-link" to="/" exact>
    //           Home
    //         </Link>
    //       </li>
    //       <li className="nav-item active">
    //         <Link className="nav-link" to="/About" exact>
    //           About
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   {/* <Link className="navbar-brand navbar-logo" to="/" exact></Link> */}
    // </nav>
  );
};

Navbar.defaultProps = {
  title: " Github Finder App",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
