//This is how to comment in javascript
var drink = "margarita";
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
var queryURLgiphy = "http://api.giphy.com/v1/gifs/search?q=" + drink + "&api_key=KzTNLUmjkNMNh8q6dfPusWKX78lyCNaV&limit=5";

//testing a margarita
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.drinks[0]);
    console.log(response.drinks[0].strDrink);
  });

$.ajax({
    url: queryURLgiphy,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.data[0].url);
  });

  //Giphy API key
  //KzTNLUmjkNMNh8q6dfPusWKX78lyCNaV