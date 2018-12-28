export const fetchUIDReducer = (state = {}, action) => {
  if (action.type == "FETCH_UID") {
    return action.payload;
  } else {
    return state;
  }
};
