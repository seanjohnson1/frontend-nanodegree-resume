/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio, education, work, projects;
bio = {
    "name" : "Sean A. Johnson",
    "role" : "Cheif Creative Officer",
    "contacts" : {
        "mobile" : "555-555-1212",
        "email" : "sean.a.johnson@icloud.com",
        "github" : "seanjohnson1",
        "twitter" : null,
        "location" : "Atlanta, GA"
    },
    "welcomeMessage" : "I am a visual designer and branding consulting working in Atlanta, GA.",
    "skills" : [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "SEO"
    ],
    "biopic" : "https://raw.githubusercontent.com/seanjohnson1/Portfolio/master/images/sean-johnson.jpg",
    "display" : function(){
        var $header = $("#header");
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        if(bio.skills.length > 0){
            $("#header").append(HTMLskillsStart);
            $.each(bio.skills, function(index, skill){
                $("#skills").append(HTMLskills.replace("%data%", skill));
            });
        }
        var formattedContactInfoArrayStr = [];
        formattedContactInfoArrayStr.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
        formattedContactInfoArrayStr.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactInfoArrayStr.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactInfoArrayStr.push(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#topContacts, #footerContacts").append(formattedContactInfoArrayStr.join(""));
    }
};
bio.display();

education = {
    "schools": [
        {
            "name": "Southern New Hampshire University",
            "location": "2500 North River Road Manchester NH 03106",
            "degree": "Bachelor of Science (B.S.)",
            "majors": ["Information Technology", "Underwater Basket Weaving"],
            "dates": "2016-2020",
            "url": "http://www.snhu.edu/"
        },
        {
            "name": "LMYSC",
            "location": "Golden, CO",
            "degree": "High School Diploma",
            "majors": [], // High School does not have majors
            "dates": "1995-1999",
            "url": "#" // Institution does not have a website
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school" : "Udacity",
            "date" : "January 2016 - February 2016",
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "JavaScript Basics",
            "school" : "Udacity",
            "date" : "March 2016 - April 2016",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ],
    "display" : function() {
        $.each(education.schools, function(index, school){
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            
            $("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			if(school.majors.length > 0){
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors.join(", ")));
            }
        });
        if(education.onlineCourses.length > 0){
            $("#education").append(HTMLonlineClasses);
            $.each(education.onlineCourses , function(index, onlineCourse){				
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.date);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);

                $("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			});
        }
    }
}
education.display();