import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/user";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/index";
import logger from "../Logger/MyLogger";
import { createWrapper } from "next-redux-wrapper";

/*
밑에 코드와 동일하게 작동한다. 필자는 combinreReducers를 굳이 안써도 된다는 생각이므로 그냥 합치도록 지원이 되기에
이렇게 작성하지 않음.
const combinedReducer = combineReducers({
    userReducer,
});

export const store = () => {
    configureStore({
        reducer: combineReducer,
        middleware: [logger, saga],
    })
};

*/

export const createStore = () => {
  const saga = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: [logger, saga],
  });
  saga.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(createStore);
