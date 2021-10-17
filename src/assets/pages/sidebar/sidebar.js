import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle, AiFillFile } from "react-icons/ai";
import {
  MdOutlineSpaceDashboard,
  MdWysiwyg,
  MdAccountCircle,
} from "react-icons/md";
import userLogo from "../../images/user.png";
import "./sidebar.css";
export class sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        {/* <div className="navbar">
          <Link
            to="#"
            className="menu-bars"
            onClick={() => this.setState({ sidebaractive: true })}
          >
            <GiHamburgerMenu />
          </Link>
        </div> */}
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            <li className="nav-profile">
              <Link to="#">
                <MdAccountCircle size="130px" />
                <span>USERNAME</span>
                <span>OTHERINFO</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home/dashboard">
                <MdOutlineSpaceDashboard size="30px" />
                <span>DashBoard</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home/notice">
                <MdWysiwyg size="30px" />
                <span>Notices</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="#">
                <AiFillFile size="30px" />
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
