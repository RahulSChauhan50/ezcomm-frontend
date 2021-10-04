import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle, AiFillFile } from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdWysiwyg } from "react-icons/md";
import "./sidebar.css";
export class sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebaractive: false,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <Link
            to="#"
            className="menu-bars"
            onClick={() => this.setState({ sidebaractive: true })}
          >
            <GiHamburgerMenu />
          </Link>
        </div>
        <nav
          className={this.state.sidebaractive ? "nav-menu active" : "nav-menu"}
        >
          <ul
            className="nav-menu-items"
            onClick={() => this.setState({ sidebaractive: false })}
          >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineCloseCircle />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="#">
                <MdOutlineSpaceDashboard />
                <span>DashBoard</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="#">
                <MdWysiwyg />
                <span>Notices</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="#">
                <AiFillFile />
                <span>Assignments</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default sidebar;
