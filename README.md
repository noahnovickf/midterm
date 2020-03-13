## User-to-user Buy-Sell webpage

A web interface for any user to post a bike ad, write a desciption and sell to other users. One admin user will have the ability to mark items as sold, which will send a text to the user's whose bike is sold, as well as delete bikes. Users will see a featured page of featured bikes, filter them by type and price, see bikes at the top of the page which have been sold, and message bike owners about the possible pruchase of their bikes.

## Getting Started

Use PSQL to download the in the migrations file, then install the users then bikes in the seeds file. Change the POOL to fit the variables of your local machine. Pictures are taken from the internet and don't intend any copywrite infringment. They are also subject to not loading if the path to the image cannot be found.

## Dependencies that are required are:

- Twilio 3.40.0
- pg 7.18.2
- express 4.17.1
- cookie-parser 1.4.4

## Built With

Twilio - API to send text messages when bike is sold
Express.js - Server-side logic
Node.js  
Jquery - Animations, Event handlers
Bootstrap - Grid layout, button components
PSQL - Database

## Authors

### Noah Novick-Faille - Full-Stack

### Kevin Guertin - Full-Stack/ Design

#### David He - Design

## Screenshots

### Homepage

!["View of Homepage"](https://github.com/noahnovickf/midterm/blob/master/public/images/Screen%20Shot%202020-03-13%20at%2010.52.02%20AM.png)

### New Bike form

!["View of add bike form"](https://github.com/noahnovickf/midterm/blob/master/public/images/Screen%20Shot%202020-03-13%20at%2010.52.27%20AM.png)
