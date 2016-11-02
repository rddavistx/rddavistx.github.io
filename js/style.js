$(document).ready(function() {
$('#contactMe').click(function() {
  $('.contact').toggle('slow');
  return false;
});


$('.button').hide();
$('#resume').hide();
$('#resumeLink').click(function() {
  $('.me').toggle('slow');
  $('#resume').toggle('slow');
  return true;
});



});
