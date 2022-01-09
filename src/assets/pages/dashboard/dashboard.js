import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import urlList from "../../config/urlList";
import { getToken } from "../../config/localStorage";
import "./dashboard.css";

class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeList: null,
      assignmentList: null,
    };
  }
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
  fetchAssignmentList = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + getToken());

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(urlList.getAssignmentList, requestOptions)
      .then((response) => {
        console.log(response.status);
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((result) => {
        console.log("assignment data", result);
        this.setState({ assignmentList: result });
      })
      .catch((error) => console.log("error", error));
  };
  fetchNoticeData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + getToken());

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(urlList.getNoticeList, requestOptions)
      .then((response) => {
        console.log(response.status);
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((result) => {
        console.log("notice data ", result);
        this.setState({ noticeList: result });
      })
      .catch((error) => console.log("notice list fetch error", error));
  };
  componentDidMount() {
    this.fetchNoticeData();
    this.fetchAssignmentList();
  }
  render() {
    return (
      <div className="dashcontainer">
        <div className="container">
          <div className="row rowtable">
            <div className="column1">
              <table>
                <thead className="">
                  <tr className="tableHead  "> Class Schedule</tr>

                  <tr className="divider">
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
                  <tr className="divider">
                    <th>Title</th>
                    <th className="tableValue">
                      <span>Subject</span>
                    </th>
                    <th className="tableValue">
                      <span>Teacher</span>
                    </th>
                    <th className="tableValue">
                      <span>Issue Date</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.assignmentList !== null ? (
                    this.state.assignmentList.map((val, ind) => (
                      <tr key={ind}>
                        <td>
                          <a
                            href="#"
                            onClick={() =>
                              this.props.history.push("/home/assignment/")
                            }
                          >
                            {val.title}
                          </a>
                        </td>
                        <td className="tableValue">
                          <span>{val.subject[0]}</span>
                        </td>
                        <td className="tableValue">
                          <span>{val.name}</span>
                        </td>
                        <td className="tableValue">
                          <span>{val.date}</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-header noticeHead ">
                <h4>Notice</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                  <thead className="thead-light">
                    <tr className="divider">
                      <th scope="col" className="subject">
                        Subject
                      </th>
                      
                      <th scope="col" className="tableValue">
                        <span>Author</span>
                      </th>
                      <th scope="col" className="tableValue">
                        <span>Designation</span>
                      </th>
                      <th scope="col" className="tableValue">
                        <span>Department</span>
                      </th>
                      <th scope="col" className="tableValue">
                        <span>Date</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.noticeList !== null ? (
                      this.state.noticeList.map((val, ind) => (
                        <tr key={ind}>
                          <td data-label="Job Title" className="subject">
                            <a
                              className="text-heading font-semibold"
                              href="#"
                              onClick={() =>
                                this.props.history.push("/home/notice/")
                              }
                            >
                              {
                                val.subject /*+
                        " gusgdsauchs uhhhhhhhhhhhhh hhhhhhhhhhhhhhhhh hhhhhhhhhhhh hhh hhhhhhhhhhhhh hhhhhhhhhhhh hhh hhhhhhhhh hhhhhhh hhhhhhhhhhhhh hhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhh hhhhhhhhhhhh hhhh  hhhhhh hhhh hhhhhhhhhhhh hhhhhhhhhhhhh hhhhhhhhhhhhh hhhhh"*/
                              }
                            </a>
                            <br />
                            {val.image_content !== null ? (
                              <div>
                                <a
                                  className="text-heading font-semibold attachments"
                                  href={val.image_content}
                                  target="_blank"
                                >
                                  Attachments
                                </a>
                              </div>
                            ) : (
                              <></>
                            )}
                          </td>
                          <td data-label="Email" className="tableValue">
                            <span>{val.name}</span>
                          </td>
                          <td data-label="Email" className="tableValue">
                            <span>{val.desig}</span>
                          </td>
                          <td data-label="Email" className="tableValue">
                            <span>{val.department}</span>
                          </td>
                          <td data-label="Email" className="tableValue">
                            <span>{val.date}</span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <></>
                    )}
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
