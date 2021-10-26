import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import "./dashboard.css";

export class dashboard extends Component {
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

                <tr>
                  <td>
                    <a href="#">Mobile Computing</a>
                  </td>
                  <td>Monika Sahu</td>
                  <td>9:30am</td>
                  <td>
                    <Button class="status status-paid disable">Join</Button>
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td>
                    <a href="#">Data Structure</a>
                  </td>
                  <td>Poonam Udkude</td>
                  <td> 2:00pm</td>
                  <td>
                    <Button class="status status-unpaid">Join</Button>
                  </td>
                </tr>
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
                    <Button class="status status-paid disable">Submit</Button>
                  </td>
                </tr>

                <tr>
                  {" "}
                  <td>
                    <a href="#">Data Structure</a>
                  </td>
                  <td>Poonam Udkude</td>
                  <td>7/5/21</td>
                  <td>
                    <Button class="status status-unpaid">Submit</Button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="container notice-container">
          <div className="row">
            <div class="card">
              <div class="card-header">
                <h6>Notice</h6>
              </div>
              <div class="table-responsive">
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
                    <tr>
                      <td data-label="Job Title">
                        <a class="text-heading font-semibold" href="#">
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
                        <Button class="status status-paid">View</Button>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Job Title">
                        <a class="text-heading font-semibold" href="#">
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
                        <Button class="status status-paid">View</Button>
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
