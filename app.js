

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
 

/*Mongoose and mongodb*/
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/stock-prices", { useNewUrlParser: true });

var nameSchema = new mongoose.Schema({
 timeSeriesDaily: {
 	stockData: {
 		date: [Date],
 		open: [Number],
 		high: [Number],
 		low: [Number],
 		close: [Number],
 		volume: [Number],
 	}
 }
});

var stockUser = mongoose.model("stockUser", nameSchema);

app.use(express.static('public'));




/*Start the localhost*/
app.listen(port, () => {
 console.log("Server listening on port " + port);
});





//pull data from file and save it to json
const alpha = require('alphavantage')({key: 'JAFMAHL3Q9GK8XC1'});

alpha.data.daily('MSFT', 'compact', 'json', '1min').then(data =>{
	var obj = {
		table: []
	};
	obj.table.push(data);
	var json = JSON.stringify(obj);
	console.log(json);

	var fs = require('fs');

	fs.writeFile ("data.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);

});





