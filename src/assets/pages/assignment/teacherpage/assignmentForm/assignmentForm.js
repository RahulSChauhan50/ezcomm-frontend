import React, { Component } from "react";
import "./assignmentForm.css";
import { connect } from "react-redux";
import urlList from "../../../../config/urlList";
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
  submitForm = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + urlList.token);

    var formdata = new FormData();
    formdata.append("department", "CSE");
    formdata.append("desig", this.props.profile.designation);
    formdata.append("subject", this.state.subject);
    formdata.append("content", this.state.content);
    formdata.append("assigned_by", "1");
    formdata.append("title", this.state.title);
    if (this.state.selectAttachment !== null) {
      formdata.append("image_content", this.state.selectAttachment);
    }
    if (this.state.selectDocument !== null) {
      formdata.append("template_docx", this.state.selectDocument);
    }

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(urlList.postAssignement, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
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
              placeholder="Enter Subject"
              value={this.state.subject}
              onChange={(event) =>
                this.setState({ subject: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Topic:</label>
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
              value={
                this.props.profile.name.first_name +
                " " +
                this.props.profile.name.last_name
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department By:</label>
            <input
              id="department"
              className="form-control"
              type="text"
              placeholder="Enter Department"
              value={"CSE"}
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
              value={this.props.profile.designation}
              disabled
              required
            />
          </div>
        </form>
        <button
          value="Submit"
          className="submit"
          onClick={() => this.submitForm()}
        >
          Submit
        </button>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeUserId: (payload) => {
//       dispatch(changeUserId(payload));
//     },
//     changeUserProfile: (payload) => {
//       dispatch(changeUserProfile(payload));
//     },
//     changeUserStaffStatus: (payload) => {
//       dispatch(changeUserStaffStatus(payload));
//     },
//   };
// };

export default connect(mapStateToProps, null)(assignmentForm);
