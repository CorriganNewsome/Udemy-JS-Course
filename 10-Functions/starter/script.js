"use strict";

const bookings = [];

//ES6
//Write equals and then the default paramater you want.
const createBooking = (flightNum, numPassengers = 1, price = 199) => {
  //ES5
  // numPassengers = numPassengers || 1;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
