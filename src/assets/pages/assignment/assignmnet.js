import React, { Component } from "react";
import "./assignment.css";
import { connect } from "react-redux";
import TeacherPage from "./teacherpage/teacherpage";
import StudentPage from "./studentpage/studentpage";
class assignmnet extends Component {
  render() {
    return (
      <div className="assignmentcontainer">
        {this.props.isStaff ? <TeacherPage /> : <StudentPage />}
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

export default connect(mapStateToProps, null)(assignmnet);
