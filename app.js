

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
//intialize csvwriter with header format
const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
const csvWriter = createCsvWriter({  
  path: 'datacsv.csv',
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


//get data from alphavantage and push it to csv file
var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;

var yourApiKey = 'demo';
var alphaVantageAPI = new AlphaVantageAPI(yourApiKey, 'compact', true);

alphaVantageAPI.getDailyData('MSFT')
    .then(dailyData => {
        console.log("Daily data:");
        csvWriter  
  			.writeRecords(dailyData)
  			.then(()=> console.log('The CSV file was written successfully'));
        // console.log(dailyData);
    })
    .catch(err => {
        console.error(err);
    });





