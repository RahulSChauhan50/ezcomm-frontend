import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./notfoundpage.css";
class notfoundpage extends Component {
  render() {
    return (
      <div className="nfp-container">
        <div className='message'>
          <div className="errorcode">404 </div>
          <div className="errormessage">Page not found !</div>
        </div>
      </div>
    );
  }
}

export default notfoundpage;
