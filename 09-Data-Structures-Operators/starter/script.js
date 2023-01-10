'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// for of loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log([...menu.entries()]);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }
//Challwnge 1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = [...game.players];
// console.log(player1);
// console.log(player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { odds } = game;

// const { team1, x: draw, team2 } = odds;
// console.log(odds);
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
//   for (let i = 0; i < players.length; i++) {
//     console.log(`${players[i]} scored the goal`);
//   }
// };

// printGoals(...game.scored);

// team1 > team2 && console.log('team1 is the winner');
// team1 < team2 && console.log('team2 is the winner');

// Enhanced Object Literals

// const openingHours = {
//   thu: {
//     open: 11,
//     close: 23,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,
//   orders(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day${3 + 2}`]: {
//     open: 0,
//     close: 24,
//   },
// };

// console.log({ restaurant });
// console.log(restaurant.orders(1, 1));
// console.log(openingHours);

//Optional chaning
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,
//   orders(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// console.log(restaurant.openingHours?.mon);

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const days of weekdays) {
//   const open = restaurant.openingHours[days]?.open ?? 'closed';
//   console.log(`we are open on ${days} at ${open}`);
// }

// console.log(restaurant.orders?.(0, 1) ?? "method doesn't exist");

// const users = [{ name: 'Jonas', email: 'hello@iog.org' }];
// console.log(users[0]?.name ?? "array doesn't exist");

//Looping object keys,values and entries
//keys
// const properties = Object.keys(openingHours);
// console.log(...properties);

// let openStr = `We are open on ${properties.length} days`;
// for (const day of properties) {
//   openStr += ` ${day} `;
// }
// console.log(openStr);

// //values
// const values = Object.values(openingHours);
// console.log(values);
// for (const x of values) {
//   console.log(x);
// }
// //entries
// const entries = Object.values(openingHours);
// console.log(entries);

// # Coding Challenge 2
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// const GoalScorers = game.scored;

// for (const scorers of GoalScorers.entries()) {
//   console.log(`Goal:${scorers[0] + 1} ${scorers[1]}`);
// }

// //2
// var count = 0;
// const teamOdds = Object.values(game.odds);
// console.log(teamOdds);
// var total = 0;
// for (const odds of teamOdds) {
//   total += odds;
//   count++;
// }
// console.log(`avg:${total / count}`);

// //3
// const teamOddEntri = Object.entries(game.odds);

// for (const [team, oddse] of teamOddEntri) {
//   var teamStri = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStri} :${oddse} `);
// }

// //Bonus

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player];
// }
// console.log(scorers);


// Sets

// const orderSet = new Set(['Pizza','Pasta','Risotta','Pizza','Pasta'])
// console.log(orderSet);

// console.log(orderSet.size)
// console.log(orderSet.has('Pizza'))
// console.log(orderSet.has('Bread'))
// console.log(orderSet.add('Bread'))
// console.log(orderSet.delete('Bread'))
// console.log(orderSet);

// const staff = ['Waiter','Chefs','Manager','Chefs','Waiter'];
// console.log(staff)
// const uniqueStaff = new Set(staff)
// console.log(uniqueStaff.size)


// const openingHours = {
//   thu: {
//     open: 11,
//     close: 23,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };

// const question = new Map([['question','What is the best language in the world?'],
//                             [1,'C'],
//                             [2,'Java'],
//                             [3,'Javascript'],
//                             ['correct',3],
//                             [true,'Correct'],
//                             [false,'Try Again']])

// //Conecrting oblects to entries

// const hoursOpen = new Map(Object.entries(openingHours));

// for(const [keys, values] of question){
//       if(typeof(keys) === 'number')console.log(`Answer ${keys}:${values}`)
// }

// const answer = prompt('Your answer is?')

// console.log(question.get(question.get('correct') === answer));


// Coding Challenge 3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// var arrayEvents = [];
// let totalTime = 0 
// let j = 0;
// const eventLength = gameEvents.size
// for (const [keys, values] of gameEvents)
// {   
//     totalTime = totalTime +  keys; 
//     if(keys <= 45){
//       console.log(`[FIRST HAlF] ${keys}:${values}]`)
//       }else{console.log(`[SECOND HAlF] ${keys}:${values}]`)}
//     for(let i = j; i <= eventLength;i++){

//     arrayEvents[i] = values;
    
//     break;
//     }j++;
    
// }


// const events = new Set([...arrayEvents]);
// console.log(events)

// gameEvents.delete(64);
// console.log(gameEvents)

// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);


// //trying replaceAll()

// const announcement = ' All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'))

// //slpit and join method

// console.log('a+very+nice+string'.split('+'));
// console.log('sawan somaiah'.split(' '));

// const [firstName, lastName] = 'sawan somaiah'.split(' ');
// console.log([firstName, lastName])

// const capitalizeName = function(name){
//   const names = name.split(' ')
//   const nameUpper = [];

//   for(const n of names){
//   nameUpper.push(n[0].toUpperCase() + n.slice(1))
// }
//   console.log(nameUpper.join(' '));
// }

// capitalizeName('sawan somaiah');
// capitalizeName('theiie hsklajsdlk')


//coding challenge 4

// const inputText = document.querySelector('.textInput').value

// const submitButton = document.querySelector('.button')


// submitButton.addEventListener('click', function(){
//   console.log("click listened")
//   const inputText = document.querySelector('.textInput').value
//   console.log(inputText)
// });

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

var text = document.querySelector('textarea');
var submit = document.querySelector('button')

submit.addEventListener('click', function(){
  
  let inputText = document.querySelector('textarea').value

  let text = inputText.split('\n');
  console.log(text);

  for(const [i,fir] of text.entries()){
  let [first, second] = fir.toLowerCase().trim().split('_')
  const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
  const tick = `${output.padEnd(20,' ')}${'✅'.repeat(i+1)}`
  console.log(tick)
}
  
  // let first = inputText.slice(0,inputText.indexOf('_'));
  // console.log(first)
  // let second = inputText.slice(inputText.lastIndexOf('_')+1)
  // console.log(second)
  // let secondUpper = second[0].toUpperCase() + second.slice(1)
  // console.log(secondUpper)

  // let text = first+secondUpper;
  // console.log(text);
  // let replace = inputText.replace('_', '')
  
  // console.log(replace)

});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')){
    // console.log(flight)
    const [type, from, to, time] = flight.split(';');
    // console.log(type, from, to, time)
    const output = `${type.startsWith('_Delayed') ? '🔴' : ' '}  ${type.replaceAll('_', ' ')} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':', 'h')}) `
    console.log(output.padStart(36))
}