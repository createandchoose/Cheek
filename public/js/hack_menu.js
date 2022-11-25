var firebaseConfig = {
	apiKey: "AIzaSyCRRohu86ty2HMDfoaNyj3YoCx6DWs7Y6M",
	authDomain: "cheek-d4b6d.firebaseapp.com",
	databaseURL: "https://cheek-d4b6d-default-rtdb.firebaseio.com",
	projectId: "cheek-d4b6d",
	storageBucket: "cheek-d4b6d.appspot.com",
	messagingSenderId: "272145172180",
	appId: "1:272145172180:web:37db41f797ecdf81ab9d41"
  };
  firebase.initializeApp(firebaseConfig);

window.onload=function(){
    this.getdata();
    this.getdata1();
}


function getdata(){
    firebase.database().ref('hackaton/').limitToLast(1).once('value').then(function(snapshot){
      var posts_div=document.getElementById('posts');
      posts.innerHTML="";

      var data=snapshot.val();
      console.log(data);

      for(let[key,value] of Object.entries(data)){
         
         posts_div.innerHTML="<div class='mt-2 mb-1 align-items-center'>"+
         "<div class='card' >"+
         "<img src='"+value.imageURL+"' class='clients-img1 align-items-center aos-init aos-animate''>"+
         "<div class='card-body'><p class='card-text'>"+value.text+"</p>"+
         "<p class='card-text-small'>"+value.description+"</p>"+
        "<p class='card-text'>"+value.date+"</p>"+

         "</div></div></div>"+posts_div.innerHTML;


}
    
    });
}




function getdata1(){
    firebase.database().ref('tracks/').limitToLast(3).once('value').then(function(snapshot){
      //get your posts div
      var tracks_div=document.getElementById('tracks');
      //remove all remaining data in that div
      tracks.innerHTML="";
      //get data from firebase
      let i = 0;
while (i < 3) {
      var data=snapshot.val();
      i++;
}
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database

      for(let[key,value] of Object.entries(data)){
        
        tracks_div.innerHTML="<div class='col-sm-4 mt-2 mb-1 '>"+
        "<div class='card'  id='"+key+"' onclick='getdataModal(this.id)'>"+
        "<img src='"+value.imageURL+"' class='clients-img aos-init aos-animate''>"+
        "<div class='card-body'><p class='card-text-bold'>"+value.text+"</p>"+
     
     
        "</div></div></div>"+tracks_div.innerHTML;


}
    
    });
}

function getdataModal(postId){
    firebase.database().ref('tracks/' + postId).once('value').then(function(snapshot){
  
       modalCon.innerHTML="";
       var data=snapshot.val();
       console.log(data);
       
          modalCon.innerHTML="<div class=' mt-2 mb-1 align-items-center'>"+
          "<div class='card' >"+
          "<div class='card-body'><p class='card-text-big'>"+snapshot.val().text+"</p>"+
          "<img src='"+snapshot.val().imageURL+"'class='clients-img aos-init aos-animate ''>"+
          
          "<p class='card-text-small'>"+snapshot.val().description+"</p>"+
          "<button class='btn btn-success'  onclick='delete_post(this.id)'>Удалить</button>"+
          "</div></div></div>"+modalCon.innerHTML;


       
    
    });
}

var modal = document.getElementById("myModal");
var modalCon = document.getElementById("modal-content");
var span = document.getElementsByClassName("close")[0];




tracks.onclick = function() {
  modal.style.display = "block";

  
}


span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
    }
  }