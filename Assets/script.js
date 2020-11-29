// Pop Up Age Verification 
// setTimeout(function(){
//   $('.modal').modal('open')}, 1500);

// $(document).ready(function(){
//   $('.modal').modal();
// });

// 

//This is how to comment in javascript
//user's drink of choice
var drink = "";
//cocktailDB URL+user's drink input
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
//Giphy URL+user's drink input
var queryURLgiphy = "http://api.giphy.com/v1/gifs/search?q=" + drink + "&api_key=KzTNLUmjkNMNh8q6dfPusWKX78lyCNaV&limit=5";
//hides link to giphy until user has one to access
document.getElementById("giphy-link").style.display = 'none';

//adds ingredients, measurements, instructions, and image to html
$("#run-search").on("click", function(event) {
    event.preventDefault();
    document.getElementById("beverage").innerHTML = "";
    drink = document.getElementById("search-term").value;
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
    queryURLgiphy = "http://api.giphy.com/v1/gifs/search?q=" + drink + "&api_key=KzTNLUmjkNMNh8q6dfPusWKX78lyCNaV&limit=5";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        //puts the API drink thumbnail as a var
        var drinkThumb = response.drinks[0].strDrinkThumb + "/preview";
        //var drinkPicURL= 'url(' + drinkThumb + ')'
        //drinkInfo used to access the info on the first drink found by API
        var drinkInfo = response.drinks[0];
        //Create a list element
        var node = document.createElement('LI');
        //create a node element to append to list
        var instructions = document.createTextNode(response.drinks[0].strInstructions);
        //loop thru measurements and ingredients, sort out null values and append new items
        for(i = 1; i <= 15; i++) {
          if (drinkInfo['strMeasure' + i] !== null) {
            var measureNode = document.createTextNode(drinkInfo['strMeasure' + i]);
            node.appendChild(measureNode);
          }
          if (drinkInfo['strIngredient' + i] !== null) {
          var ingNode = document.createTextNode(drinkInfo['strIngredient' + i]);
          node.appendChild(ingNode);
          }
      };
      document.getElementById("beverage").appendChild(node);
      document.getElementById("beverage").appendChild(instructions);
        
        document.getElementById("drinkName").innerHTML = response.drinks[0].strDrink;

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