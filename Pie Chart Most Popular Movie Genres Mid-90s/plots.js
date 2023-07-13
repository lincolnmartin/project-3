// Create an array of each movie's year

let year_one = Object.values(data.year_one);
let year_two = Object.values(data.year_two);
let year_three = Object.values(data.year_three);

//let mexico = Object.values(data.mexico);
//let singapore = Object.values(data.singapore);
//let southAfrica = Object.values(data.southAfrica);

// Create an array of category labels
let labels = Object.keys(data.year_one);

// Display the default plot
function init() {
  let data = [{
    values: year_one,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = [];

  if (dataset == 'australia') {
      data = year_one;
  }
  else if (dataset == 'brazil') {
      data = year_two;
  }
  else if (dataset == 'uk') {
      data = year_three;
  }
  else if (dataset == 'mexico') {
    data = mexico;
  }
  else if (dataset == 'singapore') {
      data = singapore;
  }
  else if (dataset == 'southAfrica') {
    data = southAfrica;
  }
// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
