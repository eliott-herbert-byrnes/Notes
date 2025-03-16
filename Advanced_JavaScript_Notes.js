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

// The map method is used to create a new array by transforming each element 
// in an existing array.
// The map method is a higher order function, as it takes a function as an argument.
// The map method returns a new array, and does not modify the existing array.

const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

const conversionFactorMilesToKm = 1.6

const distanceWalkedKmArr = distanceWalkedMilesArr.map(function (distanceMiles, index) {
    return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}`
})

console.log(distanceWalkedKmArr)

// ['Month 0: 224', 'Month 1: 244.8', 'Month 2: 257.6', 'Month 3: 244.8', 
// 'Month 4: 204.8', 'Month 5: 236.8']

// ================================

function convertMilesToKms() {
    return distanceWalkedMilesArr.map(function (distanceMiles, index) {
        return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`
    })
}

console.log(convertMilesToKms())

// ['Month 0: 224KM', 'Month 1: 244.8KM', 'Month 2: 257.6KM', 'Month 3: 244.8KM',
// 'Month 4: 204.8KM', 'Month 5: 236.8KM']

// =======================================================================
// The .map() Method Challenge

/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

import { playlistArr } from '/playlist.js'

/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

const playlistHtml = playlistArr.map(function (song) {
    return `<section class="card">
                <div class="card-start">
                <img src="/images/${song.albumArt}">
            </div>
                <div class="card-mid">
                    <h4 class="card-title">${song.title}</h4>
                    <p class="card-artist">${song.artist}</p>
            </div>
                <div class="card-end">
                    <p class="card-menu">...</p>
                </div>
            </section>
`
}).join('')

document.getElementById('container').innerHTML = playlistHtml
// document.getElementById('container').innerHTML = playlistHtml.join('')

// =======================================================================
// The .join() Method

// The join method is used to join all elements of an array into a string.
// The join method takes an optional argument, which is a separator string.

const guestsArr = ['Amy', 'Clare', 'Keith', 'Dan']

console.log(guestsArr.join())

// Amy,Clare,Keith,Dan

console.log(guestsArr.join(''))

// AmyClareKeithDan

console.log(guestsArr.join(' and '))

// Amy and Clare and Keith and Dan

// =======================================================================
// The .join() Method Challenge

// =======================================================================
// .map() vs .forEach()

// The map method is used to create a new array by transforming each element
// in an existing array.
// The map method returns a new array, and does not modify the existing array.

// The forEach method is used to execute a function on each item in an array.
// The forEach method does not return a new array, but instead modifies 
// the existing array.

import { playlistArr } from '/playlist.js'

const playlistHtmlArr = []

playlistArr.forEach(function (track) {
    playlistHtml.push(`
    <section class="card">
        <div class="card-start">
            <img src="/images/${track.albumArt}">
        </div>
            <div class="card-mid">
                <h4 class="card-title">${track.title}</h4>
                <p class="card-artist">${track.artist}</p>
            </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>
    `)
})


document.getElementById('container').innerHTML = playlistHtml.join('')


// =======================================================================
// The filter() Method

// The filter method is used to create a new array with all elements that pass
// the test implemented by the provided function.
// The filter method returns a new array, and does not modify the existing array.

const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adults = ages.filter(function (age) {
    return age >= 18
})

console.log(adults)

// [23, 56, 47, 70, 19, 23, 18]

const children = ages.filter(function (age) {
    return age < 18
})

console.log(children)

// [1, 5, 9, 10, 10]

// =======================================================================
// The filter() Method with Objects

const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours: 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours: 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours: 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours: 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours: 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]

const newYorkSeries = series.filter(function (show) {
    return show.location === 'New York'
})

console.log(newYorkSeries)

// [{name: 'Friends', location: 'New York', lengthInHours : 85, genres: ['comedy', 'romance', 'drama']}]

/*
Challenge:
1. Use the .filter() method to create an array
   of all of the thrillers.
   .includes('romance')
*/

const genreFilter = series.filter(function (show) {
    return show.genres.includes('thriller')
})

console.log(genreFilter)

// [{name: 'The Wire', location: 'Baltimore', lengthInHours : 60, genres: ['action', 'thriller', 'detective', 'suspense']},
// {name: 'The Walking Dead', location: 'Atlanta', lengthInHours : 131, genres: ['zombie', 'apocalypse', 'thriller', 'suspense']}]

// =======================================================================
// The .reduce() Method

// The reduce method executes a reducer function on each element of the array,
// resulting in a single output value.
// The reduce method takes 2 arguments, a reducer function, and an initial value.
// The reducer function takes 4 arguments, an accumulator, a current value,
// a current index, and the array.

const rainJanuaryByWeek = [10, 20, 0, 122]

const totalRainfallJanuary = rainJanuaryByWeek.reduce(function (total, weeklyRainfall) {
    return total + currentElement
})

console.log(totalRainfallJanuary)

// 152

// =======================================================================
// The .reduce() Method Challenge

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average. 
*/

const totalGrades = grades.reduce(function (total, currentGrade) {
    return total + currentGrade
})


console.log(`The class average is ${totalGrades / grades.length}`)

// =======================================================================
// The .reduce() Method with Objects

const studentsArr = [
    {
        name: 'Mike',
        grade: 75
    },
    {
        name: 'Emma',
        grade: 83
    },
    {
        name: 'Seth',
        grade: 66
    }
]

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce(function (total, currentStudent) {
        return total + currentStudent.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))

// 74.66666666666667

// =======================================================================
// For loop Break and Continue

// The break statement is used to terminate a loop early.
// The continue statement is used to skip the current iteration of a loop.
// An important note is that the break and continue statements only work
// within loops, and not within functions.
// The data being looped through must also be in correct order, as the break
// and continue statements will not work if the data is not in the correct order.

const expensesAndRefunds = [
    { description: 'Groceries', amount: 50, year: 2023 },
    { description: 'Electronics', amount: -30, year: 2023 },
    { description: 'Dinner', amount: 40, year: 2023 },
    { description: 'Clothing', amount: 60, year: 2023 },
    { description: 'Entertainment', amount: 25, year: 2023 },
    { description: 'Rent', amount: -500, year: 2024 },
    { description: 'Utilities', amount: 100, year: 2024 },
    { description: 'Books', amount: 20, year: 2024 },
    { description: 'Fitness', amount: 30, year: 2024 },
    { description: 'Gifts', amount: 15, year: 2024 },
]

let totalSpent = 0
const cutoffDate = 2024

for (let i = 0; i < expensesAndRefunds.length; i++) {
    const currentExpenseOrRefund = expensesAndRefunds[i]

    if (currentExpenseOrRefund.year >= cutoffDate) {
        console.log(`Reached cutoff date, exiting loop`)
        break
    }

    if (currentExpenseOrRefund.amount < 0) {
        console.log(`Skipping ${currentExpenseOrRefund.description} due to refund`)
        continue
    }

    totalSpent += currentExpenseOrRefund.amount
}

console.log(`Total amount spent on items in 2023: $${totalSpent}`)

// =======================================================================
// Various Array Methods

//.every()
// The every method is used to check if all elements in an array pass a test.
// The every method returns a boolean value.

const dailyStepsArr = [10000, 12000, 18000, 15000, 11000, 19000, 13000]

const areAllOver10k = dailyStepsArr.every(function (stepCount) {
    return stepCount >= 10000
})

console.log(areAllOver10k)

// true

// ================================

//.some()
// The some method is used to check if some elements in an array pass a test.
// The some method returns a boolean value.

const someOver15k = dailyStepsArr.some(function (stepCount) {
    return stepCount > 15000
})

console.log(someOver15k)

// true

// ================================

//.find()
// The find method is used to return the first element in an array that passes a test.
// The find method returns the first element that passes the test, or undefined 
// if no element passes the test.

const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function (invoice) {
    return invoice > 1000
})

console.log(invoiceOver1k)

// 1299

// ================================

//.findIndex()
// The findIndex method is used to return the index of the first element in an 
// array that passes a test.
// The findIndex method returns the index of the first element that passes the test,
// or -1 if no element passes the test.

const invoiceOver1kIndex = invoicesUSDArr.findIndex(function (invoice) {
    return invoice > 1000
})

console.log(invoiceOver1kIndex)

// 3

// ================================

//.indexOf()
// The indexOf method is used to return the index of the first occurrence of a
// specified value in an array.
// The indexOf method returns -1 if the value is not found.

const invoiceOver1kIndex1 = invoicesUSDArr.indexOf(1299)

console.log(invoiceOver1kIndex1)

// 3

// ================================

//.at() 
// The at method is used to return the element at a specified index in an array.
// The at method returns the element at the specified index, or undefined if the index
// is out of range.

const invoiceAt3 = invoicesUSDArr.at(3)

console.log(invoiceAt3)

// 1299

// ================================

//.lastIndexOf()
// The lastIndexOf method is used to return the index of the last occurrence of a
// specified value in an array.
// The lastIndexOf method returns -1 if the value is not found.

const invoiceOver1kIndex2 = invoicesUSDArr.lastIndexOf(1299)

console.log(invoiceOver1kIndex2)

// 3

// ================================

//.sort()
// The sort method is used to sort the elements of an array.
// The sort method sorts the elements in place and returns the sorted array.
// The sort method sorts the elements as strings by default.
// The sort method can take a compare function as an argument to sort the elements

const sortedInvoices = invoicesUSDArr.sort()

console.log(sortedInvoices)

// [1299, 1400, 201, 26, 354, 60, 76]

// ================================

