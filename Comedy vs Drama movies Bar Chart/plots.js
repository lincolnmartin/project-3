// Initialized arrays
let names = []
let comedyNames = []
let dramaNames = []
let greekSearchResults = []
let romanSearchResults = []

// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  names.push(row.pair);
  comedyNames.push(row.comedyName);
  dramaNames.push(row.dramaName);
  greekSearchResults.push(row.greekSearchResults);
  romanSearchResults.push(row.romanSearchResults);
}

// Trace1 for the Greek Data
let trace1 = {
  x: names,
  y: greekSearchResults,
  text: comedyNames,
  name: "Comedy",
  type: "bar"
};

// Trace 2 for the Roman Data
let trace2 = {
  x: names,
  y: romanSearchResults,
  text: dramaNames,
  name: "Drama",
  type: "bar"
};

// Create data array
let data = [trace1, trace2];

// Apply a title to the layout
let layout = {
  title: "Comedy vs. Drama from 1995 to 1996",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
