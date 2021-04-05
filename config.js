import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCh1ufMoCFCRJtXNW_LNoy8rhaHRCRSC4U",
    authDomain: "storyhub-749de.firebaseapp.com",
    projectId: "storyhub-749de",
    storageBucket: "storyhub-749de.appspot.com",
    messagingSenderId: "1015443937553",
    appId: "1:1015443937553:web:0698832815fe1c281454b0"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();