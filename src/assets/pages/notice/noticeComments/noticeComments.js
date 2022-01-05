import React, { Component } from "react";
import { getToken } from "../../../config/localStorage";
import urlList from "../../../config/urlList";
import { connect } from "react-redux";
import "./noticeComments.css";
class noticeComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsData: [],
    };
  }
  fetchComments = () => {
    console.log("id ", this.props.noticeId);
    if (this.props.noticeId !== null) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + getToken());

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(urlList.getNoticeComments + 23, requestOptions)
        .then((response) => {
          console.log(response.status);
          if (!response.ok) {
            throw new Error("HTTP status " + response.status);
          }
          return response.json();
        })
        .then((result) => {
          console.log(result);
          this.setState({ commentsData: result });
        })
        .catch((error) => console.log("error in fetch comments", error));
    }
  };

  getCurrenteDate = () => {
    let currentdate = new Date();
    let datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    return datetime;
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    return (
      <div>
        <ul class="list-group">
          <div className="allcommentslist">
            {this.state.commentsData.map((val, ind) => (
              <li class="list-group-item">
                <div class="mb-3">
                  <div className="commentinfo">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      {val.name}
                    </label>
                    <small class="text-muted">{val.created_on}</small>
                  </div>
                  <div className="commentbody">
                    <p>{val.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </div>
          <li class="list-group-item writesection">
            <div class="mb-3">
              <div className="commentinfo">
                <label for="exampleFormControlTextarea1" class="form-label">
                  {this.props.profile.name.first_name +
                    " " +
                    this.props.profile.name.last_name}
                </label>
                <small class="text-muted">{this.getCurrenteDate()}</small>
              </div>
              <div class="input-group mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Send
                </button>
              </div>
            </div>
          </li>
        </ul>
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

export default connect(mapStateToProps, null)(noticeComments);
