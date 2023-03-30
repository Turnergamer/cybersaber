$(document).ready(function() {
  $('.about-link').click(function(e) {
    e.preventDefault();
    $('.about-card').toggleClass('show');
  });
});