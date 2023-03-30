'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Bankist App

const displayMovemnts = function (movements) {
  movements.forEach(function (mov, i) {
    let type = mov > 0 ? 'deposit' : 'withdrawal';
    let html = `<div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 3
    } ${type}</div>
            
            <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovemnts(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// //slice
// console.log(arr.slice(2));
// console.log(arr.slice(1, 3));
// console.log(arr);
// //SPLICE
// console.log(arr.splice(1, 3));
// console.log(arr);

// //REVERSE
// const arr2 = ['k', 'j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// //AT
// const arr3 = [23, 11, 64];

// console.log(arr3.at(1));
// console.log('jonas'.at(1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`Money credited is:${movement}`);
//   } else console.log(`Money debited is:${Math.abs(movement)}`);
// }
// console.log('--- for of entries ---');
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Money credited at ${i + 1} is:${movement}`);
//   } else console.log(`Money debited ${i + 1} is:${Math.abs(movement)}`);
// }
// console.log('--- forEach ---');

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`Money credited is:${movement}`);
//   } else console.log(`Money debited is:${Math.abs(movement)}`);
// });

// console.log('--- forEach with index ---');

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Money credited ${i + 1} is:${movement} `);
//   } else console.log(`Money debited ${i + 1} is:${Math.abs(movement)}`);
//   console.log(arr);
// });

// const currencies = new Map([
//   ['USD', 'United States Dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
//   console.log(map);
// });

// const currenciesUnique = new Set(['USD', 'USD', 'EUR', 'GBP', 'EUR', 'GBP']);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
//   console.log(map);
// });

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const juliaData1 = [3, 5, 2, 12, 7];
// const kateData1 = [4, 1, 15, 8, 3];
// const juliaData2 = [9, 16, 6, 8, 3];
// const kateData2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const juliaDataShallow = dogsJulia.slice();

//   const juliaNoCats = juliaDataShallow.slice(1, -2);
//   const JKData = juliaNoCats.concat(dogsKate);
//   console.log(JKData);

//   JKData.forEach(function (age, i) {
//     const ageDog =
//       age >= 3 ? `an adult, and is ${age} years old` : 'still a puppy';
//     console.log(`Dog number ${i + 1} is ${ageDog}`);
//   });
// };

// checkDogs(juliaData1, kateData1);
// checkDogs(juliaData2, kateData2);

//MAP

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUSD = 1.1;

// const movementsUSD = movements.map(mov => {
//   return mov * euroToUSD;
// });

// console.log(movementsUSD);

// const movementsDescription = movements.map((mov, i) => {
//   return `Movement ${i + 1} : You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescription);
const createUsername = function (acc) {
  acc.forEach(function (accs) {
    accs.username = accs.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);
console.log(accounts);
