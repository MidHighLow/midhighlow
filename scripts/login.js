// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDycjcgGGbcemaU5sUpKi2oqnsKnuX1i64",
  authDomain: "midhighlow-41e8f.firebaseapp.com",
  projectId: "midhighlow-41e8f",
  storageBucket: "midhighlow-41e8f.appspot.com",
  messagingSenderId: "44217593113",
  appId: "1:44217593113:web:b171faf2515f864d49a988"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Show specific view based on authentication status
function showGame() {
    window.location.href = "../gameplay/index.html";
}

// Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User logged in: ', userCredential.user);
            showGame();
        })
        .catch((error) => {
            console.error('Error during login: ', error);
            alert('Invalid credentials. Please try again.');
        });
});

// Add 'Go to Signup' button functionality
document.getElementById('goToSignup').addEventListener('click', function() {
    window.location.href = "../signup/index.html";
});
