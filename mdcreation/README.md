# U.S On time flight Arrival Performance
Prema iyer  
Thursday, December 31, 2015  

**1. Citation**

Citation:
  This dataset is public available for research. 
  Available at: http://www.transtats.bts.gov/OT_Delay/OT_DelayCause1.asp (RITA)
                
**2. About dataset**

This data set contains information on United States airline flight delays and 
performance. The dataset includes all domestic flights from all carriers to/from 
major airports from June 2003 through September 2015.

**3. Number of Instances:**

Airlines - 28

**4. Number of Attributes:**

29 Attributes





###Attribute information:
![plot of chunk attribute_info](Figs/attribute_info.png) 



###Load Data


# internal structure of data:


```
## 'data.frame':	204298 obs. of  22 variables:
##  $ year               : int  2003 2003 2003 2003 2003 2003 2003 2003 2003 2003 ...
##  $ month              : int  6 6 6 6 6 6 6 6 6 6 ...
##  $ carrier            : Factor w/ 26 levels "9E","AA","AQ",..: 2 2 2 2 2 2 2 2 2 2 ...
##  $ carrier_name       : Factor w/ 28 levels "AirTran Airways Corporation",..: 5 5 5 5 5 5 5 5 5 5 ...
##  $ airport            : Factor w/ 377 levels "ABE","ABI","ABQ",..: 3 18 23 25 30 36 43 45 56 57 ...
##  $ airport_name       : Factor w/ 377 levels "Aberdeen, SD: Aberdeen Regional",..: 8 13 19 22 139 35 241 39 47 24 ...
##  $ arr_flights        : num  307 90 752 842 383 ...
##  $ arr_del15          : num  56 27 186 174 55 12 82 225 27 101 ...
##  $ carrier_ct         : num  14.68 7.09 33.99 60.24 14.9 ...
##  $ weather_ct         : num  10.79 2 27.82 20.54 8.91 ...
##  $ nas_ct             : num  19.1 10.8 104.8 47.8 14.6 ...
##  $ security_ct        : num  1.48 0 1.9 4.69 0 1 0.03 2.25 0 0 ...
##  $ late_aircraft_ct   : num  9.96 7.16 17.53 40.75 16.61 ...
##  $ arr_cancelled      : num  1 0 5 9 0 0 2 7 1 1 ...
##  $ arr_diverted       : num  1 0 0 1 0 0 0 0 0 1 ...
##  $ arr_delay          : num  2530 1390 8314 8344 3137 ...
##  $ carrier_delay      : num  510 271 1367 3040 815 ...
##  $ weather_delay      : num  621 83 1722 1032 574 ...
##  $ nas_delay          : num  676 581 3817 1835 555 ...
##  $ security_delay     : num  25 0 139 115 0 35 1 45 0 0 ...
##  $ late_aircraft_delay: num  698 455 1269 2322 1193 ...
##  $ X                  : logi  NA NA NA NA NA NA ...
```

# Summary of the dataset:


