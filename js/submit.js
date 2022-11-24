const firebaseConfig = {

	apiKey: "AIzaSyCRRohu86ty2HMDfoaNyj3YoCx6DWs7Y6M",
	authDomain: "cheek-d4b6d.firebaseapp.com",
	databaseURL: "https://cheek-d4b6d-default-rtdb.firebaseio.com",
	projectId: "cheek-d4b6d",
	storageBucket: "cheek-d4b6d.appspot.com",
	messagingSenderId: "272145172180",
	appId: "1:272145172180:web:37db41f797ecdf81ab9d41"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");


document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
 e.preventDefault();

 var name = getElementVal("name");
 var numberid = getElementVal("numberid");
 var category = getElementVal("category");
 

 saveMessages(name, numberid, category);

 document.querySelector(".alert").style.display = "block";

 setTimeout(() => {
	document.querySelector(".alert").style.display = "none";
 }, 3000);


}

const saveMessages = (name, numberid, category) => {
 
 var newContactForm = contactFormDB.push();

 var newContactForm = firebase.database().ref("contactForm").child(category + '/' + numberid);

 newContactForm.set({
	name: name,
	numberid: numberid,
	category: category,
 });
};


const getElementVal = (id) => {
 return document.getElementById(id).value;
};
