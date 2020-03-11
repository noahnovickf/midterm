$(document).ready(function() {
  $(".show-form-btn").click(function() {
    $("main.new-bike-show").slideToggle("slow", function() {
      $("#new-bike textarea").focus();
    });
  });

  $(".send-email-btn").click(function() {
    $("main.new-email-show").slideToggle("slow", function() {
      $("#new-email textarea").focus();
    });
  });
});
