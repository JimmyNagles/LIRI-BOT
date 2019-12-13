require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);



// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var action = inputString[2];
var search = inputString[3];



// Determines the operand selected...
// Based on the operand we run the appropriate math on the two numbers
switch (action) {

  //for concert
  case "concert-this":




    break;
//for spotify song
  case "spotify-this-song":

    break;
//movies
  case "movie-this":



    break;
//do what it says
  case "do-what-it-says":



    break;

};