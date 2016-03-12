var bio = {
	"name": "Jooyong Chung",
	"role": "Web Developer",
	"contact": {
		"mobile": "111-111-1337",
		"email": "jychung0801@gmail.com",
		"github": "KingArpy",
		"location": "Bellingham, WA"
	},
	"welcomeMessage": "Welcome to my resume! (FEND Project 2)",
	"skills": ["fight crime", "play video games", "html/css/javascript"],
	"biopic": "images/fry.jpg"
};

var education = {
	"schools": [
		{
			"name": "Western Washington University",
			"location": "Bellingham, WA",
			"degree": "No Degree",
			"majors": "n/a",
			"dates": "2 years",
			"url": "http://www.wwu.edu/"
		},
		{
			"name": "Whatcom Community College",
			"location": "Bellingham, WA",
			"degree": "No Degree",
			"majors": "n/a",
			"dates": "2 quarters",
			"url": "http://www.whatcom.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Development",
			"school": "Udacity",
			"dates": "1 Month",
			"url": "http://www.udacity.com/"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "fake employer 1",
			"title": "fake title 1",
			"location": "Seoul, South Korea",
			"dates": "1 year",
			"description": "This is a first fake job description necessary to complete the project. Location is Seoul, South Korea."
		},
		{
			"employer": "fake employer 2",
			"title": "fake title 2",
			"location": "Saint Louis, MO",
			"dates": "6 months",
			"description": "This is a second fake job description. Location is based on Saint Louis."
		}
	]
};

var projects = {
	"projects": [{
			"title": "Project 1",
			"dates": "February 2016",
			"description": "This is the first Front-end Web Development project that I have completed.\
			 It invloved coding grid-layout html and styling it with css. It involved responsive design where webpage changes as the browser\
			  width changes. Finally, it also involved reducing page weight by optimizing images and setting sources for img tags",
			"images": "images/respimg/project1-medium.jpg"
		},{
			"title": "Fake Project",
			"dates": "Year 2050",
			"description": "This is a fake project that I created in order to practice using loops and jquerty to manipulate DOM",
			"images": "images/respimg/fake-medium.jpg"
		}]
};


//Display functions
//Bio
bio.display = function() {
var formatRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formatRole);
var formatName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formatName);

var formatMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formatEmail = HTMLemail.replace("%data%", bio.contact.email);
var formatGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formatLocation = HTMLlocation.replace("%data%", bio.contact.location);
var contactsArray = [formatMobile, formatEmail, formatGithub, formatLocation];
for (var i=0; i<contactsArray.length; i++) {
	$("#topContacts").append(contactsArray[i]);
}
for (var i=0; i<contactsArray.length; i++) {
	$("#footerContacts").append(contactsArray[i]);
}

$("#header").append(HTMLbioPic.replace("%data%", "images/fry.jpg"));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#header").append(HTMLskillsStart);
for (var i=0; i<bio.skills.length; i++) {
	var formatSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formatSkill);
}
};

bio.display();

//Work
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var employerTitle = formatEmployer + formatTitle;
		$(".work-entry:last").append(employerTitle);

		var formatDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formatDates);
		var formatLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formatLocation);
		var formatDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formatDescription);
	}
};
work.display();

//Projects
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formatTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formatTitle);
		var formatDates = HTMLprojectDates.replace("%data", projects.projects[project].dates);
		$(".project-entry:last").append(formatDates);
		var formatDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formatDescription);
		var formatImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formatImages);
	}
};
projects.display();

//Education
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formatName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formatDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var nameDegree = formatName + formatDegree;
		nameDegree = nameDegree.replace("#", education.schools[school].url);
		$(".education-entry:last").append(nameDegree);
		var formatDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formatDates);
		var formatMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formatMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (school in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var titleSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
		titleSchool = titleSchool.replace("#", education.onlineCourses[school].url);
		$(".education-entry:last").append(titleSchool);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[school].url).replace("#", education.onlineCourses[school].url));
	}
};
education.display();

//Where I lived
$("#mapDiv").append(googleMap);



// Custom works and JS/CSS magic <-------------------------------------------------------------------------------------------------------------------->

//Additional Elements

//Magic
$("head").append("<link href='https://fonts.googleapis.com/css?family=PT+Serif' rel='stylesheet' type='text/css'>");
$("head").append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">');
var username = "username";
function setId() {
	username = $("#id").val();
}
function logInButton() {
	username = $("#id").val();
	secondPage();
}


