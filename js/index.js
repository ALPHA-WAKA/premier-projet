
// get all the links in the menu bar
var links = document.querySelectorAll('ul li a');

// loop through each link and add an event listener
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // prevent the default behavior
    event.preventDefault();

    // get the ID of the section to display
    var sectionId = link.getAttribute('href').substring(1);
  

    // hide all sections except the one with the matching ID
    document.querySelectorAll('section:not(#' + sectionId + ')').forEach(function(section) {
      section.style.display='none';
    });

    // show the section with the matching ID
    document.querySelector('#' + sectionId).style.display='block';

  });
});

var menuItems = document.querySelectorAll('.menu a');
var menu = document.querySelector('.menu');
var menuIcon = document.querySelector('.header-icon a i');

menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    menu.classList.remove('menu-show');
  });
});

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('menu-show');
});

// var bar =document.querySelector(' a ')
// var menu = document.querySelector('.menu');

// bar.addEventListener('click',  function(event) {
//     // prevent the default behavior
//     event.preventDefault();

//  console.log("success");
   
//  menu.classList.toggle('menu-show');
//     });
// Get all the navigation links
var navLinks = document.querySelectorAll('.nav-link');

// Attach click event listener to each link
navLinks.forEach(function(link) {
  link.
 
addEventListener('click', function(e) {
    e.
   
preventDefault();
    
    
    
// Remove active class from all links
    navLinks.
   
forEach(function(link) {
      link.
     
classList.remove('active');
    });
    
    
    });
    
   

    });
    
// Add active class to the clicked link
    
   
this.classList.add('.active');
  ;
;
navLinks.forEach(function(item) {
  item.addEventListener('click', function() {
   navLinks.classList.remove('.active');
  });
});

navLinks.addEventListener('click', function() {
 navLinks.classList.add('.active');
});


var links = document.querySelectorAll('.nav-link');

links.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var sectionId = this.getAttribute('href');
    
    // Ajouter la classe "active" à la section cible
    document.querySelector(sectionId).classList.add('active');
    
    // Supprimer la classe "active" des autres sections
    var sections = document.querySelectorAll('.section:not(' + sectionId + ')');
    sections.forEach(function(section) {
      section.classList.remove('active');
    });
  });
});