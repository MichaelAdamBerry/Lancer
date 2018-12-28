import { combineReducers } from "redux";
import { fetchUserReducer } from "./fetchUserReducer";
import { fetchUIDReducer } from "./fetchUIDReducer";
import expenses from "./fetchExpensesReducer";
import clients from "./fetchClientsReducer";
export default combineReducers({
  clients,
  expenses,
  fetchUserReducer,
  fetchUIDReducer
});
