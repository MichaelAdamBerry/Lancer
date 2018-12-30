import { combineReducers } from "redux";
import { fetchUserReducer } from "./fetchUserReducer";
import { fetchUIDReducer } from "./fetchUIDReducer";
import expenses from "./fetchExpensesReducer";
import clients from "./fetchClientsReducer";
import jobs from "./fetchJobsReducer";
import logo from "./fetchLogoReducer";
export default combineReducers({
  jobs,
  clients,
  expenses,
  fetchUserReducer,
  fetchUIDReducer,
  logo
});
