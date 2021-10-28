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
  noticedata = () => {
    let arr = [];
    arr.push({
      subject: "Admission Form",
      postedby: "Student Section",
      date: "29 Feb 2021",
    });
    for (let i = 0; i < 10; i++) {
      arr.push({
        subject: "Holiday",
        postedby: "Admistration",
        date: "29 Feb 2021",
      });
    }
    return arr;
  };
  assignmentdata = () => {
    let arr = [];
    arr.push({
      subject: "Mobile Computing",
      teacher: "Monika Sahu",
      lastdate: "4/5/21",
    });
    for (let i = 0; i < 10; i++) {
      arr.push({
        subject: "Data Structure",
        teacher: "Poonam Udkude",
        lastdate: "7/5/21",
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
                <tbody>
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
                </tbody>
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
                <tbody>
                  {this.assignmentdata().map((val, ind) => (
                    <tr key={ind}>
                      <td>
                        <a href="#">{val.subject}</a>
                      </td>
                      <td>{val.teacher}</td>
                      <td>{val.lastdate}</td>
                      <td>
                        <Button className="status status-paid disable">
                          Submit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-header">
                <h6>Notice</h6>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" >Subject</th>
                      <th scope="col"></th>
                      <th scope="col" className="noticeHead">Posted By</th>
                      <th scope="col"  className="noticeHead"></th>
                      <th scope="col" className="noticeDate">Date</th>
                      <th scope="col" className="noticeDate">        </th>
                      <th scope="col"className="noticeView">View</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.noticedata().map((val, ind) => (
                      <tr key={ind}>
                        <td data-label="Job Title">
                          <a className="text-heading font-semibold" href="#">
                            {val.subject}
                          </a>
                        </td>
                        <td data-label="Email">
                          <span></span>
                        </td>
                        <td data-label="Email">
                          <span>{val.postedby}</span>
                        </td>
                        <td data-label="Email">
                          <span></span>
                        </td>
                        <td data-label="Email">
                          <span>{val.date}</span>
                        </td>
                        <td data-label="Email">
                          <span></span>
                        </td>
                        <td>
                          <Button className="status status-paid">View</Button>
                        </td>
                      </tr>
                    ))}
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
