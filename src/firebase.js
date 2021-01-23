import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCOxfvLHyZ2HN5kNeoUfHFpjTHoqIcBkNU",
    authDomain: "slack-clone-4c0a2.firebaseapp.com",
    projectId: "slack-clone-4c0a2",
    storageBucket: "slack-clone-4c0a2.appspot.com",
    messagingSenderId: "811197843782",
    appId: "1:811197843782:web:379d3a4516695e78653d47",
    measurementId: "G-87X6LP88J1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;