```
##       year          month          carrier      
##  Min.   :2003   Min.   : 1.00   OO     : 20854  
##  1st Qu.:2006   1st Qu.: 4.00   EV     : 19457  
##  Median :2009   Median : 7.00   MQ     : 17593  
##  Mean   :2009   Mean   : 6.53   DL     : 16578  
##  3rd Qu.:2012   3rd Qu.: 9.00   AA     : 11913  
##  Max.   :2015   Max.   :12.00   UA     : 11521  
##                                 (Other):106382  
##                        carrier_name       airport      
##  SkyWest Airlines Inc.       : 20854   LAX    :  2095  
##  ExpressJet Airlines Inc.    : 18801   LAS    :  2084  
##  Delta Air Lines Inc.        : 16578   PHX    :  2053  
##  American Eagle Airlines Inc.: 15404   DEN    :  2026  
##  Atlantic Southeast Airlines : 12159   SAN    :  2013  
##  American Airlines Inc.      : 11913   DTW    :  2007  
##  (Other)                     :108589   (Other):192020  
##                                         airport_name     arr_flights   
##  Los Angeles, CA: Los Angeles International   :  2095   Min.   :    1  
##  Las Vegas, NV: McCarran International        :  2084   1st Qu.:   62  
##  Phoenix, AZ: Phoenix Sky Harbor International:  2053   Median :  137  
##  Denver, CO: Denver International             :  2026   Mean   :  398  
##  San Diego, CA: San Diego International       :  2013   3rd Qu.:  289  
##  Detroit, MI: Detroit Metro Wayne County      :  2007   Max.   :21648  
##  (Other)                                      :192020                  
##    arr_del15      carrier_ct       weather_ct        nas_ct    
##  Min.   :   0   Min.   :   0.0   Min.   :  0.0   Min.   :   0  
##  1st Qu.:  12   1st Qu.:   4.1   1st Qu.:  0.0   1st Qu.:   2  
##  Median :  27   Median :   9.9   Median :  0.8   Median :   7  
##  Mean   :  80   Mean   :  22.4   Mean   :  2.9   Mean   :  27  
##  3rd Qu.:  63   3rd Qu.:  21.8   3rd Qu.:  2.4   3rd Qu.:  18  
##  Max.   :6377   Max.   :1792.1   Max.   :717.9   Max.   :4091  
##  NA's   :39                                                    
##   security_ct    late_aircraft_ct arr_cancelled   arr_diverted  
##  Min.   : 0.00   Min.   :   0.0   Min.   :   0   Min.   :  0.0  
##  1st Qu.: 0.00   1st Qu.:   2.0   1st Qu.:   0   1st Qu.:  0.0  
##  Median : 0.00   Median :   7.0   Median :   1   Median :  0.0  
##  Mean   : 0.19   Mean   :  27.3   Mean   :   7   Mean   :  0.9  
##  3rd Qu.: 0.00   3rd Qu.:  19.0   3rd Qu.:   5   3rd Qu.:  1.0  
##  Max.   :80.56   Max.   :1885.5   Max.   :1969   Max.   :256.0  
##                                                                 
##    arr_delay      carrier_delay    weather_delay     nas_delay     
##  Min.   :     0   Min.   :     0   Min.   :    0   Min.   :   -19  
##  1st Qu.:   548   1st Qu.:   190   1st Qu.:    0   1st Qu.:    80  
##  Median :  1374   Median :   492   Median :   33   Median :   254  
##  Mean   :  4387   Mean   :  1265   Mean   :  227   Mean   :  1224  
##  3rd Qu.:  3305   3rd Qu.:  1143   3rd Qu.:  175   3rd Qu.:   696  
##  Max.   :433687   Max.   :134693   Max.   :57707   Max.   :238440  
##                                                                    
##  security_delay   late_aircraft_delay    X          
##  Min.   :   0.0   Min.   :     0      Mode:logical  
##  1st Qu.:   0.0   1st Qu.:   101      NA's:204298   
##  Median :   0.0   Median :   401                    
##  Mean   :   7.3   Mean   :  1663                    
##  3rd Qu.:   0.0   3rd Qu.:  1190                    
##  Max.   :3119.0   Max.   :148181                    
## 
```

I will pick only top 6 airlines based on the arrival flights number. I will only analyze and visualize data related to top largest air carrier at US.<br />




Now, we have all the performance information for following air carriers which are in fact the top largerst US domestic air carriers:


```
## [1] "American Airlines Inc."   "Delta Air Lines Inc."    
## [3] "ExpressJet Airlines Inc." "SkyWest Airlines Inc."   
## [5] "Southwest Airlines Co."   "United Air Lines Inc."
```


###Objective is to:

Compare the performance of Delta Air Lines Inc. with Other airline carriers. <br />

During last five years **Delta Air Lines Inc.** has outperformed other US airline carriers with lesser delays. <br />

Delta Airlines is now one of the best US carriers in terms of flight delay percentage.
It had less overall delay and carrier delay in comparison with other airlines.<br />

