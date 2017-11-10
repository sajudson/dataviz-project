
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


export default function (div, props) {
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
    .attr('stroke', 'red')
    .attr('stroke-width', 1)
    .merge(userLines)
    .attr('d', lineTotal(data));


  //call X and Y axis
  xAxisG.call(xAxis);
  yAxisG.call(yAxis);


    };
