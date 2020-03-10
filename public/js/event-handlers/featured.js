$(() => {
  // const featuredBikes = $;
  $.ajax({ url: "/api", method: "GET" })
    .then(res => {
      //console.log(res);
      return renderBikes(res);
    })
    .then(() => {
      $(".add-fav-btn").on("click", e => {
        console.log("works");
      });
    })
    .then(() => {
      $(".delete-btn").on("click", e => {
        console.log(res.bikes.id);
      });
    })
    .then(() => {
      $(".sold-btn").on("click", e => {
        console.log("works");
      });
    })
    .then(() => {
      if (document.cookie.slice(9) === "noah%40landlab.ca") {
        $(".admin-btns").css({ display: "inline" });
        $(".add-fav-btn").css({ display: "none" });
        $(".post-item-btn").css({ display: "inline" });
      }
    });

  const renderBikes = res => {
    $("#bikeDisplay").empty();
    for (let bike of res.bikes) {
      if (bike.featured === true) {
        $("#bikeDisplay").prepend(createBikeCard(bike));
      }
    }
  };
  const createBikeCard = bike => {
    let card = $('<div class="card">');
    const html = `    <img src='${bike.image_url}' class="card-img-top" alt="Bike image" />
<div class="card-body">
<h5 class="card-title">${bike.title}</h5>
  <h6>$${bike.price}</h6>
  <p class="card-text">
  ${bike.description}
  </p>
  <div class="user-btns">
  <button class="btn btn-primary add-fav-btn">Favourite</button>
  <button  class="btn btn-primary">Contact Seller</button>
  </div>
  <div class="admin-btns">
  <button class="btn btn-danger delete-btn">Delete</button>
  <button class="btn btn-danger sold-btn">Mark Sold</button>
  </div>
  </div>`;
    card.append(html);
    return card;
  };
});
