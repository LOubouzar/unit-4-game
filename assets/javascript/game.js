
//Loads the JS as the html document does and provides a refresh button on the page itself.
$(document).ready(function() {
    $("#resetButton").click(function(){
        location.reload(true);
    });

//Chooses a random number between 20 - 120 as the goal number.
var targetNumber = (Math.floor(Math.random() * 102) + 19);

$("#number-to-guess").text(targetNumber);

var counter = 0;
var trackwin = 0;
var trackloss = 0;

//sets 4 random numbers between 1 and 12 to store within the crystal images.
var numberOptions = []
while(numberOptions.length < 4){
    var randomnumber = Math.floor(Math.random()* 12) + 1;
    if(numberOptions.indexOf(randomnumber) > -1) continue;
    numberOptions[numberOptions.length] = randomnumber;
}

//Images Sourced from http://marvel-contestofchampions.wikia.com/wiki/Main_Page
//
var RawImageCrystalArray = [
    "./assets/images/1.png",
    "./assets/images/2.png",
    "./assets/images/3.png",
    "./assets/images/4.png",
    "./assets/images/5.png",
    "./assets/images/6.png",
    "./assets/images/7.png",
    "./assets/images/8.png",
    "./assets/images/9.png",
    "./assets/images/10.png",
    "./assets/images/11.png",
    "./assets/images/12.png",
  ];

  //Trying to add functionality so that the 4 images pulled from the rawimagecrystal array are unique to each other. Not quite working yet :)
var ImageCrystalArray = RawImageCrystalArray.slice(); 

// pulls from the crystalarray 4 images and renders them on the DOM. Adding class, the random image selector from the image array and assigning
// the numberOptions data to the image.
for (var i=0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src",(ImageCrystalArray[Math.floor(Math.random() * ImageCrystalArray.length)]));
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {
    var crystalvalue = ($(this).attr("data-crystalvalue"));
    crystalvalue = parseInt(crystalvalue);
    
    counter += crystalvalue;

// I cannot get the function of the win and loss counters to work.
    $("#score").text(counter);
    
    if (counter === targetNumber) {
        $("#score").append(" You've won!");
        $("trackwin").text(trackwin++);
    }
    else if (counter >= targetNumber) {
        $("#score").append(" You've lost!");
        $("trackloss").text(trackloss++);
    }
});

});