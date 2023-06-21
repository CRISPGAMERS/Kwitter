// Your web app's Firebase configuration
var  firebaseConfig = {
      apiKey: "AIzaSyBi4Ks6blW_PZ6gie7dKeRN5lSEOlxpDDo",
      authDomain: "kwitter-aab46.firebaseapp.com",
      databaseURL: "https://kwitter-aab46-default-rtdb.firebaseio.com",
      projectId: "kwitter-aab46",
      storageBucket: "kwitter-aab46.appspot.com",
      messagingSenderId: "653225385564",
      appId: "1:653225385564:web:19d7ee866dcbe335775099"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME -"+ user_name +"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose :"adding room name "});
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name-"+Room_names);
row = "<div class = 'room_name' id = "+ Room_names + " onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();

function redirectToRoomName(name)
 {
        console.log(name);
         localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
 }
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.localStorage = "kwitter.html";
}