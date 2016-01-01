d3.csv("data/aggdata.csv", function(d) {
  var format = d3.time.format("%Y");
  return {
    'Year': format.parse(d.year),
    'Carrier Name': d.carrier_name,
    'On Time': +d.on_time
  };
}, function(data) {
  'use strict';

  // append title
  d3.select('#content')
    .append('h2')
    .attr('id', 'title')
    .text('On-Time Arrival Rates for Top U.S. Domestic Airlines, 2003-2015');

  // set svg
  var width = 960,
      height = 640;
  var svg = dimple.newSvg('#content', width, height);
  // Create the chart
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 750, 550)

  // set y axis, the y-axis will start @ 50%
  var minY = 0.5,
      maxY = 1;
  var y = myChart.addMeasureAxis('y', 'On Time');
  y.tickFormat = '%';
  y.overrideMin = minY;
  y.overrideMax = maxY;
  y.title = 'Percentage of On-Time Arrivals (within 15 minutes)';

  // set x axis
  var x = myChart.addTimeAxis('x', 'Year');
  x.tickFormat = '%Y';
  x.title = 'Year';

  // set series and legend
  var s = myChart.addSeries('Carrier Name', dimple.plot.scatter);
  var p = myChart.addSeries('Carrier Name', dimple.plot.line);
  var myLegend = myChart.addLegend(width*0.77, 60, width*0.25, 80, 'right');

  // draw
  myChart.draw();

  // function to handle mouse events on gridlines
  function mousemove(){
  // handle mouse events on paths
  d3.selectAll('path')
    .style('opacity', 0.75)
    .on('mouseover', function(e) {
		d3.select(this)
		  .style('stroke-width', '8px')
		  .style('opacity', 1)
		  .attr('z-index', '1');
        })
    .on('mouseleave', function(e) {
		d3.select(this)
		  .style('stroke-width', '2px')
		  .style('opacity', 0.75)
		  .attr('z-index', '0');
		});
  }
  svg.on("mousemove",mousemove);

  // This is a critical step.  By doing this we orphan the legend. This
  // means it will not respond to graph updates.  Without this the legend
  // will redraw when the chart refreshes removing the unchecked item and
  // also dropping the events we define below.
  myChart.legends = [];

  // This block simply adds the legend title. I put it into a d3 data
  // object to split it onto 2 lines.  This technique works with any
  // number of lines, it isn't dimple specific.
  svg.selectAll("title_text")
     .data(["Click legend color to","show/hide Carrier Names:"])
     .enter()
     .append("text")
     .attr("x", 820)
     .attr("y", function (d, i) { return 30 + i * 14; })
     .style("font-family", "sans-serif")
     .style("font-size", "10px")
     .style("color", "Black")
     .text(function (d) { return d; });

  // Get a unique list of Owner values to use when filtering
  var filterValues = dimple.getUniqueValues(data, "Carrier Name");

  // Get all the rectangles from our now orphaned legend
  myLegend.shapes.selectAll("rect")
  // Add a click event to each rectangle
                 .on("click", function (e) {
  // This indicates whether the item is already visible or not
  					 var hide = false;
					 var newFilters = [];
					 // If the filters contain the clicked shape hide it
					 filterValues.forEach(function (f) {
					      if (f === e.aggField.slice(-1)[0]) {
					                 hide = true;
					      } else {
					                 newFilters.push(f);
              					 }
                     });
                    // Hide the shape or show it
                    if (hide) {
                         d3.select(this).style("opacity", 0.2);
                    } else {
                         newFilters.push(e.aggField.slice(-1)[0]);
                         d3.select(this).style("opacity", 0.8);
                    }
                    // Update the filters
                    filterValues = newFilters;
                    // Filter the data
                    myChart.data = dimple.filterData(data, "Carrier Name", filterValues);
                    // Passing a duration parameter makes the chart animate. Without
                   // it there is no transition
                    myChart.draw(800);

              });
 });