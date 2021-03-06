import { auth, firestore, storage } from "../firebase";
import { collectIdsAndDocs } from "../utilities";
import { FETCH_EXPENSES, FETCH_LOGO, FETCH_CLIENTS, FETCH_JOBS } from "./types";

//Delete Actions

export const removeExpense = expenseID => async dispatch => {
  const uid = auth.currentUser.uid;
  await firestore.doc(`users/${uid}/expenses/${expenseID}`).delete();
};

export const removeClient = clientID => async dispatch => {
  const uid = auth.currentUser.uid;
  await firestore.doc(`users/${uid}/clients/${clientID}`).delete();
};

export const removeJob = jobID => async dispatch => {
  const uid = auth.currentUser.uid;
  await firestore.doc(`users/${uid}/jobs/${jobID}`).delete();
};

//Add Actions
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

export const addJob = jobObj => async dispatch => {
  const uid = auth.currentUser.uid;
  const docRef = await firestore.collection(`users/${uid}/jobs`).add(jobObj);
  return docRef;
};

//Edit Actions
export const editClient = (id, clientObj) => async dispatch => {
  const uid = auth.currentUser.uid;
  console.log(
    `editExpense action fired, uid is ${uid} and docRef is users/${uid}/clients/${id}`
  );
  const docRef = await firestore
    .collection(`users/${uid}/clients`)
    .doc(id)
    .update({ ...clientObj });
  return docRef;
};

export const editExpense = (id, expenseObj) => async dispatch => {
  const uid = auth.currentUser.uid;
  console.log(
    `editExpense action fired, uid is ${uid} and docRef is users/${uid}/jobs/${id}`
  );
  const docRef = await firestore
    .collection(`users/${uid}/expenses`)
    .doc(id)
    .update({ ...expenseObj });
  return docRef;
};

export const editJob = (id, jobObj) => async dispatch => {
  const uid = auth.currentUser.uid;
  console.log(
    `editJob action fired, uid is ${uid} docRef is users/${uid}/jobs`
  );
  console.log(`jobId is ${id}`);

  const docRef = await firestore
    .collection(`users/${uid}/jobs`)
    .doc(id)
    .update({
      ...jobObj
    });
  return docRef;
};

//Query and Fetch Actions
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
    dispatch({
      type: FETCH_CLIENTS,
      payload: clients
    });
  });
};

export const fetchJobs = () => async dispatch => {
  const uid = auth.currentUser.uid;
  await firestore.collection(`users/${uid}/jobs`).onSnapshot(snapshot => {
    const jobs = snapshot.docs.map(collectIdsAndDocs);
    dispatch({
      type: FETCH_JOBS,
      payload: jobs
    });
  });
};

export const fetchLogo = () => async dispatch => {
  const url = await storage
    .ref("images/18552e84d4558a55c7e77a2aa96bd00c.svg")
    .getDownloadURL();
  dispatch({
    type: FETCH_LOGO,
    payload: url
  });
};
