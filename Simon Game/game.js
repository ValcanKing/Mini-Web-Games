var buttonColours=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var gamePattern=[];
var level=0;
var started= false;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$('.btn').click(function handler(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    selection(userChosenColour);
    animation(userChosenColour);
    checkAns(userClickedPattern.indexOf(userChosenColour));
});


function nextSequence(){
    userClickedPattern=[]
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("pers"+randomChosenColour,gamePattern);
    $("#"+randomChosenColour).fadeIn(30).fadeOut(30).fadeIn(30); 
    selection(randomChosenColour);
}

function selection(colit){
    var colo1=new Audio("sounds/"+colit+".mp3");
    colo1.play();
}

function animation(colits){
    $("#"+colits).addClass("pressed");
    setTimeout(function(){
        $("#"+colits).removeClass("pressed");
    },150);
}

function checkAns(currlevel){
    if(gamePattern[currlevel]===userClickedPattern[currlevel]){
        if(userClickedPattern.length===gamePattern.length){                    
            setTimeout(function(){
                nextSequence();
                $("h1").text("Level "+level)
            },1000);
        }
    }
    else{
        selection("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}
function startOver(){
    level=0;
    gamePattern=[]
    started=false;
}