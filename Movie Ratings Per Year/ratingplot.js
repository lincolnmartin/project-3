console.log(data);

// Create a custom function to return movies with a rating of 3 or higher
function popular(movie) {
  return movie.AvgRating > 3;
}

// Call the custom function with filter()
let MovieRatings = data.filter(popular);

// Trace for the Movie Ratings
let trace1 = {
    x: MovieRatings.map(row => row.ReleaseYear),
    y: MovieRatings.map(row => row.AvgRating),
    type: "bar",
};

// Data trace array
let traceData = [trace1];

// Apply title to the layout
let layout = {
  title: "Average Movie Ratings Each Year"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);