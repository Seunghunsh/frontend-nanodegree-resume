/*
This is empty on purpose! Your code to build the resume will go here.
 */



// var bio = {
// 	"name" : "James",
// 	"age" : 32,
// 	"role" : "Web Developer",
// 	"contacts": {
// 	  "mobile": "650333333",
// 	  "email": "lee@ddd.com",
// 	},
// 	"welcomeMessage": "lorem ipsum",
// 	"skills" : ["awkwardness", "programming"],
// 	"bioPic": "images/fry.jpg",
// };

// bar.city = "Mountain View";
// bar.email = "markandsh@gmail.com"

// var resume_json = $.getJSON("js/resume.json");
// var resume_json = (function() {
//   var json = null;
//   $.ajax({
//     'async': false,
//     'dataType': "json"
//     'success': function (data) {
//       json = data;
//     }
//   });
//   return json;
// })();
// var resume_json = require("js/resume.json");

var resume_json =
{
  "me": {
      "bio": {
	      "name": "Seunghun Lee",
	      "role": "Front End Developer",
		  "bioPic": "images/fry.jpg",
		  "welcomeMessage": "lorem ipsum",
	      "contacts": [
	        {
	          "mobile": "+1 6475709704",
	          "email": "markandsh@gmail.com",
	          "github": "https://github.com/Seunghunsh",
	          "twitter": "https://twitter.com/lifeartlee",
	          "location": "Toronto, ON, Canada"
	        }
	      ],
	      "welcomeMessage": "Front end web developer who likes working in teams with great life&communication skills.",
	      "skills": [
	        "React.js",
	        "Redux",
	        "Node.js",
	        "Javascript",
	        "HTML",
	        "CSS",
	        "Front end",
	        "Backend",
	        "Django",
	        "Python",
	        "Java",
	        "C++"
	      ],
	      "biopic": "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/12821536_1167450359962479_903788728259410674_n.jpg?oh=5ca327d04bc9f330f01fa32febc91ac4&oe=589D7C87",
	      "display": "function taking no parameters"
    },
    "education": {
      "schools": [
        {
          "name": "San Francisco State University",
          "location": "San Francisco, CA, USA",
          "degree": "Computer Science B.S",
          "dates": "July, 2016"
        }
      ],
      "display": "function taking no parameters"
    },
    "work": {
      "jobs": [
        {
          "employer": "Lokafy",
          "title": "Full Stack Developer intern",
          "location": "Toronto, Canada",
          "dates": "2016.08-2016.10",
          "description": "improved social login, booking functions, look of the website."
        },
        {
          "employer": "Google",
          "title": "Web Developer intern",
          "location": "Toronto, Canada",
          "dates": "2016.10-2016.12",
          "description": "improved Google Search Engine algorithm."
        }
      ],
      "display": "function taking no parameters"
    },
    "projects": {
      "projects": [
        {
          "title": "Restaurant Search app",
          "dates": "2016-06",
          "description": "Using several restaurant API services and sorting them to get personalized search resulsts for users. ",
          "images": ["www.surfsf.us", "www.Twitter.com", "www.facebook.com"]
        },
        {
          "title": "Twitter live stream",
          "dates": "2016-09",
          "description": "Using React.js, Node.js to display Twitter live stream on the website.",
          "images": ["www.surfsf.us", "www.Twitter.com", "www.facebook.com"]
        },
        {
          "title": "Movie filter",
          "dates": "2016-08",
          "description": "Using several movie info API services and sorting them to get personalized serach results.",
          "images": ["www.surfsf.us", "www.Twitter.com", "www.facebook.com"]
        },
        {
          "title": "E-commerce",
          "dates": "2016-07",
          "description": "Built E-commerce website from the scratch using python, django framework.",
          "images": ["www.surfsf.us", "www.Twitter.com", "www.facebook.com"]
        }
      ],
      "display": "function taking no parameters"
    }
  }
}

function displayWork() {
	var formattedName = HTMLheaderName.replace("%data%","Seunghun Lee");
	var formattedRole = HTMLheaderRole.replace("%data%","Front end developer");
	var bioPic = HTMLbioPic.replace("%data%", resume_json.me.bio.bioPic);
	var welcomeMessage = HTMLwelcomeMsg.replace("%data%", resume_json.me.bio.welcomeMessage);

	$("#header").append(formattedName, formattedRole, bioPic, welcomeMessage);


	if(resume_json.me.bio.skills[0].length > 0) {
	  $("#header").append(HTMLskillsStart);
	  $("#skills").append(HTMLskills.replace("%data%", resume_json.me.bio.skills));
	};

	resume_json.me.work.jobs.forEach(function(job) {
	  $("#workExperience").append(HTMLworkStart);
	  $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
	  $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));  // $("work-entry:last")
	  $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));  // $("work-entry:last")
	});  
}

displayWork();

projects.display = function() {
  resume_json.me.projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
    if (project.images.length > 0){
      project.images.forEach(function(image){
	    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
      })
    }
  })
}
projects.display();

$("#main").append(internationalizeButton);

locationizer(resume_json.me.bio.contacts);
locationizer(resume_json.me.education.schools);
locationizer(resume_json.me.work.jobs);

$("#mapDiv").append(googleMap);
 // projects.display = function() {
 //   for (project in projects.projects) {
 //     $("#projects").append(HTMLprojectStart);

 //     var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 //   }
 // }

 // var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 // $(".work-entry:last").append(formattedLocation);

