  
import firebase from 'firebase/app';
import "firebase/database";

let config = {
    apiKey: "AIzaSyAMBRzc1jxUTenCcLlURLMd0DDqYuxImnI",
    authDomain: "bastafundb.firebaseapp.com",
    databaseURL: "https://bastafundb-default-rtdb.firebaseio.com",
    projectId: "bastafundb",
    storageBucket: "bastafundb.appspot.com",
    messagingSenderId: "1096846202486",
    appId: "1:1096846202486:web:d8317de92def52b768f157"
};

firebase.initializeApp(config);

export default firebase.database();