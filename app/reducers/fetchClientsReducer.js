import { FETCH_CLIENTS } from "../actions/types";

const clients = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return action.payload;
    default:
      return state;
  }
};

export default clients;
