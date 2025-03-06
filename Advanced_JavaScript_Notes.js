/*
==========================================================================
JavaScript Advanced Notes
==========================================================================
*/

/*
==========================================================================
Advanced Foundations
==========================================================================
*/

// =======================================================================
// The Ternary Operator

// Converting if else statements to ternary

const exerciseTimeMins = 40

// let message = ''

// if (exerciseTimeMins > 30 ) {
//     message = 'You need to try harder'
// } else {
//     message = 'Doing good!'
// }

const message = exerciseTimeMins > 30 ? 'You need to try harder' : 'Doing good!'

console.log(message)

// =======================================================================
// The Ternary Operator for Complex Conditionals

// ternary's are only oppropriate for single conditional statements,
// and are not necessary for multiple coditions (if, else if, else..)


// =======================================================================
// The Ternary Operator Challenge

const playerGuess = 3
const correctAnswer = 6

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

// let message = ''
// if (playerGuess === correctAnswer) {
//     message = 'Correct!'
// }
// else {
//     message = 'Wrong!'
// }

const message1 = playerGUess === correctAnswer ? 'Correct!' : 'Wrong!'

console.log(message1)

/*
Challenge
2. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

const message2 = playerGuess > correctAnswer ? 'too high'
    : playerGuess < correctAnswer ? 'too low'
        : 'exactly right'


// =======================================================================
// Switch Statements

function selectItem(item) {
    let price = 0
/*
Challenge:
1.  Add the remaining price list items as cases.
*/    
    switch(item) {
        case 'coffee':
            price = 2
            break    
        case 'Sandwiches':
            price = 5
            break  
        case 'Salad':
            price = 4
            break     
        case 'Lemon Cake':
            price = 3
            break 
        default:
            return `Sorry, we don't sell that ${item}`       
    }
    return `You selected ${item}. That will be $${price}`
}

console.log(selectItem('coffee')) // You selected coffee. That will be $2

// =======================================================================
// Object Destructing

// Object destructuring enables us to extract properties from objects
// into distinct variables.

const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
} 

// const title = favouriteFilm.title
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre
// const star = favouriteFilm.star
// const director = favouriteFilm.director

const {title, year, genre, star, director} = favouriteFilm

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)

// =======================================================================
// Object Destructing Challenge

const dreamHoliday = {
    destination: 'Asia',
    activity: 'tour each country starting in Japan',
    accommodation: 'hostels',
    companion: 'partner or solo'
}

const {destination, activity, accommodation, companion} = dreamHoliday

const output = `I would love to go to ${destination}, whilst there I would like to 
${activity}. I'd stay in ${accommodation}, and travel ${companion}`
                  
console.log(output)

// =======================================================================
// setTimeout

// Delays the execution of your code

console.log('What is the capital of Peru?')

setTimeout(function(){
    console.log('Lima!')
}, 3000)

setTimeout(function(){
    console.log('Ready for next question?')
}, 6000)


// =======================================================================
// setTimeout with params

function displayTrafficLight(light){
    console.log(light)
}

setTimeout(displayTrafficLight, 3000, '🟢')

displayTrafficLight('🔴')

// setTimeout Challenge

function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`)
}

console.log('What is the capital of Peru?')

/*
Challenge:
    1. After a 3 second delay, call the 'logAnswer' function.
    2. Make sure 'logAnswer' has all the info it needs. 
       The answer is 'Lima' and it's 10 points for getting it right. 
*/

setTimeout(logAnswer, 3000, 'Lima', 10)

// Cancelling setTimeout with clearTimeout

const questonTimer = setTimeout(logAnswer, 3000, 'Lima', 10)

document.getElementById('stop').addEventListener('click', function() {
    clearTimeout(questonTimer)
    console.log('Cancelling...')
})

// =======================================================================
// setInterval

// Executes code at set intervals

function startCountdown(device) {
    let secondsRemaining = 3

    const shutdownTimer = setInterval(function() {
        if (secondsRemaining > 0) {
            console.log(`Your ${device} will shut down in ${secondsRemaining}`)
            secondsRemaining--;
        } else {
            console.log(`Your ${device} is shutting down`)
            clearTimeout(shutdownTimer)
        }

    }, 1000)
}

startCountdown('Macbok')

// =======================================================================
// The Event Loop

// JavaScript Runtime Environment (e.g V8 is broken into 2 parts)

// The Heap - handles memory allocation so we don't have to.

// The Call Stack - As JavaScript is single threaded, the Call Stack can 
// only execute one piece of code at a time in its single thread.

// The browser provides WebAPIs, Task Queue's, and Event Loops, that alllows
// JavaScript to work asyncronously with (.setTimeout(), fetching data,...)

// JavaScript
console.log('1st')
setTimeout(function(){
    console.log('2nd')
}, 5000
)
console.log('3rd')

// The Call Stack
// console.log('1st') ->

// WebAPIs

// Task Queue

// Event Loop

// Console.
// console.log('1st')

// JavaScript
setTimeout(function(){
    console.log('2nd')
}, 5000
)
console.log('3st')

// The Call Stack

/* setTimeout(function(){
    console.log('2nd')
}, 5000
)*/

// WebAPIs

/* function(){
    console.log('2nd')
}*/ // ->

// Task Queue

/* function(){
    console.log('2nd')
}*/ // ->

// Event Loop

/* function(){
    console.log('2nd')
}*/ // ->

// Console.

// 1st
// 3rd
// 2nd

// ================================

// What are WebAPIs?

// Provided by the browser, not part of JavaScript, and have functionality for:
// DOM manipulation
// Data requests
// Timer (setTimeout, setInterval)
// and more

// ================================
// Dealing with complex functions/ code in the call stack

// Even if you have asyncronously set timers, or intervals, and expect
// the timer to be specfic, if there are complex functions being executed,
// then the task cue may build up whilst 1 function is being executed,
// which can delay.

// Get the starting timestamp
// performance.now measures the time of execution extremely accurately 
const start = performance.now()

setTimeout(() => {
    // Get the ending timestamp
    const end = performance.now()
    console.log(`Execution time: ${end - start} milliseconds`)
}, 1000)

// Execution time: 1000.8999999761581 milliseconds

// Get the starting timestamp
const start1 = performance.now()

setTimeout(() => {
    // Get the ending timestamp
    const end = performance.now()
    console.log(`Execution time: ${end - start} milliseconds`)
}, 1000)

// Runs 1 million calculations -> sent to stack first
for (let i = 0; i < 1000000; i++) {
    let answer = i * 2000000 / 67.8 * (45.7 / 3.2)
}

// Execution time: 1001.5 milliseconds

// =======================================================================
// Import Export: named

import { interplanetaryDestinationsArr as destinations } from '/data.js'

console.log(destinations)


// =======================================================================
// Import Export: default



// =======================================================================
// The Date() Constructor



// =======================================================================
// The Error() Constructor



// =======================================================================
// Pre increment



// =======================================================================
// Numeric Seperators and BigInt



// =======================================================================
// Hoisting



// =======================================================================
// Super Challenge: Stock Ticker



// =======================================================================
// Super Challenge: Stock Ticker - Solution



// =======================================================================
// Advanced Foundations Outro
