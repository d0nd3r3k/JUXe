var gpio = require("pi-gpio");

//Set RGB Pins to GPIO
var R = 11,
	G = 15,
	B = 16;

//Displays Red color
gpio.open(R, "output", function(err){
	gpio.write(R,1,function(){});
});
gpio.open(G, "output", function(err){
	gpio.write(G,0,function(){});	
});
gpio.open(B, "output", function(err){
	gpio.write(B,0,function(){});
});

//Blink
var i=0;
gpio.open(11, "output", function(err){
	setInterval(function() {
	    console.log(Date.now());
	    if(i%2 == 0){	
				gpio.write(11,1,function(){
					console.log("on");
				});
			}
			else {
				gpio.write(11,0,function(){
					console.log("off");
				});
			}
	    i++
	}, 500);	
})