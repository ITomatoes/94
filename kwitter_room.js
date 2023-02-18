
const firebaseConfig = {
      apiKey: "AIzaSyDfbvVexRTa4xRTwaqqFqSxc6SJurENav4",
      authDomain: "chatweb-94a18.firebaseapp.com",
      projectId: "chatweb-94a18",
      storageBucket: "chatweb-94a18.appspot.com",
      messagingSenderId: "627933725800",
      appId: "1:627933725800:web:5ae1c95ccf536f92d667dd",
      measurementId: "G-Q5V597HMV9"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
  
    document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
    
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding Room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          console.log("Roomname= " + Room_names);
          row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
          document.getElementById("output").innerHTML+=row;
          });});}
    getData();
    
    function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
    } 
    
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
    