import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  changeUserId,
  changeUserProfile,
  changeUserStaffStatus,
} from "../../redux/index";
import { clearToken, getToken } from "../../config/localStorage";
import { AiFillFile } from "react-icons/ai";
import { BsTable } from "react-icons/bs";
import {
  MdOutlineSpaceDashboard,
  MdWysiwyg,
  MdAccountCircle,
} from "react-icons/md";
import "./sidebar.css";
import urlList from "../../config/urlList";
class sidebar extends Component {
  fetchAndUpdateData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + getToken());

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(urlList.getUserProfile, requestOptions)
      .then((response) => {
        console.log(response.status);
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((result) => {
        console.log("profile fetch ok ", result);
        this.props.changeUserProfile(result);
        this.props.changeUserId(result.name.id);
        this.props.changeUserStaffStatus(result.name.is_staff);
      })
      .catch((error) => console.log("error", error));
  };
  checkTokenStored = () => {
    if (getToken() !== null) {
      this.fetchAndUpdateData();
    } else {
      this.logOut();
    }
  };

  logOut = () => {
    clearToken();
    this.props.history.push("/login/");
  };

  componentDidMount() {
    this.checkTokenStored();
  }
  render() {
    return (
      <div className="sidebar-container">
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            <li className="nav-profile">
              <NavLink to="#">
                {this.props.profile === null ? (
                  <MdAccountCircle size="130px" />
                ) : this.props.profile.Profile_pic !== null ? (
                  <img
                    className="rounded-circle"
                    alt="50x50"
                    width="140px"
                    src={
                      // "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      urlList.profilePic + this.props.profile.Profile_pic
                    }
                    data-holder-rendered="true"
                  />
                ) : (
                  <MdAccountCircle size="140px" />
                )}
                {this.props.profile !== null ? (
                  this.props.isStaff ? (
                    <>
                      <span>
                        {this.props.profile.name.first_name +
                          " " +
                          this.props.profile.name.last_name}
                      </span>
                      <span>{this.props.profile.name.email}</span>
                      <span>{this.props.profile.designation}</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {this.props.profile.name.first_name +
                          " " +
                          this.props.profile.name.last_name}
                      </span>
                      <span>{this.props.profile.name.email}</span>
                      <span>{this.props.profile.Roll_number}</span>
                      <span>
                        {this.props.profile.branch +
                          " " +
                          this.props.profile.semester}
                      </span>
                    </>
                  )
                ) : (
                  <>
                    <span>USERNAME</span>
                    <span>OTHERINFO</span>
                  </>
                )}
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
            <li className="nav-text">
              <NavLink to="/home/timetable" activeClassName="nav-text-active">
                <BsTable size="25px" />
                <span>Time Table</span>
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
    profile: state.userReducer.profile,
    isStaff: state.userReducer.isStaff,
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

export default connect(mapStateToProps, mapDispatchToProps)(sidebar);
