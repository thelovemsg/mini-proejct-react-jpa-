import { MULTIPLY_FIVE } from "./FiveType";

const initialState = {
  val_five: 1,
};

const FiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case MULTIPLY_FIVE:
      return {
        ...state,
        val_five: state.val_five * 5,
      };

    default:
      return state;
  }
};

export default FiveReducer;
