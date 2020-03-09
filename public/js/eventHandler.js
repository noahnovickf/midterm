// Load Event Handlers On Page Load
$(() =>{

  $('.favourites-btn').on('click', () => {
    console.log('hi')
  });

  $('.messages-btn').on('click', () => {
    console.log('hi')
  });

  $('.post-ad-btn').on('click', () => {
    console.log('hi')
  });

  $('.login-btn').on('click', () => {
    console.log('hi')
  });

  $('.dropdown-road').on('click', (e) => {
    e.preventDefault();
    console.log('hi');
  });

  $('.dropdown-mountain').on('click', (e) => {
    e.preventDefault();
    console.log('hi');
  });

  $('.dropdown-other').on('click', (e) => {
    e.preventDefault();
    console.log('hi');
  });

  $('.all-bikes-btn').on('click', (e) => {
    e.preventDefault();
    console.log('bye');
  })

});