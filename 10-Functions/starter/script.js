'use strict';

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 1999){

//         const booking = {flightNum,numPassengers, price};
//         console.log(booking);
//         bookings.push(booking)
// }

// createBooking('LH123',undefined , 3)


const greet = greeting => {
        return name => {
        console.log(`${greeting} ${name}`)
}
}

const greeterHey = greet('Hey')
greeterHey('Jonas')

greet('Hey')('Jonas')