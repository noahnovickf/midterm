$(() => {
  $(".submit-price-btn").on("click", e => {
    e.preventDefault();
    console.log("bye");

    // const featuredBikes = $;
    $.ajax({ url: "/api", method: "GET" })
      .then(res => {
        return renderBikes(res);
      })
      .then(() => {
        $(".add-fav-btn").on("click", e => {
          console.log("works");
        });
      })
      .then(() => {
        $(".delete-btn").on("click", e => {
          console.log("works");
        });
      })
      .then(() => {
        $(".sold-btn").on("click", e => {
          console.log("works");
        });
      });

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
    $(".all-bikes-btn").css({ display: "inline-block" });
  });
});
