

Plotly.d3.csv('datacsvOHLC.csv', function(err, rows){

function unpack(rows, key) {
  return rows.map(function(row) {
    return row[key];
  });
}

var trace = {
  x: unpack(rows, 'Timestamp'),
  close: unpack(rows, 'Close'),
  high: unpack(rows, 'High'),
  low: unpack(rows, 'Low'),
  open: unpack(rows, 'Open'),

  // cutomise colors
  increasing: {line: {color: 'black'}},
  decreasing: {line: {color: 'red'}},

  type: 'ohlc',
  xaxis: 'x',
  yaxis: 'y'
};

var data = [trace];

var layout = {
  title: 'OHLC chart MSFT',
  dragmode: 'pan',
  showlegend: false,
  xaxis: {
    autorange: true,
    title: 'Date',
  },
  yaxis: {
    autorange: true,
  }
};

Plotly.plot('plotly-div', data, layout);
});

////////////////////////////////////////////////////////////////////




// Plotly.d3.csv('datacsvOHLC.csv', function(err, rows){

// function unpack(rows, key) {
//   return rows.map(function(row) {
//     return row[key];
//   });
// }

// var trace = {
//   x: unpack(rows, 'Timestamp'),
//   close: unpack(rows, 'Close'),
//   high: unpack(rows, 'High'),
//   low: unpack(rows, 'Low'),
//   open: unpack(rows, 'Open'),

//   // cutomise colors
//   increasing: {line: {color: 'black'}},
//   decreasing: {line: {color: 'red'}},

//   type: 'ohlc',
//   xaxis: 'x',
//   yaxis: 'y'
// };

// var data = [trace];

// var layout = {
//   dragmode: 'pan',
//   showlegend: false,
//   xaxis: {
//     autorange: true,
//     title: 'Date',
//    rangeselector: {
//         x: 0,
//         y: 1.2,
//         xanchor: 'left',
//         font: {size:8},
//         buttons: [{
//             step: 'month',
//             stepmode: 'backward',
//             count: 1,
//             label: '1 month'
//         }, {
//             step: 'month',
//             stepmode: 'backward',
//             count: 6,
//             label: '6 months'
//         }, {
//             step: 'all',
//             label: 'All dates'
//         }]
//       }
//   },
//   yaxis: {
//     autorange: true,
//   }
// };

// Plotly.plot('plotly-div', data, layout);
// });