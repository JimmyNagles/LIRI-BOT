require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

console.log(process.argv)

search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);