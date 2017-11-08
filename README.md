
Live Version (hosted on Github Pages):https://sajudson.github.io/dataviz-project/

# Introduction

This is an exploratory visualization for a bike share system that is intended to assist in determine the factors that influence the number and type of users of the system at both daily and hourly intervals. It visualizes the impact of quantitative and qualitative attributes, including temperature, humidity and windspeed, day type, and weather conditions, on the number of daily and hour users.

<img width="1070" alt="final vis screenshot - draft" src="https://user-images.githubusercontent.com/13242061/32503344-fd554e16-c3aa-11e7-9e41-b7a4f1fa91a7.png">

# The Data
## Washington DC Bike Sharing Data Set

This data set covers a two year period between Jan 2011 and Dec 2012, and contains the following parameters:
  - Date and Time:
    - Year, month, day, hour. (continuous/temporal)
    - Derived attributes: season, working day, holiday, day of week (categoricaL)
  - Weather:
    - Temperature (continuous), humidity (continuous), weather situation (categoricaL)
    - Derived attributes:  apparent temperature (continuous)
  - System users:
    - Casual, registered, and total user counts (continuous).


  Raw temporal date and time variables are continuous, but year and month can also function as categorical attributes because of the limited number of unique values (2 and 12 respectively). The derived values of season, working day, holiday and day of week were categorical attributes.

  Weather data parameters are rescaled to range from  0 to 1

  Derived data were created from other variablesand placed in to t
## Data Processing

The dataset used from

Hourly data was imported then aggregated into daily intervals, using mean values for all parameters except casual, registered, and total users (which were summed), and the weather situation, which used the maximum value observed for the day). All of the categorical values in the data set remained constant throughout a given day, except for weather situation. To maintain weather situation as a categorical attribute, the maximum value was used.

