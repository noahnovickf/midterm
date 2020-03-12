$(() => {
  $('.send-sms-btn').on('click', () => {
    $.ajax({
      url: 'api/sendsms',
      method: 'POST',
      dataType: 'json',
      data: { message: 'Your Bike has been sold!'}
  })
  })
});


