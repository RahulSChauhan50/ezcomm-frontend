import {
  CHANGE_USER_ID,
  CHANGE_USER_PROFILE,
  CHANGE_USER_STAFF,
  CHANGE_USER_TOKEN,
  CHANGE_USER_PASSWORD,
  CHANGE_USER_USERNAME,
} from "./userActionTypes";

export const changeUserId = (parameter) => {
  return {
    type: CHANGE_USER_ID,
    payload: parameter,
  };
};
export const changeUserProfile = (parameter) => {
  return {
    type: CHANGE_USER_PROFILE,
    payload: parameter,
  };
};
export const changeUserStaffStatus = (parameter) => {
  return {
    type: CHANGE_USER_STAFF,
    payload: parameter,
  };
};
export const changeUserToken = (parameter) => {
  return {
    type: CHANGE_USER_TOKEN,
    payload: parameter,
  };
};
export const changeUsername = (parameter) => {
  return {
    type: CHANGE_USER_USERNAME,
    payload: parameter,
  };
};
export const changeUserPassword = (parameter) => {
  return {
    type: CHANGE_USER_PASSWORD,
    payload: parameter,
  };
};
