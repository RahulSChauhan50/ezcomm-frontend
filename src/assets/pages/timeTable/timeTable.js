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
            <TimeTableForm />
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
