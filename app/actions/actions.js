import { auth, firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";
import { FETCH_EXPENSES, FETCH_CLIENTS } from "./types";

export const removeExpense = expenseID => async dispatch => {
  const uid = auth.currentUser.uid;
  await firestore.doc(`users/${uid}/expenses/${expenseID}`).delete();
};

export const removeClient = clientID => async dispatch => {
  const uid = auth.currentUser.uid;
  await firestore.doc(`users/${uid}/clients/${clientID}`).delete();
};

export const addExpense = expenseObj => async dispatch => {
  const uid = auth.currentUser.uid;
  const docRef = await firestore
    .collection(`users/${uid}/expenses`)
    .add(expenseObj);
  return docRef;
};

export const addClient = clientObj => async dispatch => {
  const uid = auth.currentUser.uid;
  const docRef = await firestore
    .collection(`users/${uid}/clients`)
    .add(clientObj);
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

export const fetchClients = () => async dispatch => {
  const uid = auth.currentUser.uid;
  await firestore.collection(`users/${uid}/clients`).onSnapshot(snapshot => {
    const clients = snapshot.docs.map(collectIdsAndDocs);
    console.log("action fetchClients returns clients: ", clients);
    dispatch({
      type: FETCH_CLIENTS,
      payload: clients
    });
  });
};
