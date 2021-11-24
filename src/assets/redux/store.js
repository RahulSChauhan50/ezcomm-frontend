import { createStore, combineReducers } from "redux";
import userReducer from "./userState/userReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

const store = createStore(rootReducer);

export default store;