//.reverse()
// The reverse method is used to reverse the elements of an array.
// The reverse method reverses the elements in place and returns the reversed array.
// The reverse method does not take any arguments.

const reversedInvoices = invoicesUSDArr.reverse()

console.log(reversedInvoices)

// [76, 60, 1400, 1299, 26, 354, 201]

// ================================

//.slice()
// The slice method is used to extract a section of an array and return a new array.
// The slice method takes 2 arguments, a start index, and an end index.
// The slice method does not modify the original array.

const slicedInvoices = invoicesUSDArr.slice(2, 5)

console.log(slicedInvoices)

// [26, 1299, 1400]

// ================================

//.splice()
// The splice method is used to add or remove elements from an array.
// The splice method takes 3 arguments, a start index, a number of elements to remove,
// and optional elements to add.
// The splice method modifies the original array.

const splicedInvoices = invoicesUSDArr.splice(2, 3, 100, 200, 300)

console.log(splicedInvoices)

// [26, 1299, 1400]

// ================================

//.concat()
// The concat method is used to merge two or more arrays.
// The concat method does not modify the existing arrays, but instead returns a new array.

const invoicesUSDArr1 = [201, 354, 26, 1299, 1400, 60, 76]
const invoicesGBP = [100, 200, 300]

const combinedInvoices = invoicesUSDArr1.concat(invoicesGBP)

console.log(combinedInvoices)

// [201, 354, 26, 1299, 1400, 60, 76, 100, 200, 300]

// ================================

//.flat()
// The flat method is used to flatten a nested array.
// The flat method takes an optional depth argument to specify the depth of flattening.
// The flat method returns a new array.

const nestedInvoices = [201, 354, [26, 1299], 1400, [60, 76]]

const flatInvoices = nestedInvoices.flat()

console.log(flatInvoices)

// [201, 354, 26, 1299, 1400, 60, 76]

// ================================

//.fill()
// The fill method is used to fill the elements of an array with a static value.
// The fill method takes 3 arguments, a value to fill the array with, a start index,
// and an end index.
// The fill method modifies the original array.

const emptyArray = new Array(5)

const filledArray = emptyArray.fill(0)

console.log(filledArray)

// [0, 0, 0, 0, 0]

// ================================

//.copyWithin()
// The copyWithin method is used to copy array elements to another position in the array.
// The copyWithin method takes 2 arguments, a target index, and a start index.
// The copyWithin method modifies the original array.

const copyWithinArray = [201, 354, 26, 1299, 1400, 60, 76]

const copiedArray = copyWithinArray.copyWithin(2, 0)

console.log(copiedArray)

// [201, 354, 201, 354, 26, 1299, 1400]

// ================================

//.keys()
// The keys method is used to return a new array iterator that contains the keys for each
// index in the array.

const keysArray = [201, 354, 26, 1299, 1400, 60, 76]

const keys = keysArray.keys()

for (let key of keys) {
    console.log(key)
}

// 0
// 1
// 2...

// ================================

//.values()

// The values method is used to return a new array iterator that contains the values for each
// index in the array.

const valuesArray = [201, 354, 26, 1299, 1400, 60, 76]

const values = valuesArray.values()

for (let value of values) {
    console.log(value)
}

// 201
// 354
// 26...

// ================================

//.entries()
// The entries method is used to return a new array iterator that contains the key/value pairs
// for each index in the array.

const entriesArray = [201, 354, 26, 1299, 1400, 60, 76]

const entries = entriesArray.entries()

for (let entry of entries) {
    console.log(entry)
}

// [0, 201]
// [1, 354]
// [2, 26]...

// =======================================================================
// string.replace and string.replaceAll

// The replace method is used to replace a specified value with another value in a string.
// The replace method only replaces the first occurrence of the specified value.
// The replace method is case sensitive.
// The replace method does not modify the original string, but instead returns a new string.

const message3 = 'I love JavaScript, JavaScript is my favorite programming language'

const newMessage = message3.replace('JavaScript', 'Python')

console.log(newMessage)

// I love Python, JavaScript is my favorite programming language

// ================================

// The replaceAll method is used to replace all occurrences of a specified value with another value in a string.
// The replaceAll method is case sensitive.

const newMessage1 = message3.replaceAll('JavaScript', 'Python')

console.log(newMessage1)

// I love Python, Python is my favorite programming language

// ================================

//regex
// The replace method can also take a regular expression as the first argument.
// Regular expressions are used to match patterns in strings.
// Regular expressions are enclosed in forward slashes.
// Regular expressions are case sensitive.
// Regular expressions can be used to match characters, numbers, and patterns in strings.

const sentence = "i went to Australia and i saw a shark"

const newSentence = sentence.replace(/i/g, 'I')

console.log(newSentence)

// I went to Australia and I saw a shark

// ================================

const sentence1 = "I love you with all my heart!"

console.log(sentence1.replaceAll(/\b(love|heart)\b/g, function (match) {
    return `${match} 💜`
}))

// I love 💜 you with all my heart💜!

console.log(sentence1.replaceAll(/\b(love|heart)\b/g, function () {
    return `💜`
}))

// I 💜 you with all my 💜!

// ================================

const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"

const fixedParagraph = paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function (letter) {
    return letter.toUpperCase()
})

console.log(fixedParagraph)

// JavaScript is the backbone of the internet. It was created in 1995. Before JS, websites were so boring

// =======================================================================
// regex flags and constructors

// Regular expressions can take flags as an argument to modify the behavior of the regular expression.
// Regular expression flags are used to perform case-insensitive, global, and multiline matching.
// Regular expression flags are appended to the end of the regular expression.
// Regular expression flags are case sensitive.

//g
// The g flag is used to perform a global match in a string.
// The g flag is case sensitive.

//i
// The i flag is used to perform a case-insensitive match in a string.
// The i flag is case sensitive.

const text = "Please switch off the WiFi before you leave."

const regex = /wifi/i

const doesMatch = regex.test(text) //boolean

console.log(doesMatch)

// true

// ================================

const text1 = "Please switch off the WIFI before you leave."
const userInput = "wifi"

const regex1 = new RegExp(userInput, 'g')

const doesMatch1 = regex.test(text) //boolean

console.log(doesMatch)

// true

// =======================================================================
// Super Challenge: Contact Search

// My first attempt

import { contactsArr } from '/contactsData.js'

const patternSearchInput1 = document.getElementById('pattern-search-input')
const patternSearchSubmit1 = document.getElementById('pattern-search-submit')
const contactDisplay1 = document.getElementById('contact-display')

patternSearchSubmit1.addEventListener('click', function () {
    renderContact()

})

function renderContact(contactObj) {

    contactObj = contactsArr
        .filter(function (contact) {
            return contact.name.includes(patternSearchInput1.value)
        })
        .map(function (contact) {
            return `
        <p>${contact.name}<p>
        <p>${contact.email}<p>
        <p>${contact.phone}<p>
        `
        })

    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    contactCard.innerHTML = contactObj.join('')

    contactDisplay1.appendChild(contactCard)
}

// ================================

// Instructors Solution

import { contactsArr } from '/contactsData.js'

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

patternSearchSubmit.addEventListener('click', function () {
    findMatchingContacts(contactsArr, patternSearchInput.value)
})

function findMatchingContacts(contactsArr, pattern) {
    contactDisplay.innerHTML = '' // Clear previous results
    const regex = new RegExp(pattern, 'i') // Case-insensitive search

    contactsArr.filter(contact => regex.test(contact.name))
        .forEach(contact => renderContact(contact))
}

function renderContact(contactObj) {
    const { name, email, phone } = contactObj

    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')

    const nameElem = document.createElement('p')
    nameElem.innerText = name
    const emailElem = document.createElement('p')
    emailElem.innerText = email
    const phoneElem = document.createElement('p')
    phoneElem.innerText = phone

    contactCard.appendChild(nameElem)
    contactCard.appendChild(emailElem)
    contactCard.appendChild(phoneElem)

    contactDisplay.appendChild(contactCard)
}

// =======================================================================
// Super Challenge: Contact Search Solution

// =======================================================================

// Function Expressions & Parameters

// =======================================================================
//  Function Expressions & Parameters intro
// =======================================================================

// Function Expressions

// 1. Are not hoisted
// 2. Are cleaner and easier to read (argubly)
// 3. Can be passed as arguments to other functions
// 4. Are the chosen style of some dev teams

// Regular function example

function cardSpend(amount) {
    return `You spent $${amount} on your card`
}

console.log(cardSpend(100))

// You spent $100 on your card

// Function expression example

const cardSpendExp = function (amount) {
    return `You spent $${amount} on your card`
}

console.log(cardSpendExp(100))

// You spent $100 on your card

// =======================================================================
// Function Expressions Challenge

function getTheftAlert(numberOfTransactionsHour) {
    if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`
    }
}

const getTheftAlertExp = function (numberOfTransactionsHour) {
    if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`
    }
}

console.log(getTheftAlertExp(6))

// =======================================================================
// Arrow Functions

const getSpendAlert = function (amount) {
    return `Warning! You just spent £${amount}!`
}

console.log(getSpendAlert(100))

// Warning! You just spent £100!

// Arrow function example

const getSpendAlertArrow = (amount) => {
    return `Warning! You just spent £${amount}!`
}

console.log(getSpendAlertArrow(100))

// Warning! You just spent £100!

// Return one line of code without curly braces or return keyword
// More complex logic requires the curly braces and the return keyword

const getSpendAlertArrow1 = (amount) => `Warning! You just spent £${amount}!`

console.log(getSpendAlertArrow1(100))

// Warning! You just spent £100!

