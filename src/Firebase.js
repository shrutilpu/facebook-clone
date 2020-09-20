import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCy_iujr8wN-5JV7GzTD5kcU3YVkyD3z7U",
    authDomain: "facebook-clone-70aa5.firebaseapp.com",
    databaseURL: "https://facebook-clone-70aa5.firebaseio.com",
    projectId: "facebook-clone-70aa5",
    storageBucket: "facebook-clone-70aa5.appspot.com",
    messagingSenderId: "286625203852",
    appId: "1:286625203852:web:0f1d43d2569a0d1cf1dda9",
    measurementId: "G-CRWP64V3B7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;