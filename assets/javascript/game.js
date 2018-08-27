$(document).ready(function() {

var targetNumber =55;

$("#number-to-guess").text(targetNumber);

var counter = 0;

var numberOptions = [10, 5, 3, 7];

for (var i=0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

// var increment = numberOptions[Math.round(math.random())];

$(".crystal-image").on("click", function() {
    var crystalvalue = ($(this).attr("data-crystalvalue"));
    crystalvalue = parseInt(crystalvalue);
    
    counter += crystalvalue;
    
    alert("New Score: " + counter);
    
    if (counter === targetNumber) {
        alert("You win!");
    }
    else if (counter >= targetNumber) {
        alert("You lose!");
    }
});

});