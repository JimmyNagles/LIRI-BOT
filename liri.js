// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
var fs = require("fs");

//type of search tv or actor
let search = process.argv[2];
//person or show youre looking for
//slice takes everything after the 3 argv and
// "join" them into a string
let term = process.argv.slice(3).join(" ");

if (!search) {

  search = "show"
  term = "Friends"

}

//spotify search
if (search === "spotify") {

  console.log("we're searching for a show")
  spotify();

}

//movie search
if (search === "movie") {

  movie();


}


//band search
if (search === "bands") {

  bandInTwon();

}


//when command is not avaible
else {

  console.log("seems like you didnt typed the right command try again!")
}


console.log("Search:", search)

console.log("term:", term)



//searches on spotify
function spotify() {


}





// searching for a movie
function movie() {
  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + term + "&apikey=f191ad9f";
  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  // Make a request for a user with a given ID
  axios.get(queryUrl)
    .then(function (response) {
      // handle success
      

      movieInfo = response.data;



      console.log( response.data.Title);
         console.log(response.data.Year);
      console.log( response.data.imdbRating);
         console.log( response.data.Country);
       console.log( response.data.Language);
        console.log(response.data.Plot);
       console.log( response.data.Actors);







    })



}
//searches bands in town
function bandInTwon() {



  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
  // This line is just to help us debug against the actual URL.
 

  // Make a request for a user with a given ID
  axios.get(queryUrl)
    .then(function (response) {
      // handle success
      
      

       console.log(response.data[0].venue.name);
       console.log(`${response.data[0].venue.city}, ${response.data[0].venue.region}, ${response.data[0].venue.country}`);
      //  console.log(moment(response.data[0].datetime).format(‘dddd, MMMM Do YYYY, h: mm a’));





    })

}