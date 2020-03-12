// $(() => {
//   $(".submit-bike").on("click", e => {
//     e.preventDefault();
//     const addBikeInfo = {
//       title: $("#bike-model").val(),
//       description: $("#bike-description").val(),
//       image_url: $("#img-url").val(),
//       price: Number($("#price").val()),
//       category: $("#category").val(),
//       discipline: $("#disc").val()
//     };
//     $.ajax({
//       url: "/api/addbike",
//       method: "POST",
//       dataType: "json",
//       data: { addBikeInfo }
//     });
//     console.log(addBikeInfo);
//     console.log("renderrrr");
//     callRenderedBikes();
//     console.log("sliddddee");
//     $("main").slideToggle("slow");
//   });
// });

$(() => {
  $(".submit-bike").on("click", e => {
    e.preventDefault();
    const addBikeInfo = {
      title: $("#bike-model").val(),
      description: $("#bike-description").val(),
      image_url: $("#img-url").val(),
      price: Number($("#price").val()),
      category: $("#category").val(),
      discipline: $("#disc").val()
    };
    $.ajax({
      url: "/api/addbike",
      method: "POST",
      dataType: "json",
      data: { addBikeInfo },
      complete:
        $("#bike-model").val("") &&
        $("#bike-description").val("") &&
        $("#img-url").val("") &&
        $("#price").val("") &&
        $("#disc").val("")
    });
    callRenderedBikes();
    console.log("sliddddee");
    $("main").slideToggle("slow");
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
