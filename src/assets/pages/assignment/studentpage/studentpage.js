import React, { Component } from "react";
import { CgDanger } from "react-icons/cg";
import { AiOutlineSafety } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { getToken } from "../../../config/localStorage";
import urlList from "../../../config/urlList";
import Button from "react-bootstrap/Button";
import DocViewer from "../../docViewer/docViewer";
import "./studentpage.css";
class studentpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmitModal: false,
      showPdfModal: false,
      assignmentList: null,
      pdfLink: null,
      assignmentFileToUpload: [],
      assignmentID: null,
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
  submitAssignment = () => {
    if (
      this.state.assignmentFileToUpload.length !== 0 &&
      this.state.assignmentID !== null
    ) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + getToken());

      var formdata = new FormData();
      formdata.append("assigned_by", this.state.assignmentID);
      formdata.append("submitted_by", this.props.userId);
      formdata.append("upload_file", this.state.assignmentFileToUpload);
      formdata.append(
        "name",
        this.props.profile.name.first_name +
          " " +
          this.props.profile.name.last_name
      );

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(urlList.submitAssignement, requestOptions)
        .then((response) => {
          console.log(response.status);
          if (!response.ok) {
            throw new Error("HTTP status " + response.status);
          }
          return response.json();
        })
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      console.log("please Select A file...");
    }
  };
  componentDidMount() {
    this.fetchAssignmentList();
  }
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
              <th scope="col">Plagiarised check</th>
              <th scope="col">Submit</th>
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
                      onClick={() =>
                        this.setState({
                          showPdfModal: true,
                          pdfLink: val.template_docx,
                        })
                      }
                    >
                      {val.title}
                    </a>
                  </td>
                  <td>
                    <span>{val.subject[0]}</span>
                  </td>
                  <td>
                    <span>{val.name}</span>
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
                      onClick={() =>
                        this.setState({
                          showSubmitModal: true,
                          assignmentID: val.id,
                        })
                      }
                    >
                      Submit
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
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
                accept=".docx"
                onChange={(event) =>
                  this.setState({
                    assignmentFileToUpload: event.target.files[0],
                  })
                }
              />
            </div>
            <Button
              className="btn-primary btn-sm"
              disabled={
                this.state.assignmentFileToUpload.length === 0 ? true : false
              }
              onClick={() => this.submitAssignment()}
            >
              Submit
            </Button>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.showPdfModal}
          onHide={() => this.setState({ showPdfModal: false })}
        >
          <DocViewer uri={this.state.pdfLink} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.userReducer.profile,
    isStaff: state.userReducer.isStaff,
    userId: state.userReducer.userId,
  };
};

export default connect(mapStateToProps, null)(studentpage);
