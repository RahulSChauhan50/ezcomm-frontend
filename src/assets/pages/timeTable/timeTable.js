import React, { Component } from "react";
import { getToken } from "../../config/localStorage";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TimeTableForm from "./timeTableForm/timeTableForm";
import "./timeTable.css";

const data = [
  {
    from: "09:05",
    to: "09:05",
    subject: "Cloud computing",
  },
  {
    from: "09:05",
    to: "09:05",
    subject: "Cloud computing",
  },
  {
    from: "09:05",
    to: "09:05",
    subject: "Cloud computing",
  },
  {
    from: "09:05",
    to: "09:05",
    subject: "Cloud computing",
  },
  {
    from: "09:05",
    to: "09:05",
    subject: "Cloud computing",
  },
  {
    from: "09:05",
    to: "09:05",
    subject: "Cloud computing",
  },
  {
    from: "09:05",
    to: "09:05",
    subject: "Cloud computing",
  },
];

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
      showModal: true,
      semester: 1,
    };
  }
  render() {
    return (
      <div className="timetablecontainer">
        <div className="selectsemester">
          {this.props.isStaff ? (
            <Button
              className="btn-sm"
              onClick={() => this.setState({ showModal: true })}
            >
              Create Time Table
            </Button>
          ) : (
            <></>
          )}
          <div className="form-group">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              defaultValue="Assignment Topic"
              onChange={(e) => this.setState({ semester: e.target.value })}
            >
              <option disabled value="Assignment Topic">
                Select Semester
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
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
                {data.map((val, ind) => (
                  <th scope="col" className="time">
                    {val.from}
                    <br /> to
                    <br />
                    {val.to}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="time">
                  <span className="font-semibold">Monday</span>
                </td>
                {data.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val.subject}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Tuesday</span>
                </td>
                {data.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val.subject}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Thursday</span>
                </td>
                {data.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val.subject}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Friday</span>
                </td>
                {data.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val.subject}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Saturday</span>
                </td>
                {data.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val.subject}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {this.props.isStaff ? (
          <Modal
            dialogClassName="modalcss"
            show={this.state.showModal}
            onHide={() => this.setState({ showModal: false })}
          >
            <TimeTableForm semester={this.state.semester} />
          </Modal>
        ) : (
          <></>
        )}
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
