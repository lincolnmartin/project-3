console.log(data);

// Create a custom function to return movies with a rating of 3 or higher (scores in billions)
function popular(movie) {
  return movie.movieSearchResults > 3;
}

// Call the custom function with filter()
let popularMovies = data.filter(popular);

// Trace for the Roman Data
let trace1 = {
    x: popularMovies.map(row => row.movieName),
    y: popularMovies.map(row => row.movieSearchResults),
    type: "bar"
};

// Data trace array
let traceData = [trace1];

// Apply title to the layout
let layout = {
  title: "Most Popular Movies of 1995"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);