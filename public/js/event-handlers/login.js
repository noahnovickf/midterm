$(() => {
  $("#login-form").on("submit", e => {
    e.preventDefault();
    //console.log($("#login-form").serialize());
    $.ajax({
      url: "/api/login",
      method: "POST",
      data: $("#login-form").serialize()
    })
      .then(res => {
        $("#login-form").css({ display: "none" });
        $(".logout-btn").css({ display: "inline" });
      })
      .then(() => {
        $(".logout-btn").on("click", e => {
          $("#username").val("");
          $("#login-form").css({ display: "inline" });
          $(".logout-btn").css({ display: "none" });
          $.removeCookie("username", { path: "/" });
        });
      });
    if (
      $("#login-form")
        .serialize()
        .slice(9) === "noah%40landlab.ca"
    ) {
      $(".admin-btns").css({ display: "inline" });
      $(".add-fav-btn").css({ display: "none" });
      $(".post-item-btn").css({ display: "inline" });
    }
  });
});
