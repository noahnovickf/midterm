$(() => {
  $(".show-msg").on("click", e => {
    e.preventDefault();
    let storedMSGs = [];

    $.ajax({ url: "/api/showMSG", method: "GET" }).then(res => {
      res.messages.forEach(i => {
        storedMSGs.push(i);
      });
      console.log(storedMSGs);
      renderMSG(storedMSGs);
      $("#msg-display").slideToggle("slow");
    });
  });
});

const renderMSG = arr => {
  $("#msg-display").empty();
  arr.forEach(x => {
    const newMessage = createMSGelement(x);
    $("#msg-display").prepend(newMessage);
  });
};

const createMSGelement = obj => {
  let markup = `
<article class="msg">
<div>
<h5>From: ${obj.email}</h5>
<p>${obj.msg}</p>

</div>
</article>
`;
  return markup;
};
