$(() => {
  $(".submit-price-btn").on("click", e => {
    e.preventDefault();
    callRenderedBikes();
  });

  const callRenderedBikes = () => {
    console.log("success");
    $.ajax({ url: "/api", method: "GET" })
      .then(res => {
        renderBikes(res);
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
    let minPrice = 0;
    let maxPrice = 40000;
    if (document.querySelector("#min-price").value) {
      minPrice = document.querySelector("#min-price").value;
    }
    if (document.querySelector("#max-price").value) {
      maxPrice = document.querySelector("#max-price").value;
    }
    $("#bikeDisplay").empty();
    for (let bike of res.bikes) {
      if (bike.price >= minPrice && bike.price <= maxPrice)
        $("#bikeDisplay").prepend(createBikeCard(bike));
    }
  };
});
