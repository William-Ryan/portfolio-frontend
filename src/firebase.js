import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAiDi587QdaVoa3fLdk5fXGNnY8C4rm3DA",
    authDomain: "portfolio-backend-e57d4.firebaseapp.com",
    databaseURL: "https://portfolio-backend-e57d4.firebaseio.com",
    projectId: "portfolio-backend-e57d4",
    storageBucket: "portfolio-backend-e57d4.appspot.com",
    messagingSenderId: "360152515468",
    appId: "1:360152515468:web:e58eb7bd07c952421bcca9",
    measurementId: "G-XRZ3WM192E"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase
