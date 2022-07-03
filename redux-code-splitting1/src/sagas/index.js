import { combineReducers } from "redux";
import number, { numberSaga } from "./number";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ number });
export function* rootSaga() {
  yield all([numberSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
