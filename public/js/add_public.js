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

	  
	  var storageRef=firebase.storage().ref('hackaton/'+imageName);

	  var uploadTask=storageRef.put(image);

	  uploadTask.on('state_changed',function(snapshot){
			 var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
			 console.log("upload is "+progress+" done");
	  },function(error){
		 console.log(error.message);
	  },function(){
			uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
				
				
				firebase.database().ref('hackaton/').push().set({
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
	  firebase.database().ref('hackaton/').once('value').then(function(snapshot){
		 var posts_div=document.getElementById('posts');
		 posts.innerHTML="";
 
		 var data=snapshot.val();
		 console.log(data);
 
		 for(let[key,value] of Object.entries(data)){
			
			posts_div.innerHTML="<div class='col-sm-4 mt-2 mb-1 '>"+
			"<div class='card'  id='"+key+"' onclick='getdataModal(this.id)'>"+
			"<img src='"+value.imageURL+"' class='clients-img aos-init aos-animate''>"+
			"<div class='card-body'><p class='card-text'>"+value.text+"</p>"+
			"<button class='btn btn-danger' id='"+key+"' onclick='delete_post(this.id)'>Удалить</button><p class='card-text'>"+value.date+"</p>"+
		
			"</div></div></div>"+posts_div.innerHTML;
 
 
 }
	  
	  });
 }
 
 
 function getdataModal(postId){
	  firebase.database().ref('hackaton/' + postId).once('value').then(function(snapshot){
	
		 modalCon.innerHTML="";
		 var data=snapshot.val();
		 console.log(data);
		 
			modalCon.innerHTML="<div class=' mt-2 mb-1 align-items-center'>"+
			"<div class='card' >"+
			"<div class='card-body'><p class='card-text-big'>"+snapshot.val().text+"</p>"+
			"<img src='"+snapshot.val().imageURL+"'class='clients-img aos-init aos-animate ''>"+
			
			"<p class='card-text-small'>"+snapshot.val().description+"</p>"+
			"<button class='btn btn-danger'  onclick='delete_post(this.id)'>Удалить</button>"+
	
			"</div></div></div>"+modalCon.innerHTML;
 
  
		 
	  
	  });
 }
 
 function delete_post(key){
	firebase.database().ref('hackaton/'+key).remove();
	getdata();

}

 var modal = document.getElementById("myModal");
 var modalCon = document.getElementById("modal-content");
 var span = document.getElementsByClassName("close")[0];
 
 
 
 
 posts.onclick = function() {
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
 
 
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
		  var uid = user.uid;
		  console.log(uid);
		} else {
		}
	 });


	 