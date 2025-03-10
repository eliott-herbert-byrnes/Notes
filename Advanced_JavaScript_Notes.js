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

// imports the array of contacts from the external contactsData.js file
// contactsArr is now available within this script, and contains an array 
// of contact objects.

import { contactsArr } from '/contactsData.js'

// patternSearchInput refers to the input box where users type their search
// patternSearchSubmit refers to the button that users click to submit their search
// contactDisplay refers to the section where the search results will be displayed

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

// When the submit button is clicked, the findingMatchingContacts function is called
// with the contactsArr and the value of the patternSearchInput as arguments
// contactArr is the array of contacts, 
// and patternSearchInput.value is the search term

patternSearchSubmit.addEventListener('click', function () {
    findingMatchingContacts(contactsArr, patternSearchInput.value)
})

// The findingMatchingContacts function takes an array of contacts and 
// a search pattern as arguments
// It filters the contacts array based on the search pattern
// and then passes each matching contact to the renderContact function

function findingMatchingContacts(contactsArr, pattern) {
    // clears the previous search results

    contactDisplay.innerHTML = ''

    // 'new RegExp(pattern, 'i')' creates a case insesitive search pattern
    // 'i' is the flag for case insensitivity
    // if the user enters 'jane', the search will match 'Jane', 'jane', 'JANE', etc.

    const regex = new RegExp(pattern, 'i')

    // .filter() loops through each contact in contactsArr
    // regex.test(contact.name) checks if the contact's name matches the search pattern)
    // it returns a new array of contacts that match the search pattern

    contactsArr.filter(contact => regex.test(contact.name))
        // .forEach() loops through each contact in the new array
        // Each matched contact is passed to renderContact() for display
        .forEach(contact => renderContact(contact))
}

// The renderContact function takes a contact object as an argument

function renderContact(contactObj) {

    // Destructures the contact object
    const { name, email, phone } = contactObj

    // Creates a new aside element for the contact card
    const contactCard = document.createElement('aside')
    // Adds the css to the contact card
    contactCard.classList.add('contact-card')

    // Creates the elements for the contact card
    // and sets the text content to the contact's name, email, and phone number
    const nameElem = document.createElement('p')
    nameElem.innerText = name
    const emailElem = document.createElement('p')
    emailElem.innerText = email
    const phoneElem = document.createElement('p')
    phoneElem.innerText = phone

    // Appends the name, email, and phone elements to the contact card
    contactCard.appendChild(nameElem)
    contactCard.appendChild(emailElem)
    contactCard.appendChild(phoneElem)

    // Appends the contact card to the contact display section
    contactDisplay.appendChild(contactCard)
}

// =======================================================================
// Super Challenge: Contact Search Solution

// =======================================================================
// Methods & Loops Outro

