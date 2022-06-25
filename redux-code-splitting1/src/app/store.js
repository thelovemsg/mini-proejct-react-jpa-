import { configureStore } from "@reduxjs/toolkit";
import counter from "../reducers/number";
import add100 from "../reducers/add100";

 

export default configureStore({
  reducer: {
    counter: counter,
    add100: add100,
  },
  add100
});
