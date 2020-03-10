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
    //console.log(bike.image_url);
    let card = $('<div class="card img">');
    const html = `<img src='${bike.image_url}' class="card-img-top" alt="Bike image" />
  <div class="card-body">
  <h5 class="card-title">${bike.title}</h5>
    <h6>$${bike.price}</h6>
    <p class="card-text">
    ${bike.description}
    </p>
    <button class="btn btn-primary add-fav-btn">Favourite</button>
    <button  class="btn btn-primary">Contact Seller</button>
    </div>`;
    card.append(html);
    return card;
  };
});
