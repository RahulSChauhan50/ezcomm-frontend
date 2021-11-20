import React, { Component } from "react";
import "./noticeform.css";
class noticeform extends Component {
  todaysDate = () => {
    let curr = new Date();
    curr.setDate(curr.getDate());
    let date = curr.toISOString().substr(0, 10);
    return date;
  };
  render() {
    return (
      <div className="noticeformcontainer">
        <form action="/action_page.php">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              className="form-control"
              type="text"
              placeholder="Enter Notice Title"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="date">Date:</label>
            <input
              id="date"
              className="form-control"
              type="date"
              name="pickup_time"
              required
              disabled
              defaultValue={this.todaysDate()}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea className="form-control" id="content" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Select Attachment</label>
            <input className="form-control" type="file" id="attachment" />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department By:</label>
            <select
              id="department"
              className="form-control"
              defaultValue="Select Department"
            >
              <option value="Select Department" disabled>
                Select Department
              </option>
              <option>CSE</option>
              <option>Civil</option>
              <option>Mechanical</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <input
              id="designation"
              className="form-control"
              type="text"
              placeholder="Enter Designation"
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default noticeform;
