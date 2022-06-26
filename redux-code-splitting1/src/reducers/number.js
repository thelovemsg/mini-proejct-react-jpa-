const initialState = {
  number: 0,
};

const ADD_NUMBER = "ADD_NUMBER";
const SUB_NUMBER = "SUB_NUMBER";
const MUL_NUMBER = "MUL_NUMBER";
const DIV_NUMBER = "DIV_NUMBER";

export const addNumberAction = (data) => {
  return {
    type: ADD_NUMBER,
    data,
  };
};

export const subNumberAction = (data) => {
  return {
    type: SUB_NUMBER,
    data,
  };
};
export const mulNumberAction = (data) => ({ type: MUL_NUMBER, data });

export const mulNumberActionThunk = (data) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(mulNumberAction(data));
  };
};

export const mulNumberAsync = () => (dispatch) => {
  setTimeout(() => dispatch(mulNumberActionThunk(2)), 1000);
};

export const divNumberAction = (data) => {
  return {
    type: DIV_NUMBER,
    data,
  };
};

export const selectNumber = (state) => {
  return state.number.number;
};

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
