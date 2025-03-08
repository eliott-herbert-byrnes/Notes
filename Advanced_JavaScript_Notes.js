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
    switch (item) {
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

const { title, year, genre, star, director } = favouriteFilm

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)

// =======================================================================
// Object Destructing Challenge

const dreamHoliday = {
    destination: 'Asia',
    activity: 'tour each country starting in Japan',
    accommodation: 'hostels',
    companion: 'partner or solo'
}

const { destination, activity, accommodation, companion } = dreamHoliday

const output = `I would love to go to ${destination}, whilst there I would like to 
${activity}. I'd stay in ${accommodation}, and travel ${companion}`

console.log(output)

// =======================================================================
// setTimeout

// Delays the execution of your code

console.log('What is the capital of Peru?')

setTimeout(function () {
    console.log('Lima!')
}, 3000)

setTimeout(function () {
    console.log('Ready for next question?')
}, 6000)


// =======================================================================
// setTimeout with params

function displayTrafficLight(light) {
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

document.getElementById('stop').addEventListener('click', function () {
    clearTimeout(questonTimer)
    console.log('Cancelling...')
})

// =======================================================================
// setInterval

// Executes code at set intervals

function startCountdown(device) {
    let secondsRemaining = 3

    const shutdownTimer = setInterval(function () {
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
setTimeout(function () {
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
setTimeout(function () {
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

// Importing multiple data objects from single file

import {
    interplanetaryDestinationsArr as destinations,
    shortSpaceTripsArr
} from '/data.js'

console.log(destinations)

// Make sure all object's that need to be exported have 'export'

export const shortSpaceTripsArr = [{
    destination: 'Moon pass',
    distanceKM: 5000000,
    travelTimeDays: 3,
    priceUSD: 10000,
    description: 'Take a quick trip to the Moon and witness Earthrise from space.'
}]

// Or add to the bottom of the file;

export { interplanetaryDestinationsArr, shortSpaceTripsArr }


// =======================================================================
// Import Export: default

// The difference with import export, is that rather than importing individual
// objects, you will be importing an entire file, which for example,
// could be a function. All functions that are imported must have,
// export default before the function declaration.

// The import can be named anything, but it is best to have the same name
// as the file that is being imported.

// getMatchingTripsArr.js
export default function getMatchingTripsArr(arr, keyword) {
    return arr.filter(function (trip) {
        return trip.description.toLowerCase().includes(keyword)
    })
}

// Index.js
import { interplanetaryDestinationsArr, shortSpaceTripsArr } from '/data.js'
import getMatchingTripsArr from '/getMatchingTripsArr.js'

console.log(getMatchingTripsArr(interplanetaryDestinationsArr, 'exotic'))


// =======================================================================
// The Date() Constructor

// Two types of constructor

// Inbuilt
// Provide objects in various predetermined formats, like Date objects,
// Error objects, and Objects for each data type

// Custom
// Constructors we design ourselves to produce objects for our own 
// specific purpose.

const dateSnapshot = new Date()
console.log(dateSnapshot)
// 2025-03-06T20:54:06.748Z

console.log(dateSnapshot.toString())
// Tue Jun 04 2024 10:57:29 GMT+0100 (British Summer Time)

// Just getting the year
const dateSnapshot1 = new Date()
console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`)


// =======================================================================
// The Error() Constructor

// The error constructor allows us to add custom error messages to our code.

function checkUsername(userName) {
    if (userName) {
        console.log(userName)
    } else {
        throw new Error('No username provided')
    }
}

checkUsername()

// =======================================================================
// Pre increment

// Pre increment adds 1 to the value before the value is used.

let currentTicketNumber = 0

function getNextTicketNumber() {
    return ++currentTicketNumber
}

// Simulating guests arriving and receiving ticket numbers
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`)
console.log(`Guest 2, your ticket number is: ${getNextTicketNumber()}`)
console.log(`Guest 3, your ticket number is: ${getNextTicketNumber()}`)

// =======================================================================
// Numeric Seperators and BigInt

// Numeric Seperators
// Makes numbers more readable by adding underscores

const tomsBankBalanceGBP = 9_007_199_254_740_991

console.log(typeof tomsBankBalanceGBP)

// BigInt
// Allows for the representation of large numbers
// by adding 'n' to the end of the number
// BigInts are not compatible with regular numbers
// and cannot be mixed in calculations
// BigInt is useful in contexts requriing preise handling of large numbers
// like cryptography, or financial applications.

const tomsBankBalanceUSD = BigInt(9_007_199_254_740_991_345)

const tomsBankBalanceCAD = 9_007_199_254_740_991_345n

console.log(Math.sqrt(tomsBankBalanceGBP))

// =======================================================================
// Hoisting

// Hoisting is a JavaScript mechanism where variable and function declarations
// are moved to the top of their containing scope before code execution.
// This means that no matter where variable or functions are declared,
// they are moved to the top of their scope regardless of whether their
// scope is global or local.

// Function declarations are hoisted, but function expressions are not.
// Variables declared with let and const are not hoisted.

const trafficInfo = 0;

console.log(trafficInfo)

trafficInfo = 'All roads are busy right now'
// Uncaught ReferenceError: Cannot access 'trafficInfo' before initialization

// =======================================================================
// Super Challenge: Stock Ticker

/*
App requirements:
 - The app should display the name, symbol, and 
   price of the stock, with a timestamp as per the 
   screenshot. 
 - The triangle compares the current stock price to 
   its previous price. If the price has increased, it 
   should be a green triangle pointing up, if the price 
   has decreased it should be a red triangle pointing 
   down, and if there has been no change it should be a 
   grey triangle pointing to the right.
 - The price should update every 1.5 seconds. 
*/

/*
Challenge:
  1. Find a way to get fresh stock data every 1.5 seconds.
  2. Call the renderStockTicker function with the fresh data.
  3. Add logic to renderStockTicker to display the correct 
     information.
  ⚠️ You will need to write code here in index.js and in
   fakeStockAPI.js.
*/

// fakeStockAPI.js

export default function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),
        time: new Date().toLocaleTimeString()
    }
}

// index.js

import fakeStockAPI from '/fakeStockAPI.js'

// Stores p price data
let stockArr = [];

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    // Display name, symbol
    stockDisplayName.innerHTML = fakeStockAPI().name
    stockDisplaySymbol.innerHTML = fakeStockAPI().sym

    // Refresh Price / Time every 1.5 seconds
    setInterval(function () {
        let newPrice = fakeStockAPI().price;

        stockDisplayPrice.innerHTML = newPrice

        stockArr.push(newPrice)

        // Handles inon if p price >, < || === to c price
        if (stockArr[stockArr.length - 1] > stockArr[(stockArr.length - 1) - 1]) {
            stockDisplayPriceIcon.innerHTML = `<img src="svg/green.svg">`
        } else if (stockArr[stockArr.length - 1] < stockArr[(stockArr.length - 1) - 1]) {
            stockDisplayPriceIcon.innerHTML = `<img src="svg/red.svg">`
        } else if (stockArr[stockArr.length - 1] === stockArr[(stockArr.length - 1) - 1]) {
            stockDisplayPriceIcon.innerHTML = `<img src="svg/grey.svg">`
        } else {
            stockDisplayPriceIcon.innerHTML = ``
        }

        stockDisplayTime.innerHTML = fakeStockAPI().time

    }, 1500)

}

renderStockTicker()

// Instructors Solution

// fakeStockAPI.js

export function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),
        time: new Date().toLocaleTimeString()
    }
}

