import produce from "immer";

export const initialState = {
  loginHandling: false,
  loginDone: false,
  loginError: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = (data) => ({
  type: LOG_OUT_REQUEST,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return produce(state, (draft) => {
        draft.loginHandling = true;
      });
    case LOG_IN_SUCCESS:
      return produce(state, (draft) => {
        (draft.loginHandling = false), (draft.loginDone = true);
      });
    case LOG_IN_FAILURE:
      return produce(state, (draft) => {
        draft.loginHandling = false;
      });
    case LOG_OUT_REQUEST:
      return produce(state, (draft) => {
        draft.loginHandling = true;
      });
    case LOG_OUT_SUCCESS:
      return produce(state, (draft) => {
        draft.loginHandling = false;
        draft.loginDone = fasle;
      });
    case LOG_OUT_FAILURE:
      return produce(state, (draft) => {
        draft.loginHandling = false;
      });
    // return {
    //   ...state,
    //   loginHandling: false,
    // };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
