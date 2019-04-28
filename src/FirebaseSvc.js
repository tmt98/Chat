import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAIP8Ug0OqI5Rxv29HK8hMYTWNrgG8Yvoc",
    authDomain: "chat-app-87fd5.firebaseapp.com",
    databaseURL: "https://chat-app-87fd5.firebaseio.com",
    projectId: "chat-app-87fd5",
    storageBucket: "chat-app-87fd5.appspot.com",
    messagingSenderId: "1096520825590"
  };
// firebase.initializeApp(config);

class FirebaseSvc{
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      console.log("firebase apps already running...")
    }
  }
  login = async (user,success_callback,failed_callback) =>{
    console.log("logging in");

    const output = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(success_callback, failed_callback);
    console.log(firebase.auth().currentUser.uid)
  }
  
  createAccount = async (user) => {
    firebase.auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(function() {
        console.log("created user successfully. User email:" + user.email + " name:" + user.name);
        var userf = firebase.auth().currentUser;
        userf.updateProfile({ displayName: user.name})
        .then(function() {
          console.log("Updated displayName successfully. name:" + user.name);
          alert("User " + user.name + " was created successfully. Please login.");
        }, function(error) {
          console.warn("Error update displayName.");
        });
      }, function(error) {
        console.error("got error:" + typeof(error) + " string:" + error.message);
        alert("Create account failed. Error: "+error.message);
      });
  }
  
}
const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;