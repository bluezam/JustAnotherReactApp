import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCE8Q7uCDmHmd141pWSmluVnQXdkQX8LA4",
  authDomain: "reactfirebasemarket.firebaseapp.com",
  databaseURL: "https://reactfirebasemarket.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
