//This is how to comment in javascript
var drink = "";
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
var queryURLgiphy = "http://api.giphy.com/v1/gifs/search?q=" + drink + "&api_key=KzTNLUmjkNMNh8q6dfPusWKX78lyCNaV&limit=5";
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
document.getElementById("giphy-link").style.display = 'none';

$("#run-search").on("click", function(event) {
    event.preventDefault();
    drink = document.getElementById("search-term").value;
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
    queryURLgiphy = "http://api.giphy.com/v1/gifs/search?q=" + drink + "&api_key=KzTNLUmjkNMNh8q6dfPusWKX78lyCNaV&limit=5";
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
      $.ajax({
        url: queryURLgiphy,
        method: "GET"
      }).then(function(response) {
        console.log(queryURLgiphy);
        console.log(response);
        document.getElementById("giphy-embed").src = response.data[0].embed_url;
        document.getElementById("giphy-link").href = response.data[0].url;
        document.getElementById("giphy-link").style.display = 'block';
      });
});

  //Giphy API key
  //KzTNLUmjkNMNh8q6dfPusWKX78lyCNaV

