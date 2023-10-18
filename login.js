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

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('User logged in: ' + user.email);

            // Redirect to home.html after successful login
            window.location.href = 'home.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error: ' + errorMessage);
        });
});
