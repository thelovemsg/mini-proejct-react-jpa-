import { combineReducers } from "redux";
import number from "./number";
import add100 from "./add100";
const rootReducer = combineReducers({
  add100,
  number,
});

export default rootReducer;
