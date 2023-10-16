var firebaseConfig = {
    apiKey: "AIzaSyABd14tgIt2wYDN8Jlel4zM_DJGMsZ2AXY",
    authDomain: "hammer-86459.firebaseapp.com",
    projectId: "hammer-86459",
    storageBucket: "hammer-86459.appspot.com",
    messagingSenderId: "1011722416302",
    appId: "1:1011722416302:web:a80a6f801f9c2fe3c43d3f",
    measurementId: "G-T036KMLNTT"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database()


function saveData() {
    console.log("I'm Clicked and Saved")
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var html = document.getElementById('html').value;
    var css = document.getElementById('css').value;
    var javascript = document.getElementById('javascript').value;

    database.ref('users/'+ fullName).set({
        fullName: fullName,
        email: email,
        password: password,
        html : html,
        css: css,
        javascript: javascript
    })
}
