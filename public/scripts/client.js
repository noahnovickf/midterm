$(document).ready(function() {
  $(".show-form-btn").click(function() {
    $("#new-bike").slideToggle("slow", function() {
      $("#new-bike textarea").focus();
    });
  });
});
