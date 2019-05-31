

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
