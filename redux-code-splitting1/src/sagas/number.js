import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const initialState = {
  number: 0,
};

const ADD_ASYNC = "ADD_ASYNC";
const SUB_ASYNC = "SUB_ASYNC";
const ADD_NUMBER = "ADD_NUMBER";
const SUB_NUMBER = "SUB_NUMBER";
const MUL_NUMBER = "MUL_NUMBER";
const DIV_NUMBER = "DIV_NUMBER";

export const addNumberAction = (data) => ({ type: ADD_NUMBER, data });
export const subNumberAction = (data) => ({ type: SUB_NUMBER, data });
export const addNumberAsyncAction = (data) => ({ type: ADD_ASYNC, data });
export const subNumberAsyncAction = (data) => ({ type: SUB_ASYNC, data });
export const mulNumberAction = (data) => ({ type: MUL_NUMBER, data });
export const divNumberAction = (data) => ({ type: DIV_NUMBER, data });

function* increaseSaga(state) {
  yield delay(1000); // 1초를 기다립니다.
  yield put(addNumberAction(state.data)); // put은 특정 액션을 디스패치 해줍니다.
}
function* decreaseSaga(state) {
  yield delay(1000); // 1초를 기다립니다.
  yield put(subNumberAction(state.data)); // put은 특정 액션을 디스패치 해줍니다.
}

export function* numberSaga() {
  yield takeEvery(ADD_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
  yield takeLatest(SUB_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        number: state.number + action.data,
      };
    case SUB_NUMBER:
      return {
        ...state,
        number: state.number - action.data,
      };
    case MUL_NUMBER:
      return {
        ...state,
        number: state.number * action.data,
      };
    case DIV_NUMBER:
      return {
        ...state,
        number: state.number / action.data,
      };
    default:
      return state;
  }
};

export default reducer;
