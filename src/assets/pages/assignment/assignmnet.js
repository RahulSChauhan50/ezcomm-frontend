import React, { Component } from "react";
import "./assignment.css";
import TeacherPage from "./teacherpage/teacherpage";
import StudentPage from "./studentpage/studentpage";
class assignmnet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTeacher: true,
    };
  }
  render() {
    return (
      <div className="assignmentcontainer">
        {this.state.isTeacher ? <TeacherPage /> : <StudentPage />}
      </div>
    );
  }
}

export default assignmnet;
