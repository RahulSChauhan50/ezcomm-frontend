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
                <th scope="col" className="topic">
                  Day
                </th>
                <th scope="col">Subject Name</th>
                <th scope="col">Submitted By</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Plagiarised check</th>
                <th scope="col">View Submissions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="topic">
                  <a href="#" className="font-semibold">
                    title
                  </a>

                  <br />
                </td>
                <td>
                  <span>subject</span>
                </td>
                <td>
                  <span>Student</span>
                </td>
                <td>
                  <span>date</span>
                </td>
                <td>
                  <div className="plagiarismicon">sign</div>
                </td>
                <td>
                  <Button className="status status-paid">View</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <input
          type="time"
          required
          value={"09:05"}
          disabled
          onChange={(event) => console.log(event.target.value)}
        />
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
