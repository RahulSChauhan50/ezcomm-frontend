import React, { Component } from "react";
import "./assignmentForm.css";
class assignmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      title: "",
      content: "",
      selectAttachment: null,
      selectDocument: null,
    };
  }
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
            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              className="form-control"
              type="text"
              placeholder="Enter Assignment Title"
              value={this.state.subject}
              onChange={(event) =>
                this.setState({ subject: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              className="form-control"
              type="text"
              placeholder="Enter Assignment Title"
              value={this.state.title}
              onChange={(event) => this.setState({ title: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              className="form-control"
              id="content"
              rows="3"
              value={this.state.content}
              onChange={(event) =>
                this.setState({ content: event.target.value })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Select Image Attachment:</label>
            <input
              className="form-control"
              type="file"
              id="attachment"
              accept="image/*"
              onChange={(event) =>
                this.setState({ selectAttachment: event.target.files[0] })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Select Assignment Attachment:</label>
            <input
              className="form-control"
              type="file"
              id="attachment"
              accept=".pdf"
              onChange={(event) =>
                this.setState({ selectDocument: event.target.files[0] })
              }
            />
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
            <input
              id="assignedby"
              className="form-control"
              type="text"
              disabled
              value="custom assigned by"
            />
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
