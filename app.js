
/*Express*/
//use express modulo for node.js, create port 3000
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
 res.send("You are currently in the root directory");
});
 
//host the files in public folder to localhost
app.use(express.static('public'));


/*Start the localhost*/
app.listen(port, () => {
 console.log("Server listening on port " + port);
});


// //pull data from file and save it to json
// const alpha = require('alphavantage')({key: 'JAFMAHL3Q9GK8XC1'});

// alpha.data.daily('MSFT', 'compact', 'json', '1min').then(data =>{
// 	var fs = require('fs');
// 	fs.writeFile ("datajson.json", JSON.stringify(data, null, '\t'), 
// 		function(err) {
//     	if (err) throw err;
//     	console.log('Json file update complete');
//    		}	
// 	);
// });


//////////////////////////////////////////////////////////////////////////

/*csv data*/
//intialize csvwriter with its header format
//uses the csv-writer modulo in node.js to the csv file path
const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
const csvWriter = createCsvWriter({  
  path: './public/datacsvOHLC.csv',
  header: [
    {id: 'Timestamp', title: 'Timestamp'},
    {id: 'Open', title: 'Open'},
    {id: 'High', title: 'High'},
    {id: 'Low', title: 'Low'},
    {id: 'Close', title: 'Close'},
    {id: 'AdjClose', title: 'AdjClose'},
    {id: 'Volume', title: 'Volume'},
    {id: 'DividendAmount', title: 'DividendAmount'},
    {id: 'SplitCoefficient', title: 'SplitCoefficient'},
  ]
});


//node.js
//get data from alphavantage and write it to the csv file
var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;

var yourApiKey = 'demo';
var alphaVantageAPI = new AlphaVantageAPI(yourApiKey, 'compact', true);

alphaVantageAPI.getDailyData('MSFT')
    .then(dailyData => {
        console.log("Daily data OHLC:");
        csvWriter  
  			.writeRecords(dailyData)
  			.then(()=> console.log('The CSV file was written successfully'));
    })
    .catch(err => {
        console.error(err);
    });




