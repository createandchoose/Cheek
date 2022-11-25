

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
         "<div class='card' onclick='submit(this.id)'>"+
         "<img src='"+value.imageURL+"' class='clients-img1 align-items-center aos-init aos-animate''>"+
         "<div class='card-body'><p class='card-text'>"+value.text+"</p>"+
         "<p class='card-text-small'>"+value.description+"</p>"+
        "<p class='card-text'>"+value.date+"</p>"+

         "</div></div></div>"+checkpoints_div.innerHTML;


}
    
    });
}






function submit(){
	window.open('./stream.html');
  }

