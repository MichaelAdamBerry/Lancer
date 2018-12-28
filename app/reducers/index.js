import { combineReducers } from "redux";
import { fetchUserReducer } from "./fetchUserReducer";
import { fetchUIDReducer } from "./fetchUIDReducer";
import expenses from "./fetchExpensesReducer";
export default combineReducers({
  expenses,
  fetchUserReducer,
  fetchUIDReducer
});