const getSpendAlertArrowComplex = (amount) => {
    if (amount > 100) {
        return `Warning! You just spent £${amount}!`
    } else {
        return `You just spent £${amount}`
    }
}

console.log(getSpendAlertArrowComplex(101))

// Warning! You just spent £101!

// =======================================================================
// Arrow Functions Challenge

/*
Challenge
1. Refactor this function to use an arrow function.
2. Make sure you write the least code possible.
*/

// function speedWarning(speed){
//     return `You are going at ${speed} mph!`
// }

const speedWarning = speed => `You are going at ${speed} mph!`

console.log(speedWarning(60))

// You are going at 60 mph!

// ================================

/*
Challenge
1. Refactor this function so it only warns drivers 
   who are going over the speed limit.
2. The function now needs to take in two parameters. 
   The first is the speed limit, the second is the 
   driver's actual speed.
*/

const speedWarning1 = (limit, speed) => {
    if (speed > limit) {
        return `You are going at ${speed} mph!`
    }
}

console.log(speedWarning(30, 40))

// You are going at 40 mph!

// =======================================================================
// Inline Arrow Functions Challenge

/*
Challenge
1. Refactor this .map method so the inline function is
   an arrow function. 
2. Write the least amount of code possible.
*/

const distanceTraveledMiles = [267, 345, 234, 190, 299]

// const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
//     return Math.round(distance * 1.6)
// })

const distanceTraveledKm = distanceTraveledMiles.map(distance => Math.round(distance * 1.6))

console.log(distanceTraveledKm)

// [427, 552, 374, 304, 478]

// =======================================================================
// Inline Arrow Functions Refactor Challenge

/*
Challenge:
1. Use the reduce method to calculate the total 
   cost of items which have been bought.
*/

export const itemsBoughtArr = [
    {
        name: 'Electric Toothbrush Holder',
        priceUSD: 40,
        desc: 'A robotic arm that holds and moves your electric toothbrush for you, ensuring optimal brushing technique.'
    },

    {
        name: 'Invisible Milk',
        priceUSD: 10,
        desc: 'A carton of milk that turns completely transparent when poured into a glass, providing a magical and mysterious drinking experience.'
    },
    {
        name: 'Self-Chilling Soup Can',
        priceUSD: 15,
        desc: 'A can of soup that instantly chills itself when opened, so you can enjoy a refreshing cold soup on a hot summer day.'
    },
    {
        name: 'Glow-in-the-Dark Eggs',
        priceUSD: 8,
        desc: 'A carton of eggs that glow in the dark, making breakfast preparation an exciting and illuminating experience.'
    }
]

import { itemsBoughtArr } from '/itemsBoughtArr.js'

function calculateTotalCost(itemsBoughtArr) {

    const total = itemsBoughtArr.reduce((total, prices) => total + prices.priceUSD, 0)

    return total

}

console.log(calculateTotalCost(itemsBoughtArr))

// =======================================================================
// Default Parameters

// Default parameters are used to assign a default value to a parameter in a function.

const getAlert = (amount, currency = '£') => {
    return `Warning! You just spent ${currency}${amount}!`
}

console.log(getAlert(100))

// Warning! You just spent £100!

//defaults can be overwritten
console.log(getAlert('$', 100))

// Warning! You just spent $100!

// =======================================================================
// The Rest Parameter

// The rest parameter is used to represent an indefinite number of 
// arguments as an array.

function setPermissionLevel(permissionLevel, ...users) {
    users.forEach(user => {
        console.log(`${user} has been given ${permissionLevel} access`)
    })
}

setPermissionLevel('admin', 'Mike', 'Emma', 'Seth')

// Mike has been given admin access
// Emma has been given admin access
// Seth has been given admin access

// =======================================================================
// The Rest Parameter Challenge

/*
Challenge:
1. Add parameters.
2. Update the HTML template where you 
   see **NAME**.
3. Return HTML template for each label.
*/

function getLabelsHtml(texter, sender, ...staffObjs) {
    return staffObjs.map(staffObj =>
        `<div class="label-card">
            <p>Dear ${staffObj.name}</p>
            <p>${text}</p>
            <p>Best wishes,</p>
            <p>${sender}</p>
        </div>`
    ).join('')

}

const texter = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
    texter,
    sender,
    { name: 'Sally' },
    { name: 'Mike' },
    { name: 'Rob' },
    { name: 'Harriet' }
)

// =======================================================================
// Callback Functions

// A callback function is a function that is passed as an argument to another function.

const getAlert1 = (amount, callback) => {
    return callback(amount)
}

const alertMessage = (amount) => {
    return `Warning! You just spent £${amount}!`
}

console.log(getAlert1(100, alertMessage))

// Warning! You just spent £100!


// =======================================================================
// Super Challenge: Real Estate

/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
*/

import { propertyForSaleArr } from '/properties/propertyForSaleArr.js'
import { placeholderPropertyObj } from '/properties/placeholderPropertyObj.js'

function getPropertyHtml(propertyForSaleArr = [placeholderPropertyObj]) {

    return propertyForSaleArr.map(properties =>
        `<section class="card">
                <img src="/images/${properties.image}">
                <div class="card-right">
                    <h2>${properties.propertyLocation}</h2>
                    <h3>£${properties.priceGBP}</h3>
                    <p>${properties.comment}</p>
                    <h3>${properties.roomsM2.reduce((acc, num) => acc + num, 0)} m&sup2;</h3>
                </div>
            </section> `
    ).join('')

}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)

// =======================================================================
// Super Challenge: Real Estate Solution

// instructors solution

import propertyForSaleArr from '/properties/propertyForSaleArr'
import placeholderPropertyObj from '/properties/placeholderPropertyObj'

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
    return propertyArr.map(property => {
        const { propertyLocation, priceGBP, roomsM2, comment, image } = property
        const totalRoomSizeM2 = roomsM2.reduce((total, current) => total + current)
        return `
    <section class="card">
        <img src="/images/${image}">
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>£${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${totalRoomSizeM2} m&sup2;</h3>
        </div>
    </section>`
    })
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml()

// =======================================================================
//  Asynchronous JavaScript & APIs
// =======================================================================

// =======================================================================
// Asynchronous JavaScript & APIs intro

// =======================================================================
// What is an API?

// API stands for Application Programming Interface.
// An API is any tool that helps connect your program with someone else's program.

// API Examples

// Getting data from a server
// The server hosts "an API" - exposed "endpoints" we can access for
// getting data from the server.
// Note that the server doesn't give us access to everything, just the
// things they want us to have

// Pre-written code
// Libraries, frameworks, and modules are APIs. They provide pre-written code
// e.g DOM API (document.getElementById)
// Array methods API (.map, .filter, .reduce)
// 3rd-party packages

// =======================================================================
// Clients & Servers

// What is a Client?
// Any device that connects to the internet to get data from somewhere else.
// (makes a requests), (Laptop, phone, tablet, smartwatch...)

// What is a Server?
// Basically a computer that is always connected to the internet and is
// always listening for requests.
// Accepts requests, processes them, and sends back a response.
// e.g an HTML page, an image or file, or just plain data

// =======================================================================
// Request & Responses

// Request
// A request is made by a client to a server.
// When a device asks for a "resource" (data, file, image, etc) from a server.
// Requries a connction to the internet somehow.

// Response
// A response is sent by a server to a client.
// The server sends back the requested resource to the client.
// Could contain the resource (HTML, JSON data, ect), or an error message.
// Could contain a response saying the client isn't authorised...

// =======================================================================
// JSON Review

// JSON stands for JavaScript Object Notation.

// Example JSON data

// {
//     "name": "Mike",
//     "age": 30,
//     "city": "London"
// }

// =======================================================================
// URLS and Endpoints

// The makeup of a URL

// The base URL

// https://scrimba.com/api/

// The endpoint

// /courses
// /users
// /templates
// /resources/challenges
// /resources/test?test=typescript

// =======================================================================
// Fetching with .then()

// The fetch method is used to make a request to a server.
// The fetch method returns a promise.
// The promise resolves with a response object.
// The response object contains the response to the request.

fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data))

// .then() is used to handle the response from the server.
// The first .then() method takes a response object as an argument.
// The response object is then converted to JSON format.
// The second .then() method takes the JSON data as an argument.

fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const imageElement = document.createElement('img')
        imageElement.src = data.message
        imageElement.alt = 'random dog picture'
        document.getElementById('img-container').appendChild(imageElement)
    })

// =======================================================================
// Fetching with .then() Challenge

/*
Challenge:
    1. Make a fetch request to the "Bored" API: 
         Base URL: https://apis.scrimba.com/bored/api
         Endpoint: /activity
    2. Log an object containing an activity suggestion 
       to the console.
    🛟 hint.md for help!
*/

fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => console.log(data))

// =======================================================================
// Fetching with async/await

// The modern approach to fetching data is to use async/await.
// The async keyword is used to create an asynchronous function.
// The await keyword is used to pause the execution of the function until
// the promise is resolved.

// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data)) 

const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
const data = await response.json()

console.log(data)

// {message: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1932.jpg', status: 'success'}

// fetching with async

// if you want to use await, you need to wrap the code in an async function
// if for example the index.html does not include "module" in the script tag

async function fetchDogImage() {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    const data = await response.json()
    const imageElement = document.createElement('img')
    imageElement.src = data.message
    imageElement.alt = 'random dog picture'
    document.getElementById('img-container').appendChild(imageElement)
    console.log(data)
}

fetchDogImage()

// =======================================================================
// Fetching with async/await Challenge

