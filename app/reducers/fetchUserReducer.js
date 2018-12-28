export const fetchUserReducer = (state = {}, action) => {
  if (action.type == "FETCH_USER") {
    return action.payload;
  } else {
    return state;
  }
};
