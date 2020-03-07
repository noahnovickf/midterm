$(() => {
  // const featuredBikes = $;
  $.ajax({ url: "/api", method: "GET" }).then(res => {
    console.log(res);
  });
});
