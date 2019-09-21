// a game with 4 crystals and random result
// every crystal needs to have a random number between 1 - 12
// a new random number should be generated every single time with win or loss
// when clicking any crystal, it should be adding with the previous result 
// until it equals the random result
// if it is greater than the random result, we decrement a loss counter
// if it is equal we increment a win counter



var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

$(".crystals").empty();

var images = {
    '',
    '',
    '',
    '',
};

}


random_result = Math.floor(Math.random() * 69) + 30;

$("#result").html('Random Result: ' + random_result);
for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    
    
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    crystal.html(random);
  
    $(".crystals").append(crystal);

    $("#previous").html("Total Score: ", previous);
}
    
}

resetAndStart();


$(document).on('click', ".crystal", function () {
    
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: ", previous);

    console.log(previous);

    if(previous > random_result){
        lost--;

        $("#lost").html("YOU LOST!:" ,lost);

        previous = 0;

        resetAndStart();

    }else if(previous === random_result){
        win++;

        $("#win").html("YOU WIN!", win);

        previous = 0;

        resetAndStart();
        
    }

    

});


    