(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyALZUxaueJh1YVfofLW2FRjOswf7WLeKYQ",
  authDomain: "bdschoolchat.firebaseapp.com",
  databaseURL: "https://bdschoolchat-default-rtdb.firebaseio.com",
  projectId: "bdschoolchat",
  storageBucket: "bdschoolchat.appspot.com",
  messagingSenderId: "288265393950",
  appId: "1:288265393950:web:9d1bb7d7c8e04452129b0f"

    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());
