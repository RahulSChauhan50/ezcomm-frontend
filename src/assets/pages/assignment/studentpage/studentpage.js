import React, { Component } from "react";
import { CgDanger } from "react-icons/cg";
import { AiOutlineSafety } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PdfViewer from "../../pdfViewer/pdfViewer";
import "./studentpage.css";
class studentpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmitModal: false,
      showPdfModal: false,
    };
  }
  datafill = () => {
    let arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push({
        topic: "unit1",
        subject: "Mobile computing",
        assignedby: "Faculty",
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
      <div className="tableparent">
        <table className="table table-hover table-nowrap">
          <thead className="thead-light">
            <tr>
              <th scope="col" className="topic">
                Topic
              </th>
              <th scope="col">Subject Name</th>
              <th scope="col">Assigned By</th>
              <th scope="col">Issue Date</th>
              <th scope="col">Deadline</th>
              <th scope="col">Submission Date</th>
              <th scope="col">Plagiarised check</th>
              <th scope="col">Submit</th>
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
                  <span>{val.assignedby}</span>
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
                    <Button className="status btn-secondary" disabled>
                      Submit
                    </Button>
                  ) : (
                    <Button
                      className="status status-paid"
                      onClick={() => this.setState({ showSubmitModal: true })}
                    >
                      Submit
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          show={this.state.showSubmitModal}
          onHide={() => this.setState({ showSubmitModal: false })}
        >
          <Modal.Body>
            <div className="mb-3">
              <label for="formFile" className="form-label">
                Select Assignment
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                accept=".pdf"
              />
            </div>
            <Button
              className="btn-primary btn-sm"
              onClick={() => this.setState({ showSubmitModal: false })}
            >
              Submit
            </Button>
          </Modal.Body>
        </Modal>
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

export default studentpage;
