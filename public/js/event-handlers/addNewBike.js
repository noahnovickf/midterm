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
    }
    console.log(addBikeInfo);
    $.ajax({
      url: "/api/addbike",
      method: "POST",
      dataType: "json",
      data: { addBikeInfo }
    });
  });
});