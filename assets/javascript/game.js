$(document).ready(function() {
    $("button").click(function(){
        location.reload(true);
    });

var targetNumber = (Math.floor(Math.random() * 102) + 19);

$("#number-to-guess").text(targetNumber);

var counter = 0;

var numberOptions = []
while(numberOptions.length < 4){
    var randomnumber = Math.floor(Math.random()* 12) + 1;
    if(numberOptions.indexOf(randomnumber) > -1) continue;
    numberOptions[numberOptions.length] = randomnumber;
}

//Images Sourced from http://marvel-contestofchampions.wikia.com/wiki/Main_Page
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
        for (var j=0; j < trackwin.length; j++); {
            $("trackwin").text(trackwin);
            console.log(trackwin);
    }}
    else if (counter >= targetNumber) {
        $("#score").append(" You've lost!");
        for (var k=0; k < trackloss.length; k++); {
            $("trackloss").text(trackloss);
            console.log(trackloss);

    }}
});

});