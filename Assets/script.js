//This is how to comment in javascript
var drink = "";
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
var queryURLgiphy = "http://api.giphy.com/v1/gifs/search?q=" + drink + "&api_key=KzTNLUmjkNMNh8q6dfPusWKX78lyCNaV&limit=5";
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;

$("#run-search").on("click", function(event) {
    event.preventDefault();
    drink = document.getElementById("search-term").value;
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(drink);
        console.log(queryURL);
        console.log(response);
        console.log(response.drinks[0].strDrink);
        document.getElementById("drinkName").innerHTML = response.drinks[0].strDrink;
      });
});

  function findDrink(response) {
    document.getElementById("drinkName").innerHTML = response.drinks[0].strDrink;
  };

  //Giphy API key
  //KzTNLUmjkNMNh8q6dfPusWKX78lyCNaV

