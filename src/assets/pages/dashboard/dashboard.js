import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import "./dashboard.css";

export class dashboard extends Component {
  classSchedule = () => {
    let arr = [];
    arr.push({
      subject: "Mobile Computing",
      teacher: "Monika Sahu",
      time: "9:30 AM",
      canJoin: true,
    });
    for (let i = 0; i < 15; i++) {
      arr.push({
        subject: "Mobile Computing",
        teacher: "Monika Sahu",
        time: "9:30 AM",
        canJoin: false,
      });
    }
    return arr;
  };

  render() {
    return (
      <div className="dashcontainer">
        <div className="container">
          <div className="row rowtable">
            <div className="column1">
              <table>
                <thead>
                  <tr className="tableHead"> Class Schedule</tr>
                  <tr>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Time</th>
                    <th>Join</th>
                  </tr>
                </thead>
                {this.classSchedule().map((val, ind) => (
                  <tr key={ind}>
                    <td>
                      <a href="#">{val.subject}</a>
                    </td>
                    <td>{val.teacher}</td>
                    <td>{val.time}</td>
                    <td>
                      <Button
                        className={
                          val.canJoin
                            ? "status status-paid disable"
                            : "status status-unpaid"
                        }
                      >
                        Join
                      </Button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="column1">
              <table>
                <thead>
                  <tr className="tableHead"> Assignment</tr>
                  <tr>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Last Date</th>
                    <th>Submit</th>
                  </tr>
                </thead>

                <tr>
                  <td>
                    <a href="#">Mobile Computing</a>
                  </td>
                  <td>Monika Sahu</td>
                  <td>4/5/21</td>
                  <td>
                    <Button className="status status-paid disable">
                      Submit
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <a href="#">Data Structure</a>
                  </td>
                  <td>Poonam Udkude</td>
                  <td>7/5/21</td>
                  <td>
                    <Button className="status status-unpaid">Submit</Button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="container notice-container">
          <div className="row">
            <div className="card">
              <div className="card-header">
                <h6>Notice</h6>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Subject</th>
                      <th scope="col"></th>
                      <th scope="col">Posted By</th>
                      <th scope="col"></th>
                      <th scope="col">Date</th>
                      <th scope="col"></th>
                      <th scope="col">View</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Job Title">
                        <a className="text-heading font-semibold" href="#">
                          Admission Form
                        </a>
                      </td>
                      <td data-label="Email">
                        <span></span>
                      </td>
                      <td data-label="Email">
                        <span>Student Section</span>
                      </td>
                      <td data-label="Email">
                        <span></span>
                      </td>
                      <td data-label="Email">
                        <span>29 Feb 2021</span>
                      </td>
                      <td data-label="Email">
                        <span></span>
                      </td>
                      <td>
                        <Button className="status status-paid">View</Button>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Job Title">
                        <a className="text-heading font-semibold" href="#">
                          Holiday
                        </a>
                      </td>
                      <td data-label="Email">
                        <span></span>
                      </td>
                      <td data-label="Email">
                        <span>Admistration</span>
                      </td>
                      <td data-label="Email">
                        <span></span>
                      </td>
                      <td data-label="Email">
                        <span>29 Feb 2021</span>
                      </td>
                      <td data-label="Email">
                        <span></span>
                      </td>
                      <td>
                        <Button className="status status-paid">View</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default dashboard;
