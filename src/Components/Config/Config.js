import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCorFWryS0c6lW4t6bqZgnwzGoybeS3Kw0",
    authDomain: "test-project-9b796.firebaseapp.com",
    projectId: "test-project-9b796",
    storageBucket: "test-project-9b796.appspot.com",
    messagingSenderId: "623379372978",
    appId: "1:623379372978:web:8ea716f924f20474b022ab"
};

firebase.initializeApp(firebaseConfig);

export default firebase;