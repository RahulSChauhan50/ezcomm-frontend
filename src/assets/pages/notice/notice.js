import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PdfViewer from "../pdfViewer/pdfViewer";
import { connect } from "react-redux";
import NoticeForm from "./noticeform/noticeform";
import "./notice.css";
class notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpdfmodal: false,
      shownoticeformmodal: false,
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
                <th scope="col">Posted By</th>
                <th scope="col">Date</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {this.noticedata().map((val, ind) => (
                <tr key={ind}>
                  <td data-label="Job Title" className="subject">
                    <a className="text-heading font-semibold" href="#">
                      {
                        val.subject + ind /*+
                        " gusgdsauchs uhhhhhhhhhhhhh hhhhhhhhhhhhhhhhh hhhhhhhhhhhh hhh hhhhhhhhhhhhh hhhhhhhhhhhh hhh hhhhhhhhh hhhhhhh hhhhhhhhhhhhh hhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhh hhhhhhhhhhhh hhhh  hhhhhh hhhh hhhhhhhhhhhh hhhhhhhhhhhhh hhhhhhhhhhhhh hhhhh"*/
                      }
                    </a>
                  </td>
                  <td data-label="Email">
                    <span>{val.postedby}</span>
                  </td>
                  <td data-label="Email">
                    <span>{val.date}</span>
                  </td>
                  <td>
                    <Button
                      className="status status-paid"
                      onClick={() => this.setState({ showpdfmodal: true })}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
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
