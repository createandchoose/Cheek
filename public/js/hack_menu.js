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
    this.getdata2();
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
      var tracks_div=document.getElementById('tracks');
      tracks.innerHTML="";
      let i = 0;
while (i < 3) {
      var data=snapshot.val();
      i++;
}
      console.log(data);


      for(let[key,value] of Object.entries(data)){
        
        tracks_div.innerHTML="<div class='col-sm-4 mt-2 mb-1 '>"+
        "<div class='card'  id='"+key+"' onclick='submit(this.id)'>"+
        "<img src='"+value.imageURL+"' class='clients-img aos-init aos-animate''>"+
        "<div class='card-body'><p class='card-text-bold'>"+value.text+"</p>"+
     
     
        "</div></div></div>"+tracks_div.innerHTML;


}
    
    });
}






function getdata2(){
  firebase.database().ref('checkpoints/').once('value').then(function(snapshot){
    var checkpoints_div=document.getElementById('checkpoints');
    checkpoints.innerHTML="";

    var data=snapshot.val();
    console.log(data);

    for(let[key,value] of Object.entries(data)){
     
    checkpoints_div.innerHTML="<div class='col-sm-4 mt-2 mb-1 align-items-center'>"+
     "<div class='card' >"+
     "<img src='"+value.imageURL+"' class='clients-img1 align-items-center aos-init aos-animate''>"+
     "<div class='card-body'><p class='card-text'>"+value.text+"</p>"+
     "<p class='card-text-small'>"+value.description+"</p>"+
      "<p class='card-text'>"+value.date+"</p>"+

     "</div></div></div>"+checkpoints_div.innerHTML;


}
  
  });
}

function submit(){
	window.open('./user_stream.html');
  }