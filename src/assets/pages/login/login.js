import React, { Component } from "react";
import urlList from "../../config/urlList";
import {
  changeUsername,
  changeUserPassword,
  changeUserToken,
} from "../../redux/index";
import { saveToken, getToken } from "../../config/localStorage";
import { connect } from "react-redux";
import "./login.css";
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  signIn = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(urlList.login, requestOptions)
      .then((response) => {
        console.log(response.status);
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((response) => {
        console.log("ok ", response.access);
        saveToken(response.access);
        this.props.changeUsername(this.state.username);
        this.props.changeUserPassword(this.state.password);
        this.props.changeUserToken(response.access);
        console.log(this.props.history);
      })
      .then(() => this.props.history.push("/home/dashboard/"))
      .catch((error) => console.log("login error", error));
  };
  render() {
    return (
      <div className="container">
        <div className="login-page">
          <div className="form">
            {/* <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form> */}
            <form className="login-form">
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
              />
            </form>
            <button onClick={() => this.signIn()}>login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </div>
        </div>
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
    changeUsername: (payload) => {
      dispatch(changeUsername(payload));
    },
    changeUserPassword: (payload) => {
      dispatch(changeUserPassword(payload));
    },
    changeUserToken: (payload) => {
      dispatch(changeUserToken(payload));
    },
  };
};

export default connect(null, mapDispatchToProps)(login);
