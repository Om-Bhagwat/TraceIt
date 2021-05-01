import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyAdbn7GEYRBx2lG_UXGdsHmzoTQzZQqAXE",
  authDomain: "supply-chain-management-90241.firebaseapp.com",
  projectId: "supply-chain-management-90241",
  storageBucket: "supply-chain-management-90241.appspot.com",
  messagingSenderId: "1006485893436",
  appId: "1:1006485893436:web:e1e954e1d8b6226fe3ee39"
};
  // Initialize Firebase
 const fire  = firebase.initializeApp(firebaseConfig);
 export default fire;