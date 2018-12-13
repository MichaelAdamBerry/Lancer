import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCCswTQlve2qG_OX_HhllnM6DD2zyjE6ME",
  authDomain: "lancer-b09f4.firebaseapp.com",
  databaseURL: "https://lancer-b09f4.firebaseio.com",
  projectId: "lancer-b09f4",
  storageBucket: "lancer-b09f4.appspot.com",
  messagingSenderId: "210163567430"
};

firebase.initializeApp(config);
export default firebase;
