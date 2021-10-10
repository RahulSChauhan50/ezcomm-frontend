import React, { Component } from "react";
import "./login.css";
export class login extends Component {
  render() {
    return (
      <div className="container">
        <div className="login-page">
          <div className="form">
            <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <select className="selectpicker" data-live-search="true">
                <option selected disabled>
                  Login As
                </option>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="HOD">HOD</option>
                <option value="Principal">Principal</option>
              </select>

              <button>login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
