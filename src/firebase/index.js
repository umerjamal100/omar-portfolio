import firebase from "firebase/app";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyDTOYfV-yBp6ZDVBZQhEJQrBWqsLBFysII",
  authDomain: "my-project-1526073892948.firebaseapp.com",
  databaseURL: "https://my-project-1526073892948.firebaseio.com",
  projectId: "my-project-1526073892948",
  storageBucket: "my-project-1526073892948.appspot.com",
  messagingSenderId: "999639564017",
  appId: "1:999639564017:web:78d563b12edf1154a83350",
};

firebase.initializeApp(config);
const analytics = firebase.analytics();

export { firebase, analytics };
