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
  function upload(){
	var image=document.getElementById('image').files[0];

	var post=document.getElementById('post').value;
	var description=document.getElementById('description').value;
	var date=document.getElementById('date').value;
	var imageName=image.name;

	
	var storageRef=firebase.storage().ref('checkpoints/'+imageName);

	var uploadTask=storageRef.put(image);

	uploadTask.on('state_changed',function(snapshot){
		   var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
		   console.log("upload is "+progress+" done");
	},function(error){
	   console.log(error.message);
	},function(){
		  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
			  
			  
			  firebase.database().ref('checkpoints/').push().set({
					  text:post,
					  description:description,
					  date:date,
					  imageURL:downloadURL,
					  

					  
			  },function(error){
				   if(error){
						alert("Проблемы с соединением");
				   }else{
						alert("Загружено");
						document.getElementById('post-form').reset();
						getdata();
				   }
			  });
		  });
	});

}


  window.onload=function(){
		this.getdata();
  }
  
  
  function getdata(){
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
  
  

  




