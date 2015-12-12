
$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=50px" }, "slow" );
});
 
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=50px" }, "slow" );
});

setInterval(movePlane, 20);
var keys = {}

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});


function movePlane() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $(".block").animate({left: "-=5"}, 0);                
        }
        if (direction == 38) {
            $(".block").animate({top: "-=5"}, 0);  
        }
        if (direction == 39) {
            $(".block").animate({left: "+=5"}, 0);  
        }
        if (direction == 40) {
            $(".block").animate({top: "+=5"}, 0);  
        }
    }
}
