$(function() {
  $(window).scroll(function() {
    var home = $("#home").first();
    var posTopHome = home.position().top;
    var homeNav = document.getElementById('homeNav');
    
    var about = $("#about").first();
    var posTopAbout = about.position().top;
    var aboutNav = document.getElementById('aboutNav');
    
    var projects = $("#projects").first();
    var posTopProjects =     projects.position().top;
    var projectNav = document.getElementById('projectsNav');
    
    var contact = $("#contact").first();
    var posTopContact = contact.position().top;
    var contactNav = document.getElementById('contactNav');
    
    if ($(this).scrollTop() > (posTopHome-90) ){
       homeNav.classList.add('activeColor', 'active');
       aboutNav.classList.remove('activeColor', 'active');
       projectNav.classList.remove('activeColor', 'active');
       contactNav.classList.remove('activeColor', 'active');
        };
    
    if ($(this).scrollTop() > (posTopAbout-90)){
      aboutNav.classList.add('activeColor', 'active');
      homeNav.classList.remove('activeColor', 'active');
      projectNav.classList.remove('activeColor', 'active');
    };

    
    if ($(this).scrollTop() > (posTopProjects-90)){
      projectNav.classList.add('activeColor', 'active');
      aboutNav.classList.remove('activeColor', 'active');
      contactNav.classList.remove('activeColor', 'active');
    };

    
    if ($(this).scrollTop() > (posTopContact-90)){
      contactNav.classList.add('activeColor', 'active');
      projectNav.classList.remove('activeColor', 'active');
    };
});
});
