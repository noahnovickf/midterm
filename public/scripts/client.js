$(document).ready(function() {
  $(".show-form-btn").click(function() {
    $("main").slideToggle("slow", function() {
      $("#new-bike textarea").focus();
    });
  });

  // $("#new-bike").hide();
});
