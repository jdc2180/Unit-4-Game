var random_result;
var lost;
var win;

for(var i = 0; i < 4; i++){

    var random = math.floor(math.random() * 12);
    console.log(random);
    var crystal = $("<div>");
    crystal.attr("class", 'crystal');


    $(".crystals").append(crystal);
}

// a game with 4 crystals and random result
// every crystal needs to have a random number between 1 - 12
// a new random number should be generated every single time with win or loss
// when clicking any crystal, it should be adding with the previous result 
// until it equals the random result
// if it is greater than the random result, we decrement a loss counter
// if it is equal we increment a win counter