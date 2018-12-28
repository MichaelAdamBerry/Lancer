import { auth, firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";
import { FETCH_EXPENSES } from "./types";

export const fetchUser = () => async dispatch => {
  const user = auth.currentUser;
  dispatch({
    type: "FETCH_USER",
    payload: user
  });
};

export const fetchUID = () => async dispatch => {
  dispatch({
    type: "FETCH_UID",
    payload: auth.currentUser.uid
  });
};

export const fetchExpenses = () => async dispatch => {
  console.log("fetchExpenses fires from action.js");
  const uid = auth.currentUser.uid;
  await firestore.collection(`users/${uid}/expenses`).onSnapshot(snapshot => {
    console.log(snapshot.docs.map(collectIdsAndDocs));
    const expenses = snapshot.docs.map(collectIdsAndDocs);
    dispatch({
      type: FETCH_EXPENSES,
      payload: expenses
    });
  });
};

export const removeExpense = id => async dispatch => {
  await firestore.collection(``);
};
