$(() => {
  $("#login-form").on("submit", e => {
    e.preventDefault();
    $.ajax({ url: "/api/login", method: "POST" }).then(res => {
      console.log("it works");
    });
  });
});
