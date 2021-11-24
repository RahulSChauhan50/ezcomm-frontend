import {
  CHANGE_USER_ID,
  CHANGE_USER_PASSWORD,
  CHANGE_USER_PROFILE,
  CHANGE_USER_STAFF,
  CHANGE_USER_TOKEN,
  CHANGE_USER_USERNAME,
} from "./userActionTypes";

const initialState = {
  userId: null,
  username: null,
  password: null,
  token: null,
  profile: null,
  isStaff: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case CHANGE_USER_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case CHANGE_USER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case CHANGE_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case CHANGE_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case CHANGE_USER_STAFF:
      return {
        ...state,
        isStaff: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
