var gpio = require("pi-gpio");

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
	}, 400);	
});
