$(() => {
  callRenderedBikes();
});
const callRenderedBikes = () => {
  $.ajax({ url: "/api", method: "GET" })
    .then(res => {
      console.log("hittinghere");
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

const renderBikes = res => {
  $("#bikeDisplay").empty();
  for (let bike of res) {
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
  }" class="btn btn-success add-fav-btn">Favourite</button>
  
  </div>
  <div class="admin-btns">
  <button data-id="${bike.id}" class="btn btn-danger delete-btn">Delete</button>
  <button data-id="${bike.id}" data-price="${bike.price}" data-name="${
    bike.title
  }" class="btn btn-danger sold-btn">Mark Sold</button>
  </div>
  <div class="message-area">
<form action="/sendmsg" method="POST">
<textarea id="${
    bike.id
  }" class="message" placeholder="Send Message to Owner" rows='3'></textarea>
<button class="btn btn-primary send-btn" data-id="${bike.id}">Send</button>
</form>
</div>
</div>`;
  card.append(html);
  return card;
};
