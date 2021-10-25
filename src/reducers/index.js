import { combineReducers } from "redux";
import auth from "./auth";
import toaster from "./toaster";
import loader from "./loader";

export default combineReducers({
  loader,
  toaster,
  auth,
});
