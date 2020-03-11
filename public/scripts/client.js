$(document).ready(function() {
  $(".show-form-btn").click(function() {
    $("main.container").slideDown("slow", function() {
      $("#new-bike #bike-model").focus();
    });
  });
});
