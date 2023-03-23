'use strict';
// const greet = (greeting, names) => {
//   return name => {
//     console.log(`${greeting} ${names} ${name} `);
//   };
// };
// const greetHey = greet('Hey', 'Schmit');
// greetHey('Jonas');

// greet('hey', 'sawan')('somaiah');

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`
//       )
//     );
//     this.options.length - 1 < answer
//       ? alert('input correct  value')
//       : alert('value added is correct');

//     if (typeof answer == 'number') this.answers[answer]++;

//     console.log(this.answers);
//   },

//   displayResults: function (type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.registerNewAnswer();

// poll.displayResults.call({ answers: [5, 4, 3] }, 'string');

// function securebooking() {
//   let passegerCount = 0;

//   return function count() {
//     passegerCount++;
//     console.log(`${passegerCount} passeger`);
//   };
// }

// const booker = securebooking();

// booker();
// booker();

// let f;

// const g = function () {
//   const a = 25;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f();

// const e = function () {
//   const a = 50;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// f();

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
