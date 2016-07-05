var name = 'Federico';
var role = 'udacity code reviwer';

var bio = {
    'name' : 'Federico',
    'role' : 'Udacity Code Reviewer',
    'contacts' : 'federicocapaldo@yahoo.co.uk',
    'skills' : [
    'programming', 'python', 'javascript', 'rails', 'java', 'html', 'css', 'ux'
    ],
    'welcomeMessage' : 'Welcome on my Resume!',
    'bioPic': 'images/fry.jpg'
};

$('#main').append(bio.name);

work = {
    'company': 'Secret Web Developer Company',
    'year': '2015 - 2016',
    'position': 'Web Developer Intern',
    'city': 'London, UK'
};

var education = {
    'name': 'King\'s College London',
    'years': '2014 - 2017',
    'city': 'London, UK'
};

$('#main').append(work['position']);
$('#main').append(education.name);