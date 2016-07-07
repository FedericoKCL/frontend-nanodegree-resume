var bio = {
  "name" : "Federico Capaldo",
  "role" : "Udacity Code Reviewer",
  "contacts" : "federicocapaldo@yahoo.co.uk",
  "skills" : [
    "python", "javascript", "ruby on rails", "java", "html", "css", "ux"
  ],
  "welcomeMessage" : "Welcome on my Resume!",
  "bioPic": "images/fry.jpg"
};


var work = {
  "jobs": [
    {
      "employer": "Secret Web Developer Company",
      "title": "Web Developer Intern",
      "dates": "2015 - 2016",
      "description": "Started off with little of no knowledge of Web Development and endend up\
      in partecipating in important projects as a full stack web developer for clients like\
      Tesco, Fortunm and Mason, Camden Market."
    },
    {
      "employer": "Secret Hotel",
      "title": "Chef",
      "dates": "2012 - 2013",
      "description": "Before moving to the field of technology I was a chef. I worked in very\
      fancy places and cooked delicious meals."
    }
  ]
};


var education = {
  "schools": [{
    "name": "Kings College",
    "location": "London",
    "degree": "BSc",
    "majors": ["Computer Science"],
    "dates": "2018"
  }, {
    "name": "Williams College",
    "location": "London",
    "degree": "HND",
    "majors": ["Computing & Systems Development"],
    "dates": 2014
  }],
  "onlineCourses": [{
    "title": "Javascript",
    "school": "Udacity",
    "dates": 2014,
    "url": "http://www.udacity.com/course/ud804"
  }]
};


var projects = {
  "projects": [
    {
      "title": "Chemical Trace",
      "dates": "2015/2016",
      "description": "First Website in the world that helps you understand the content of your labels"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
$('#header').append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$('#header').append(formattedRole);

var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
$('#header').append(formattedImage);

if(bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $('#skills').append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $('#skills').append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $('#skills').append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $('#skills').append(formattedSkills);
}

function displayWork() {
  for(job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append(formattedEmployerTitle);
    
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
    $('.work-entry:last').append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $('.work-entry:last').append(formattedDescription);
  }
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


function inName(name) {
  parts = name.trim().split(" ");
  newName = parts[0].slice(0,1).toUpperCase() + parts[0].slice(1).toLowerCase();
  newSurname = parts[1].toUpperCase();

  return newName + " " + newSurname;
}


$('#main').append(internationalizeButton);
