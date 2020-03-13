$(() => {
  const callRenderedBikes = () => {
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
  //ADD FAVOURITE
  $("body").on("click", ".add-fav-btn", e => {
    $.ajax({
      url: "/api/addfavourites",
      method: "POST",
      dataType: "json",
      data: {
        bike_id: $(e.currentTarget).data("id")
      },
      complete: alert("Bike added to Favourites")
    });
  });

  //DELETE
  $("body").on("click", ".delete-btn", e => {
    $.ajax({
      url: "/api/deleteBikes",
      method: "POST",
      dataType: "json",
      data: {
        bike_id: $(e.currentTarget).data("id")
      },
      complete: callRenderedBikes
    });
  });

  //SOLD
  $("body").on("click", ".sold-btn", e => {
    $.ajax({
      url: "/api/sold",
      method: "POST",
      dataType: "json",
      data: {
        bike_id: $(e.currentTarget).data("id")
      },
      success: $.ajax({
        url: "/api/sms/send",
        method: "POST",
        dataType: "json",
        data: {
          message: `You sold your ${$(e.currentTarget).data("name")} for $${$(
            e.currentTarget
          ).data("price")}`
        }
      }),
      complete: callRenderedBikes
    });
  });

  const renderBikes = res => {
    $("#bikeDisplay").empty();
    for (let bike of res.bikes) {
      $("#bikeDisplay").prepend(createBikeCard(bike));
    }
  };

  const createBikeCard = bike => {
    let card = $('<div class="card">');
    const html = `    <img src='${bike.image_url}' class="card-img-top${
      bike.sold ? " grey" : ""
    }" alt="Bike image" />
      <div class="card-body ">
      
  <h5 class="card-title">${bike.title}</h5>
    <h6>${bike.sold ? `<span class='sold'>SOLD</span>` : `$${bike.price}`}</h6>
    <p class="card-text">
    ${bike.description}
    </p>
    <div class="user-btns">
    <button data-id="${
      bike.id
    }" class="btn btn-primary add-fav-btn">Favourite</button>
    <button  class="btn btn-primary">Contact Seller</button>
    </div>
    <div class="admin-btns">
    <button data-id="${
      bike.id
    }" class="btn btn-danger delete-btn">Delete</button>
    <button data-id="${bike.id}" data-price="${bike.price}" data-name="${
      bike.title
    }" class="btn btn-danger sold-btn">Mark Sold</button>
    </div>
    </div>`;
    card.append(html);
    return card;
  };
  $(".all-bikes-btn").css({ display: "inline-block" });
});
