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
			 "<button class='btn btn-danger'  onclick='submit(this.id)'>Учавствовать</button>"+

			 "</div></div></div>"+posts_div.innerHTML;
  
  
  }
		
		});
  }
  
  

  

  function submit(){
	window.open('form.html');
  }



