
Live Version (hosted on Github Pages):https://sajudson.github.io/dataviz-project/

# Introduction

This is an exploratory visualization for a bike share system that is intended to assist in determine the factors that influence the number and type of users of the system at both daily and hourly intervals. It visualizes the impact of quantitative and qualitative attributes, including temperature, humidity and windspeed, day type, and weather conditions, on the number of daily and hour users.

The techniques shown here can be applied to any multivariate time series data sets.


<img width="1065" alt="finalvis" src="https://user-images.githubusercontent.com/13242061/32617171-4355080a-c542-11e7-8f37-cee2e72047d5.png">

# The Data
## Washington DC Bike Sharing Data Set

This data set is from the Washington DC Bike Share system and covers a two year period between Jan 2011 and Dec 2012. The data set contains the following attributes:
  - Date and Time:
    - Date (year/month/day) and hour (continuous/temporal).
    - Derived attributes:
      - Season, working day, and holiday (categorical).
      - Day of week (ordinal/categorical).
  - Weather
    - Temperature, humidity, and wind speed (continuous).
    - Weather situation (categorical).
    - Derived attributes:  
      - Apparent temperature (continuous).
  - System users:
    - Casual, registered, and total user counts (continuous).

  The raw date and time variables are continuous, but year and month can also function as categorical attributes because of the limited number of unique values (2 and 12 values respectively). The derived temporal values of season, working day, holiday and day of week were treated as categorical attributes.

  All categorical variables were mapped to integers in the original data set. Continuous weather data was rescaled from the original units to the range [0,1].

## Processing

Hourly data was imported then aggregated into daily intervals, using mean values for all parameters except casual, registered, and total users (which were summed), and the weather situation, which used the maximum value observed for the day). All of the categorical values in the data set remained constant during a given day, except for weather situation. To maintain weather situation as a categorical attribute, the maximum value was used.

## Source

