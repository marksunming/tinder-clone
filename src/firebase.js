import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKuYkEB1vrAgxWjZ6yYcIVHIgRhFLR1do",
    authDomain: "tinder-clone-71fad.firebaseapp.com",
    databaseURL: "https://tinder-clone-71fad.firebaseio.com",
    projectId: "tinder-clone-71fad",
    storageBucket: "tinder-clone-71fad.appspot.com",
    messagingSenderId: "860576022960",
    appId: "1:860576022960:web:6c65b0a6ac3390a0d95675",
    measurementId: "G-X8D6C3TXT9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;