//This is how to comment in javascript
var drink = "margarita"
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink

//testing a margarita
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.drinks[0]);
    console.log(response.drinks[0].strDrink);
    console.log(response.drinks[0].strDrink);
  });