To show the performance of the top airline carriers, I will aggregate data by year and carrier name and then I will add new aggregated features that are required to do the analysis.<br />

To display the delay metrics over time, I will use combination of point (scatter plot) and line chart. Using scatter plot points, I can precisely display the measure corresponding to each airline carrier for a particular year which will help in comparison. I will add lines to show trends of the performance of the airline carrier over years from 2003 - 2015. This makes it easy to see how perfomance of each carrier changed over time.<br />

Since we are focusing on the airlines performance, I am computing the below aggregate fields that
are mainly based on airline carriers and or not related to some of the outside factors or natural causes like security checks or weather delays.<br />

Average flight delays during arrival.<br />
Percentage of flights delayed during arrival. <br />
Average flight delays due to Carriers. <br />
Percentage of flight delayed due to Carriers. <br />
Percentage of flights arriving On-Time. <br />



Generate a new file aggairlines.csv with the additional aggregate fields 




###Flight delays due to Carrier

The following graphs shows the average delay of flight due to carrier over year and the
percentage of flight that was delayed due to carrier for the top 6 carriers.


![plot of chunk avg_delay_due_to_carr_graph](Figs/avg_delay_due_to_carr_graph.png) 

As you can see southwest and skywest airlines have the least delays followed by delta airlines,
delta airlines has reduced its delays and in 2015 its performance is the same as southwest airlines with the least delays.
ExpressJet Airlines has the highest delays in the last 4 years and it is trying to improve its 
performance in 2015.

![plot of chunk percent_delay_due_to_carr_graph](Figs/percent_delay_due_to_carr_graph.png) 

Percentage of flight that has the least delays for the past 6 years is skywest airlines and 
delta airlines has caught up with it in the past two years.  United Airlines is not doing so
good and the trend shows in the -ve side.

###Arrival delay of flights over year

The following graphs shows the average delay of flight over year and the
percentage of flight that was delayed for the top 6 carriers.


![plot of chunk avg_arr_delay_graph](Figs/avg_arr_delay_graph.png) 

Delta airlines and Southwest airlines were for following similar pattern from 2003 till 2011 
with Delta having higher arrival delays compared to southwest but after 2011 Delta started to
perform better than southwest and in the past year southwest is trying to catch up. The
trend of every top airlines except United Airlines is positive.

![plot of chunk percent_arr_delay_graph](Figs/percent_arr_delay_graph.png) 

Delta airlines has the least percentage of flight delays during arrival since after 2010.
Since 2011 it has been under 16%. In 2015 Delta's delay has been at 14% followed by skywest and southwest at 18% and 19% respectively.  United Airlines has the highest arrival delay of 22%.

###On-time arrival of flights over year

![plot of chunk percent_on_time_arr_graph](Figs/percent_on_time_arr_graph.png) 

In 2010 Delta and ExpressJet both had an 80% on-time arrival performance. While Skywest and Southwest were both @ 81% and American @ 82% and United airlines performed the best at 87%. 
But since 2011 Delta has been performing the best with 84% to 87% arrival rate followed by
Skywest for the past three years.

So from all the above we can see that since 2011 Delta Airlines has been performing the best.

Used D3.js and dimple.js to improve upon the initial data visualization as below:

(1) Mixed scatter plot points to show the individual data points corresponding to each year and line to show the trends of each airline carrier over time.
(2) Added legend on top.
(3) The scatter points when hovered displays information about the carrier along with the year and the % for that year.
(4) Added the feature of highlighting the lines as the mouse hover over them.
(5) Highlighted the delta airlines trend so that it shows prominently when we look at it.

The reason for starting the y-axis @60% for on-time is because the graph looked out of proportion when started @ 0 with all the lines huddled in the upper half of the graph.

index1 to index3 were used as part of my previous submission and this README document contains
details about the modifications that was done after the reviewers comments.


The intial graph output was part of (index1.html and main1.js):


###Feedback 1st round

I interviewed 3 individuals in person, and requested their feedback on the data visualization after presenting them with the background information as to what I was trying to present. 

