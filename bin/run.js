var	spawn = require('child_process').spawn,
	fuck = spawn('iwlist',['wlan0','scan']),
	fs = require('fs'),
	util = require('util')
    //node = spawn('node', ['../app.js']),

/* node.stdout.on('data', function (data) {
	  if (/run-3000/.test(data)) {
		var chromium = spawn('chromium',['http://localhost:3000' , '--kiosk', '--disable-session-storage'])
		chromium.stdout.on('data', function (data) {
			console.log('stdout: ' + data);	
		})
	}
	console.log(' ' + data);
});

node.stderr.on('data', function (data) {
  fs.appendFile('err.log', 'stderr: ' + data, function (err) {
  		if (err) throw err;
	});
});

node.on('close', function (code) {
	fs.appendFile('termination.log', 'child process exited with code ' + code, function (err) {
  		if (err) throw err;
	});
}); */

fuck.stdout.on('data', function(data) {
	console.log(' '+data);
	var pattern = /ESSID\:\"(.+)\"/g;
	var zz = String(data);
	var matches = [];
	while ((match = pattern.exec(zz)) !== null) {
	var obj = { name: match[1] };
	matches.push(obj);
	}
	fs.writeFile('networks',JSON.stringify(matches));
});
