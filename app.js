

// const alpha = require('alphavantage')({key: 'JAFMAHL3Q9GK8XC1'});


// // alpha.data.daily(symbol, outputsize, datatype, interval)
// //used to pull data from api


// alpha.data.daily('MSFT', 'compact', 'json', '1min').then(data =>{
// 	console.log(data);
// });

/*Express*/
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
 res.send("Hello World");
});
 
app.use(express.static('public'));



/*Start the localhost*/
app.listen(port, () => {
 console.log("Server listening on port " + port);
});


//pull data from file and save it to json
const alpha = require('alphavantage')({key: 'JAFMAHL3Q9GK8XC1'});

alpha.data.daily('MSFT', 'compact', 'json', '1min').then(data =>{
	var fs = require('fs');
	fs.writeFile ("datajson.json", JSON.stringify(data, null, '\t'), 
		function(err) {
    	if (err) throw err;
    	console.log('Json file update complete');
   		}	
	);
});


