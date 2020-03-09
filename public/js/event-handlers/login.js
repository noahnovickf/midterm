$(() => {
  $("#login-form").on("submit", e => {
    e.preventDefault();
    console.log($("#login-form").serialize());
    $.ajax({
      url: "/api/login",
      method: "POST",
      data: $("#login-form").serialize()
    }).then(res => {
      $("#login-form").css({ display: "none" });
    });
  });
});
