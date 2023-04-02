import { combineReducers } from "redux";
import userReducer from "./reducer";

const rootReducer = combineReducers({
  user: userReducer,
  // các reducer khác
});
export default rootReducer;
