import { auth, firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";
import { FETCH_EXPENSES } from "./types";

export const removeExpense = expenseID => async dispatch => {
  const uid = auth.currentUser.uid;
  await firestore.doc(`users/${uid}/expenses/${expenseID}`).delete();
};

export const addExpense = expenseObj => async dispatch => {
  const uid = auth.currentUser.uid;
  const docRef = await firestore
    .collection(`users/${uid}/expenses`)
    .add(expenseObj);
  return docRef;
};

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
