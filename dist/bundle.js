/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scatterPlot__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linePlot__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radialPlot__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyFilter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filterData__ = __webpack_require__(5);






console.log("start index.js");
     const div1 = "viz1";
     const div2 = "viz2";
     const div3 = "viz3";
     const div4 = "viz4";
     const div5 = "viz5";
     const div6 = "viz6";
     const div7 = "viz7";
     const div8 = "viz8";
     const div9 = "viz9";

      //set x and y value pointers and axis labels
      const xValue1 = d => d.temp;
      const xValue2 = d => d.hum;
      const xValue3 = d => d.windspeed;
      const xValue4 = d => d.dteday;
      const xValue5 = d => d.hr;
      const xLabel1 = 'Temperature';
      const xLabel2 = 'Humidity';
      const xLabel3 = 'Windspeed';
      const xLabel4 = 'Date';
      const yValue2 = d => d.casual;
      const yValue1 = d => d.registered;
      const yValue3 = d => d.cnt;
      const yValue4 = xValue1;
      const yLabel1 = 'Users';
      const yLabel2 = 'Users';
      const yLabel3 = 'Users';
      const yLabel4 = xLabel1;
      const pointSize = 5;
      const pointColor1 = "red";
      const pointColor2 = "orange";
      const pointColor3 = "grey";
      const filterValue = d => d.filterOpacity;


      const minDate = new Date(2011,0,1);
      const maxDate = new Date(2012,11,31);

      // initialize filter variables
      var dateRange =[new Date(2011,0,1),new Date(2012,11,31)];
      var brushDateRange =[new Date(2011,0,1),new Date(2012,11,31)];
      var year2011Filter=true;
      var year2012Filter=true;
      var dayTypeWorkingFilter=true;
      var dayTypeNonWorkingFilter=true;
      var weatherSit1Filter=true;
      var weatherSit2Filter=true;
      var weatherSit3Filter=true;
      var weatherSit4Filter=true;


      const margin = { left: 55, right: 10, top: 10, bottom: 55 };

      //initialize these variables in the Global Scope
      //so they can be accessed by any function

      //row function to parse daily csv
      const row1 = d => {
          d.instant = +d.instant;
          d.dteday = new Date(d.dteday); //need to parse date
          d.season = +d.season;
          d.yr = +d.yr;
          d.mnth = +d.mnth;
          d.holiday = +d.holiday; //flag
          d.weekday = +d.weekday; //integer day of week (0-6)
          d.workingday = +d.workingday; //flag
          d.weathersit = +d.weathersit; //(1-4)
          d.temp = +d.temp;
          d.atemp = +d.atemp;
          d.hum = +d.hum;
          d.windspeed = +d.windspeed;
          d.casual = +d.casual;
          d.registered = +d.registered;
          d.cnt = +d.cnt;
          d.filterOpacity=.15;
          return d;
      };

      const row2 = d => {
          d.instant = +d.instant;
          d.dteday = new Date(d.dteday); //need to parse date
          d.hr = +d.hr;
          d.season = +d.season;
          d.yr = +d.yr;
          d.mnth = +d.mnth;
          d.holiday = +d.holiday; //flag
          d.weekday = +d.weekday; //integer day of week (0-6)
          d.workingday = +d.workingday; //flag
          d.weathersit = +d.weathersit; //(1-4)
          d.temp = +d.temp;
          d.atemp = +d.atemp;
          d.hum = +d.hum;
          d.windspeed = +d.windspeed;
          d.casual = +d.casual;
          d.registered = +d.registered;
          d.cnt = +d.cnt;
          d.filterOpacity=.15;
          return d;
      };

var dataHour =[],dataDay = [];  //initialize dataHour outside of function

