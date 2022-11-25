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

var contactFormDB = firebase.database().ref("points");


document.getElementById("pointForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var teamid = getElementVal("teamid");
  var team = getElementVal("team");
  var points = getElementVal("points");
  var category = getElementVal("category");
  

  saveMessages(team, points, category, teamid);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);


}

const saveMessages = (team, points, category, teamid) => {
  
  var newContactForm = contactFormDB.push();

  var newContactForm = firebase.database().ref("points").child(teamid);

  newContactForm.set({
    label: team,
    value: points,
    checkpoint: category,
    teamid: teamid,
  });


};


const getElementVal = (id) => {
  return document.getElementById(id).value;
};
