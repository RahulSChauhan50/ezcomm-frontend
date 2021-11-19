import React, { Component } from "react";
import { CgDanger } from "react-icons/cg";
import { AiOutlineSafety } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfViewer from "../../pdfViewer/pdfViewer";
import "./teacherpage.css";
class teacherpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPdfModal: false,
    };
  }
  datafill = () => {
    let arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push({
        topic: "unit1",
        subject: "Mobile computing",
        submittedby: "student",
        issuedate: "19-11-2021",
        deadline: "23-11-2021",
        submissiondate: "22-11-2021",
        isplagiarised: i % 2 === 0 ? true : false,
        isSubmitted: i % 2 === 0 ? true : false,
      });
    }
    return arr;
  };
  render() {
    return (
      <div className="teacherpage">
        <div className="sortcontainer">
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
                <th scope="col">Deadline</th>
                <th scope="col">Submission Date</th>
                <th scope="col">Plagiarised check</th>
                <th scope="col">Is Submitted</th>
              </tr>
            </thead>
            <tbody>
              {this.datafill().map((val, ind) => (
                <tr key={ind}>
                  <td className="topic">
                    <a
                      href="#"
                      className="font-semibold"
                      onClick={() => this.setState({ showPdfModal: true })}
                    >
                      {val.topic}
                    </a>
                  </td>
                  <td>
                    <span>{val.subject}</span>
                  </td>
                  <td>
                    <span>{val.submittedby}</span>
                  </td>
                  <td>
                    <span>{val.issuedate}</span>
                  </td>
                  <td>
                    <span>{val.deadline}</span>
                  </td>
                  <td>
                    <span>{val.submissiondate}</span>
                  </td>
                  <td>
                    <div className="plagiarismicon">
                      {val.isplagiarised ? (
                        <CgDanger color="red" size="25px" />
                      ) : (
                        <AiOutlineSafety color="green" size="25px" />
                      )}
                    </div>
                  </td>
                  <td>
                    {val.isSubmitted ? (
                      <Button
                        className="status status-paid"
                        onClick={() => this.setState({ showPdfModal: true })}
                      >
                        View
                      </Button>
                    ) : (
                      <span>NOT SUBMITTED</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          show={this.state.showPdfModal}
          onHide={() => this.setState({ showPdfModal: false })}
        >
          <PdfViewer />
        </Modal>
      </div>
    );
  }
}

export default teacherpage;
