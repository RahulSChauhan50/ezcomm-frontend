import React, { Component } from "react";
import "./noticeform.css";
import { connect } from "react-redux";
import { getToken } from "../../../config/localStorage";
import urlList from "../../../config/urlList";
class noticeform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      content: "",
      selectAttachment: [],
      selectDocument: [],
    };
  }
  submitForm = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + getToken());

    let formdata = new FormData();
    formdata.append("department", "CSE");
    formdata.append("desig", this.props.profile.designation);
    formdata.append("subject", this.state.subject);
    formdata.append("content", this.state.content);
    formdata.append("image_content", this.state.selectAttachment);
    formdata.append("template_docx", this.state.selectDocument);
    formdata.append("author", this.props.userId);
    formdata.append(
      "name",
      this.props.profile.name.first_name +
        " " +
        this.props.profile.name.last_name
    );

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(urlList.postNotice, requestOptions)
      .then((response) => {
        console.log(response.status);
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.text();
      })
      .then((result) => {
        console.log(result, this.props);
        this.props.fetchNoticeData();
      })
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
      <div className="noticeformcontainer">
        <form>
          <div className="form-group">
            <label htmlFor="title">Subject:</label>
            <input
              id="title"
              className="form-control"
              type="text"
              placeholder="Enter Notice Subject"
              required
              value={this.state.subject}
              onChange={(event) =>
                this.setState({ subject: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              className="form-control"
              id="content"
              rows="3"
              required
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
            <label htmlFor="attachment">Select Notice Attachment:</label>
            <input
              className="form-control"
              type="file"
              id="attachment"
              accept=".docx"
              onChange={(event) =>
                this.setState({ selectDocument: event.target.files[0] })
              }
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
            <label htmlFor="assignedby">Author:</label>
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
    userId: state.userReducer.userId,
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

export default connect(mapStateToProps, null)(noticeform);
