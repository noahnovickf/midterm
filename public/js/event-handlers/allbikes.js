$(() => {
  $(".all-bikes-btn").on("click", e => {
    e.preventDefault();
    callRenderedBikes();
  });

  const callRenderedBikes = () => {
    console.log("success");
    $.ajax({ url: "/api", method: "GET" })
      .then(res => {
        return renderBikes(res);
      })
      .then(() => {
        if (document.cookie.slice(9) === "noah%40landlab.ca") {
          $(".admin-btns").css({ display: "inline" });
          $(".add-fav-btn").css({ display: "none" });
          $(".post-item-btn").css({ display: "inline" });
        }
      });
  };

  const renderBikes = res => {
    $("#bikeDisplay").empty();
    for (let bike of res.bikes) {
      $("#bikeDisplay").prepend(createBikeCard(bike));
    }
  };
});
