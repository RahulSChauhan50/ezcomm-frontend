let home = "http://127.0.0.1:8000/";
export default {
  login: home + "api/v1/token/",
  getUserProfile: home + "api/v1/userprofile/users/get_profile/",
  postNotice: home + "api/v1/notice/notice_post/",
  postAssignement: home + "api/v1/notice/assignment_post/",
  getNoticeList: home + "api/v1/notice/notice_post/",
  getAssignmentList: home + "api/v1/notice/assignment_post/",
  profilePic: "http://127.0.0.1:8000",
  getAssignmentSubmissions: home + "api/v1/clsses/Assignment/?assigned_by=",
  submitAssignement: home + "api/v1/clsses/Assignment/",
  postSchedule: home + "api/v1/clsses/Schedule/",
  getSchedule: home + "api/v1/clsses/Schedule/?semester=",
  getNoticeComments: home + "api/v1/notice/comments/?post=",
  postNoticeComments: home + "api/v1/notice/comments/",
};
