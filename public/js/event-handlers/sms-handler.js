$(() => {
  $(".send-sms-btn").on("click", () => {
    console.log("hello from the button");
    $.ajax({
      url: "/api/sms/send",
      method: "POST",
      dataType: "json",
      data: { message: "Your Bike has been sold!" }
    });
  });
});