This data is from [UCI Machine Learning Repository: Bike Sharing Data Set](https://archive.ics.uci.edu/ml/datasets/bike+sharing+dataset)

The dataset file can be found [here](https://archive.ics.uci.edu/ml/machine-learning-databases/00275/Bike-Sharing-Dataset.zip) as a zip archive.
[Daily Data Block Summary](https://bl.ocks.org/sajudson/d8d4909fa0512302a95b1e0982a07c0f)
[Hourly Data Block Summary](https://bl.ocks.org/sajudson/3b64ad3a4e4e2c5f80898eebd40646ca)



# The Design Intent

## Questions
This visualization is intended to help answer the following questions:
  - What factors influence the number of casual and registered
 users of the bike share system?
  - How are these factors similar and different between the two types of users?
  - How much did ridership increase from 2011 to 2012, accounting for seasonality and weather?
  - Where is growth in ridership coming - casual or registered users?

## Tasks
The visualization was specifically designed to perform the following tasks:
  - Show time based patterns using radial and rectilinear line charts.
  - Show relationships between continuous variables and the number of users using scatter plots.
  - Examine influences of categorical variables (weathersit, workingday, holiday) by filtering the radial line plot and scatter plots (using working memory to spot changes in patterns).
  - Look at differences in both time of use patterns and factors influencing casual and registered users using multiple views grouped by type of user.
  - Examine the changes in the patterns and relationships over time using one dimensional brush on the overview line chart to pan and filter the data shown in the other charts.
  - Focus on patterns and relationships for specific periods of time, using the brush to control the specific time ranges (i.e., start and end date) shown in the radial and scatter plots.



## Idioms
The visualization makes use of two specific idioms - Multiple Views and Linked Navigation.

The eight detailed charts are multiple views used to show commonalities and differences in the patterns between casual and registered users in the 8. The charts corresponding to each user type are grouped horizontally, with charts showing the same parameters aligned vertically. This arrangement allows easy comparison between the causal and registered user patterns and relationships within working memory.

The overview chart uses a brush to select specific date ranges, which, along with the toggle switch UI elements, configure the filters that control which data is visible in the 8 detailed charts. The brush and toggle switches operating together implement the linked navigation idiom.

## Design Tradeoffs
Given the tasks, encoding and design idioms used, the visualization is intended to be used with a relatively large display (i.e., desktop or laptop). Given the intended use (exploratory data analysis), no attempt was made to optimize the user experience for mobile device users at this time.

# The Visualization
## Layout
The final visualization incorporates 9 different visualizations - an overview chart with 8 detailed charts.  The charts are arranged in three rows, with the detail charts for registered users and casual users in the first and second rows, and the overview chart in the third row.

The detailed charts in the first two groupings consist of a radial time series plot showing users versus time of day, and three scatter plots showing the users per day as function of temperature, humidity and windspeed. The two groupings show casual and registered users, respectively.


### Prototype
The prototype illustrates the intended layout of the individual charts, their aspect ratios, as well as the use of color to distinguish between the different user types.

![prototype mock up](https://user-images.githubusercontent.com/13242061/32497733-8d81e0ae-c39b-11e7-8ee2-e58a852dfaca.png)

### Final

The final version of the visualization, shown below, follows the same basic layout as the prototype, with the following additions:
- The visualization title appears at the top of the page, and explanatory headings are added to the each row of charts,
- A group of toggle switch UI elements to control the filters for year, day type and weather situation appear in a row above the charts, and
- A one dimensional brush appears the third row as part of the overview chart respectively.

<img width="1065" alt="finalvis" src="https://user-images.githubusercontent.com/13242061/32617171-4355080a-c542-11e7-8f37-cee2e72047d5.png">




## Radial Time Series - Users vs Time of Day
The radial time series plot shows the number of users by time of day, with users encoding as the radial distance from the center of the plot, and time encoding as the angle. Color is used  distinguish between the type of users (green = registered, blue = casual).


### Prototype
The prototype plot was revised after the prototype layout was completed, with the addition of time and user axis tick marks and tick text.
<img width="564" alt="radial time series with tick marks and x labels" src="https://user-images.githubusercontent.com/13242061/32497330-38f7b74e-c39a-11e7-94a1-2abb27847634.png">


### Final
In the final version, separate plots were used for each user type.

<img width="220" alt="visradialtscasfinal" src="https://user-images.githubusercontent.com/13242061/32615989-375f6548-c53f-11e7-8738-55af02add032.png">
<img width="218" alt="visradialtsregfinal" src="https://user-images.githubusercontent.com/13242061/32615990-37789ec8-c53f-11e7-9dc9-6d6a3eff90c1.png">



## Scatter Plot - Users vs Continuous Weather Parameters
The scatter plots show the relationship between the number of users and one of three continuous weather attributes. circular point marks represent specific days, with the number of users encoded as vertical spatial position and the value of the weather attribute encoded as horizontal spatial position. Reducing opacity is used to address occlusion of data points.

The data used for these plots is the total daily users and average value of the weather attribute, aggregated from the hourly dat used for the radial time series plot. The y axis for the registered and casual user charts is set based on the range of the users of each type, and is the same for all charts corresponding to each user type. The x axis is the same for charts using the same weather attribute but different user types.

The scatter plots are used to look for potential casual relationships between weather and the number of users. Correlation (positive or negative) between the number of users and a specific weather attribute would show up as general trend upward or downward in the data. Low variation between the general trend and the individual points would suggest a high correlation, and high variance (i.e., more widely scattered points) would suggest a lower correlation.

### Prototype
<img width="611" alt="scatter - casual - temp" src="https://user-images.githubusercontent.com/13242061/32497352-4a315b64-c39a-11e7-82d9-a45a5d2b1c97.png">

### Final
The final version of the scatter plots is essentially unchanged from the prototype, with minor changes to point size and opacity.

<img width="730" alt="final vis scatterplot - unfiltered - draft" src="https://user-images.githubusercontent.com/13242061/32503343-fd3cd1ce-c3aa-11e7-8c35-65feff4bf77a.png">

## Line chart overview with brush
The ninth chart is a time series line chart that serves as an overview or context chart. It shows the total number of users per day by date over the two years of data in the dataset.

Total number of daily users is encoded as vertical position and date is encoded as horizontal position. This is an overview graph, and since color is used in the other charts to distinguish between the type of users (casual or registered), the total number of users in the final version uses red to distinguish this from the other charts.

### Prototype
The prototype shows a single scatter plot which is representative of all six scatterplots.
<img width="898" alt="rectilinear casual and registered user time series overview" src="https://user-images.githubusercontent.com/13242061/32530488-6182e68a-c40c-11e7-8b47-a5b216075c3c.png">

The prototype shows the casual and registered users as well as apparent temperature on the line chart.

### Final
The final version  of the time series line chart (illustrated by the three chart sequence for registered users below) shows only the total number of users. This approach was chosen to make it easier to understand the overview chart, and because this information is not provided in any other chart.

<img width="1414" alt="vislinechartoverviewfinal" src="https://user-images.githubusercontent.com/13242061/32615987-372afd3a-c53f-11e7-8ae5-eac9bee804c3.png">


# The Interactions
The visualization uses three different and complementary interactions:
  - Filtering,
  - Data range selection, and
  - Panning

Filtering by categorical variables (shown below) uses the  filter toggle switches at the top of page to select which data will be shown (toggle enable = green) and which will be hidden (toggle disabled = white). This enables the user to compare the impact of the these variables on the patterns and relationships shown in the detailed charts.

<img width="1438" alt="visfilteredfinal" src="https://user-images.githubusercontent.com/13242061/32615986-37140a26-c53f-11e7-8ca0-70a528790e7e.png">

The date range selection (shown below) uses the brush in the overview chart - dragging and dropping the edges of the brush filters out the data that is outside of the brush.

<img width="1436" alt="visbrushfinal" src="https://user-images.githubusercontent.com/13242061/32616534-8ca3fb3a-c540-11e7-8aec-966a79ec0940.png">


Once a date range has been selected, dragging any point inside the brush allows the user to change the starting date of the data displayed in the detailed charts while leaving the duration of the date range unchanged. This allows the user to pan throughout the entire data range and see how patterns change over time.  

The filters and brush elements can also be used together to apply the filters to specific date ranges selected by the brush (show below):

<img width="1438" alt="visfilteredbrushfinal" src="https://user-images.githubusercontent.com/13242061/32616543-92130cfa-c540-11e7-8769-54c378d634be.png">

# Additional Information...
## known bugs and limitations
  - The toggles will allow all of the data to be filtered (i.e, not shown) on the chart.
  - The brush on the line chart overview and corresponding data filters are reset on window resizing (toggle filter settings persist on resize).
  - Line chart y ticks are not always redrawn correctly (ticks may be missing on the right side of the chart) when window is maximized.
  - Delays redrawing the visualizations when window is resized. The lag is noticeable but not excessive when running on a laptop or desktop, but may be an obstacle for mobile platforms.
  - The visualization in its current form is intended to be view on a desktop or laptop screen, preferably at or close to full screen (i.e., as a dashboard). It may not display as intended during when viewed in a small window or on a mobile device. The following limitations exist:
    - Small window sizes can cause the charts to wrap onto a new line.
    - Chart layouts retain 1:1  aspect ratio for scatter and radial line plots, leaving significant white space between the plots when the window is significantly wider than it is tall.
    - The font size used for tick labels does not vary with size, and tick marks may overlap at smaller scales.

## future work and enhancements
  - Modifying the radial line chart to allow mapping colors/opacity to specific days based on categorical attributes, such as weather situation, working day, holiday, or season.
  - Add a second radial time series plot for weekly patterns
  - Incorporate additional information into the overview line chart (e.g., temperature, casual and registered user counts, etc.)
  - Incorporate parallel axis plots in addition or in lieu of scatter plots
  - Allow user to select the x attributes shown in the scatter plots   
  - Multi level radial visualization to shown patterns over different time scales (e.g., annual, weekly, and daily)
  - Rework layout to improve viewing in smaller windows and potentially mobile devices. Potential changes  to be considered include:
    - Improve scaling of elements, including tick text, axis labels, mark (i.e., line/=or point) size, mark opacity
    - Move all interaction UI elements, including brush for over line chart to top of page.
    - Keep UI elements on screen while user scrolls through plots
    - Rotate layout of radial time and scatter plots so that each user type is arranged in a vertical column, and each chart type is a horizontal row.
    - Change layout of visualization based on device viewport and/or physical size.


## sources and inspiration
This visualization draws inspiration and code from the following sources:
<a href='http://bl.ocks.org/curran/'>curran</a>'s blocks:
<li> <a href='http://bl.ocks.org/curran/ecb09f2605c7fbbadf0eeb75da5f0a6b'>Stylized Scatter Plot with Color Legend</a>
<li><a href='http://bl.ocks.org/curran/90240a6d88bdb1411467b21ea0769029'>Line Chart of Temperature</a>

<a href='http://bl.ocks.org/mbostock/'>mbostock</a>'s blocks, including:
<li><a href='http://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172'>Brush & Zoom</a>
<li>[Polar plot with radial and angular tick marks](https://bl.ocks.org/mbostock/4583749)

<li>[d3noob's v4 Curve Functions Examples](https://bl.ocks.org/d3noob/ced1b9b18bd8192d2c898884033b5529)


It also draws on my previous work shown on [bl.ocks.org](http://bl.ocks.org/sajudson/) including:
<li>[Global Carbon Emissions by Year, 1751-2011](http://bl.ocks.org/sajudson/ad02a7cf9ba7fd7eed0017ecd4dd0b13)
<li>[CS Degrees Awarded 1971-2011](http://bl.ocks.org/sajudson/159113faca3611883a34bdaf460c020a)
<li>[Bike Share Users Time Series](http://bl.ocks.org/sajudson/6868f6f0836fc6f88566587b9e9e4a50)
<li>[Bike Share Users Radial Time Series](http://bl.ocks.org/sajudson/60aec6f286928b4089d01f74ba4cd627)
<li>[Bike Share Users Radial Time Series - Hourly](https://bl.ocks.org/sajudson/4f7e657d7114022114ea602641874c8c/)
<li>[Interaction 2](https://bl.ocks.org/sajudson/a0713fb9826aea45f15b207dfec9bcb4)

## development and deployment notes (adapted from [UNHCR StreamGraph Explorer](https://github.com/unhcr/dataviz-streamgraph-explorer))

The project is built from a template project that uses Webpack and D3 provided by Curran Kelleher. The template was designed as a starting point for interactive data visualization projects that require JavaScript code to be organized across many files (as ES6 modules).

Build the JavaScript bundle using WebPack, using this command:

    npm run build

To see the page run on a local HTTP server at localhost:8080

    npm install -g http-server
    http-server

GitHub Pages are used deploy this project to the Web. Deployments are manual, and require the following steps:

    git checkout master
    npm run build
    git add -f dist/bundle.js
    git status -s # You should see that only build.js has been changed.
    git commit -m "Deploy the latest" -a
    git push
