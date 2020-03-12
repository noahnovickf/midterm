$(() => {
  $(".dropdown-road").on("click", e => {
    e.preventDefault();
    callRenderedBikes("road");
  });
  $(".dropdown-mountain").on("click", e => {
    e.preventDefault();
    callRenderedBikes("mountain");
  });
  $(".dropdown-other").on("click", e => {
    e.preventDefault();
    callRenderedBikes("other");
  });

  const callRenderedBikes = road => {
    console.log("success");
    $.ajax({ url: "/api", method: "GET" })
      .then(res => {
        let filterBike = res.bikes.filter(bike => {
          return bike.category === road;
        });
        renderBikes(filterBike);
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
