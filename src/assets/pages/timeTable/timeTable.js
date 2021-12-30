import React, { Component } from "react";
import { getToken } from "../../config/localStorage";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./timeTable.css";
class timeTable extends Component {
  render() {
    return (
      <div className="timetablecontainer">
        <div className="selectsemester">
          {this.props.isStaff ? (
            <Button className="btn-sm">Create Time Table</Button>
          ) : (
            <></>
          )}
          <div className="form-group">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              defaultValue="Assignment Topic"
            >
              <option disabled value="Assignment Topic">
                Select Semester
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
        </div>
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

export default connect(mapStateToProps, null)(timeTable);
