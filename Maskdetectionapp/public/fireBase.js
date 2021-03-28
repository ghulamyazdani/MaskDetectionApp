var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCuBCg4-tZNtyHUVFBgwu31gHUqDK5vWv8",
    authDomain: "maskdetection-app.firebaseapp.com",
    projectId: "maskdetection-app",
    storageBucket: "maskdetection-app.appspot.com",
    messagingSenderId: "194741526529",
    appId: "1:194741526529:web:340dde0b4874c4379ca000"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


