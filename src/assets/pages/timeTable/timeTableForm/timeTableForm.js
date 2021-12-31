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
    if (this.state.timings.length < 6) {
      let temptiming = this.state.timings;
      temptiming.push({ from: "09:00", to: "09:00" });
      let tempmonday = this.state.monday;
      tempmonday.push("");
      let tempTuesday = this.state.tuesday;
      tempTuesday.push("");
      let tempWednesday = this.state.wednesday;
      tempWednesday.push("");
      let tempThursday = this.state.thursday;
      tempThursday.push("");
      let tempFriday = this.state.friday;
      tempFriday.push("");
      let tempSaturday = this.state.saturday;
      tempSaturday.push("");

      this.setState({
        timings: temptiming,
        monday: tempmonday,
        tuesday: tempTuesday,
        wednesday: tempWednesday,
        thursday: tempThursday,
        friday: tempFriday,
        saturday: tempSaturday,
      });
    }
  };
  changeSubjectValue = (ind, val, day) => {
    console.log(ind, val, day);
    switch (day) {
      case 1: {
        let temp = this.state.monday;
        temp[ind] = val;
        this.setState({ monday: temp });
        break;
      }
      case 2: {
        let temp = this.state.tuesday;
        temp[ind] = val;
        this.setState({ tuesday: temp });
        break;
      }
      case 3: {
        let temp = this.state.wednesday;
        temp[ind] = val;
        this.setState({ wednesday: temp });
        break;
      }
      case 4: {
        let temp = this.state.thursday;
        temp[ind] = val;
        this.setState({ thursday: temp });
        break;
      }
      case 5: {
        let temp = this.state.friday;
        temp[ind] = val;
        this.setState({ friday: temp });
        break;
      }
      case 6: {
        let temp = this.state.saturday;
        temp[ind] = val;
        this.setState({ saturday: temp });
        break;
      }
    }
  };
  changeFromTiming = (ind, time) => {
    let temp = this.state.timings;
    temp[ind].from = time;
    this.setState({ timings: temp });
  };
  changeToTiming = (ind, time) => {
    let temp = this.state.timings;
    temp[ind].to = time;
    this.setState({ timings: temp });
  };
  render() {
    return (
      <div className="timeTableFormContainer">
        <div className="timeformtable">
          <div className="timeformtableparent">
            <table className="table table-hover table-nowrap">
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="time">
                    Day
                  </th>
                  {this.state.timings.map((val, ind) => (
                    <th scope="col" className="time" key={ind}>
                      <input
                        type="time"
                        required
                        value={val.from}
                        onChange={(event) => {
                          console.log(event.target.value);
                          this.changeFromTiming(ind, event.target.value);
                        }}
                      />
                      <br /> to
                      <br />
                      <input
                        type="time"
                        required
                        value={val.to}
                        onChange={(event) => {
                          console.log(event.target.value);
                          this.changeToTiming(ind, event.target.value);
                        }}
                      />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="time">
                    <span className="font-semibold">Monday</span>
                  </td>
                  {this.state.monday.map((val, ind) => (
                    <td className="InputParentSubject" key={ind}>
                      <input
                        type="text"
                        value={val}
                        onChange={(event) =>
                          this.changeSubjectValue(ind, event.target.value, 1)
                        }
                        className="form-control subjectInput"
                        placeholder="Enter Subject"
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="time">
                    <span className="font-semibold">Tuesday</span>
                  </td>
                  {this.state.tuesday.map((val, ind) => (
                    <td className="InputParentSubject" key={ind}>
                      <input
                        type="text"
                        value={val}
                        onChange={(event) =>
                          this.changeSubjectValue(ind, event.target.value, 2)
                        }
                        className="form-control subjectInput"
                        placeholder="Enter Subject"
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="time">
                    <span className="font-semibold">Wednesday</span>
                  </td>
                  {this.state.wednesday.map((val, ind) => (
                    <td className="InputParentSubject" key={ind}>
                      <input
                        type="text"
                        value={val}
                        onChange={(event) =>
                          this.changeSubjectValue(ind, event.target.value, 3)
                        }
                        className="form-control subjectInput"
                        placeholder="Enter Subject"
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="time">
                    <span className="font-semibold">Thursday</span>
                  </td>
                  {this.state.thursday.map((val, ind) => (
                    <td className="InputParentSubject" key={ind}>
                      <input
                        type="text"
                        value={val}
                        onChange={(event) =>
                          this.changeSubjectValue(ind, event.target.value, 4)
                        }
                        className="form-control subjectInput"
                        placeholder="Enter Subject"
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="time">
                    <span className="font-semibold">Friday</span>
                  </td>
                  {this.state.friday.map((val, ind) => (
                    <td className="InputParentSubject" key={ind}>
                      <input
                        type="text"
                        value={val}
                        onChange={(event) =>
                          this.changeSubjectValue(ind, event.target.value, 5)
                        }
                        className="form-control subjectInput"
                        placeholder="Enter Subject"
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="time">
                    <span className="font-semibold">Saturday</span>
                  </td>
                  {this.state.saturday.map((val, ind) => (
                    <td className="InputParentSubject" key={ind}>
                      <input
                        type="text"
                        value={val}
                        onChange={(event) =>
                          this.changeSubjectValue(ind, event.target.value, 6)
                        }
                        className="form-control subjectInput"
                        placeholder="Enter Subject"
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <div className="tablesubmitbutton">
              <button value="Submit" className="submit">
                Submit
              </button>
            </div>
          </div>
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