// index.js

import { getStockData } from '/fakeStockAPI.js'

// The instructor set the interval outside of the renderStockTicker function
// to avoid multiple intervals being set each time the function is called.
setInterval(function () {
    // Assigned the stock data to a variable
    const stockData = getStockData()
    // Passed the stock data to the renderStockTicker function
    renderStockTicker(stockData)
}, 1500)

// The instructor also used the previousPrice variable to compare the current
// price to the previous price, and set the price icon accordingly.
let prevPrice = null

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    // Destructured the stockData object
    const { name, sym, price, time } = stockData

    // Added logic to set the price icon based on the price direction
    // compared to the previous price
    // The instructor also used a ternary operator to set the price icon
    const priceDirectionIcon = price > prevPrice ? 'green.svg' : price < prevPrice ? 'red.svg' : 'grey.svg'
    const priceIconElement = document.createElement('img')
    priceIconElement.src = `svg/${priceDirectionIcon}`
    priceIconElement.alt = 'Price direction icon'
    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(priceIconElement)

    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time

    // The instructor also set the previous price to the current price
    prevPrice = price
}


// =======================================================================
// Super Challenge: Stock Ticker - Solution



// =======================================================================
// Advanced Foundations Outro

/*
==========================================================================
Methods & Loops
==========================================================================
*/

