
const firebaseConfig = {
      apiKey: "AIzaSyDsMY2jXMoEL-TwREMg5w3I6sTSyrczV94",
      authDomain: "kwitter-61335.firebaseapp.com",
      databaseURL: "https://kwitter-61335-default-rtdb.firebaseio.com",
      projectId: "kwitter-61335",
      storageBucket: "kwitter-61335.appspot.com",
      messagingSenderId: "766371504519",
      appId: "1:766371504519:web:9413ec895ec8dcb228f322"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
