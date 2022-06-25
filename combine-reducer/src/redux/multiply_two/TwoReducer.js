import { MULTIPLY_TWO } from "./TwoType";

const initialState = {
  val_two: 1,
};

const TwoReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case MULTIPLY_TWO:
      return {
        ...state,
        val_two: state.val_two * 2,
      };

    default:
      return state;
  }
};

export default TwoReducer;
