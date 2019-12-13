require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);



// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var action = inputString[2];
var search = inputString.slice(3);



// Determines the operand selected...
// Based on the operand we run the appropriate math on the two numbers
switch (action) {

  //for spotify song
    case "spotify-this-song":
      
      var Spotify = require('node-spotify-api');
 
      var spotify = new Spotify({
        id: <your spotify client id>,
        secret: <your spotify client secret>
      });
       
      spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });




      break;
      
      
      
      //for concert
  case "concert-this":




    break;

//movies
  case "movie-this":



    break;



};