// Pop Up Age Verification 
$(document).ready(function(){
  $('.modal').modal();
  $('.modal').modal('open'); 

});





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
        console.log(response)
        var drinkThumb = response.drinks[0].strDrinkThumb;

        // var drinkPicURL= 'url(' + drinkThumb + ')'
 
        document.getElementById("drinkName").innerHTML = response.drinks[0].strDrink;
        document.getElementById("beverage").innerHTML = response.drinks[0].strInstructions;

        if(response.drinks[0].strDrinkThumb !== null){
          // $('#drinkPic').style.background-Image = drinkPicURL;
          $(".gif").css("background-image", "url(" + drinkThumb + ")");

        }
        else {
          document.body.style.background = url("./Images/websiteBackground.jpg");
        }
        appendDrink(drink);
        //rootEl.find('figure').css('background-color', 'white');

        //var drinkThumb = response.drinks[0].strDrinkThumb;
        // if(response.drinks[0].strDrinkThumb !== null){
        //   document.body.style.background = 'url(' + drinkThumb + ')';
        // }
        // else {
        //   document.body.style.background = url("./Images/websiteBackground.jpg");
        // }

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

  var enteredDrinks= [];
  var recentlyViewed = $("#recentlyViewed")
  
  
  function appendDrink (drink){
    recentlyViewed.empty();
    enteredDrinks.push(drink)
   console.log(enteredDrinks);
  
  
   for ( i = 0; i < enteredDrinks.length; i++) {
    recentlyViewed.append("<li>" + enteredDrinks[i] + "</li>");
   }
  };

  function showDivs (){
    var wrapper= $("#wrapper")
    wrapper.addClass('showWrapper')
  }