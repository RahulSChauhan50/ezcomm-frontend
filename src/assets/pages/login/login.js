import React, { Component } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./login.css";
export class login extends Component {
  render() {
    return (
      <div className="container">
     <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <select class="selectpicker"  data-live-search="true">
      <option selected disabled>User Type</option>
  <option data-tokens="Student" title="Uer Type">Student</option>
  <option data-tokens="Faculty">Faculty</option>
  <option data-tokens="HOD">HOD</option>
  <option data-tokens="Principal">Principal</option>

</select>

      <button>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div> 
      </div>
    );
  }
}

export default login;
