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
			"images": "images/project1.jpg"
		},{
			"title": "Fake Project",
			"dates": "Year 2050",
			"description": "This is a fake project that I created in order to practice using loops and jquerty to manipulate DOM",
			"images": "images/fake.jpg"
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

//extras
$("#main").prepend("<div id='buttonDiv'></div>");
$("#buttonDiv").append("<div id='width10left'></div>");
$("#buttonDiv").append("<div class='width80'></div>");
$("#buttonDiv").append("<div id='width10right'></div>");
$("#width10left").prepend("<button id='buttonLeft' onclick='moveLeft()'>&lt</button>");
$("#width10right").prepend("<button id='buttonRight' onclick='moveRight()'>&gt</button>");

function moveLeft() {
	var marginLeftValue = $("#header").css("margin-left");
	$("#header").css("margin-left", "calc(" + marginLeftValue + " + 100%)");
	if ($("#header").css("margin-left").replace("px","") > -500) {
	$("#buttonLeft").remove();
	}
}
function moveRight() {
	var marginLeftValue = $("#header").css("margin-left");
	$("#header").css("margin-left", "calc(" + marginLeftValue + " - 100%)");
	if ($("#header").css("margin-left").replace("px","") < -500) {
	$("#width10left").append("<button id='buttonLeft' onclick='moveLeft()'>&lt</button>");
	}
}