/*
Challenge:
    1. Make a fetch request to the "Bored" API: 
         Base URL: https://apis.scrimba.com/bored/api
         Endpoint: /activity
    2. Log an object containing an activity suggestion 
       to the console.
    ⚠️ Make sure you use the async/await method!
    🛟 hint.md for help!
*/

async function getBoredAPI() {
    const response = await fetch('https://apis.scrimba.com/bored/api/activity')
    const data = await response.json()
    console.log(data)
}

getBoredAPI()

// {activity: 'Take your cat on a walk', type: 'relaxation', participants: 1, 
// price: 0.02, link: '', key: '5940465', accessibility: 0.1}

// =======================================================================
// Promises

// A promise is an object that represents the eventual completion or failure 
// of an asynchronous operation.

// The Promise object has 3 states:
// Pending: The initial state of a promise.
// Fulfilled: The state of a promise representing a successful operation.
// Rejected: The state of a promise representing a failed operation.

// Job interview example

// "We'll let you know within a week."

// Pending: The promise has yet to be completed

// Resolved/Fulfilled: The promise has been completed successfully

// Rejected: The promise was not completed as promised

// =======================================================================
// Handling Rejected Promises

// The catch method is used to handle rejected promises.

fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log(err)
        // update the DOM to warn the user
        // access an alternative API
    })

// .finally() is used to run code after the promise has been settled
// whether it was fulfilled or rejected.

fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log(err)
        // update the DOM to warn the user
        // access an alternative API
    })
    .finally(() => {
        console.log('I always run, no matter what')
    }

// ================================

/*
Challenge:
1. Convert the above code to use async/await, handle errors with 
“try/catch” blocks, and add a “finally” block.
*/

// if working in modular JS

try {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
    // update the DOM to warn the user
    // access an alternative API
    throw new Error('This is a network error!')
} finally {
    console.log('The operation completed.')
}

// =======================================================================
// response.ok

// The response.ok property is a boolean value that indicates whether 
// the response was successful.

// Status Code Basics
// 200-299: successful response: TRUE
// 400-499: client error: FALSE
// 500-599: server error: FALSE

// The response.ok property is used to check the success of the HTTP response status.

try {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/images/random')
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
    // update the DOM to warn the user
    // access an alternative API
} finally {
    console.log('The operation completed.')
}

// In Summary

// try/catch
// Catches exceptions and errors that occur during the execution of the code,
// including network errors and other uexpected issues.

// response.ok
// Checks the success of the HTTP response status, which might not throw
// an error but still indicates a failure.

// =======================================================================
// Taking APIs to the Next Level

/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
⚠️ Remember to handle all errors!
*/

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    if (!response.ok) {
        throw new Error('There is a problem with the API request')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
} finally {
    console.log('The operation is completed.')
}

// ================================

// Methods

// GET: Retrieve data from the server
// POST: Send data to the server
// PUT: Update data on the server
// DELETE: Remove data from the server
// PATCH: Update data on the server
// OPTIONS: Get information about the communication options available

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', { method: 'POST' })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
}

// =======================================================================
// API requests: the body

/*
Challenge:
1. Using the code snippet in the slide, add a body 
   property to the object we are passing with the 
   fetch request. I want you to create a new post 
   with the title “Holiday Nightmares” and the body 
   “When I was kidnapped in Scotland…” 
   
   In the console, you should see and object with an 
   ID, for example: {id: 101}
*/

// JSON.stringify() is used to convert a JavaScript object to a JSON string.

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: "Holiday Nightmares",
            body: "When I was kidnapped in Scotland...",
            userID: 999,
        })
    })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
}

// Headers

// Headers are used to provide additional information about the request or response.
// Headers are key/value pairs that are used to send information about the request or response.
// Headers contain; Extra (meta) info about the request, Authentication, 
// the type of info being sent...

/*
Challenge:
1. Add a headers object, setting the "Content-Type" to "application/json".
*/

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: 'Holiday Nightmares',
                body: 'When I was kidnapped in Scotland…',
                userId: 100
            }),
        })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
}

// {title: 'Holiday Nightmares', body: 'When I was kidnapped in Scotland…', userId: 100, id: 101}

// Challenge: How would you update a resource on this API?

// HTTP PUT request is used to replace and update the entire resource or document, while the PATCH request only updates the specific parts of that document.

// Difference between PUT and PATCH requests

// PUT: Replaces the entire resource or document

// Purpose: To replace the entire resource or document
// Data Handling: Replaces the entire resource or document
// Error Handling: If the resource doesn't exist, it may create a new one (Dep on implementation)
// Performance: it can be less efficient for large resources, as the entire resource is replaced
// Request body: Conatins the entire resource or document
// Use case: Best for replacing a reource entirely (e.g updating a user profile)
// Example: PUT /users/123 with the full user data

// Example

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts/101', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: 'Holiday Nightmares',
            body: 'When I was kidnapped in Scotland…',
            userId: 100
        })
    })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()

    console.log(data)
}

catch (err) {
    console.log(err)
}

// ================================

// PATCH: Updates specific parts of the resource or document

// Purpose: To update specific parts of the resource or document
// Data Handling: Requires only the changes (delta) to be sent
// Error handling: Typically used only for existing resources; may fail if the resource doesn't exist
// Performance: More efficient ffor small changes, as only the necessary data is sent
// Request body: Contains only the changes to be made
// Use case: Best for updating specific parts of a resource (e.g updating a user's email address)
// Example: PATCH /users/123 with {"email": "new@example.com"}

// Example

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts/101', {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: 'Holiday Nightmares',
            body: 'When I was kidnapped in Scotland…'
            // userId: 100
        })
    })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()

    console.log(data)
}

catch (err) {
    console.log(err)
}

// =======================================================================
// The Promise Contsructor

// The Promise constructor is used to create a new promise.
// The Promise constructor takes a function as an argument.
// The function takes two arguments, resolve and reject.
// The resolve argument is used to resolve the promise.
// The reject argument is used to reject the promise.

const myPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5
    if (success) {
        resolve('The promise was resolved!')
    } else {
        reject('The promise was rejected!')
    }
}

// The then method is used to handle the resolved promise.

myPromise.then(data => console.log(data))

try {
    const response = await promise
    console.log(response)
} catch (err) {
    console.log(err)
}

// =======================================================================
// Working with images asynchrously

//the new Image() constructor is used to create a new image element.
// The image element is used to display images on a webpage.
// The image() constructor preloads images before they are displayed.

const image = new Image()
image.src = "http://..."

console.log(image)

/*
Challenge:
1. Create two event listeners. One should listen 
   out for the image loading and log “Image has 
   loaded”. The other should listen for an error 
   and log “Image has NOT loaded”.
*/

const image = new Image()
image.src = "https://apis.scrimba.com/dog.ceo/api/breeds/image/random"

image.addEventListener('load', function () {
    console.log('Image has loaded')
})

image.addEventListener('error', function () {
    console.log('Image has NOT loaded')
})

image.addEventListener('load', () => console.log('Image has loaded'))
image.addEventListener('error', () => console.log('Image has NOT loaded'))

// =======================================================================
// Promise Challenge

/*
Challenge:
1. Return a new promise. The promise should:
    - create a new image and assign the incoming url 
      to its src attribute. (Use the Image constructor 
      for this!)
    - listen out for a load event. If a load event is 
      detected, the promise should resolve, providing the
      image element.
    - listen out for an “error” event. If an error 
      event is detected, the promise should reject giving 
      the message “img has NOT loaded”.
*/

function preLoadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.alt = "a beautiful scene"
        img.addEventListener('load', () => resolve(img))
        img.addEventListener('error', () => reject('img has NOT loaded'))
    })
}

try {
    const results = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
    console.log(results)
    document.getElementById('img-container').appendChild(results)
} catch (error) {
    console.error(error)
}

// =======================================================================
// Callback Hell

// Callback hell is a situation where multiple async operations are chained
// together in a way that makes the code difficult to read and maintain.

function uploadFile(callback) {
    console.log('Step 1: Uploading file...')
    setTimeout(() => {
        callback() // call next function
    }, 1000)
}
// process a file
function processFile(callback) {
    console.log('Step 2: Processing file...')
    setTimeout(() => {
        callback() // call next function
    }, 1000)
}
// notify a user
function notifyUser(callback) {
    console.log('Step 3: Notifying user...')
    setTimeout(() => {
        callback() // call next function
    }, 1000)
}

// uploadFile(()=> { processFile( ()=> { notifyUser( ()=> { console.log('All steps completed!') }) } ) })

uploadFile(() => {
    processFile(() => {
        notifyUser(() => {
            console.log('All steps completed!')
        })
    })
})

// Step1: Uploading file...
// Step2: Processing file...
// Step3: Notifying user...
// All steps completed!

// =======================================================================
// Using Promises to escape Callback Hell

function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function processFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function notifyUser() {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying user...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

/* 
Challenge:
1. Await these promises in order in a try/catch block and 
   when they are done, log 'All steps completed!'.
*/

try {
    await uploadFile()
    await processFile()
    await notifyUser()
    console.log('All steps complete')
} catch (error) {
    console.log(error)
}

// =======================================================================
// Promise.all

// The Promise.all method is used to run multiple promises at the same time.
// The Promise.all method takes an array of promises as an argument.
// The Promise.all method returns a single promise.

function createPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5
        if (success) {
            resolve("Operation successful!")
        } else {
            reject("Operation failed.")
        }
    })
}

try {
    const promise1 = createPromise()
    const promise2 = createPromise()
    const promise3 = createPromise()
    const result = await Promise.all([promise1, promise2, promise3])
    console.log(result)
} catch (err) {
    console.log(err)
}

// =======================================================================
// Super challenge: Async Image Load

