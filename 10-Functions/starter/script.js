"use strict";

const flight = "234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 2489345094835,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 2489345094835) {
    alert("Checked In");
  } else {
    alert("Wrong Passport");
  }
};

//checkIn(flight, jonas);
//console.log(flight);
//console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
