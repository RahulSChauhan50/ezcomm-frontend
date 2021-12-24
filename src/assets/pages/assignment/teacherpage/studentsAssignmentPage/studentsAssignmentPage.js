import React, { Component } from "react";
import { CgDanger } from "react-icons/cg";
import { AiOutlineSafety } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getToken } from "../../../../config/localStorage";
import urlList from "../../../../config/urlList";
import { useParams } from "react-router";
import { BsArrowLeftCircle } from "react-icons/bs";
import DocViewer from '../../../docViewer/docViewer';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./studentsAssignmentPage.css";
export class StudentsAssignmentclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentList: null,
      showPdfModal: false,
      pdfLink: null,
    };
  }
  fetchAndUpdateData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + getToken());

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(urlList.getAssignmentSubmissions + this.props.id, requestOptions)
      .then((response) => {
        console.log(response.status);
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({ assignmentList: result });
      })
      .catch((error) => console.log("error", error));
  };
  componentDidMount() {
    this.fetchAndUpdateData();
  }
  render() {
    return (
      <div className="studentAssignmentPageContainer">
        <div className="teacherpage">
          <div className="sortcontainer">
            <Link to="/home/assignment">
              <BsArrowLeftCircle size="35px" />
            </Link>
          </div>
          <div className="teachertableparent">
            <table className="table table-hover table-nowrap">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Submitted By</th>
                  <th scope="col">Submission Date</th>
                  <th scope="col">Plagiarised check</th>
                  <th scope="col">Marks</th>
                  <th scope="col">View Assignment</th>
                </tr>
              </thead>
              <tbody>
                {this.state.assignmentList !== null ? (
                  this.state.assignmentList.map((val, ind) => (
                    <tr key={ind}>
                      <td>{val.name}</td>
                      <td>
                        <span>{val.submission_date}</span>
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
                      <td>{val.marks}</td>
                      <td>
                        <Button
                          className="status status-paid"
                          onClick={() =>
                            this.setState({
                              showPdfModal: true,
                              pdfLink: val.upload_file,
                            })
                          }
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
            <DocViewer uri={this.state.pdfLink} />
          </Modal>
        </div>
      </div>
    );
  }
}

function StudentAssignmentPage() {
  let { id } = useParams();
  return <StudentsAssignmentclass id={id} />;
}
export default StudentAssignmentPage;
