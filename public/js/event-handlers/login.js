$(() => {
  $("#login-form").on("submit", e => {
    e.preventDefault();

    $.ajax({
      url: "/api/login",
      method: "POST",
      data: $("#login-form").serialize()
    })
      .then(res => {
        $("#login-form").css({ display: "none" });
        $(".logout-btn").css({ display: "inline" });
        $(".favourites-btn").css({ display: "inline" });
      })
      .then(() => {
        callRenderedBikes();
      });
  });

  $(".logout-btn").on("click", e => {
    $("#username").val("");
    $("#login-form").css({ display: "inline" });
    $(".logout-btn").css({ display: "none" });
    $(".favourites-btn").css({ display: "none" });
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    callRenderedBikes();
  });

  const callRenderedBikes = () => {
    console.log("success");
    $.ajax({ url: "/api", method: "GET" })
      .then(res => {
        console.log(res);
        const featuredBikes = res.bikes.filter(bike => {
          return bike.featured === true;
        });
        renderBikes(featuredBikes);
      })
      .then(() => {
        if (document.cookie.slice(9) === "noah%40landlab.ca") {
          $(".admin-btns").css({ display: "inline" });
          $(".add-fav-btn").css({ display: "none" });
          $(".post-item-btn").css({ display: "inline" });
        }
      });
  };
});
