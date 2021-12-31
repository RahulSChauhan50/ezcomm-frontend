import React, { Component } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import "./timeTableForm.css";
class timeTableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      timings: [],
    };
  }

  addColumn = () => {
    let temptiming = this.state.timings;
    temptiming.push({ from: "09:00", to: "09:00" });
    let tempmonday = this.state.monday;
    tempmonday.push("");
    let tempTuesday = this.state.tuesday;
    tempTuesday.push("");
  };
  render() {
    return (
      <div className="timeTableFormContainer">
        <div className="timeformtable">
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
                    onChange={(event) => console.log(event.target.value)}
                  />
                  <br /> to
                  <br />
                  <input
                    type="time"
                    required
                    value={"09:05"}
                    onChange={(event) => console.log(event.target.value)}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="time">
                  <span className="font-semibold">Monday</span>
                </td>
                <td className="InputParentSubject">
                  <input
                    type="text"
                    class="form-control subjectInput"
                    placeholder="Enter Subject"
                  />
                </td>
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Tuesday</span>
                </td>
                <td className="InputParentSubject">
                  <input
                    type="text"
                    class="form-control subjectInput"
                    placeholder="Enter Subject"
                  />
                </td>
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Thursday</span>
                </td>
                <td className="InputParentSubject">
                  <input
                    type="text"
                    class="form-control subjectInput"
                    placeholder="Enter Subject"
                  />
                </td>
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Friday</span>
                </td>
                <td className="InputParentSubject">
                  <input
                    type="text"
                    class="form-control subjectInput"
                    placeholder="Enter Subject"
                  />
                </td>
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Saturday</span>
                </td>
                <td className="InputParentSubject">
                  <input
                    type="text"
                    class="form-control subjectInput"
                    placeholder="Enter Subject"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={(e) => (
            <Tooltip id="button-tooltip" {...e}>
              Add Column
            </Tooltip>
          )}
        >
          <a href="#" className="columnplus" onClick={() => this.addColumn()}>
            <BsPlusSquare size="40px" />
          </a>
        </OverlayTrigger>
      </div>
    );
  }
}

export default timeTableForm;