/*
Challenge:
  1. Create an array of promises using getImagePromise.
  2. Save the results of calling all of those promises 
     in one go to a const 'results'.
  3. If the promises resolve: 
     - log "All images loaded successfully!".
     - hide 'uploadContainer'
     - iterate over the results and render them to imgContainer.
  4. If the promises reject:
     - catch and log the error.
*/

function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            img.alt = 'scenic image'
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)))
        }, 500)
    })
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
]

async function preloadImages(imageUrlsArr) {
    const imgContainer = document.getElementById('img-container')
    const uploadContainer = document.getElementById('upload-container')
    const promises = imageUrlsArr.map(url => getImagePromise(url))
    try {
        const results = await Promise.all(promises)
        console.log('All images loaded successfully!')
        uploadContainer.style.display = 'none'
        results.forEach(img => imgContainer.appendChild(img))
    } catch (error) {
        console.error(error)
    }
}

document.getElementById('submit-imgs').addEventListener('click', () => preloadImages(images))

// =======================================================================
// Asynchronous JavaScript & APIs Outro

// =======================================================================
//  Logical Operators & Coalescing
// =======================================================================

// =======================================================================
// Short-circuiting with OR (||)

// The OR (||) operator is used to return the first truthy value in a series of values.

const jobHunter = {
    name: 'Tom Chant',
    jobSearchArea: 'Europe',
}

const workLocation = jobHunter.jobSearchArea || 'Worldwide'
console.log(`${jobHunter.name}'s work location is ${workLocation}`)

// Tom Chant's work location is Europe

// ternary
// const workLocation = jobHunter.jobSearchArea ? jobHunter.jobSearchArea : 'Worldwide' 
// console.log(`${jobHunter.name}'s work location is ${workLocation}`)

// =======================================================================
// Short-circuiting with OR (||) Challenge

const jobHunter1 = {
    name: 'Tom Chant',
    username: 'TChant44',
    workLocation: 'Europe',
}

// const jobHunterName = jobHunter1.name || jobHunter1.username

console.log(`Hey ${jobHunter1.name || jobHunter1.username}, welcome to the job hunt!`)

// =======================================================================
// Short-circuiting with AND (&&)

// The AND (&&) operator is used to return the first truthy value in a series of values.

const user = {
    userName: 'Tom',
    role: 'admin',
}

user.role === 'admin' && console.log('Dashboard Displayed')

// Dashboard Displayed

// =======================================================================
// Short-circuiting with AND (&&) Challenge

/*
Challenge:
1. If the passcode passed into authenticationCheck 
   exists in swissBankPassCodesArr, authenticationCheck 
   should log out accountBalanceUsd. 
   
   If the passcode does not exist in swissBankPassCodesArr 
   then authenticationCheck need not do anything.
   
⚠️ Make sure you short-circuit with &&
   hint.md for help!
*/

const accountBalanceUsd = '$45,000,000,000 🤑💰'
const swissBankPassCodesArr = [1234, 5678, 9876, 3434]

function authenticationCheck(passCode) {

    swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd)

}

authenticationCheck(3434)

// =======================================================================
// Nullish Coalescing

// The nullish coalescing operator (??) is used to return the right-hand 
// operand when the left-hand operand is null or undefined.

function fetchUserBalance() {

    // This is where we would make call to bank's database

    const userBalance = 10
    return userBalance
}

const balance = fetchUserBalance()
const displayBalance = balance || "currently not available"

console.log(`Your balance is ${displayBalance}.`)

/*
Challenge:
    1. Figure what problem this code has and why it’s happening. 
       Don’t try to fix anything yet. 
*/

// the problem is that if the balance is 0, it will return "currently not available"

// ================================

// fixing the program

const displayBalance1 = balance ?? "currently not available"

// =======================================================================
// Optional Chaining

// The optional chaining operator (?.) is used to access a property of an object that might be undefined or null.

const library = {
    sections: {
        fiction: {
            genres: {
                fantasy: [
                    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
                    { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996 }
                ],
                scienceFiction: [
                    { title: "Dune", author: "Frank Herbert", year: 1965 },
                    { title: "Neuromancer", author: "William Gibson", year: 1984 }
                ]
            }
        }
    }
}

console.log(library && library.sections && library.sections.fiction && library.sections.fiction.genres && library.sections.fiction.genres.fantasy[0])

// {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937}

/*
Challenge:
    1. Apply optional chaining along the line to 
       log out The Hobit's year.
*/

console.log(library?.sections?.fiction?.genres?.fantasy[0]?.year)

// =======================================================================
// Super Challenge Library Software

const collection = []

function addBookToCollection(title, author, yearPublished, libraryData) {

    title = title || 'Unknown Title'
    author = author || 'Unknown Author'
    yearPublished = yearPublished ?? 'Not Specified'

    // let availability = 'Not Available' // Default value

    // if (libraryData?.locations?.mainLibrary) {
    //   availability = 'Available' || availability
    // }

    const availability = libraryData?.locations?.mainLibrary && "Available" || "Not Available"

    // Push the book object to 'collection'
    collection.push({
        title: title,
        author: author,
        yearPublished: yearPublished,
        availability: availability
    })
}
// Examples of adding a book
addBookToCollection('JavaScript: The Good Parts', 'Douglas Crockford', 2008, { locations: { mainLibrary: true } })
addBookToCollection('', 'William Shakespeare', null, null,)
addBookToCollection('House of Giants', 'Gemma Small', '', null, { locations: { mainLibrary: null } })
console.log(collection) // House of Giants is not yet published!!

// =======================================================================
// Logical Operators & Coalescing Outro

// =======================================================================
//  Working with Objects
// =======================================================================

// =======================================================================
// Working with Objects intro

// =======================================================================
// Objects and Inbuilt Methods

// Static Methods

// Static methods are methods that are called on the class itself, 
// not on an instance of the class.

// Static methods are used to create utility functions that are not tied 
// to a specific instance of the class.

// Static methods are defined using the static keyword.

const books = {
    "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "b002": { title: "1984", price: 15.99, isAvailable: false },
    "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

console.log(Object.keys(books))

// =======================================================================
// Object Methods Challenges 1

/*
Challenge:
  1. Use Object.keys to get an array of keys. 
     You can store it in a const 'bookKeys'. 
  2. Iterate over bookKeys twice.
     A) First log each individual key in the array.
     B) Then log only the book titles.
*/

const books1 = {
    "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "b002": { title: "1984", price: 15.99, isAvailable: false },
    "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

const bookKeys = Object.keys(books)
bookKeys.forEach(key => console.log(key))
bookKeys.forEach(key => console.log(books[key].title))

// b001
// b002
// b003
// // b004
// To Kill a Mockingbird
// 1984
// The Great Gatsby
// Moby Dick

// ================================

// Using Object.values

const bookValues = Object.values(books)

bookValues.forEach(value => {
    console.log(value.price)
})

// 18.99
// 15.99
// 12.49
// 22.5

// =======================================================================
// Object Methods Challenges 2

/*
Challenge:
  1. Use Object.entries to create an array from 'books'.
  2. Use an array method to filter out the books 
     which cost less than 16.
  3. Iterate over the remaining books and log a string 
     for each book in this format:
     ID: b001 Book: To Kill a Mockingbird £18.99

*/

/*
    Expected Output:
    ID: b001 Book: To Kill a Mockingbird £18.99
    ID: b004 Book: Moby Dick £22.5
*/

const books = {
    "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "b002": { title: "1984", price: 15.99, isAvailable: false },
    "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}


const bookEntries = Object.entries(books)

// Why the below works;
// filter iterates through the array of arrays the first parameter 'id'
// is assigned to each key, then the second parameter value is assigned to each
// element, which can later be assigned to .title, .price, . isAvailable for
// filtering

// Then, once the array has been filtered, the forEach method, then iterates
// through the returned array, again has two parameters book(each id), then (value)
// assigned each value after the key which can be accessed through .title...

bookEntries
    .filter(([id, value]) => {
        return price, value.price > 16
    })
    .forEach(([book, value]) => {
        console.log(`ID: ${book} Book: ${value.title} £${value.price}`)
    });

bookEntries
    .filter(([id, value]) => price, value.price > 16)
    .forEach(([book, value]) => console.log(`ID: ${book} Book: ${value.title} £${value.price}`))


/*
  Bonus points:
  1. Make your code DRYer by destructuring the array
     where it is passed into a method.
  2. Chain the array methods together.
  */

// =======================================================================
// Object.hasOwn & .hasOwnProperty()

// Object.hasOwn()

// The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.

const object1 = {
    prop: "exists",
};

console.log(Object.hasOwn(object1, "prop"));

// true

// ================================

// hasOwnProperty()

// The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));

// true

// ================================

/*
Challenge:
1. Write logic to check if the object has the property. 
   Do this challenge twice, once with hasOwn and once 
   with hasOwnProperty. All the function need do is return
   a boolean. 
   Bonus: use short circuiting to only return true if 
   'accessPremiumFeature' both exists AND is true.
*/

/*
Challenge:
1. Write logic to check if the object has the property. 
   Do this challenge twice, once with hasOwn and once 
   with hasOwnProperty. All the function need do is return
   a boolean. 
   Bonus: use short circuiting to only return true if 
   'accessPremiumFeature' both exists AND is true.
*/

const user1 = {
    username: "rpchan",
    subscriptionLevel: "bronze",
}

const user2 = {
    username: "bcstevens",
    subscriptionLevel: "silver",
    accessPremiumFeature: true
}

function canAccessPremiumFeature(userObj, prop) {

    // return userObj.hasOwnProperty(prop) && userObj[prop]
    return Object.hasOwn(userObj, prop) && userObj[prop]

    // if (Object.hasOwn(userObj, prop)) {
    //   return prop && true
    // } else {
    //   return false
    // }

    // if (userObj.hasOwnProperty(prop)) {
    //   return prop && true
    // } else {
    //   return false
    // }

}

console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature'))

// =======================================================================
// Assignment by Value/Reference

// With primative data types like (strings, numbers, bools) these can be
// re-assigned as you would expect. Because when you assign a primitive data
// type to a variable, it stores it in memory. E.g

let name = 'Eliot'
let newName = name
newName = 'Eliott'

console.log(name) // Eliot
console.log(newName) // Eliott

// ================================

// However with data structures like arrays, or objects, the variable is only
// holding a reference to the structure, and it is not being stored in memeory,
// on each instance. E.g

const names = ['Ben', 'Belen', 'Barbara', 'Betty']
const updatedNames = names
updatedNames[0] = 'Zoe'

console.log('names', names)
console.log('updatedNames', updatedNames)

// names ['Zoe', 'Belen', 'Barbara', 'Betty']
// updatedNames ['Zoe', 'Belen', 'Barbara', 'Betty']

// ================================

// Deep Copy vs Shallow Copy

// Shallow
// Creates a new object or array, but only at the first level. For nested 
// nested objects or arrays, a shallow copy will still hold references to
// the original nested objects or arrays.

// Deep
// Copies the entire array of Object

// =======================================================================
// Spread Operator (...)

// The spread operator is a shallow copy, and is used for expanding or joining arrays.

const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry']
const sweetMenu = ['Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']

console.log(...lunchMenu)
// Greek Salad,"Open Sandwich","Parsnip Soup","Flatbread and Dip"

console.log(lunchMenu)
// ["Greek Salad", "Open Sandwich", "Parsnip Soup", "Flatbread and Dip"]

// ================================

// (Shallow Copy)

const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu]

console.log(eventMenu)

// ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip', 'Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry', 'Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']

// ================================

// Spreading Objects

// const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
// const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry']
// const sweetMenu = [['Mixed Berry Ice Cream', 'Chocolate'], 'Chocolate Brownie', 'Orange Cheesecake']

// console.log(...lunchMenu)
// Greek Salad,"Open Sandwich","Parsnip Soup","Flatbread and Dip"

// const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu]
// eventMenu[8][0] = 'Tutti Frutti'
// console.log('sweetMenu', sweetMenu)
// console.log('eventMenu', eventMenu)

const salad1 = {
    name: 'green',
    ingredients: ['lettuce', 'tomato']
}
const salad2 = { ...salad1 }
salad2.name = 'Greek'
salad2.ingredients[0] = 'Cucumber'
console.log(salad1)
console.log(salad2)

//{name: 'green', ingredients: ['Cucumber', 'tomato']}
// {name: 'Greek', ingredients: ['Cucumber', 'tomato']}

// =======================================================================
// Spread Operator Challenge

/*
Challenge:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/

/*
Challenge:
2. Find the highest number from the array 
   and store it in the const 'highest'. 
3. Find the lowest number from the array 
   and store it in the const 'lowest'. 
*/

const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4]
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3]
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8]
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7]

