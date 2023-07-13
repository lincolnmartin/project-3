// Create an array of each movie's year from 1994-2016
let year_1994 = Object.values(data.year_1994);
let year_1995 = Object.values(data.year_1995);
let year_1996 = Object.values(data.year_1996);
let year_1997 = Object.values(data.year_1997);
let year_1998 = Object.values(data.year_1998);
let year_1999 = Object.values(data.year_1999);
let year_2000 = Object.values(data.year_2000);
let year_2001 = Object.values(data.year_2001);
let year_2002 = Object.values(data.year_2002);
let year_2003 = Object.values(data.year_2003);
let year_2004 = Object.values(data.year_2004);
let year_2005 = Object.values(data.year_2005);
let year_2006 = Object.values(data.year_2006);
let year_2007 = Object.values(data.year_2007);
let year_2008 = Object.values(data.year_2008);
let year_2009 = Object.values(data.year_2009);
let year_2010 = Object.values(data.year_2010);
let year_2011 = Object.values(data.year_2011);
let year_2012 = Object.values(data.year_2012);
let year_2013 = Object.values(data.year_2013);
let year_2014 = Object.values(data.year_2014);
let year_2015 = Object.values(data.year_2015);
let year_2016 = Object.values(data.year_2016);

// Create an array of category labels
let labels = Object.keys(data.year_1994);

// Display the default graph upon opening the page
function init() {
  let data = [{
    values: year_1994,
    labels: labels,
    type: "pie",
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
  // Initialize an empty array for the yearly genre data
  let data = [];

  if (dataset == 'Top 3 Genres in 1994') {
      data = year_1994;
  }
  else if (dataset == 'Top 3 Genres in 1995') {
      data = year_1995;
  }
  else if (dataset == 'Top 3 Genres in 1996') {
      data = year_1996;
  }
  else if (dataset == 'Top 3 Genres in 1997') {
      data = year_1997;
  }
  else if (dataset == 'Top 3 Genres in 1998') {
      data = year_1998;
  }
  else if (dataset == 'Top 3 Genres in 1999') {
      data = year_1999;
  }
  else if (dataset == 'Top 3 Genres in 2000') {
      data = year_2000;
  }
  else if (dataset == 'Top 3 Genres in 2001') {
      data = year_2001;
  }
  else if (dataset == 'Top 3 Genres in 2002') {
      data = year_2002;
  }
  else if (dataset == 'Top 3 Genres in 2003') {
      data = year_2003;
  }
  else if (dataset == 'Top 3 Genres in 2004') {
      data = year_2004;
  }
  else if (dataset == 'Top 3 Genres in 2005') {
      data = year_2005;
  }
  else if (dataset == 'Top 3 Genres in 2006') {
      data = year_2006;
  }
  else if (dataset == 'Top 3 Genres in 2007') {
      data = year_2007;
  }
  else if (dataset == 'Top 3 Genres in 2008') {
      data = year_2008;
  }
  else if (dataset == 'Top 3 Genres in 2009') {
      data = year_2009;
  }
  else if (dataset == 'Top 3 Genres in 2010') {
      data = year_2010;
  }
  else if (dataset == 'Top 3 Genres in 2011') {
      data = year_2011;
  }
  else if (dataset == 'Top 3 Genres in 2012') {
      data = year_2012;
  }
  else if (dataset == 'Top 3 Genres in 2013') {
      data = year_2013;
  }
  else if (dataset == 'Top 3 Genres in 2014') {
      data = year_2014;
  }
  else if (dataset == 'Top 3 Genres in 2015') {
      data = year_2015;
  }
  else if (dataset == 'Top 3 Genres in 2016') {
      data = year_2016;
  }
// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();