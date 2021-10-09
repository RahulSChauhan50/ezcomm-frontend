import React, { Component } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./login.css";



export class login extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
          <div class="parent clearfix">
    <div class="bg-illustration">
      {/* <img src="https://img.collegedekhocdn.com/media/img/institute/logo/gec.jpeg" alt="logo"></img> */}

      <div class="burger-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
    
    <div class="login">
      <div class="container">
        <h1>Login</h1>
    
        <div class="login-form">
          
          <form action="">
            
            <input type="email" placeholder="E-mail Address"></input>
            <input type="password" placeholder="Password"></input>
            <label>
          user type:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Student</option>
            <option value="lime">faculty</option>
            <option value="coconut">Principal</option>
            
          </select>
        </label>

            
            {/* <div class="forget-pass">
              <a href="#">Forgot Password ?</a>
            </div> */}

            <button type="submit">LOG-IN</button>

          </form>
        </div>
    
      </div>
      </div>
  </div>
      </div>
      
    );
    
  }
}

export default login;
