'use strict';

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 1999){

//         const booking = {flightNum,numPassengers, price};
//         console.log(booking);
//         bookings.push(booking)
// }

// createBooking('LH123',undefined , 3)


// const greet = greeting => {
//         return name => {
//         console.log(`${greeting} ${name}`)
// }
// }

// const greeterHey = greet('Hey')
// greeterHey('Jonas')

// greet('Hey')('Jonas')

// const luftansa = {
//         airline: 'Luftansa',
//         iatcode: 'LH',
//         bookings: [],
//         book(flightNum, name){
//                 console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
//                 this.bookings.push({flight : `${this.iatcode}${flightNum}`, name})
//                 console.log(this.bookings)
//         }      
// }

// luftansa.book(239, 'Sawan')
// luftansa.book(239, 'Sawan')
// console.log(luftansa)


// Bind method to event listener function

// luftansa.planes = 300;
// luftansa.buyPlane = function(){
//         console.log(this);
//         this.planes++;
//         console.log(luftansa.planes);
// }

// document.querySelector('.buy').addEventListener('click', luftansa.buyPlane.call(luftansa))

// const addTax = value =>{
//         return rate => {
//                 console.log(`value : ${value + value * rate}`)
// }
// }

// addTax(100)(0.23)


//Challenge #1

const poll = { 
        question: 'What is your favourite programming language?',
        options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
        // This generates [0, 0, 0, 0]. More in the next section 😃
        answers: new Array(4).fill(0),

        registerNewAnswer : function(){
        const answer =  Number(prompt(`${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`))
        if(answer <= 3){
                if(answer === 0){this.answers[0]++}
                else if(answer === 1){this.answers[1]++}
                else if(answer === 2){this.answers[2]++}
                else if(answer === 3){this.answers[3]++}
                else{alert(`Please input the correct option`)}
                }
                this.displayResults();
        },

        displayResults: function(){
        console.log(this.answers)
        },

}

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));


poll.displayResults.call({answers :[1, 5, 3, 9, 6, 1] })



