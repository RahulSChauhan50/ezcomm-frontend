let home = "http://127.0.0.1:8000/";
export default {
  login: home + "api/v1/token/",
  getUserProfile: home + "api/v1/userprofile/users/get_profile/",
  postNotice: home + "api/v1/notice/notice_post/",
  postAssignement: home + "api/v1/notice/assignment_post/",
  getNoticeList: home + "api/v1/notice/notice_post/",
  getAssignmentList: home + "api/v1/notice/assignment_post/",
  profilePic: "http://127.0.0.1:8000",
};
