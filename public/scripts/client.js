$(document).ready(function() {
  $(".show-form-btn").click(function() {
    $("main").slideDown("slow", function() {
      $("#new-bike textarea").focus();
    });
  });

  // $("#new-bike").hide();
});