// =======================================================================
// Methods & Loops Introduction

// =======================================================================
// The for...of Loop

// Iterates over the values of an iterable object (arrays, strings, maps, sets)
// Is not suitable for objects, as objects are not iterable.
// Essentially the same as a for loop, but with a cleaner syntax.

const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: ['flight', 'power', 'purity'],
    }
]

for (let character of characters) {
    console.log(character)
}

// {title: 'Ninja', emoji: '🥷', powers: ['agility', 'stealth', 'aggression']}
// {title: 'Sorcerer', emoji: '🧙', powers: ['magic', 'invisibility', 'necromancy']}
// {title: 'Ogre', emoji: '👹', powers: ['power', 'stamina', 'shapeshifting']}
// {title: 'Unicorn', emoji: '🦄', powers: ['flight', 'power', 'purity']}

// ================================

for (let character of characters) {
    console.log(character.title)
}

// Ninja
// Sorcerer
// Ogre
// Unicorn

/*
Challenge:
1. Nest a for of inside this for of to iterate over 
   the powers array for each character. Log out each 
   power.
*/

for (let character of characters) {
    for (let powers of character.powers) {
        console.log(powers)
    }
}

// agility
// stealth
// aggression...

// =======================================================================
// The for...in Loop

// Iterates over the properties of an object
// Is not suitable for arrays, as arrays are objects

const character1 = {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
}

for (let property in character1) {
    console.log(property)
}

// title
// emoji
// powers

for (let property in character1) {
    console.log(character1[property])
}

// Ninja
// 🥷
// ['agility', 'stealth', 'aggression']

// =======================================================================
// The .forEach() Method

// The forEach method is used to execute a function on each item in an array.
// The forEach method is a higher order function, as it takes a function as an argument.
// The forEach method does not return a new array, but instead modifies the existing array.

const characters1 = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: ['flight', 'power', 'purity'],
    }
]

characters1.forEach(function (character) {
    console.log(character.title)
})

// Ninja
// Sorcerer
// Ogre
// Unicorn

// ================================

/*
Challenge:
1. Nest a forEach to log out each individual
   power in each characters powers array.
*/

characters1.forEach(function (character) {
    character.powers.forEach(function (power) {
        console.log(power)
    })
})

// agility
// stealth
// aggression...

// ================================

// The forEach method can also take an index as a second argument

characters1.forEach(function (character, index) {
    console.log(index, character.title)
})

// 0 Ninja
// 1 Sorcerer
// 2 Ogre
// 3 Unicorn

// =======================================================================
// The .includes() Method

// The includes method is used to check if an array contains a specific element.
// The includes method returns a boolean value.

/*
Challenge:
1. Add an if else to the event listener's function.
2. Only add an item to the shoppingList array if it 
   is not already in the shoppingList array.
3. If an item is a duplicate, clear the input field
   and log out "no duplicates".
*/

const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []

addItemBtn.addEventListener('click', function () {

    if (shoppingList.includes(itemInput.value)) {
        console.log('no duplicates')
    }
    else {
        shoppingList.push(itemInput.value)
        render()
    }
    itemInput.value = ''

})

function render() {
    let html = ''
    for (let item of shoppingList) {
        html += `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()


// =======================================================================
// The .map() Method

// =======================================================================
// The .map() Method Challenge

// =======================================================================
// The .join() Method

// =======================================================================
// The .join() Method Challenge

// =======================================================================
// .map() vs .forEach()

// =======================================================================
// The filter() Method

// =======================================================================
// The filter() Method with Objects

// =======================================================================
// The .reduce() Method

// =======================================================================
// The .reduce() Method Challenge

// =======================================================================
// The .reduce() Method with Objects

// =======================================================================
// For loop Break and Continue

// =======================================================================
// Various Array Methods

// =======================================================================
// string.replace and string.replaceAll

// =======================================================================
// regex flags and constructors

// =======================================================================
// Super Challenge: Contact Search

// =======================================================================
// Super Challenge: Contact Search Solution

// =======================================================================
// Methods & Loops Outro

