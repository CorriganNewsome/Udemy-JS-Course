"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
// const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order(starterIndex, mainIndex) {
//     return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
//   },
//   orderDelievered({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
//     );
//   },

//   openingHours: {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. 
So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, 
along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// //Destructuring an array
// const [player1, players2] = game.players;
// console.log(player1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;

// //3.
// const allPlayers = [...players1, ...players2];

// //4.
// const playersFinal = [...players1, "Thiago", "Coutinho", "Periscic"];

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// //6.
// const printGoals = (...players) => {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals("Davis", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davis", "Muller");
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log("Team 1 is more likely to win");
// team2 > team1 && console.log("Team 2 is more likely to win");

//LEARNING MAPS
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23);

// rest.get("name");

// console.log(rest.get("name"));

// console.log(rest.has("categories"));

// rest.delete(2);

// rest.clear();

// //Other way to create a new map,
// //This is basically a survey with three choices and a correct answer. It also tells you when you're wrong vs correct.
// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try Again"],
// ]);
// //Quiz App
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt("Your answer"));
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));

// //Converting a map back to an array.
// console.log([...question]);

//More about strings
// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// //Output
// // A
// console.log(plane[1]);
// //Output
// // 3
// console.log(plane[2]);
// //Output
// // 2
// console.log("8737"[0]);
// //Output
// // 8
// console.log(airline.length);
// //Output
// // 16
// console.log(airline.indexOf("r"));
// //Output
// // 6
// console.log(airline.lastIndexOf("r"));
// //Output
// // 10

// //example of a slice method. Slice method extracts part of a string.
// console.log(airline.slice(4));
// //Output
// //Air Portugal

// //Extracting part of a string that we recieve.
// console.log(airline.slice(0, airline.indexOf(" ")));
// //Output
// //TAP

// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// //Output
// //Portugal

// //Tests the last letter of a string to see if someone has a middle seat or not.
// const checkMiddleSeat = (seat) => {
//   //B are E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log("You got the middle seat");
//   } else {
//     console.log("You got lucky");
//   }
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization in name
// const passenger = "jOnAs";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// let passenger = (name) => {
//   const passengerLower = name.toLowerCase();
//   const passengerCorrect =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);
//   console.log(passengerCorrect);
// };

// passenger("cOrRiGaN");

//comparing emails
// const email = "hello@jonas.io";
// const loginEmail = "  Hello@Jonas.Io \n";
// const lowerEmail = loginEmail.toLowerCase();
//.trim gets rid of white space at the beginning of a string.
// const normalizedEmail = loginEmail.toLowerCase().trim();

// console.log(normalizedEmail);

// if (email === normalizedEmail) {
//   console.log("Emails match");
// } else {
//   console.log("Emails don't match");
// }

// const email = (emailEntered) => {
//   const normalizedEmail = emailEntered.toLowerCase().trim();
//   console.log(emailEntered);
//   console.log(normalizedEmail);
// };

// email("  corRigan.neWsome@GmAil.Com");

//replacing
// const priceGB = "288,97￡";
// const priceUS = priceGB.replaceAll("￡", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23, Boarding door 23";

// const correctAnnouncement = announcement.replaceAll("door", "gate");
// console.log(correctAnnouncement);
//Output
//288.97$
//All passengers come to boarding gate 23, Boarding gate 23

//Practicing exercise
// const checkBaggage = (items) => {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Snacks and a gun");

console.log("a+very+nice+string".split("+"));
console.log("Corrigan Newsome".split(" "));

const [firstName, lastName] = "Corrigan Newsome".split(" ");

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);
