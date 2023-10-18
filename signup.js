const firebaseConfig = {
    apiKey: "AIzaSyBeZZ6wAh59cyLiLJsb6J9aPRqA8YaKP2Q",
    authDomain: "final-74eec.firebaseapp.com",
    projectId: "final-74eec",
    storageBucket: "final-74eec.appspot.com",
    messagingSenderId: "960312814285",
    appId: "1:960312814285:web:64c2f98fde35e4dd8b1784"
  };
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const signupButton = document.getElementById('signupButton');
signupButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('User signed up: ' + user.email);

            // Redirect to login.html after successful signup
            window.location.href = 'login.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error: ' + errorMessage);
        });
});

