const initialState = {
  add100: 0,
};

const ADD_100 = "ADD_100";

export const add100Action = () => {
  return {
    type: ADD_100,
  };
};

export const selectAdd100 = (state) => {
  return state.add100.add100;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_100:
      return {
        ...state,
        add100: state.add100 + 100,
      };
    default:
      return state;
  }
};

export default reducer;
