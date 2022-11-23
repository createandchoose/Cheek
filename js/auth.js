var firebaseConfig = {
    apiKey: "AIzaSyCRRohu86ty2HMDfoaNyj3YoCx6DWs7Y6M",
    authDomain: "cheek-d4b6d.firebaseapp.com",
    databaseURL: "https://cheek-d4b6d-default-rtdb.firebaseio.com",
    projectId: "cheek-d4b6d",
    storageBucket: "cheek-d4b6d.appspot.com",
    messagingSenderId: "272145172180",
    appId: "1:272145172180:web:37db41f797ecdf81ab9d41"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

function register() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value


    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Заполните все поля')
        return
    }
    if (validate_field(full_name) == false) {
        alert('Заполните все поля')
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                email: email,
                full_name: full_name,
                last_login: Date.now()
            }

            database_ref.child('users/' + user.uid).set(user_data)

            alert('Аккаунт создан')
            window.open('index.html');
        })
        .catch(function(error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}

function login() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Заполните все поля')
        return
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                last_login: Date.now()
            }

            database_ref.child('users/' + user.uid).update(user_data)

            // DOne
            alert('Успешный вход')
            window.open('index.html');

        })
        .catch(function(error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}




function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}