This data is from [UCI Machine Learning Repository: Bike Sharing Data Set](https://archive.ics.uci.edu/ml/datasets/bike+sharing+dataset)

The dataset file can be found [here](https://archive.ics.uci.edu/ml/machine-learning-databases/00275/Bike-Sharing-Dataset.zip) as a zip archive.
[Daily Data Block Summary](https://bl.ocks.org/sajudson/d8d4909fa0512302a95b1e0982a07c0f)
[Hourly Data Block Summary](https://bl.ocks.org/sajudson/3b64ad3a4e4e2c5f80898eebd40646ca)



# The Questions & Tasks
This visualization is intended to help answer the following questions:
  - What factors influence the number of casual and registered
 users of the bike share system?
  - How are these factors similar and different between the two types of users
  - How much did ridership increase from 2011 to 2012, accounting for seasonality and weather?
  - Where is growth in ridership coming - casual or registered users?

The visualization was specifically designed to perform the following tasks:
  - Show time based patterns using radial and rectilinear line charts
  - Show relationships between continuous variables and the number of users using scatter plots
  - Examine influences of categorical variables (weathersit, workingday, holiday) by filtering the radial line plot and scatter plots (using working memory to spot changes in patterns)
  - Look at differences in both time of use patterns and factors influencing casual and registered users using multiple views grouped by type of user
  - Examine the changes in the patterns and relationships over time using one dimensional brush on the overview line chart to pan and filter the data shown in the other charts.
  - Focus on patterns and relationships for specific periods of time, using the brush to control the specific time ranges (i.e., start and end date) shown in the radial and scatter plots

Given the tasks, encoding and design idioms used, the visualization is intended to be used with a relatively large display (i.e., desktop or laptop). Given the intended use (exploratory data analysis), no attempt was made to optimize the user experience for mobile device users, at this time.

# The Prototypes

## Prototype Mockup (from final proposal)
Prototypes were created for each of the visualizations, and a mockup of the  prototype
![prototype mock up](https://user-images.githubusercontent.com/13242061/32497733-8d81e0ae-c39b-11e7-8ee2-e58a852dfaca.png)

## Sample Charts (prototypes)

## Radial Time Series - Users by Time of Day
<img width="564" alt="radial time series with tick marks and x labels" src="https://user-images.githubusercontent.com/13242061/32497330-38f7b74e-c39a-11e7-94a1-2abb27847634.png">
## Scatter Plot - Users vs Continuous Weather Parameters
<img width="611" alt="scatter - casual - temp" src="https://user-images.githubusercontent.com/13242061/32497352-4a315b64-c39a-11e7-82d9-a45a5d2b1c97.png">


# The Visualizations
The final visualization incorporates 9 different visualizations - an overview chart with 8 detailed plots.  The plots are arranged in three rows, with the detail charts for registered users and casual users in the first and second rows, and the overview chart in the third row. A group of toggle switch UI elements that control the filters for year, day type and weather situation appear in a row above the chart, and a one dimensional brush appears the third row as part of the overview chart respectively.

The detailed charts in the first two groupings consist of a radial time series plot showing users versus time of day, and three scatter plots showing the users per day as function of temperature, humidity and windspeed. The two groupings show casual and registered users, respectively.

The final visualization is a line chart time series overview showing the total number of users per day by date over the two years of data in the dataset.
## Radial Time series
<img width="564" alt="radial time series with tick marks and x labels" src="https://user-images.githubusercontent.com/13242061/32497330-38f7b74e-c39a-11e7-94a1-2abb27847634.png">
The radial time series plot shows the number of users by time of day, with users encoding as the radial distance from the center of the plot, and time encoding as the angle. color is used  distinguish between the type of users (green = registered, blue = casual). In the final version, separate plots were used for each type of user.

The chart illustrates patterns

## Scatter Plots
<img width="730" alt="final vis scatterplot - unfiltered - draft" src="https://user-images.githubusercontent.com/13242061/32503343-fd3cd1ce-c3aa-11e7-8c35-65feff4bf77a.png">

  - Scatter Plots
    - Data - users (y-axis) vs temp, humidity and windspeed (x-axis)
    - Aggregates hourly data used in radial time series plot into daily averages
    - Encoding
        - points shown as circles
        - colors
    - Interpretation

## Line chart overview with brush

The line chart time series overview shows the number of users per day by date over the two years of data in the dataset.

Total number of daily users is encoded as vertical position and date is encoded as horizontal position. This is an overview graph, and since color is used in the other charts to distinguish between the type of users (casual or registered), the total number of users in the final version uses black to distinguish this from the other charts.

### Prototype
<img width="898" alt="rectilinear casual and registered user time series overview" src="https://user-images.githubusercontent.com/13242061/32530488-6182e68a-c40c-11e7-8b47-a5b216075c3c.png">

The prototype shows the casual and registered users as well as apparent temperature. The final version shows only the total number of users. 

### Final
<img width="1034" alt="final vis screenshot - overview initial position- draft" src="https://user-images.githubusercontent.com/13242061/32503346-fdd27e86-c3aa-11e7-9d43-6d0d20893325.png">




# Interactions
The visualization uses two different and complementary visualization
  - Panning & zooming from line chart overview
  - Filtering by categorical variables

# Idioms Used
  The visualization makes use of two idioms in particular:
  - Multiple Views
  - Linked Navigation

The eight detailed charts are multiple views used to show commonalities and differences in the patterns between casual and registered users in the 8. The charts corresponding to each user type are grouped horizontally, with charts showing the same parameters aligned vertically. This arrangement allows easy comparison between the causal and registered user patterns and relationships within working memory.

The overview chart uses a brush to select specific date ranges, which, along with the toggle switch UI elements, configure the filters that control which data is visible in the 8 detailed charts. The brush and toggle switches operating together implement the linked navigation idiom.

# Known bugs and limitations
  - Radial time series plot tick and text axis do not display properly, and time axis needs to be calibrated.
  - The toggles will allow all of the data to be filtered.
  - The brush on the line chart overview and corresponding data filters are reset on window resizing (toggle filter settings persist on resize).
  - Line chart y ticks are not always redrawn correctly (missing for part of the graph) when window is maximized.
  - Delays redrawing the visualizations when window is resized. The lag is noticeable but not excessive when running on a laptop or desktop, but appears to be a significant obstacle for mobile platforms.
  - The visualization in its current form is intended to be view on a desktop or laptop screen, preferably at or close to full screen (i.e., as a dashboard). It may not display as intended during when viewed in a small window or on a mobile device. The size of the data set is also large enough that the  CPU intensive due to the size of the data set. The visualization is not The visualization is intended to be viewed on a laptop or d Chart layouts:
    - Small window sizes can cause the charts to wrap onto a new line.
    - Chart layouts retain 1:1  aspect ratio for scatter and radial line plots, leaving significant white space between the plots when the window is more significantly wider than it is tall.
    - the font size used for tick labels does not vary with size, and tick marks may overlap at smaller scales

# Future Work and Enhancements
  - Mapping colors to points and lines based on categorical attributes, such as weather situation, working day, holiday, or season.
  - Add a second radial time series plot for weekly patterns
  - Incorporate parallel axis plots in addition or in lieu of scatter plots
  - Allow user to select the x attributes shown in the scatter plots   
  - Multi level radial visualization to shown patterns over different time scales (e.g., annual, weekly, and daily)


# Sources and Inspiration
This visualization draws inspiration and code from the following sources:
<a href='http://bl.ocks.org/curran/'>curran</a>'s blocks:
<li> <a href='http://bl.ocks.org/curran/ecb09f2605c7fbbadf0eeb75da5f0a6b'>Stylized Scatter Plot with Color Legend</a>
<li><a href='http://bl.ocks.org/curran/90240a6d88bdb1411467b21ea0769029'>Line Chart of Temperature</a>

<a href='http://bl.ocks.org/mbostock/'>mbostock</a>'s blocks, including:
<li><a href='http://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172'>Brush & Zoom</a>
<li>[Polar plot with radial and angular tick marks](https://bl.ocks.org/mbostock/4583749)



It also draws on my previous work shown on [bl.ocks.org](http://bl.ocks.org/sajudson/) including:
<li>[Global Carbon Emissions by Year, 1751-2011](http://bl.ocks.org/sajudson/ad02a7cf9ba7fd7eed0017ecd4dd0b13)
<li>[CS Degrees Awarded 1971-2011](http://bl.ocks.org/sajudson/159113faca3611883a34bdaf460c020a)
<li>[Bike Share Users Time Series](http://bl.ocks.org/sajudson/6868f6f0836fc6f88566587b9e9e4a50)
<li>[Bike Share Users Radial Time Series](http://bl.ocks.org/sajudson/60aec6f286928b4089d01f74ba4cd627)
<li>[Bike Share Users Radial Time Series - Hourly](https://bl.ocks.org/sajudson/4f7e657d7114022114ea602641874c8c/)
<li>[Interaction 2](https://bl.ocks.org/sajudson/a0713fb9826aea45f15b207dfec9bcb4)

## Other sources and references:

<li>[d3 v4 Curve Functions Examples](https://bl.ocks.org/d3noob/ced1b9b18bd8192d2c898884033b5529)




# Development and Deployment Notes (adapted from [UNHCR StreamGraph Explorer](https://github.com/unhcr/dataviz-streamgraph-explorer))

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
