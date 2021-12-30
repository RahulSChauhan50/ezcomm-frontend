import React, { Component } from "react";
import { getToken } from "../../config/localStorage";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./timeTable.css";
class timeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  }
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
        <div className="teachertableparent ">
          <table className="table table-hover table-nowrap">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="time">
                  Day
                </th>
                <th scope="col" className="time">
                  <input
                    type="time"
                    required
                    value={"09:05"}
                    disabled
                    onChange={(event) => console.log(event.target.value)}
                  />
                  <br /> to
                  <br /> 09:05 AM
                </th>
                <th scope="col" className="time">
                  09:05 AM
                  <br /> to
                  <br /> 09:05 AM
                </th>
                <th scope="col" className="time">
                  09:05 AM
                  <br /> to
                  <br /> 09:05 AM
                </th>
                <th scope="col" className="time">
                  09:05 AM
                  <br /> to
                  <br /> 09:05 AM
                </th>
                <th scope="col" className="time">
                  09:05 AM
                  <br /> to
                  <br /> 09:05 AM
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.days.map((val, ind) => (
                <tr key={ind}>
                  <td className="time">
                    <span className="font-semibold">{val}</span>
                  </td>
                  <td className="time">
                    <span>subject</span>
                  </td>
                  <td className="time">
                    <span>Student</span>
                  </td>
                  <td className="time">
                    <span>date</span>
                  </td>
                  <td className="time">
                    <div className="plagiarismicon">sign</div>
                  </td>
                  <td className="time">
                    <span>subject</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
