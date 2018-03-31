//Animations//
//On page load, drop in the letter blocks at the top
$(document).ready(function() {
  for(i=1; i < 16; i++){
    $('.header > div > .hex-'+i).addClass('move');
  }
  $(".title").delay(2800).fadeIn(1300);
});

//On page scroll to the skills section, drop in the blocks for different skills
var skills = $('.skills');
skills.waypoint(function() {
  for(i=1; i < 14; i++){
    $('.skills > div > .hex-'+i).addClass('move');
  }
}, {offset: '80%'});

//On page scroll to about me section, slide in the section content
var about = $(".personal-info");
about.waypoint(function() {
  $(".about-content").addClass('slide-in');
  console.log("waypoint");
}, {offset: '70%'});

//Functions to display and Hide Modals //
$('.project-div').on('click', function() {
  //slide toggle the info portion down
  $(this).next("div").show(600);
});

$('.close').on('click', function(){
  $('.project-modal').hide(600);
})
