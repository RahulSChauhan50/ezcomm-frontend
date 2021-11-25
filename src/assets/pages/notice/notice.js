import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfViewer from "../pdfViewer/pdfViewer";
import { getToken } from "../../config/localStorage";
import { connect } from "react-redux";
import urlList from "../../config/urlList";
import NoticeForm from "./noticeform/noticeform";
import "./notice.css";
class notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpdfmodal: false,
      shownoticeformmodal: false,
      noticeList: null,
    };
  }
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
        console.log(result);
        this.setState({ noticeList: result });
      })
      .catch((error) => console.log("notice list fetch error", error));
  };
  componentDidMount() {
    this.fetchNoticeData();
  }
  render() {
    return (
      <div className="noticecontainer">
        {this.props.isStaff ? (
          <Button
            className="btn-sm createnotice"
            onClick={() => this.setState({ shownoticeformmodal: true })}
          >
            Create Notice
          </Button>
        ) : (
          <div />
        )}
        <div
          className={
            this.props.isStaff
              ? "noticetableparentwithbutton"
              : "noticetableparent"
          }
        >
          <table className="table table-hover table-nowrap">
            <thead className="thead-light">
              <tr>
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
                <th scope="col" className="tableValue">
                  <span>View</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.noticeList !== null ? (
                this.state.noticeList.map((val, ind) => (
                  <tr key={ind}>
                    <td data-label="Job Title" className="subject">
                      <a className="text-heading font-semibold" href="#">
                        {
                          val.subject + ind /*+
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
                      <span>{val.author}</span>
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
                    <td className="tableValue">
                      <span>
                        <Button
                          className="status status-paid"
                          onClick={() => this.setState({ showpdfmodal: true })}
                        >
                          View
                        </Button>
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <div />
              )}
            </tbody>
          </table>
        </div>
        <Modal
          show={this.state.showpdfmodal}
          onHide={() => this.setState({ showpdfmodal: false })}
        >
          <PdfViewer />
        </Modal>
        {this.props.isStaff ? (
          <Modal
            show={this.state.shownoticeformmodal}
            onHide={() => this.setState({ shownoticeformmodal: false })}
          >
            <NoticeForm />
          </Modal>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.userReducer.profile,
    isStaff: state.userReducer.isStaff,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeUserId: (payload) => {
//       dispatch(changeUserId(payload));
//     },
//     changeUserProfile: (payload) => {
//       dispatch(changeUserProfile(payload));
//     },
//     changeUserStaffStatus: (payload) => {
//       dispatch(changeUserStaffStatus(payload));
//     },
//   };
// };

export default connect(mapStateToProps, null)(notice);
