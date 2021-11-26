import React, { Component } from "react";
import { CgDanger } from "react-icons/cg";
import { AiOutlineSafety } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getToken } from "../../../config/localStorage";
import urlList from "../../../config/urlList";
import PdfViewer from "../../pdfViewer/pdfViewer";
import AssignmentForm from "./assignmentForm/assignmentForm";
import "./teacherpage.css";
class teacherpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPdfModal: false,
      showAssignmentformmodal: false,
      assignmentList: null,
    };
  }
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
  componentDidMount() {
    this.fetchAssignmentList();
  }
  render() {
    return (
      <div className="teacherpage">
        <div className="sortcontainer">
          <div className="sortcontainerchild">
            <div className="form-group">
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                defaultValue="Subject"
              >
                <option disabled value="Subject">
                  Subject
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                defaultValue="Assignment Topic"
              >
                <option disabled value="Assignment Topic">
                  Assignment Topic
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <Button className="btn-sm">SORT</Button>
          </div>
          <Button
            className="btn-sm"
            onClick={() => this.setState({ showAssignmentformmodal: true })}
          >
            Create Assignment
          </Button>
        </div>
        <div className="teachertableparent">
          <table className="table table-hover table-nowrap">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="topic">
                  Topic
                </th>
                <th scope="col">Subject Name</th>
                <th scope="col">Submitted By</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Plagiarised check</th>
                <th scope="col">View Assignment</th>
              </tr>
            </thead>
            <tbody>
              {this.state.assignmentList !== null ? (
                this.state.assignmentList.map((val, ind) => (
                  <tr key={ind}>
                    <td className="topic">
                      <a
                        href="#"
                        className="font-semibold"
                        onClick={() => this.setState({ showPdfModal: true })}
                      >
                        {val.title}
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
                    <td>
                      <span>{val.subject[0]}</span>
                    </td>
                    <td>
                      <span>Student</span>
                    </td>
                    <td>
                      <span>{val.date}</span>
                    </td>
                    <td>
                      <div className="plagiarismicon">
                        {Math.floor(Math.random() * 10) % 2 === 1 ? (
                          <CgDanger color="red" size="25px" />
                        ) : (
                          <AiOutlineSafety color="green" size="25px" />
                        )}
                      </div>
                    </td>
                    <td>
                      <Button
                        className="status status-paid"
                        onClick={() => this.setState({ showPdfModal: true })}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
        <Modal
          show={this.state.showPdfModal}
          onHide={() => this.setState({ showPdfModal: false })}
        >
          <PdfViewer />
        </Modal>
        <Modal
          show={this.state.showAssignmentformmodal}
          onHide={() => this.setState({ showAssignmentformmodal: false })}
        >
          <AssignmentForm fetchAssignmentList={this.fetchAssignmentList} />
        </Modal>
      </div>
    );
  }
}

export default teacherpage;