function findPriceExtremes(arr) {
    //...arr spreads individual values of the array
    const highest = Math.max(...arr)
    const lowest = Math.min(...arr)
    console.log(`The highest average share price was ${highest}`)
    console.log(`The lowest average share price was ${lowest}`)
}

findPriceExtremes([...averageSharePriceByMonthQ1, ...averageSharePriceByMonthQ2, ...averageSharePriceByMonthQ3, ...averageSharePriceByMonthQ4])

// =======================================================================
// Object.assign

// Copies properties from a source object to a target object
// Returns the new version of the target object

Object.assign(target, source)

const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
}

const studentDetailsCopy = {}

Object.assign(studentDetailsCopy, studentDetails)

// =======================================================================
// StructuredClone

// Used to create a deep clone of a data structure

const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    modulesCompleted: ['html', 'js', 'css']
}

const deepClonedStudentDetails = structuredClone(studentDetails)
deepClonedStudentDetails.modulesCompleted[0] = 'TS'
console.log(studentDetails)
console.log(deepClonedStudentDetails)

// {firstName: "janaka", lastName: "siriwardena", age: 28, country: "sri lanka", email: "j.siri@totalinternet.com", discordUsername: "JS1", modulesCompleted: ["html", "js", "css"]}
// {firstName: "janaka", lastName: "siriwardena", age: 28, country: "sri lanka", email: "j.siri@totalinternet.com", discordUsername: "JS1", modulesCompleted: ["TS", "js", "css"]}

// =======================================================================
// Objects with Methods and 'this

const gamer = {
    name: 'Dave',
    score: 0,
    incrementScore: function () {
        gamer.score++
    }
}

console.log(gamer)
gamer.incrementScore()
console.log(gamer)

//{name: 'Dave', score: 0, incrementScore: ƒ()}
//{name: 'Dave', score: 1, incrementScore: ƒ()}

// ================================

// When you need to refer to the object you can use 'this'

const gamer1 = {
    name: 'Dave',
    score: 0,
    incrementScore: function () {
        //this
        console.log(this)
        // gamer.score++   
    }
}

gamer.incrementScore()

//{name: 'Dave', score: 0, incrementScore: ƒ()}

// ================================

// Using this

const gamer2 = {
    name: 'Dave',
    score: 0,
    incrementScore: function () {
        this.score++
    }
}

console.log(gamer)
gamer.incrementScore()
console.log(gamer)

// ================================

const gamer3 = {
    name: 'Dave',
    score: 0,
    incrementScore: function () {
        this.score++
    }
}

const gamer14 = {
    name: 'Sarah',
    score: 0,
    incrementScore: function () {
        this.score++
    }
}

gamer.incrementScore()
gamer1.incrementScore()
console.log(gamer)
console.log(gamer1)

// =======================================================================
// Binding "this"

const product = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function () {
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}

const productDetails = product.getProductInfo.bind(product)

productDetails()

// =======================================================================
// Binding "this" challenge

/*
Challenge 1:
  What is the 'this' value of 'product.getProductInfo' as we
  are using it now in the eventListener?
  Write your answer here: this is refeering to the anonymous function

Challenge 2:
  Debug the code so it works as intended.
*/

const button = document.getElementById('btn')

const product1 = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function () {
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}

// const productInfo = product.getProductInfo.bind(product)

button.addEventListener('click', product1.getProductInfo.bind(product1))

// =======================================================================
// Working with Objects outro

// =======================================================================
//  Creating Custom Objects
// =======================================================================

// =======================================================================
// Creating Custom Objects Intro

// =======================================================================
// Creating Objects Explainer

// There are three ways to create objects programmatically
// Factory functions, Constructor functions, Classes

// =======================================================================
// Factory Functions

// A factory function is just a normal function that returns an object

function gamer(name, score) {
    return {
        name: name,
        score: score
    }
}

const alice = gamer('Alice', 10)
console.log(alice)

// {name: 'Alice', score: 10}

// ================================

// Object Property Value Shorthand

function gamer(name, score) {
    return {
        name,
        score,
        incrementScore() {
            this.score++
        }
    }
}

const alice = gamer('Alice', 10)
console.log(alice)
alice.incrementScore()
console.log(alice)

// {name: 'Alice', score: 10}
// {name: 'Alice', score: 11}

// ================================

// Pros and Cons to factory functions

// Pros
// The syntax is familar
// The syntax is easy to read

// Cons
// Less performant
// No Inheritance

// =======================================================================
// Constructor Functions

function Gamer(name, score) {
    this.name = name
    this.score = score
    this.incrementScore = function () {
        this.score++
    }
}

const dave = new Gamer('Dave', 0)
console.log(dave)
dave.incrementScore()
console.log(dave)

// Gamer {name: 'Dave', score: 0}
// Gamer {name: 'Dave', score: 1}

// =======================================================================
// Constructor Function Challenge

/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
    - 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/

function Character(name) {
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function (item) {
        this.collectedItemsArr.push(` ${item}`)
        console.log(`${this.name} now has: ${this.collectedItemsArr}`)
    }
}

const ian = new Character('Frank')
ian.addItem('berry')
ian.addItem('potion')
ian.addItem('sword')

// Frank now has: berry
// Frank now has: berry, potion
// Frank now has: berry, potion, sword

// Instructor Solution

