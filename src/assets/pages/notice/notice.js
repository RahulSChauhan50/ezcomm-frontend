import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./notice.css";
export class notice extends Component {
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
  render() {
    return (
      <div className="noticecontainer">
        <div className="tableparent">
          <table class="table table-hover table-nowrap">
            <thead class="thead-light">
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
              {this.noticedata().map((val, ind) => (
                <tr key={ind}>
                  <td data-label="Job Title">
                    <a class="text-heading font-semibold" href="#">
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
                    <Button class="status status-paid">View</Button>
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

export default notice;
