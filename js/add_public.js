var firebaseConfig = {
  apiKey: "AIzaSyCRRohu86ty2HMDfoaNyj3YoCx6DWs7Y6M",
  authDomain: "cheek-d4b6d.firebaseapp.com",
  databaseURL: "https://cheek-d4b6d-default-rtdb.firebaseio.com",
  projectId: "cheek-d4b6d",
  storageBucket: "cheek-d4b6d.appspot.com",
  messagingSenderId: "272145172180",
  appId: "1:272145172180:web:37db41f797ecdf81ab9d41"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function upload(){
	  //get your image
	  var image=document.getElementById('image').files[0];
	  //get your blog text
	  var post=document.getElementById('post').value;
	  var description=document.getElementById('description').value;
	  var date=document.getElementById('date').value;
	  //get image name
	  var imageName=image.name;
	  //firebase storage reference
	  //it is the path where your image will be stored
	  var storageRef=firebase.storage().ref('hackaton/'+imageName);
	  //upload image to selected storage reference
	  //make sure you pass image here
	  var uploadTask=storageRef.put(image);
	  //to get the state of image uploading....
	  uploadTask.on('state_changed',function(snapshot){
			 //get task progress by following code
			 var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
			 console.log("upload is "+progress+" done");
	  },function(error){
		 //handle error here
		 console.log(error.message);
	  },function(){
			//handle successfull upload here..
			uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
				//get your image download url here and upload it to databse
				//our path where data is stored ...push is used so that every post have unique id
				
				
				firebase.database().ref('hackaton/').push().set({
						text:post,
						description:description,
						date:date,
						imageURL:downloadURL
				},function(error){
					 if(error){
						  alert("Проблемы с соединением");
					 }else{
						  alert("Загружено");
						  //now reset your form
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
		 //get your posts div
		 var posts_div=document.getElementById('posts');
		 //remove all remaining data in that div
		 posts.innerHTML="";
		 //get data from firebase
 
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
		 //get your posts div
	
		 //remove all remaining data in that div
		 modalCon.innerHTML="";
		 //get data from firebase
		 var data=snapshot.val();
		 console.log(data);
		 //now pass this data to our posts div
		 //we have to pass our data to for loop to get one by one
		 //we are passing the key of that post to delete it from database
		 
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
 
 // Get the button that opens the modal
 
 
 
 // When the user clicks the button, open the modal 
 posts.onclick = function() {
	modal.style.display = "block";
  
	
 }
 
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
	  modal.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		 modal.style.display = "none";
	  }
	}
 
 
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
		  // User is signed in, see docs for a list of available properties
		  // https://firebase.google.com/docs/reference/js/firebase.User
		  var uid = user.uid;
		  console.log(uid);
		  // ...
		} else {
		  // User is signed out
		  // ...
		}
	 });