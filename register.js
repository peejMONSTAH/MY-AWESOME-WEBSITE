import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGdxGvVC7S1syDQBl8oud6TJEhDKwsqhY",
  authDomain: "panlasang-noypi-3aeed.firebaseapp.com",
  projectId: "panlasang-noypi-3aeed",
  storageBucket: "panlasang-noypi-3aeed.firebasestorage.app",
  messagingSenderId: "752308349397",
  appId: "1:752308349397:web:b47b88be43295e412a755c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inputs


// submit button

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
   event.preventDefault

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    alert("Creating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})