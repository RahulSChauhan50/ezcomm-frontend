import React, { Component } from "react";
import "./assignmentForm.css";
class assignmentForm extends Component {
  todaysDate = () => {
    let curr = new Date();
    curr.setDate(curr.getDate());
    let date = curr.toISOString().substr(0, 10);
    return date;
  };
  render() {
    return (
      <div className="assignmentformcontainer">
        <form action="/action_page.php">
          <div className="form-group">
            <label htmlFor="subject name">Subject Name:</label>
            <select
              id="subject name"
              className="form-control"
              defaultValue="Select Subject"
            >
              <option value="Select Subject" disabled>
                Select Subject
              </option>
              <option>Mobile Computing</option>
              <option>Network Programming</option>
              <option>Cloud Computing</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              className="form-control"
              type="text"
              placeholder="Enter Assignment Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea className="form-control" id="content" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Select Image Attachment:</label>
            <input className="form-control" type="file" id="attachment" />
          </div>
          <div className="form-group ">
            <label htmlFor="issuedate">Issue Date:</label>
            <input
              id="issuedate"
              className="form-control"
              type="date"
              name="pickup_time"
              required
              disabled
              defaultValue={this.todaysDate()}
            />
          </div>
          <div className="form-group">
            <label htmlFor="assignedby">Assigned By:</label>
            <input id="assignedby" className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department By:</label>
            <input
              id="department"
              className="form-control"
              type="text"
              placeholder="Enter Department"
              value="custom department"
              disabled
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <input
              id="designation"
              className="form-control"
              type="text"
              placeholder="Enter Designation"
              value="custom designation"
              disabled
              required
            />
          </div>
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    );
  }
}

export default assignmentForm;
