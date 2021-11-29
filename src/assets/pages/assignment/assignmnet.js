import React, { Component } from "react";
import "./assignment.css";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import TeacherPage from "./teacherpage/teacherpage";
import StudentPage from "./studentpage/studentpage";
function Assignmnet(props) {
  let history = useHistory();
  return (
    <div className="assignmentcontainer">
      {props.isStaff ? <TeacherPage history={history} /> : <StudentPage />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.userReducer.profile,
    isStaff: state.userReducer.isStaff,
  };
};

export default connect(mapStateToProps, null)(Assignmnet);