d3.csv('data/hour.csv', row1, data => {

  dataHour = data
  //use nest to groupby day and rollup based on
  //parameter specific rollup parameters
  //(i.e., mean, max or sum)
  var nestbyday = d3.nest()
    			.key(d => d.dteday)
        	.rollup(function(d) {
            return{
              'dteday': new Date(d3.mean(d, e=>+e.dteday)),
              'season': d3.mean(d, e=>+e.season),
              'yr': d3.mean(d, e=>+e.yr),
              'mnth': d3.mean(d, e=>+e.mnth),
              'holiday': d3.mean(d, e=>+e.holiday),
              'weekday': d3.mean(d, e=>+e.weekday),
              'workingday': d3.mean(d, e=>+e.workingday),
              'weathersit': d3.max(d, e=>+e.weathersit),
              'temp': d3.mean(d, e=>+e.temp),
              'atemp': d3.mean(d, e=>+e.atemp),
              'hum': d3.mean(d, e=>+e.hum),
              'windspeed':d3.mean(d, e=>+e.windspeed),
              'casual': d3.sum(d, e=>+e.casual),
              'registered': d3.sum(d, e=>+e.registered),
              'cnt':  d3.sum(d, e=>+e.cnt)
            };
          })
         	.entries(data);
      //console.log(nestbyday);

      //unnest creates an array of objects from the
      //array of key:valueObject pairs generated by
      //d3.nest

      //unnest adapted from 		      //https://bl.ocks.org/SpaceActuary/723b26e187e6bbc2608f

      function unnest(data, children){
          var output=[];
          data.forEach((d,i)=>{
            output.push(d[children]);
            })
				return output;
        };

      dataDay = unnest(nestbyday, "value");

//render function for all visualizations
  function render1(){
    console.log("update filter and echo to console")

    //var dateRange = d3.extent(dataDay, d=>d.dteday);
    console.log('date range: '+ dateRange[0] +" to "+dateRange[1]);

    //set defaultOpacity
    let unfilteredOpacity = .2;
    Object(__WEBPACK_IMPORTED_MODULE_3__applyFilter__["a" /* default */])(dataHour,{
      dateRange,
      year2011Filter,
      year2012Filter,
      dayTypeWorkingFilter,
      dayTypeNonWorkingFilter,
      weatherSit1Filter,
      weatherSit2Filter,
      weatherSit3Filter,
      unfilteredOpacity
    });

    Object(__WEBPACK_IMPORTED_MODULE_3__applyFilter__["a" /* default */])(dataDay,{
      dateRange,
      year2011Filter,
      year2012Filter,
      dayTypeWorkingFilter,
      dayTypeNonWorkingFilter,
      weatherSit1Filter,
      weatherSit2Filter,
      weatherSit3Filter,
      unfilteredOpacity
    });

    const dataHourFiltered = Object(__WEBPACK_IMPORTED_MODULE_4__filterData__["a" /* default */])(dataHour,{
      dateRange,
      year2011Filter,
      year2012Filter,
      dayTypeWorkingFilter,
      dayTypeNonWorkingFilter,
      weatherSit1Filter,
      weatherSit2Filter,
      weatherSit3Filter,
      unfilteredOpacity
    });

    // const dataDayFiltered =filterData(dataDay,{
    //   dateRange,
    //   year2011Filter,
    //   year2012Filter,
    //   dayTypeWorkingFilter,
    //   dayTypeNonWorkingFilter,
    //   weatherSit1Filter,
    //   weatherSit2Filter,
    //   weatherSit3Filter,
    //   unfilteredOpacity
    // });


    //first row of grids

    //note that div1 labels do not correspond to
    //final sequence of charts
    Object(__WEBPACK_IMPORTED_MODULE_0__scatterPlot__["a" /* default */])(div1, {
      data:dataDay, //Filtered,
      xValue:xValue1,
      yValue:yValue1,
      xLabel:xLabel1,
      yLabel:yLabel1,
      colorValue:pointColor1,
      pointSize:pointSize,
      margin:margin,
      filterValue:filterValue
    });


    Object(__WEBPACK_IMPORTED_MODULE_0__scatterPlot__["a" /* default */])(div2, {
      data:dataDay, //Filtered,
      xValue:xValue2,
      yValue:yValue1,
      xLabel:xLabel2,
      yLabel:yLabel1,
      colorValue:pointColor1,
      pointSize:pointSize,
      margin:margin,
      filterValue:filterValue
    });


    Object(__WEBPACK_IMPORTED_MODULE_0__scatterPlot__["a" /* default */])(div3, {
      data:dataDay, //Filtered,
      xValue:xValue3,
      yValue:yValue1,
      xLabel:xLabel3,
      yLabel:yLabel1,
      colorValue:pointColor1,
      pointSize:pointSize,
      margin:margin,
      filterValue:filterValue
    });


    Object(__WEBPACK_IMPORTED_MODULE_2__radialPlot__["a" /* default */])(div4, {
      data:dataHourFiltered,
      hour:xValue5,
      yValue:yValue1,
      yLabel:yLabel1,
      colorValue:pointColor1,
      margin:margin
    });


    //second row of grid
    Object(__WEBPACK_IMPORTED_MODULE_0__scatterPlot__["a" /* default */])(div5, {
      data:dataDay, //Filtered,
      xValue:xValue1,
      yValue:yValue2,
      xLabel:xLabel1,
      yLabel:yLabel2,
      colorValue:pointColor2,
      pointSize:pointSize,
      margin:margin,
      filterValue:filterValue
    });


    Object(__WEBPACK_IMPORTED_MODULE_0__scatterPlot__["a" /* default */])(div6, {
      data:dataDay, //Filtered,
      xValue:xValue2,
      yValue:yValue2,
      xLabel:xLabel2,
      yLabel:yLabel2,
      colorValue:pointColor2,
      pointSize:pointSize,
      margin:margin,
      filterValue:filterValue
    });


    Object(__WEBPACK_IMPORTED_MODULE_0__scatterPlot__["a" /* default */])(div7, {
      data:dataDay, //Filtered,
      xValue:xValue3,
      yValue:yValue2,
      xLabel:xLabel3,
      yLabel:yLabel2,
      colorValue:pointColor2,
      pointSize:pointSize,
      margin:margin,
      filterValue:filterValue
    });


    Object(__WEBPACK_IMPORTED_MODULE_2__radialPlot__["a" /* default */])(div8, {
      data:dataHourFiltered,
      hour:xValue5,
      yValue:yValue2,
      yLabel:yLabel2,
      colorValue:pointColor2,
      margin:margin
    });



  };

  function render2(){

    //console.log("calling line plot with date range:"+dateRange)
    Object(__WEBPACK_IMPORTED_MODULE_1__linePlot__["a" /* default */])(div9, {
      data:dataDay,
      xValue:xValue4,
      yValue1:yValue1,
      yValue2:yValue2,
      yValue3:yValue3,
      xLabel:xLabel4,
      yLabel:"Users",
      colorValue:pointColor2,
      pointSize:pointSize,
      margin:margin,
      brushDateRange:dateRange,
      onBrush:onBrush
    });


  };


  function renderAll(){
    render1();
    render2();
  };


  renderAll();

  //evenet listeners
  window.addEventListener('resize',renderAll);

//callback function for brush

function onBrush(dateFromTo){
    dateRange = dateFromTo;
    //console.log(dateRange);
    render1();
  };

//event handler for bootstrap toggle switch UI elements
$(function() {

  	$('#year2011').change(function() {
      year2011Filter = $(this).prop('checked');
      //console.log(year2011Filter);
      render1()
    });

    $('#year2012').change(function() {
      year2012Filter = $(this).prop('checked');
      //console.log(year2012Filter);
      render1()
		});

    $('#dayTypeWorking').change(function() {
      dayTypeWorkingFilter = $(this).prop('checked');
      //console.log(dayTypeWorkingFilter);
      render1()
    });


    $('#dayTypeNonWorking').change(function() {
      dayTypeNonWorkingFilter = $(this).prop('checked');
      //console.log(dayTypeNonWorkingFilter);
      render1()
    });

    $('#weatherSit1').change(function() {
      weatherSit1Filter = $(this).prop('checked');
      //console.log(weatherSit1Filter);
      render1()
    });

     $('#weatherSit2').change(function() {
      weatherSit2Filter = $(this).prop('checked') ;
      //console.log(weatherSit2Filter);
      render1()
    });

      $('#weatherSit3').change(function() {
      weatherSit3Filter = $(this).prop('checked');
      //console.log(weatherSit1Filter);
      render1()
    });

      $('#weatherSit4').change(function() {
      weatherSit4Filter = $(this).prop('checked');
      //console.log(weatherSit1Filter);
      render1()
        });
});
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();
const colorScale = d3.scaleOrdinal()
  .range(d3.schemeCategory10);


const xAxis = d3.axisBottom()
  .scale(xScale)
  .tickPadding(10)
  .tickFormat(d3.format('0'))
  .tickSize(-innerHeight);

const yAxis = d3.axisLeft()
  .scale(yScale)
  .tickFormat(d3.format('.2s'))
  .tickPadding(10)
  .tickSize(-innerWidth);

const colorLegend = d3.legendColor()
  .scale(colorScale)
  .shape('circle');

/* harmony default export */ __webpack_exports__["a"] = (function (div, props) {
  const {
    data,
    xValue,
    yValue,
    xLabel,
    yLabel,
    colorValue,
    pointSize,
    margin,
    filterValue
  } = props;

 //console.log(data);

  var vizDiv = document.getElementById(div);
  var svg = d3.select(vizDiv)
    .selectAll('svg')
    .data([null]);

  const width = vizDiv.offsetWidth;
  const height = vizDiv.offsetHeight;

  //maintain 1:1 aspect ration for scatter plot
  const minDimension = d3.min([width, height]);

  var svgEnter = svg
    .enter()
    .append('svg');

  //set svg size to window
  svg = svgEnter
    .merge(svg)
    .attr('width',minDimension)
    .attr('height',minDimension);


  // console.log(width, height, minDimension);
  // console.log(svg.attr('width'), svg.attr('height'));

  const innerHeight = minDimension - margin.top - margin.bottom;
  const innerWidth = minDimension - margin.left - margin.right;

  console.log("scatter chart w x h" + width+' x ' +height)
  console.log("scatter chart inner w x h" + innerWidth+' x ' +innerHeight)


  xScale
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  yScale
    .domain(d3.extent(data, yValue)) //d3.extent(data, yValue
    .range([innerHeight, 0])
    .nice();

  var g = svg.selectAll('g').data([null]);

  g = g.enter().append('g')
    .merge(g)
    .attr('transform', `translate(${margin.left},${margin.top})`);

  var xAxisG = g.selectAll('#x-axis-g').data([null]);

  xAxisG = xAxisG.enter().append('g').merge(xAxisG)
    .attr('id','x-axis-g')
    .attr('transform', `translate(0, ${innerHeight})`);

  var yAxisG = g.selectAll('#y-axis-g').data([null]);

  yAxisG = yAxisG.enter().append('g').merge(yAxisG)
    .attr('id','y-axis-g');

  var xAxisText = g.selectAll('#x-axis-label').data([null]);

  xAxisText = xAxisText.enter().append('text').merge(xAxisText)
    .attr('class', 'axis-label')
    .attr('id', 'x-axis-label')
    .attr('x', innerWidth / 2)
    .attr('y', innerHeight+margin.bottom/2)
    .style('text-anchor', 'middle')
    .text(xLabel);

  var yAxisText = g.selectAll('#y-axis-label').data([null]);

  yAxisText = yAxisText.enter().append('text').merge(yAxisText)
    .attr('class', 'axis-label')
    .attr('id', 'y-axis-label')
    .attr('x', -innerHeight / 2)
    .attr('y',  -margin.left/2)
    .attr('transform', `rotate(-90)`)
    .style('text-anchor', 'middle')
    .text(yLabel);


  //data join
  var circles = g.selectAll('circle').data(data);

  //Add new elements
  var circlesEnter = circles.enter().append('circle');


  var circlesExit = circles.exit()
    .attr('class','exit')
    .attr('fill-opacity',0)
    .remove();

  //UPDATE old elements present (change class)
  circles
    .attr('class','update');

  //merge new and existing ell
  circlesEnter
    .attr('class','enter')
    .attr('fill', colorValue)
    .attr('r', pointSize)
    .merge(circles)
    .attr('fill-opacity', d =>filterValue(d))
    .attr('cx', d => xScale(xValue(d)))
    .attr('cy', d => yScale(yValue(d)));

  //remove elements for which there is no data
  circlesExit

  //call X and Y axis
  xAxisG.call(xAxis);
  yAxisG.call(yAxis);

  // colorLegendG.call(colorLegend)
  //   .selectAll('.cell text')
  //   .attr('dy', '0.1em');


  });;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const xScale = d3.scaleTime();
const yScale = d3.scaleLinear();
const minDate = new Date(2011,0,1)
const maxDate = new Date(2012,11,31)


const xTicks = 12
const yTicks = 5

const xAxis = d3.axisBottom()
  .scale(xScale)
  .ticks(xTicks)
  .tickPadding(10) //.tickFormat(d3.timeFormat("%Y-%m-%d"))
  .tickSize(-innerHeight);

const yAxis = d3.axisLeft()
  .scale(yScale)
  .ticks(yTicks)
  .tickFormat(d3.format('.2s'))
  .tickPadding(10)
  .tickSize(-innerWidth);


/* harmony default export */ __webpack_exports__["a"] = (function (div, props) {
  const {
    data,
    xValue,
    yValue1,
    yValue2,
    yValue3,
    xLabel,
    yLabelLeft,
    yLabelRight,
    colorValue,
    pointSize,
    margin,
    brushDateRange,
    onBrush
  } = props;

  //console.log(minDate, maxDate, d3.extent(data, xValue))

  var vizDiv = document.getElementById(div);
  var svg = d3.select(vizDiv)
    .selectAll('svg')
    .data([null]);

  const width = vizDiv.offsetWidth;
  const height = vizDiv.offsetHeight;


  var brush = d3.brushX()
      .extent([[0,0], [width, height]])       //.extent([[xScale(brushDateRange[0]), 0], [xScale(brushDateRange[1]), height]])
      .on("brush end", brushed);


  function brushed() {
      var s = d3.event.selection || xScale.range();
      var dateRange=s.map(xScale.invert, xScale);
      props.onBrush(dateRange);
  };


  var svgEnter = svg
    .enter()
    .append('svg');

  //set svg size to window
  svg = svgEnter
    .merge(svg)
    .attr('width',width)
    .attr('height',height);



  var g = svg.selectAll('.lineChartGroup').data([null]);
  g = g.enter().append('g')
      .attr('class','lineChartGroup')
      .merge(g)
      .attr('transform', `translate(${margin.left},${margin.top})`);


  const minDimension = d3.min([width/4, height]);
  const rightMargin = 1/4 * width - minDimension - margin.left;

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left -rightMargin;
  xScale
    .domain([minDate,maxDate]) //[minDate,maxDate] or d3.extent(data, xValue)
    .range([0, innerWidth])
    .nice();

  yScale
    .domain(d3.extent(data, yValue3))
    .range([innerHeight, 0])
    .nice(yTicks);

  console.log("minDimension:" + minDimension+', rightMargin:' +rightMargin)
  console.log('xScale(0):'+xScale(0));
  console.log('xScale(minDate):'+xScale(minDate));
  console.log('xScale(maxDate):'+xScale(maxDate));
  console.log('xScale(Date.now())):'+xScale(maxDate));
  console.log("line chart w x h" + width+' x ' +height)
  console.log("line chart inner w x h" + innerWidth+' x ' +innerHeight)

  var brush = d3.brushX()
      .extent([[0,0], [width, innerHeight]])       //.extent([[xScale(brushDateRange[0]), 0], [xScale(brushDateRange[1]), height]])
      .on("brush end", brushed);


  function brushed() {
      var s = d3.event.selection || xScale.range();
      var dateRange=s.map(xScale.invert, xScale);
      props.onBrush(dateRange);
  };


  var xAxisG = g.selectAll('#x-axis-g').data([null]);

  xAxisG = xAxisG.enter().append('g').merge(xAxisG)
    .attr('id','x-axis-g')
    .attr('transform', `translate(0, ${innerHeight})`);

  var yAxisG = g.selectAll('#y-axis-g').data([null]);

  yAxisG = yAxisG
    .enter()
      .append('g')
    .merge(yAxisG)
    .attr('id','y-axis-g');

  var xAxisText = g.selectAll('#x-axis-label').data([null]);

  xAxisText = xAxisText.enter().append('text').merge(xAxisText)
    .attr('class', 'axis-label')
    .attr('id', 'x-axis-label')
    .attr('x', innerWidth / 2)
    .attr('y', innerHeight+margin.bottom/2)
    .style('text-anchor', 'middle')
    .text(xLabel);

  var yAxisText = g.selectAll('#y-axis-label').data([null]);

  yAxisText = yAxisText.enter().append('text').merge(yAxisText)
    .attr('class', 'axis-label')
    .attr('id', 'y-axis-label')
    .attr('x', -innerHeight / 2)
    .attr('y',  -margin.left/2)
    .attr('transform', `rotate(-90)`)
    .style('text-anchor', 'middle')
    .text(yLabelLeft);

//add brush to line chart
var b = g.selectAll('.brush').data([null]);

var bEnter = b.enter().append("g")
      .attr("class", "brush");

b.merge(bEnter)
      .call(brush)
      .call(brush.move, xScale.range());



const curveFunction = d3.curveCatmullRom

const lineTotal = d3.line()
  .x(d => xScale(xValue(d)))
  .y(d => yScale(yValue3(d)))
  .curve(curveFunction);

  //data join
  var userLines = g.selectAll('.linePath').data([null]);
  var userLinesEnter = userLines
      .enter()
      .append('path')
      .attr('class','linePath');

userLines.exit().remove();

  //UPDATE old elements present (change class)

userLines;

  //merge new and existing elements
  userLinesEnter
    .attr('fill','none')
    .attr('stroke', 'crimson')
    .attr('stroke-width', 1)
    .merge(userLines)
    .attr('d', lineTotal(data));


  //call X and Y axis
  xAxisG.call(xAxis);
  yAxisG.call(yAxis);


    });;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const colorScale = d3.scaleOrdinal()
  .range(d3.schemeCategory10);

const radialOffset = 0 //.25*Math.PI

/* harmony default export */ __webpack_exports__["a"] = (function (div, props) {
  const {
    data,
    hour,
    yValue,
    yLabel,
    colorValue,
    margin
  } = props;

  var vizDiv = document.getElementById(div);
  var svg = d3.select(vizDiv)
    .selectAll('svg')
    .data([null]);

  const width = vizDiv.offsetWidth;
  const height = vizDiv.offsetHeight;

  console.log(`radial plot ${width}, ${height}`)
  //maintain 1:1 aspect ration for scatter plot
  const minDimension = d3.min([width, height]);
  //console.log(`radial plot- min dimension ${width}, ${height}`)
  var svgEnter = svg
    .enter()
    .append('svg');

  //set svg size to window
  svg = svgEnter
    .merge(svg)
    .attr('width',minDimension)
    .attr('height',minDimension);


  //console.log(width, height, minDimension);
  //console.log(svg.attr('width'), svg.attr('height'));

  const innerHeight = minDimension - margin.top - margin.bottom;
  const innerWidth = minDimension - margin.left - margin.right;
  const rScaleMax = innerHeight/2
  const rMax = 1000

  console.log("radial chart w x h" + width+' x ' +height)
  console.log("radial chart inner w x h" + innerWidth+' x ' +innerHeight)

  //console.log(`radial plot iH/iW/rSM/rM${innerWidth}, ${innerHeight},${rScaleMax},${rMax}`)

   // angular and radial tick marks need to be tied to different g
   //objects. If same g object used for both, if you have r radial
   //tick lines and a angular tick lines, only a-r angular tick
   //lines will plot. first five will be undefined

  //g object for radial tick lines and labels
  let gr = svg.selectAll('.gr').data([null]);

   gr = gr.enter().append('g')
       .attr('class', 'gr')
     .merge(gr)
     .attr('transform',
    				`translate(${innerWidth/2+margin.left},
  										 ${innerHeight/2+margin.top})`);

  const grExit = gr.exit().remove();
  //g object for angular tick lines and labels

  let ga = svg.selectAll('.ga').data([null]);


  ga = ga.enter().append('g')
        .attr('class', 'ga')
      .merge(ga)
      .attr('transform',
     				`translate(${innerWidth/2+margin.left},
   										 ${innerHeight/2+margin.top})`);

  const gaExit = ga.exit().remove();

  //set up to draw ticklines
  const xTickLength = rScaleMax;
  const numTicks =8;
  const xTickAngle =360/numTicks;
  const xTickLabelMultiplier = 2400/numTicks
  const rScale = d3.scaleLinear()
  const aScale = d3.scaleLinear()
  //console.log(`xTickLength ${xTickLength}, numTicks${numTicks},xTickAngle ${xTickAngle}, xTickLabelMultiplier ${xTickLabelMultiplier}`)
  rScale
    .domain([0,rMax])
    .range([0,rScaleMax]);

  const rScaleTicks = rScale.ticks(5).slice(1);

  //console.log(`rScaleTicks ${rScaleTicks}`)
  //drawing radial tick lines

  var rAxisG = gr
    .selectAll('.r-axis-g')
    .data([null]);

  rAxisG.exit().remove();

  rAxisG
    .data(rScaleTicks)
    .enter().append('circle')
      .attr('class','axis circle r-axis-g')
    .merge(rAxisG)
      .attr('fill','none')
      .attr('stroke','lightgrey')
      .attr("r",rScale);

  var rAxisText = gr
    .selectAll('.r-axis-text')
    .data([null]);

  rAxisText.exit().remove();

  // these are create but 'ghosts' of previously drawn labels
  // remain on chart. Their angular position relative to the origin // stays the same, but the radius varies
  rAxisText
    .data(rScaleTicks)
    .enter().append('text')
      .attr('class','r-axis-text')
      .attr('font-size','5pt')
      .attr("transform", "rotate(67.5)")
      .style("text-anchor", "middle")
    .merge(rAxisText)
      .attr("y", function(d) { return -rScale(d) - 2; })
      .text(function(d) { return d; });


  //draw angular tick lines
  var aAxisG = ga.selectAll('.a-axis-g').data([null]);
  // these appear to function as intended - they exist in the dom,
  //and they are visible

  aAxisG.exit().remove();

  aAxisG = aAxisG
      .data(d3.range(0, 360, xTickAngle))
      .enter().append("g")
        .attr('class', 'a-axis-g')
      .merge(aAxisG)
        .attr("transform", function(d) { return "rotate(" + d + ")"; });

  aAxisG
      .append("line")
      .attr('class', 'a-axis-g tick')
      .attr('stroke','lightgrey')
      .attr("x2", rScaleMax);



  // var aAxisText = ga.selectAll('.a-axis-text');
  // // these do no appear in the dom at all
  // aAxisText.exit().remove;

  aAxisG
        .append("text")
        .attr('class','a-axis-g a-axis-text')
        .attr('font-size','6pt')
        .attr("x", rScaleMax + 6)
        .attr("dy", ".35em")
        .style("text-anchor","middle")
        .attr("transform", `rotate(90, ${rScaleMax + 6},0)`)
        .text(function(d,i) { return i*xTickLabelMultiplier + "h"; });



  // g object for main plot
  let g = svg.selectAll('.gl').data([null]);

    g = g.enter().append('g')
      .merge(g)
      .attr('class','gl')
      .attr('transform',
            `translate(${innerWidth/2+margin.left},
                       ${innerHeight/2+margin.top})`);

  //d.hr variable is hardcoded for time being
  // waiting until other issues debugged
  aScale
    .domain([0,24])
    .range([.5*Math.PI,2.5*Math.PI]);



  // CatmullRom curve selected because it
  // it passes through all points and
  // has less overshoot that others
  //const curveFunction = d3.curveCatmullRom
  const curveFunction = d3.curveLinear


  //refactored code for aScale
  // aScale
  //   .domain(d3.extent(data,hour))
  //   .range([0,Math.PI*2]);

  const radialPath = d3.lineRadial()
    .angle(d => aScale(hour(d)))
    .radius(d => rScale(yValue(d)))
    .curve(curveFunction);


  var radialLines = g.selectAll('path').data([null]);
  var radialLinesEnter = radialLines.enter().append('path');
  var radialLinesExit = radialLines.exit().remove();

  //UPDATE old elements present (change class)
  radialLines
    .attr('class','update');

  //merge new and existing ell
  radialLinesEnter
    .attr('class','enter')
    .attr('fill', 'none')
    .attr('stroke', colorValue)
    .attr('stroke-opacity', 0.3)
    .attr('stroke-width', .25)
    .merge(radialLines)
    .attr('d', radialPath(data));

  //remove elements for which there is no data
  radialLinesExit;
  //console.log('radialLinesExit')
});;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = (function (data, props) {
  const {
    dateRange,
    year2011Filter,
    year2012Filter,
    dayTypeWorkingFilter,
    dayTypeNonWorkingFilter,
    weatherSit1Filter,
    weatherSit2Filter,
    weatherSit3Filter,
    weatherSit4Filter,
    unfilteredOpacity
  } = props;

  //console.log("applyFilter")
  //console.log(dateRange,
  // year2011Filter,year2012Filter,
  // dayTypeWorkingFilter,dayTypeNonWorkingFilter,
  // weatherSit1Filter,weatherSit2Filter,weatherSit3Filter, unfilteredOpacity)

  //reset filters
  data.forEach(d=>d.filterOpacity=unfilteredOpacity);
  //console.log(dateRange)
  //apply filters to data set based on state of toggle buttons on screen
  data.forEach(d =>{
      if(d.dteday<dateRange[0] || d.dteday>dateRange[1]) {d.filterOpacity=0.0}
      if(d.yr==0 && year2011Filter==false) {d.filterOpacity=0.0}
      else if(d.yr==1 && year2012Filter==false) {d.filterOpacity=0.0}
      else if(d.workingday==1 && dayTypeWorkingFilter==false) {d.filterOpacity=0.0}
      else if(d.workingday==0 && dayTypeNonWorkingFilter==false) {d.filterOpacity=0.0}
      else if(d.weathersit==1 && weatherSit1Filter==false) {d.filterOpacity=0.0}
      else if(d.weathersit==2 && weatherSit2Filter==false) {d.filterOpacity=0.0}
      else if(d.weathersit==3 && weatherSit3Filter==false) {d.filterOpacity=0.0}
      else if(d.weathersit==4 && weatherSit4Filter==false) {d.filterOpacity=0.0}
      });
  //console.log(data);
});;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = (function (data, props) {
  const {
    dateRange,
    year2011Filter,
    year2012Filter,
    dayTypeWorkingFilter,
    dayTypeNonWorkingFilter,
    weatherSit1Filter,
    weatherSit2Filter,
    weatherSit3Filter,
    weatherSit4Filter,
    unfilteredOpacity
  } = props;

  //console.log("filterData executing...")


    //apply filters to data set based on state of toggle buttons on screen
  let filteredData = [];
  data.forEach(d =>{
      if(d.dteday<dateRange[0] || d.dteday>dateRange[1]) {return}
      else if(d.yr==0 && year2011Filter==false) {return}
      else if(d.yr==1 && year2012Filter==false) {return}
      else if(d.workingday==1 && dayTypeWorkingFilter==false) {return}
      else if(d.workingday==0 && dayTypeNonWorkingFilter==false) {return}
      else if(d.weathersit==1 && weatherSit1Filter==false) {return}
      else if(d.weathersit==2 && weatherSit2Filter==false) {return}
      else if(d.weathersit==3 && weatherSit3Filter==false) {return}
      else if(d.weathersit==4 && weatherSit4Filter==false) {return}
      else filteredData.push(d);
    });
  //console.log(data);
return filteredData});;


/***/ })
/******/ ]);