Listed below are the comments.

(1)The graph shows the pattern clearly with the dips and performance over time.

Having the legend on the top right is good, but I would move the legend off of the graph to
the side.

(2)The graph is interactive in that it highlights when hovering over but one suggestion would be make the line slightly darker so that it standsout when compared to the others.

(3)The legend is good, but I was wondering if I wanted to compare fewer airlines than that are 
displayed. That is I would want the flexibility to remove and add the airlines line that are
displayed.

###Following the feedback, I implemented the following changes 
(index2.html and main2.js):

I increased the opacity so that the lines that were moused-over were darker. <br />
I made the legend interactive by removing the lines when the rectangle color icon of a particular carrier_name is clicked on the legend. <br />
I moved the legend to the top right of the graph. <br />

**After above changes, **

The linebrightness issue was resolved

I have made the legend interactive, <br />
 - When the color on the legend is clicked the corresponding line in the graph will disappear so that the rest of the lines can be used for comparison.  <br />
 - Clicking on the color in legend will add the line back. <br />

I requested again for feedback,<br />

###Feedback 2nd round

(4)Interactive legend and interactive lines are good, but once you remove a line by
clicking on the legend the mouseover on the line doesnt seem to work.<br />

Based on the above feedback, I modified the mouseover of legend as below
(index3.html and main3.js): <br />

I created a function for the legend mouseover and called the function on the svg element as
"svg.on("mousemove",mousemove);", which resolved the above issue.<br />

###Feedback From the Code Reviewer.
Reviewer Comments: <br />
(5) The visualization is good exploratory graphic: it allow a reader to compare different airlines and try to find something interesting. However, story part is a little bit weak. Is there a real trend in data? Hard to say, as there are always airlines going in opposite direction. 2006-2008 years -- Southwest Airlines climbs up instead of going down, 2010-2012 -- half of the companies goes up, half down. And both year-to-year difference in performance and airline-to-airline so big that it is hard to say if there are significant trends. If a company can go up or down 10% in a single year and back is it really possible to talk about the trend? Even from a purely visual perspective chart isn't looking as having a clear trend: there are too many lines and they are going in different direction. <br />

(6)It can be hard to see clear trend discussed in README.md. Yes, there are some dips and spikes some years, but not every company follows those trends. Maybe it is better to highlight some differences between companies? Take a look at Delta -- it was one of the worst performers and now it is the best. You can highlight it for example to show a story of the single airline. Or craft your own story.<br />

(7)There are some explanations of design decisions made. However, it mostly describes what has been done, not why. For this section, you should provide some reasoning behind your choices, explain why you choose the particular chart type, visual encodings, layout and so on, made some comparisons between options you considered.<br />

(8)There was issue with wrong comments in the code as part of code review.

###Following the feedback, I implemented the following changes 
(index_Final.html and main_Final.js): <br />
To incorporate the above changes and to include a compelling story I created additional aggregated fields, modified the js file to create additional graphs to show the comparison of performance of delta airlines with other top 6 airline carriers.<br />

Have made the trend line of the Delta airlines more prominent compared to others so the viewers can view performance of airlines carriers in comparison to delta airlines in all of the graphs just by looking at it.<br />

Code comments were fixed in this version of submission.

Created the README document.

###Summary:

The data visualization shows the trending of the Delta airlines carrier performance compared
to other top 6 US airline carriers based on the data obtain from RITA.
It has the following features: <br />
(1) Mouse over lines will highlight the carrier trend lines. <br />
(2) Mouse over the scatter points will show details about carrier. <br />
(3) The color rectangle in the legend acts as a toggle switch, that it would add/remove the carrier trend lines on clicking. <br />
(4) Highlight the Delta airlines trend. <br />


###Resources consulted as part of visualization:

http://dimplejs.org/ <br />
http://bl.ocks.org/ <br />
https://github.com/mbostock/d3/wiki/Gallery <br />
Udacity "Data Visualization and D3.js" <br />

### Rename the file to README.md


```
## [1] TRUE
```

