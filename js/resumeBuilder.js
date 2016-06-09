/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* Modification to the instructions code
 * 1) Use of jQuery $.each method to provide a more readable code
 * 2) Use of this to reference base object in all display codes to imporove modularity of the code (not dependant on gloabl reference name)
 * 3) Use of jQuery obj to create and hold elements
 * 4) Use of JQuery to create element (see work)
 * 5) Handling of zero length arrays
 * 6) Generic contact solution based on key name for display (appears to be the only difference in the specialized strings) 
 * ***************/

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
    "welcomeMessage" : "I am a self-taught designer focused on creating immersive web and mobile experiences through a process of iterative design thinking. I design delightful products that are intuitive and user friendly. I am in a constant state of learning, and I want to continue to improve and grow as a designer.",
    "skills" : [
        "Design Thinking",
        "Front-End Web Development",
        "Wordpress",
        "PHP",
        "SEO"
    ],
    "biopic" : "https://raw.githubusercontent.com/seanjohnson1/Portfolio/master/images/sean-johnson.jpg",
    "display" : function(){
        var $header = $("#header"), $skills, formattedContactInfoArrayStr;
        $header.prepend(HTMLheaderRole.replace("%data%", this.role));
        $header.prepend(HTMLheaderName.replace("%data%", this.name));
        $header.append(HTMLbioPic.replace("%data%", this.biopic));
        $header.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
        if(this.skills.length > 0){
            $header.append(HTMLskillsStart);
            $skills = $("#skills"); 
            $.each(this.skills, function(index, skill){
                $skills.append(HTMLskills.replace("%data%", skill));
            });
        }
        formattedContactInfoArrayStr = [];
        $.each(this.contacts, function(contact, value){
            //Check for null or empty strings
            if(!!value){
                // Use of generic method
                formattedContactInfoArrayStr.push(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", value));
            }
        });
        // Old method for creating contact information. 
        //formattedContactInfoArrayStr.push(HTMLmobile.replace("%data%", this.contacts.mobile));
        //formattedContactInfoArrayStr.push(HTMLemail.replace("%data%", this.contacts.email));
        //formattedContactInfoArrayStr.push(HTMLgithub.replace("%data%", this.contacts.github));
        //formattedContactInfoArrayStr.push(HTMLlocation.replace("%data%", this.contacts.location));
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
            "date" : "2016",
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "JavaScript Basics",
            "school" : "Udacity",
            "date" : "2016",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ],
    "display" : function() {
        // Create scope reference to education div
        var $education = $("#education");
        $.each(this.schools, function(index, school){
            var formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, $currentEntry;
            formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
			formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            //NOT VERY EFFICIENT to append and then get reference by :last selector
            $education.append(HTMLschoolStart);
            $currentEntry = $(".education-entry:last");
			$currentEntry.append(formattedSchoolName + formattedSchoolDegree);
			$currentEntry.append(formattedSchoolDates);
			$currentEntry.append(formattedSchoolLocation);
			if(school.majors.length > 0){
                $currentEntry.append(HTMLschoolMajor.replace("%data%", school.majors.join(", ")));
            }
        });
        if(this.onlineCourses.length > 0){
            $education.append(HTMLonlineClasses);
            $.each(education.onlineCourses , function(index, onlineCourse){				
				var formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL, $currentEntry;
                formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);
				formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
				formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.date);
				formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);
                $education.append(HTMLschoolStart);
				$currentEntry = $(".education-entry:last");
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			});
        }
    }
};
education.display();
work = {
    "jobs" : [
        { 
            "employer" : "Stoneridge Corporation",
            "title" : "Front-End Web Developer Intern",
            "location" : "Marietta, GA",
            "dates" : "2015 - in progress",
            "description" : "Review and evaluate existing website designs and look for improvement. Take project requirements and create new website design templates and website elements utilizing Photoshop. Code basic HTML by hand and/or with the use of Adobe Dreamweaver. Work with and understand basic JavaScript and related concepts of 3rd party component interactions. Limited copywriting and editing of website content for SEO optimization."        
        },
        { 
            "employer" : "Spencer Gifts",
            "title" : "Sales Associate",
            "location" : "Raleigh, NC",
            "dates" : "2012 - 2014",
            "description" : "Responsible for selling store merchandise to customers while maintaining the company's standard in customer service. Merchandise according to company guidelines and product knowledge. Operate the store POS to ring up sales. Assist with merchandising, stocking and general upkeep of the store."
        }
        
    ],
    "display" : function(){
        if(this.jobs.length > 0){
            var $workExperience = $("#workExperience");
            $.each(this.jobs, function(index, job){
                //Seems to be better to create a jQuery object and then append to the correct section
                var $workEntry = $(HTMLworkStart);
                // Employer and title are combined base of the anchor tag, but this appears to be a deprecated item
                $workEntry.append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
                $workEntry.append(HTMLworkLocation.replace("%data%", job.location));
                $workEntry.append(HTMLworkDates.replace("%data%", job.dates));
                $workEntry.append(HTMLworkDescription.replace("%data%", job.description));
                $workExperience.append($workEntry);
            });
        }
    }
};
work.display();
projects = {
    "projects" : [
        {
            "title" : "Adobe Lightroom/Sugmug Intergrations and workflow",
            "dates" : "2016 - in progress",
            "description" : "Work with the digital strategy and design team and the photo-video team to determine a platform and method for sharing image assets both locally and remotely.",
            "images" : [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        },
        {
            "title" : "Portfolio Mockup to HTML",
            "dates" : "2016",
            "description" : "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers. A part of the Front-End Web Developer Nanodegree program.",
            "images" : [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ],
    "display" : function(){
        var $projects = $("#projects");
        $.each(this.projects, function(index, project){
            var $projectEntry = $(HTMLprojectStart);
            $projectEntry.append(HTMLprojectTitle.replace("%data%", project.title));
            $projectEntry.append(HTMLprojectDates.replace("%data%", project.dates));
            $projectEntry.append(HTMLprojectDescription.replace("%data%", project.description));
            $.each(project.images, function(index, url){
                $projectEntry.append(HTMLprojectImage.replace("%data%", url));
            });
            $projects.append($projectEntry);
        });
    }
};
projects.display();
//Encapsulated in function as per ""
(function(){
    $("#mapDiv").append(googleMap);
    //Style enhacement but use JS to select
    $('a[href="#"]').addClass('nolink');
})();