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
			"degree": "none",
			"majors": "n/a",
			"dates": "2 years",
			"url": "http://www.wwu.edu/"
		},
		{
			"name": "Whatcom Community College",
			"location": "Bellingham, WA",
			"degree": "none",
			"majors": "n/a",
			"dates": "2 quarters",
			"url": "http://www.whatcom.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Development",
			"school": "Udacity",
			"date": "1 Month",
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
			"title": "project 1",
			"dates": "February 2016",
			"description": "This is the first Front-end Web Development project that I have completed",
			"images": "insert-image-url-here"
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
//Education
//Where I lived