function Character(name) {
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function (item) {
        this.collectedItemsArr.push(` ${item}`)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}


// =======================================================================
// Constructor Function to Classes

// Class is a special function that works as a template for creating objects 
// The difference between classes and constructor functions, is that classes,
// are not hoisted, and need to be initialised before declaration.
class Gamer {
    constructor(name, score) {
        this.name = name
        this.score = score
    }

    incrementScore() {
        this.score++
    }
}

const dave1 = new Gamer('Dave', 0)
dave.incrementScore()
console.log(dave1)


// Gamer {name: 'Dave', score: 1}

// =======================================================================
// Constructor Function to Classes Challenge

/*
Challenge:
Rebuild this constructor function as a class.
*/

// function Character(name) {
//     this.name = name
//     this.collectedItemsArr = []
//     this.addItem = function (item) {
//         this.collectedItemsArr.push(item)
//         console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
//     }
// }
class Character {
    constructor(name) {
        this.name = name
        this.collectedItemsArr = []
    }

    addItem(item) {
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }

}

const wizard = new Character('Merlin')
wizard.addItem('a wand')

// =======================================================================
// .apply() and .call()

// .apply() & .call() allow you to control the value of 'this.example' when
// invoking functions

// The call() method of Function instances calls this function with a given 
// this value and arguments provided individually.

function displayPolitician(currentSituation) {
    // console.log(this)
    console.log(`${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`)
}

const politician1 = {
    name: 'Carly Fowler',
    age: 40
}

const politician2 = {
    name: 'Dave Bland',
    age: 55
}

displayPolitician.call(politician1, 'In jail for corruption.')
displayPolitician.call(politician2, 'Resigned due to incompetence')

// Carly Fowler is 40 years old. Current situation: In jail for corruption.
// Dave Bland is 55 years old. Current situation: Resigned due to incompetence.

// ================================

// The apply() method of Function instances calls this function with a given 
// this value, and arguments provided as an array (or an array-like object).

displayPolitician.apply(politician1, ['In jail for corruption'])

// Carly Fowler is 40 years old. Current situation: In jail for corruption.

// =======================================================================
// Inheritance Explainer

// Inheritance is the mechanism by which objects inherit properties and methods
// from other objects

// The Prototype Chain
// obj 1 (properties, methods) -> obj 2 (inherits obj 1) (properties, methods) ->
// obj 3 (inherits obj 2) (properties, methods)

// On the first initialisation of an object, for example obj 1, this becomes
// the 'Prototype Object', which essentially means the base object.

// Polymorphism
// Polymorphism allows methods to have different implementations on different
// objects. An object can override a method it inherits, adapting it for 
// specific needs.

// =======================================================================
// Inheritance with constructor functions

function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
    this.getDetails = function () {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

// When creating a new function, you use the .call method and pass in the
// parameters from the base object, in this example 'Event'

function Concert(name, location, date, headliner) {
    Event.call(this, name, location, date)
    this.headliner = headliner
}

// The you create a new instance of the object, and assign the prototype
// that you are chaining, to the object it is inheriting

Concert.prototype = Object.create(Event.prototype)
Concert.prototype.constructor = Concert

const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15",
    "The Electrons")

// Concert {name: 'Summer Beats', location: 'City Stadium', date: '2024-07-15', headliner: 'The Electrons'}

console.log(concert.getDetails())

// Event: Summer Beats, Location: City Stadium, Date: 2024-07-15

// =======================================================================
// Polymorphism with constructor functions

// Overriding Inherited Methods on Constructor Functions

// When declaring a constructor function, if the base constructor has a method,
// for example in 'Event' above there is 'getDetails()', this will be re-created
// and stored in memory for every new contructor inherited from the base.

// To make sure a method only exists once in memory, you will use the 
// prototype method

function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
}

Event.prototype.getDetails = function () {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
}

// Modifying an inherited method

Concert.prototype.getDetails = function () {
    const eventBasics = Event.prototype.getDetails.call(this)
    return `${eventBasics} Headliner: ${this.headliner}`
}

// Event: Summer Beats, Location: City Stadium, Date: 2024-07-15 Headliner: The Electrons

// =======================================================================
// Inheritance with constructor functions Challenge

/*
Challenge:
    1. Set up a constructor for 'Conference' which 
       should take in 'keynoteSpeaker' as a parameter. 
    2. 'Conference' should inherit from 'Event'.
    3. 'Conference' should have its own method 'getDetails'
       which calls Event's getDetails method and returns a string 
       with name, location, date, and keynote speaker.  
    4. When you set up an instance of Conference and call 
       getDetails you should log out: 
       Event: 10 Nights of JS, Location: Scrimba HQ, Date: 2025-09-29 Keynote Speaker: Ashley Smith
       📝 The new method should be on the prototype. 
*/

function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
}

Event.prototype.getDetails = function () {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
}

function Conference(name, location, date, keynoteSpeaker) {
    Event.call(this, name, location, date)
    this.keynoteSpeaker = keynoteSpeaker
}

Conference.prototype = Object.create(Event.prototype)
Conference.prototype.constructor = Conference

Conference.prototype.getDetails = function () {
    const conferenceDetails = Event.prototype.getDetails.call(this)
    return `${conferenceDetails} Keynote Speaker: ${this.keynoteSpeaker}`
}

const conference = new Conference("10 Nights of JS", "Scrimba HQ", "2025-09-29", "Ashley Smith")
console.log(conference.getDetails())

// =======================================================================
// Inheritance with classes

// The 'super' keyword
// Acesses the properties on the superclass's prototype
// Invoke the superclass's constructor

class Event {
    constructor(name, location, date) {
        this.name = name
        this.location = location
        this.date = date
    }

    getDetails() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

class Concert extends Event {
    constructor(name, location, date, headliner) {
        super(name, location, date)
        this.headliner = headliner
    }

    getDetails() {
        const eventBasics = super.getDetails()
        return `${eventBasics} Headliner: ${this.headliner}`
    }
}

const concert1 = new Concert("Summer Beats", "City Stadium", "2023-07-15", "The Electrons")
console.log(concert.getDetails())

// 

// =======================================================================
// Inheritance with classes challenge

/*
Challenge:
    1. Set up a class 'TennisMatch' which
       should take in 'player1' and 'player2' as parameters.
    2. 'TennisMatch' should inherit properties and methods
       from 'Event'.
    3. 'TennisMatch' should have its own method 'getDetails'
       which calls Event's getDetails method to get the
       basic details of the event. It should return this string:
       ${eventBasics} Match: ${this.player1} vs ${this.player2}
    4. Uncomment my code below to create a new instance of TennisMatch
       and call the getDetails method.
       Hint.md for help 🛟
*/

class Event {
    constructor(name, location, date) {
        this.name = name
        this.location = location
        this.date = date
    }

    getDetails() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

class TennisMatch extends Event {
    constructor(name, location, date, player1, player2) {
        super(name, location, date)
        this.player1 = player1
        this.player2 = player2
    }

    getDetails() {
        const getDetailsMethod = super.getDetails()
        return `${getDetailsMethod} Match: ${this.player1} vs ${this.player2}`
    }
}

const tennisMatch = new TennisMatch("Grand Slam Final", "Wimbledon", "2025-07-15",
    "J Bloggs", "B Doe")
console.log(tennisMatch.getDetails())

// Event: Grand Slam Final, Location: Wimbledon, Date: 2025-07-15 Match: J Bloggs vs B Doe

// =======================================================================
// Static methods and properties

// The static keyword defines a static method or field for a class, or a static
//  initialization block (see the link for more information about this usage). 
// Static properties cannot be directly accessed on instances of the class. 
// Instead, they're accessed on the class itself.

// Static methods are often utility functions, such as functions to create 
// or clone objects, whereas static properties are useful for caches, 
// fixed-configuration, or any other data you don't need to be replicated 
// across instances.

class Employee {
    static employeeCount = 0
    constructor(name) {
        this.name = name
        Employee.employeeCount++
    }

    static getEmployeeCount() {
        return Employee.employeeCount
    }
}

const employee1 = new Employee("Alice")
const employee2 = new Employee("Bob")
const employee3 = new Employee("Smith")
console.log(Employee.getEmployeeCount())


// =======================================================================
// Static methods challenge

/*
Challenge:
1. Set up a static method called getNewIntern. 
   getNewIntern should return an object with a 'name' property, 
   a 'role' property which is hard-coded to ‘intern’, and a 
   'startDate' property which should be the time of code execution. 
   (🤔 How can you use JS to get the time right now?)
*/

class Employee {
    constructor(name) {
        this.name = name
    }

    static getNewIntern(name, role, startDate) {
        return {
            name: name,
            role: 'intern',
            startDate: (new Date).toDateString()
        }
    }

}

console.log(Employee.getNewIntern('Dave'))


// =======================================================================
// Private fields

// Private fields can be added to constructors values within a class so that
// they cannot be reassigned later in the program.
// The Privtae Fields syntax is '#'

class Holiday {
    #destination
    constructor(destination, price) {
        this.#destination = destination
        this.price = price
    }
}

const safari = new Holiday('Kenya', 1000)
safari.destination = 'Tanzania' // Error
console.log(safari)

// =======================================================================
// Getters and Setters

// Getters allow you to return values that have been protected by a private field.
// Setters allow you to change values that have been protected by a private field.

class Holiday {
    #destination
    constructor(destination, price) {
        this.#destination = destination
        this.price = price
    }

    get destination() {
        return this.#destination
    }

    set destination(newDestination) {
        if (typeof newDestination !== 'string' || newDestination.length <= 0) {
            throw new Error('Destination not valid')
        }
        this.#destination = newDestination
    }
}

const safari = new Holiday('Kenya', 1000)
safari.destination = ''
console.log(safari.destination)

// =======================================================================
// Getters and Setters Challenge

/*
Challenge:
    1. Make 'price' a private field.
    2. Create a getter for price which appends a $ sign 
       to the front and displays it to a max of 2 decimal 
       places. 
    3. Create a setter for price which updates price with a 
       new price.
    4. Test! 
*/

/*
Challenge:
    1. Make 'price' a private field.
    2. Create a getter for price which appends a $ sign 
       to the front and displays it to a max of 2 decimal 
       places. 
    3. Create a setter for price which updates price with a 
       new price.
    4. Test! 
*/

class Holiday {
    #destination
    #price
    constructor(destination, price) {
        this.#destination = destination
        this.#price = price
    }

    get price() {
        return `$${this.#price.toFixed(2)}`
    }

    get destination() {
        return this.#destination
    }

    set price(newPrice) {
        if (typeof newPrice !== "number" || newPrice <= 0) {
            throw new Error('Invalid Price')
        }
        this.#price = newPrice
    }

