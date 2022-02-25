/*
 * title: Practice node.js
 * description: simple node application that print random quotes per second interval
 * author: Jehad Hossain
 * date: 25 feb 2022
 */

// dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// function that prints a random quote
app.printAQuote = function printAQuote() {
    // get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNum(1, numberOfQuotes);

    // get the quote at that position in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];

    // print the quote to the console
    console.log(selectedQuote);
};

// function that loops indefinitely, calling the print a quote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// invoke the loop
app.indefiniteLoop();
