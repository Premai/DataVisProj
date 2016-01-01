d3.csv("data/aggairlines.csv", function(data) {

  "use strict";

  var margin = 75,
      width = 800 - margin,
      height = 400 - margin;

  // Pre-format the date as you want it to be displayed using D3
  var format = d3.time.format("%Y");

  data.forEach(function (d) {
	  d["Year"] = format.parse(d.year);
  }, this);


  d3.select('body')
    .append('h2')
    .attr('id', 'title')
    .text('Performance of Delta Airlines in comparison to other top US Domestic Carrier Airlines');

  function addText(svg, chart, text1) {
  // addText takes chart and text name and assign that name to the chart
    svg.append("text")
   .attr("x", chart._xPixels() + chart._widthPixels() / 2)
   .attr("y", chart._yPixels() - 20)
   .style("text-anchor", "middle")
   .style("font-family", "sans-serif")
   .style("font-weight", "bold")
   .text(text1);

  };

  // To increase the thickness of the delta airlines to make it prominent.
  function lineLSize() {
  	        d3.selectAll("path#dimple-delta-air-lines-inc-")
              .style('stroke-width', '6px')
              .style('opacity', 1)
    		  .attr('z-index', '1');
  }

  // function to handle mouse events
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
  			 lineLSize();
    		});
    }

  // This function simply return a new SVG

  function createSVG() {
    return d3.select("body")
    .append("svg")
      .attr("width", width + margin)
      .attr("height", height + margin)
    .append('g')
        .attr('class','chart');
  };

  // This function adds the title to the legend
  function addLegTitle(svg) {
	  svg.selectAll("title_text")
         .data(["Click legend color to","show/hide Carrier Names:"])
         .enter()
         .append("text")
         .attr("x", width * .80)
         .attr("y", function (d, i) { return 240 + i * 14; })
         .style("font-family", "sans-serif")
         .style("font-size", "10px")
         .style("color", "Black")
         .text(function (d) { return d; });

  };

  // addSeries, add Line and Point series to chart and also assign colors to the series
  function addSeries( series, chart) {

    chart.addSeries(series, dimple.plot.line);
    chart.addSeries(series, dimple.plot.scatter);
    chart.assignColor("SkyWest Airlines Inc.", "#FFA500", "#FFA500",.5);
    chart.assignColor("Delta Air Lines Inc.", "#FF0000", "#FF0000", 1);
    chart.assignColor("Southwest Airlines Co.", "#a52a2a", "#a52a2a", .5);
    chart.assignColor("United Air Lines Inc.", "#B0C4DE", "#B0C4DE", .5);
    chart.assignColor("ExpressJet Airlines Inc.", "#9ACD32", "#9ACD32", .5);
    chart.assignColor("American Airlines Inc.", "#DA70D6", "#DA70D6", .3);
    var myLegend = chart.addLegend(width * .75, height * .81, width*0.25, 100, 'right');

    chart.draw();
    chart.legends = [];
    lineLSize();

          // Get a unique list of Carrier Name values to use when filtering
	       var filterValues = dimple.getUniqueValues(data, "carrier_name");

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
	                         chart.data = dimple.filterData(data, "carrier_name", filterValues);
	                         // I am passing a duration of 900 to make the animation happen without it
	                         // it only makes a flicker it doesnt actually disappear and appear.
	                         chart.draw(900);
	                         lineLSize();
	                });

   };

// draw chart: Average Delay per Flight due to Carrier over year for the Top 6 Carriers
var svg = createSVG()
svg.on("mousemove",mousemove);

var chart1 = new dimple.chart(svg, data);
var x = chart1.addTimeAxis("x", "year","%Y");
x.timePeriod    = d3.time.years;
x.timeInterval  = 1;
x.tickFormat = "%Y";
x.title = 'Year';

var y = chart1.addMeasureAxis("y", "avg_carrier_delay");
y.title = "Average Delay per Flight due to Carrier (minutes)";
addText(svg, chart1, "Average Delay per Flight due to Carrier over year for Top 6 Carriers");
addSeries("carrier_name", chart1);
addLegTitle(svg);

// draw chart: Percentage of Late Flight due to Carrier over year for Top 6 Carriers
var svg2 = createSVG()
svg2.on("mousemove",mousemove);
var chart2 = new dimple.chart(svg2, data);
var x = chart2.addTimeAxis("x", "year","%Y");
x.timePeriod    = d3.time.years;
x.timeInterval  = 1;
x.tickFormat = "%Y";
x.title = 'Year';

var y = chart2.addMeasureAxis("y", "avg_carrier_ct");
y.title = "Percentage of Delayed Flights due to Carrier";
addText(svg2, chart2, "Percentage of Late Flight due to Carrier over year for Top 6 Carriers");
addSeries("carrier_name", chart2);
addLegTitle(svg2);

// draw chart: Average Arrival Delay per Flight pver the Years for Top 6 Carriers
var svg3 = createSVG()
svg3.on("mousemove",mousemove);
var chart3 = new dimple.chart(svg3, data);

var x = chart3.addTimeAxis("x", "year","%Y");
x.timePeriod    = d3.time.years;
x.timeInterval  = 1;
x.tickFormat = "%Y";
x.title = 'Year';

var y = chart3.addMeasureAxis("y", "avg_arr_delay");
y.title = "Average Delay per Flight (minutes)";
addText(svg3, chart3, "Average Arrival Delay per Flight over year for Top 6 Carriers");
addSeries("carrier_name", chart3);
addLegTitle(svg3);

// draw chart: Percentage of Delayed Flights over Year over year for Top 6 Carriers
var svg4 = createSVG()
svg4.on("mousemove",mousemove);
var chart4 = new dimple.chart(svg4, data);
var x = chart4.addTimeAxis("x", "year","%Y");
x.timePeriod    = d3.time.years;
x.timeInterval  = 1;
x.tickFormat = "%Y";
x.title = 'Year';

var y = chart4.addMeasureAxis("y", "avg_arr_del15");
y.title = "Percentage of Delayed Flights";
addText(svg4, chart4, "Percentage of Delayed Flights over Year for Top 6 Carriers");
addSeries("carrier_name", chart4);
addLegTitle(svg4);


// draw chart: Percentage of On-Time Flights over Year for Top 6 Carriers
var svg5 = createSVG()
svg5.on("mousemove",mousemove);
var chart5 = new dimple.chart(svg5, data);
var x = chart5.addTimeAxis("x", "year","%Y");
x.timePeriod    = d3.time.years;
x.timeInterval  = 1;
x.tickFormat = "%Y";
x.title = 'Year';

var y = chart5.addMeasureAxis("y", "avg_ontime");
y.overrideMin = 60
y.title = "Percentage of On-Time Flights";
addText(svg5, chart5, "Percentage of On-Time Flights over Year for Top 6 Carriers");
addSeries("carrier_name", chart5);
addLegTitle(svg5);

});
