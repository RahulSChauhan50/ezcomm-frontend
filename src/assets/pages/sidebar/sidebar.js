import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  changeUserId,
  changeUserProfile,
  changeUserStaffStatus,
} from "../../redux/index";
import { clearToken } from "../../config/localStorage";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle, AiFillFile } from "react-icons/ai";
import {
  MdOutlineSpaceDashboard,
  MdWysiwyg,
  MdAccountCircle,
} from "react-icons/md";
import userLogo from "../../images/user.png";
import "./sidebar.css";
class sidebar extends Component {
  fetchAndUpdateData = () => {};
  componentDidMount() {
    this.fetchAndUpdateData();
  }
  logOut = () => {
    clearToken();
    this.props.history.push("/login/");
  };
  render() {
    return (
      <div className="sidebar-container">
        {/* <div className="navbar">
          <NavLink
            to="#"
            className="menu-bars"
            onClick={() => this.setState({ sidebaractive: true })}
          >
            <GiHamburgerMenu />
          </NavLink>
        </div> */}
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            <li className="nav-profile">
              <NavLink to="#">
                <MdAccountCircle size="130px" />
                <span>USERNAME</span>
                <span>OTHERINFO</span>
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink to="/home/dashboard" activeClassName="nav-text-active">
                <MdOutlineSpaceDashboard size="30px" />
                <span>DashBoard</span>
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink to="/home/notice" activeClassName="nav-text-active">
                <MdWysiwyg size="30px" />
                <span>Notices</span>
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink to="/home/assignment" activeClassName="nav-text-active">
                <AiFillFile size="30px" />
                <span>Assignments</span>
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className="btn logout"
            onClick={() => this.logOut()}
          >
            LOGOUT
          </button>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    farmerId: state.farmerReducer.farmerId,
    profile: state.farmerReducer.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserId: (payload) => {
      dispatch(changeUserId(payload));
    },
    changeUserProfile: (payload) => {
      dispatch(changeUserProfile(payload));
    },
    changeUserStaffStatus: (payload) => {
      dispatch(changeUserStaffStatus(payload));
    },
  };
};

export default connect(null, mapDispatchToProps)(sidebar);
