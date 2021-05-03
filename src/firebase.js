import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

// The core Firebase JS SDK is always required and must be listed first 
// <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

// TODO: Add SDKs for Firebase products that you want to use
//   https://firebase.google.com/docs/web/setup#available-libraries 

  
  var firebaseConfig = {
    apiKey: "AIzaSyCJjVebCNN9lQVtrpIYGokrI_pgimYrmT4",
    authDomain: "projeto-teste-488bc.firebaseapp.com",
    projectId: "projeto-teste-488bc",
    storageBucket: "projeto-teste-488bc.appspot.com",
    messagingSenderId: "303049068873",
    appId: "1:303049068873:web:0be7d8e3c8b40ce0f70a98"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;