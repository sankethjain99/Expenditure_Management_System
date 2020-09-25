import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyArt4wd3cqj2yMbd-2ihrxHyMetsNoU4co",
    authDomain: "expenditure-management-system.firebaseapp.com",
    databaseURL: "https://expenditure-management-system.firebaseio.com",
    projectId: "expenditure-management-system",
    storageBucket: "expenditure-management-system.appspot.com",
    messagingSenderId: "1070019928257",
    appId: "1:1070019928257:web:edb0bb1e1e8b5ff95f7440",
    measurementId: "G-8TY44QWSYH"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;