import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFcit6rCd71AFTFjaZDm37KY3WB1-Vq7g",
    authDomain: "netflix-clone-c1129.firebaseapp.com",
    projectId: "netflix-clone-c1129",
    storageBucket: "netflix-clone-c1129.appspot.com",
    messagingSenderId: "297579254986",
    appId: "1:297579254986:web:5b3829d1e16abf43a65033"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;