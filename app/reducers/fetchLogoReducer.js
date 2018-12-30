import { FETCH_LOGO } from "../actions/types";

const logo = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOGO:
      return action.payload;
    default:
      return state;
  }
};

export default logo;
