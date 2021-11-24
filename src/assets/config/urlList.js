let home = "127.0.0.1:8000/";
export default {
  login: home + "api/v1/token/",
  getUserProfile: home + "api/v1/userprofile/users/get_profile/",
  postNotice: home + "api/v1/notice/notice_post/",
  postAssignement: home + "api/v1/notice/assignment_post/",
  getNoticeList: home + "api/v1/notice/notice_post/",
  getAssignmentList: home + "api/v1/notice/assignment_post/",
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3NjYzNDM2LCJpYXQiOjE2Mzc2NjMxMzYsImp0aSI6IjQxMjExZjcwZTY2ZjRkNzc4NGMyNWU3YmM3ODQzMDViIiwidXNlcl9pZCI6MX0.sPPxtKQRkM6oms2u3a6amtpFW1RBKnlft6rMeOh_QNQ",
};
