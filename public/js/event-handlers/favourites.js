$(() => {
  $(".favourites-btn").on("click", e => {
    e.preventDefault();
    console.log("bye");

    // const featuredBikes = $;
    $.ajax({ url: "/api/favourites", method: "GET" }).then(res => {
      return renderBikes(res);
    });

    const renderBikes = res => {
      $("#bikeDisplay").empty();
      for (let bike of res.bikes) {
        if(bike.id === )
        $("#bikeDisplay").prepend(createBikeCard(bike));
      }
    };
    const createBikeCard = bike => {
      //console.log(bike.image_url);
      let card = $('<div class="card">');
      const html = `    <img src='${bike.image_url}' class="card-img-top" alt="Bike image" />
  <div class="card-body">
  <h5 class="card-title">${bike.title}</h5>
    <h6>$${bike.price}</h6>
    <p class="card-text">
    ${bike.description}
    </p>
    <a href="#" class="btn btn-primary">Favourite</a>
    <a href="#" class="btn btn-primary">Contact Seller</a>
    </div>`;
      card.append(html);
      return card;
    };
    $(".all-bikes-btn").css({ display: "none" });
  });
});