    set destination(newDestination) {
        if (typeof newDestination !== 'string' || newDestination.length <= 0) {
            throw new Error('Destination not valid')
        }
        this.#destination = newDestination
    }
}

const safari = new Holiday('Kenya', 1000)
console.log(safari.price)
safari.price = 2345
console.log(safari.price)

// $1000.00
// $2345.00

// =======================================================================
// Super Challenge: Game Characters

/* Base Character Class
Your task is to design and implement a Character class with properties 'name' (a string), 'health' (a number), and isAlive (a boolean). This class will serve as a foundation for a simple game or simulation where characters can take damage and possibly "die" if their health reaches zero.

Class Structure:
Your class should have:
- a name property that is set through the constructor.
- a private health property initialized to 100.
- a static property count to track how many characters have been created.

Static Methods to add:
- incrementCount() to increase the count each time a new character is instantiated.
- getCount() to return the current number of characters.

Health Management:
- Include a getter and a setter for health. The setter should ensure that the health value does not fall below zero.

Damage Functionality:
- Implement a method 'takeDamage' which decreases the health value by a specified amount. 

Alive Status:
- Implement a getter for 'isAlive' that returns a boolean value. A character is considered alive if their health is greater than zero.

Status Report:
- Implement a method getStatus() that returns a string stating the character's name, 
  current health, and whether they are alive or dead.
*/

// ================================

/* The Hero class
The Hero class should inherit from Character. This new class should include additional functionality to manage an inventory of items that the hero can collect during gameplay.
 
Constructor:
- The constructor for the Hero class should initialize the hero with a name and an empty inventory for items.
 
Inventory Management:
- Implement a method pickUpItem that allows the hero to add items to their inventory.
- Items should simply be added to an array.
 
Item Retrieval:
- Implement a method getItems that returns a string listing all the items in the hero's inventory.
*/

// ================================

/* The Villain class
The Villain class should inherit from Character. This new class should include additional functionality to allow the villain to issue a threat.
 
Constructor:
- The constructor for the Villain class should initialize the villain with a name and a threat.
 
Threat
- The getThreat method should simply return the threat.
*/

class Character {
    #health;
    static count = 0;

    constructor(name, health = 250, isAlive = true) {
        this.name = name;
        this.#health = health;
        this.isAlive = isAlive;
        Character.count++;
    }

    static getCount() {
        return Character.count;
    }

    get health() {
        return `Current health: ${this.#health}`;
    }

    set health(newHealth) {
        if (typeof newHealth !== "number" || newHealth <= 0) {
            throw new Error('Health cannot fall below 0');
        }
        this.#health = newHealth;
    }

    takeDamage(damage) {
        this.health = this.#health - damage;
        if (this.#health <= 0) {
            this.isAlive = false;
        }
    }

    getStatus() {
        return `Status Report: ${this.name}: ${this.health}: Alive: ${this.isAlive}`;
    }
}

class Hero extends Character {
    constructor(name, health = 250, isAlive = true, inventory = []) {
        super(name, health, isAlive)
        this.inventory = inventory
    }

    pickUpItem(item) {
        this.inventory.push(item)
    }

    getItems() {
        return this.inventory
    }
}

class Villain extends Character {
    constructor(name, threat, health = 250, isAlive = true) {
        super(name, health, isAlive)
        this.threat = threat;
    }

    getThreat() {
        return `${this.threat}`
    }
}

// Example Usage
const merlin = new Hero("Merlin")
const medea = new Hero("Medea")
const troll = new Villain("Troll", 'I will destroy your soul!')

console.log(troll.getThreat()) // I will destroy your soul!
merlin.pickUpItem("Sword")
merlin.takeDamage(15)
medea.takeDamage(5)
medea.pickUpItem("Shield")
console.log(merlin.getItems()) // Merlin has the following items: Sword
console.log(medea.getItems()) // Medea has the following items: Shield
troll.takeDamage(101)
console.log(troll.getStatus()) //Troll has 0 health and is dead.
console.log(medea.getStatus()) // Medea has 95 health and is alive.`
console.log(merlin.getStatus()) // Merlin has 85 health and is alive.

console.log(`Total characters created: ${Character.getCount()} `) // Total characters created: 3


// =======================================================================
// Creating Custom Objects outro

// =======================================================================
//  Collections & Symbols
// =======================================================================

// =======================================================================
// Collections and Symbols intro

// Symbols: Are used to represent unique values, which can be used as identifiers,
// or keys in objects.

// Map: The Map object holds key-value pairs and remembers the original 
// insertion order of the keys. Any value (both objects and primitive values) 
// may be used as either a key or a value.

// Set Object: The Set object lets you store unique values of any type, 
// whether primitive values or object references.

// =======================================================================
// Symbols

// A primitive data type
// An immutable identifier used as a property key in objects
// Each symbol is unique
// (A bit like UUIDs/GUIDs)

const userName = Symbol('user name')
const userName1 = Symbol('user name')

console.log(userName === userName1)

// false

// ================================

// Adding Symbols to Objects

const userName2 = Symbol('user name')

const user3 = {
    name: 'Benny',
}

user3[userName2] = 'Benny67'

console.log(user[userName])

// Benny67


// =======================================================================
// Symbols Challenge

/*
Challenge:
    1. Add a hidden property to the book object 
       holding a librarian’s note to say the book 
       has gone missing. 
    2. Log out the new property.
*/


const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
}

const librarianNote = Symbol()
book[librarianNote] = ' Book is na'

console.log(book[note])

// Book is na

// =======================================================================
// The Map object

// In Maps the insertion order is guarenteed.

const athlete1 = { name: "Alice", age: "50" }
const athlete2 = { name: "Dave", age: "51" }
const athlete3 = { name: "Nicky", age: "49" }

const finishers = new Map()

finishers.set(athlete1, 10000)
finishers.set(athlete2, 10200)
finishers.set(athlete3, 10000)
console.log(finishers)

finishers.forEach((value, key)=> console.log(key.name, value))

// Alice 10000
// Dave 10200
// Nicky 9800

console.log(finishers.size)

// 3

console.log(finishers.get(athlete1))

// 10000

console.log(finishers.delete(athlete1))
finishers.forEach((value, key)=> console.log(key.name, value))

// true
// Dave 10200
// Nicky 9800

// =======================================================================
// Map Object Challenge

const athlete1 = { name: 'Alice', averageTime10KmMins: 58.3 }
const athlete2 = { name: 'Dave', averageTime10KmMins: 53.2 }
const athlete3 = { name: 'Micky', averageTime10KmMins: 64.5 }
const athlete4 = { name: 'Judy', averageTime10KmMins: 66.0 }

/* Challenge */

/* 1. Create a map object "athletes" to store the athletes. */

const atheletes = new Map()

function addAthlete(athlete, time) {
/* 2. This function should add athletes to the "athletes" map. */
atheletes.set(athlete, time)

}

function getSummary(){
/* This function should make the following appear in the console */

atheletes.forEach((value, key) => console.log(`${key.name}'s average time is ${key.averageTime10KmMins} but today ${key.name} achieved ${value}`))
    
//Alice's average time is 58.3 but today Alice achieved 57.3
//Dave's average time is 53.2 but today Dave achieved 61.1
//Micky's average time is 64.5 but today Micky achieved 59.9
//Judy's average time is 66 but today Judy achieved 61.6
}

addAthlete(athlete1, 57.3)
addAthlete(athlete2, 61.1)
addAthlete(athlete3, 59.9)
addAthlete(athlete4, 61.6)

getSummary()

// =======================================================================
// The Set Object

// A set object stores unique values as individual items, not key/value pairs.
// It's a bit like an array but with each item unique - no duplicates

const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes']

const wishListSet = new Set(wishListArr)

wishListSet.add('diary')
wishListSet.delete('shoes')
console.log(wishListSet.has('shoes'))
wishListSet.clear()

console.log(wishListSet) 

//Set(3) {'shoes', 'after shave', 'tesla'}

// ================================

const wishListArr1 = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes']

const wishListSet1 = Array.from(new Set(wishListArr))

wishListSet.map((listItem) => console.log(listItem))

// shoes
// after shave
// tesla

// =======================================================================
// Sets Challenge

/* Challenge:
    1. Refactor this code to use a Set instead  
       of an array so no tags can be duplicated!
*/

const postTags = new Set()

function addTag(newTag) {
    postTagsSet.add(newTag)

}

addTag('history')
addTag('romans')
addTag('sociology')
addTag('history')
addTag('history')

postTagsSet.forEach((tag) => console.log(tag))


// =======================================================================
// Collections and Symbols Outro

// =======================================================================
// Advanced Function Patters & Generators
// =======================================================================

// =======================================================================
// Advanced Function Patterns Intro

// =======================================================================
// Closures

// =======================================================================
// Closures Part 2

// =======================================================================
// Closures Challenge

// =======================================================================
// IIFEs

// =======================================================================
// Recursion Basic Example

// =======================================================================
// Recursion Sum all numbers

// =======================================================================
// Recursion and Unwinding

// =======================================================================
// Recursion Challenge

// =======================================================================
// Currying

// =======================================================================
// Currying Partial Application

// =======================================================================
// Currying Challenge

// =======================================================================
// Throttling and Debouncing

// =======================================================================
// Throttling

// =======================================================================
// Throttling Debug Challenge

// =======================================================================
// Debouncing

// =======================================================================
// Generators

// =======================================================================
// Generators Challenge

// =======================================================================
// Debouncing and Generators Super Challenge

// =======================================================================
// Super Challenge Recursion

// =======================================================================
// Advanced Function Patterns outro

// =======================================================================
// Course Outro