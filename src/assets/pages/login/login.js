import React, { Component } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./login.css";
export class login extends Component {
  render() {
    return (
      <div className="container">
        Login page
        <div id="t">
          red
          <div id="k">50%</div>
          <Link to="/home">HOMEPAGE</Link>
          <GiHamburgerMenu />
        </div>
      </div>
    );
  }
}

export default login;
