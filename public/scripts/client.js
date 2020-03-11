$(document).ready(function() {
  $(".show-form-btn").click(function() {
<<<<<<< HEAD
    $("main.new-bike-show").slideToggle("slow", function() {
=======
    $("main").slideToggle("slow", function() {
>>>>>>> master
      $("#new-bike textarea").focus();
    });
  });

  $(".send-email-btn").click(function() {
    $("main.new-email-show").slideToggle("slow", function() {
      $("#new-email textarea").focus();
    });
  });
});