//Function on start
function onStart() {
	//remove elements
	var removeArray = ["#header", "#workExperience", "#projects", "#education", "#mapDiv", "#lets-connect"];
	for (var i=0;i<removeArray.length;i++) {
		$(removeArray[i]).remove();
	}
	$("#main").children("div").remove();

	//add elements
	var addElement = {
		"appendMain": ["<div class='sideMargin'></div>", "<div id='logIn'></div>", "<div class='sideMargin'></div>"],
		"appendLogIn": ["<div id='classified'></div>", "<div id='idPass'></div>"],
		"appendClassified": ["<div class='borderRed'><h1>CLASSIFIED</h1></div>", "<h2>TOP SECRET</h2>"],
		"appendIdPass": ["<h3>Log in</h3>", "<input id='id' type='text' value='ID'>", "<input id='password' type='text' value='Password'>", "<button onClick='logInButton()'>Log in</button>"]
	};

	for (var i=0; i<addElement.appendMain.length; i++) {
		$("#main").append(addElement.appendMain[i]);
	}
	for (var i=0; i<addElement.appendLogIn.length; i++) {
		$("#logIn").append(addElement.appendLogIn[i]);
	}
	for (var i=0; i<addElement.appendClassified.length; i++) {
		$("#classified").append(addElement.appendClassified[i]);
	}
	for (var i=0; i<addElement.appendIdPass.length; i++) {
		$("#idPass").append(addElement.appendIdPass[i]);
	}

	//styling
	$(".sideMargin").css("width", "10%");
	$("#logIn").css("width", "80%");
	var height100 = ["html", "body", "#main", ".sideMargin", "#logIn"];
	for (var i=0;i<height100.length;i++) {
		$(height100[i]).css("height", "100%");
	}
	$("#main").css("display", "flex");
	$("#main").css("flex-wrap", "nowrap");
	$("body").css("background", "#222");
	$(".borderRed").children("h1").css("color", "#C30000");
	$("#classified").children("h2").css("color", "#989898");
	$("#classified").css("text-align", "center");
	$("#classified").css("margin-top", "100px");
	$(".borderRed").children("h1").css("border", "2px solid #C30000")
	$("#classified").children("h2").css("font-size", "35px");
	$("#idPass").css("text-align", "center");
	$("#idPass").children("h3").css("color", "#E4CD1B");
	$("body").css("font-family", "'PT Serif', serif");
	var idCss = ["display", "block", "margin", "auto", "background", "#dcdcdc", "border", "none", "width", "200px", "height", "30px", "margin-top", "5px"];
	for (var i=0;i<idCss.length;i+= 2) {
		$("#id").css(idCss[i],idCss[i+1]);
		$("#password").css(idCss[i],idCss[i+1]);
	}
	var buttonCss = ["margin-top", "10px", "background", "rgb(255, 242, 141)", "border", "none", "width", "80px", "height", "30px", "font-weight", "bold", "color", "#000DBB"];
	for (var i=0;i<buttonCss.length;i+= 2) {
		$("#password").siblings("button").css(buttonCss[i],buttonCss[i+1]);
	}
}
onStart();
//Second Page Function
function secondPage() {
	$("#main").children().remove();
	$("#main").append('<i class="fa fa-folder-o" style="display: none"><br><span id="iconSpan">Do not open</span></i>');
	var iconStyle = ["color", "white", "margin", "auto", "font-size", "3em", "text-align", "center"];
	for (var i=0; i<iconStyle.length; i+= 2) {
		$("#main").children("i").css(iconStyle[i], iconStyle[i+1]);
	}
	var headerUsername = "<p id='headerId'> Welcome Agent: '" + username + "'<br><span id='pSpan'>FIB#: A09BC79Z</span><br><a href='index.html'>Disconnect</a></p>";
	$("#main").prepend(headerUsername);
	var usernameStyle = ["font-size", "14px", "color", "yellow", "position", "absolute", "display", "block", "text-align", "right", "width", "100%", "right", "5px"];
	for (var i=0;i<usernameStyle.length;i+=2) {
		$("#main").children("p").css(usernameStyle[i], usernameStyle[i+1]);
	}
	$("#main").find("#pSpan").css("color", "red");
	$("#pSpan").siblings("a").css("margin-top", "0px");
	$("#main").find("#iconSpan").css("font-size", "25px");
	$("#main").find("#iconSpan").css("padding", "0px");
	$("#main").children("i").fadeIn("slow");
	$("#main").children("i").hover(
	function() {
		$(this).css("background", "#67160E");
	},
	function() {
		$(this).css("background", "");
	}
	);
	$("#main").children("i").click(thirdPage);
}

function thirdPage() {
	$("#main").children("i").remove();
	
}