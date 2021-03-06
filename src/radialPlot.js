

const colorScale = d3.scaleOrdinal()
  .range(d3.schemeCategory10);

const radialOffset = 0 //.25*Math.PI

export default function (div, props) {
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

  // console.log("radial chart w x h" + width+' x ' +height)
  // console.log("radial chart inner w x h" + innerWidth+' x ' +innerHeight)

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
};
