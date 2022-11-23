 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
 import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

 const firebaseConfig = {
     apiKey: "AIzaSyCRRohu86ty2HMDfoaNyj3YoCx6DWs7Y6M",
     authDomain: "cheek-d4b6d.firebaseapp.com",
     databaseURL: "https://cheek-d4b6d-default-rtdb.firebaseio.com",
     projectId: "cheek-d4b6d",
     storageBucket: "cheek-d4b6d.appspot.com",
     messagingSenderId: "272145172180",
     appId: "1:272145172180:web:37db41f797ecdf81ab9d41"
 };

 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const auth = getAuth();

 login.addEventListener('click', (e) => {
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;

     signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;

             const dt = new Date();
             update(ref(database, 'users/' + user.uid), {
                 last_login: dt,
             })
             window.open('/admin_menu.html');
             alert('Авторизован успешно');
             // ...
         })
         .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;

             alert(errorMessage);
         });

 });

 const user = auth.currentUser;
 onAuthStateChanged(auth, (user) => {
     if (user) {

         const uid = user.uid;

     } else {

     }
 });