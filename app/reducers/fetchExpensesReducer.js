import { FETCH_EXPENSES } from "../actions/types";

const expenses = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXPENSES:
      return action.payload;
    default:
      return state;
  }
};

export default expenses;
