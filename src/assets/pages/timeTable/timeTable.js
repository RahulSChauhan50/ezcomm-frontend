import React, { Component } from "react";
import { getToken } from "../../config/localStorage";
import urlList from "../../config/urlList";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TimeTableForm from "./timeTableForm/timeTableForm";
import "./timeTable.css";

class timeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      showModal: false,
      semester: 1,
      timings: [],
    };
  }

  fetchSchedule = (sem) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + getToken());

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(urlList.getSchedule + sem, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((result) => {
        console.log(result, " schedule fetch success");
        let tempTiming = [];
        let tempMonday = [],
          tempTuesday = [],
          tempWednesday = [],
          tempThursday = [],
          tempFriday = [],
          tempSaturday = [];
        if (result.length > 0) {
          if (result[0].lecture_one.length > 0) {
            tempTiming.push({
              to: result[0].lecture_one[1],
              from: result[0].lecture_one[0],
            });
          }
          if (result[0].lecture_two.length > 0) {
            tempTiming.push({
              to: result[0].lecture_two[1],
              from: result[0].lecture_two[0],
            });
          }
          if (result[0].lecture_three.length > 0) {
            tempTiming.push({
              to: result[0].lecture_three[1],
              from: result[0].lecture_three[0],
            });
          }
          if (result[0].lecture_four.length > 0) {
            tempTiming.push({
              to: result[0].lecture_four[1],
              from: result[0].lecture_four[0],
            });
          }
          if (result[0].lecture_five.length > 0) {
            tempTiming.push({
              to: result[0].lecture_five[1],
              from: result[0].lecture_five[0],
            });
          }
          if (result[0].lecture_six.length > 0) {
            tempTiming.push({
              to: result[0].lecture_six[1],
              from: result[0].lecture_six[0],
            });
          }
          ///switch case for assigning daywise subject

          for (let i = 0; i < result.length; i++) {
            let tempDay = [];
            if (result[i].lecture_one.length > 0) {
              tempDay.push(result[i].lecture_one[2]);
            }
            if (result[i].lecture_two.length > 0) {
              tempDay.push(result[i].lecture_two[2]);
            }
            if (result[i].lecture_three.length > 0) {
              tempDay.push(result[i].lecture_three[2]);
            }
            if (result[i].lecture_four.length > 0) {
              tempDay.push(result[i].lecture_four[2]);
            }
            if (result[i].lecture_five.length > 0) {
              tempDay.push(result[i].lecture_five[2]);
            }
            if (result[i].lecture_six.length > 0) {
              tempDay.push(result[i].lecture_six[2]);
            }
            switch (result[i].day) {
              case 1: {
                tempMonday = tempDay;
                break;
              }
              case 2: {
                tempTuesday = tempDay;
                break;
              }
              case 3: {
                tempWednesday = tempDay;
                break;
              }
              case 4: {
                tempThursday = tempDay;
                break;
              }
              case 5: {
                tempFriday = tempDay;
                break;
              }
              case 6: {
                tempSaturday = tempDay;
                break;
              }
            }
          }
        }
        //updating state
        this.setState({
          timings: tempTiming,
          monday: tempMonday,
          tuesday: tempTuesday,
          wednesday: tempWednesday,
          thursday: tempThursday,
          friday: tempFriday,
          saturday: tempSaturday,
          semester: sem,
        });
      })
      .catch((error) => console.log("error in fetching schedule", error));
  };
  componentDidMount() {
    this.fetchSchedule(1);
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
              onChange={(e) => this.fetchSchedule(e.target.value)}
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
                {this.state.timings.map((val, ind) => (
                  <th scope="col" className="time" key={ind}>
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
                {this.state.monday.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Tuesday</span>
                </td>
                {this.state.tuesday.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Wednesday</span>
                </td>
                {this.state.wednesday.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Thursday</span>
                </td>
                {this.state.thursday.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Friday</span>
                </td>
                {this.state.friday.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="time">
                  <span className="font-semibold">Saturday</span>
                </td>
                {this.state.saturday.map((val, ind) => (
                  <td className="time" key={ind}>
                    <span className="tableSubject">{val}</span>
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
