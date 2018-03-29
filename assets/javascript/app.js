$(document).ready(function() {
  for(i=1; i < 16; i++){
    $('.header > div > .hex-'+i).addClass('move');
  }
  $(".title").delay(2800).fadeIn(1300);
});

var skills = $('.skills');
skills.waypoint(function() {
  for(i=1; i < 14; i++){
    $('.skills > div > .hex-'+i).addClass('move');
  }
}, {offset: '80%'});

var about = $(".personal-info");
about.waypoint(function() {
  $(".personal-info > h2").fadeIn("slow");
  console.log("Waypoints");
}, {offset: '0%'})
