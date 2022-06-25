import { combineReducers } from "redux";
import TwoReducer from "./multiply_two/TwoReducer";
import FiveReducer from "./multiply_five/FiveReducer";

const rootReducer = combineReducers({
  two: TwoReducer,
  five: FiveReducer,
});

export default rootReducer;
