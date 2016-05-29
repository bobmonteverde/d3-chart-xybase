import d3_axis from 'd3-axis'

function functor (f) {
  return typeof f === 'function' ? f : function() { return f }
}

export default function() {

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------

  // var bottomAxis     = d3.svg.axis(),
  // topAxis        = d3.svg.axis(),
  // leftAxis       = d3.svg.axis(),
  // rightAxis      = d3.svg.axis(),
  var bottomAxis,
      topAxis,
      leftAxis,
      rightAxis,
      bottomScale    = null,
      topScale       = null,
      leftScale      = null,
      rightScale     = null,
      bottomLabel    = null,
      topLabel       = null,
      leftLabel      = null,
      rightLabel     = null,
      bottomTickSize = height => [-height, 1],
      topTickSize    = height => [-height, 1],
      leftTickSize   = width => [-width, 1],
      rightTickSize  = width => [-width, 1],
      bottomTicks    = width => [Math.round(width/80)],
      topTicks       = width => [Math.round(width/80)],
      leftTicks      = height => [Math.round(height/40)],
      rightTicks     = height => [Math.round(height/40)],
      renderBottom   = true,
      renderTop      = false,
      renderLeft     = true,
      renderRight    = false,
      height         = 400,
      width          = 600,
      margin         = { top: 10, right: 10, bottom: 30, left: 50 }

  //------------------------------------------------------------

  function chart(context) {
    var selection = context.selection ? context.selection() : context,
        availableHeight = height - margin.top - margin.bottom,
        availableWidth = width - margin.left - margin.right

    if (availableHeight < 0) availableHeight = 0
    if (availableWidth < 0)  availableWidth = 0

    //------------------------------------------------------------
    // Setup Chart Layers

    var wrap      = selection.selectAll('g.d3-chart-xybase').data([null])
    var wrapEnter = wrap.enter().append('g').attr('class', 'd3-chart-xybase')
    var gEnter    = wrapEnter.append('g')
    var g         = selection.select('.d3-chart-xybase g')

    gEnter.append('g').attr('class', 'd3-chart-axis d3-chart-bottomAxis')
    gEnter.append('g').attr('class', 'd3-chart-axis d3-chart-topAxis')
    gEnter.append('g').attr('class', 'd3-chart-axis d3-chart-leftAxis')
    gEnter.append('g').attr('class', 'd3-chart-axis d3-chart-rightAxis')

    g.attr('transform', `translate(${margin.left},${margin.top})`)

    //------------------------------------------------------------

    //------------------------------------------------------------
    // Bottom Axis

    if (renderBottom) {
      // bottomAxis
      // .scale(bottomScale)
      // .orient('bottom')
      bottomAxis = d3_axis.axisBottom(bottomScale)
      bottomAxis
        .tickSize.apply(bottomAxis, bottomTickSize(availableHeight))
      bottomAxis
        .ticks.apply(bottomAxis, bottomTicks(availableWidth))
      gEnter.select('.d3-chart-bottomAxis').append('g')
          .attr('class', 'd3-chart-x d3-chart-axis')
        .append('text')
          .attr('class', 'd3-chart-label')
          .attr('dx', -6)
          .attr('dy', -6)
          .style('text-anchor', 'end')
      g.select('.d3-chart-bottomAxis .d3-chart-label')
          .attr('x', availableWidth)
          .text(bottomLabel)
      g.select('.d3-chart-bottomAxis .d3-chart-axis')
          .attr('transform', `translate(0,${availableHeight})`)
          .call(bottomAxis)
    }

    //------------------------------------------------------------

    //------------------------------------------------------------
    // Top Axis

    if (renderTop) {
      // topAxis
      // .scale(topScale)
      // .orient('top')
      topAxis = d3_axis.axisTop(topScale)
      topAxis
        .tickSize.apply(topAxis, topTickSize(availableHeight))
      topAxis
        .ticks.apply(topAxis, topTicks(availableWidth))
      gEnter.select('.d3-chart-topAxis').append('g')
          .attr('class', 'd3-chart-x d3-chart-axis')
        .append('text')
          .attr('class', 'd3-chart-label')
          .attr('dy', '1em')
          .attr('dx', '-2em')
          .style('text-anchor', 'end')
      g.select('.d3-chart-topAxis .d3-chart-label')
          .attr('x', availableWidth)
          .text(topLabel)
      g.select('.d3-chart-topAxis .d3-chart-axis')
          //.attr('transform', 'translate(0,0)')
          .call(topAxis)
    }

    //------------------------------------------------------------

    //------------------------------------------------------------
    // Left Axis

    if (renderLeft) {
      console.log('renderLeft')
      // leftAxis
      // .scale(leftScale)
      // .orient('left')
      leftAxis = d3_axis.axisLeft(leftScale)
      leftAxis
        .tickSize.apply(leftAxis, leftTickSize(availableWidth))
      leftAxis
        .ticks.apply(leftAxis, leftTicks(availableHeight))
      gEnter.select('.d3-chart-leftAxis').append('g')
          .attr('class', 'd3-chart-y d3-chart-axis')
        .append('text')
          .attr('class', 'd3-chart-label')
          .attr('transform', 'rotate(90)')
          .attr('dx', 6)
          .attr('dy', -6)
          .style('text-anchor', 'start')
      g.select('.d3-chart-leftAxis .d3-chart-label')
          .text(leftLabel)
      g.select('.d3-chart-leftAxis .d3-chart-axis')
          .call(leftAxis)
    }

    //------------------------------------------------------------

    //------------------------------------------------------------
    // Right Axis

    if (renderRight) {
      // rightAxis
      // .scale(rightScale)
      // .orient('right')
      rightAxis = d3_axis.axisRight(rightScale)
      rightAxis
        .tickSize.apply(rightAxis, rightTickSize(availableWidth))
      rightAxis
        .ticks.apply(rightAxis, rightTicks(availableHeight))
      gEnter.select('.d3-chart-rightAxis').append('g')
          .attr('class', 'd3-chart-y d3-chart-axis')
        .append('text')
          .attr('class', 'd3-chart-label')
          .attr('transform', 'rotate(-90)')
          .attr('dy', -6)
          .attr('dx', -6)
          .style('text-anchor', 'end')
      g.select('.d3-chart-rightAxis .d3-chart-label')
          .text(rightLabel)
      g.select('.d3-chart-rightAxis .d3-chart-axis')
          .attr('transform', `translate(${availableWidth},0)`)
          .call(rightAxis)
    }

    //------------------------------------------------------------

  }

  //============================================================
  // Expose Public API
  //------------------------------------------------------------

  chart.bottomAxis = bottomAxis
  chart.topAxis    = topAxis
  chart.leftAxis   = leftAxis
  chart.rightAxis  = rightAxis

  chart.bottomScale = function(_) {
    if (!arguments.length) return bottomScale
    bottomScale = _
    return chart
  }

  chart.topScale = function(_) {
    if (!arguments.length) return topScale
    topScale = _
    return chart
  }

  chart.leftScale = function(_) {
    if (!arguments.length) return leftScale
    leftScale = _
    return chart
  }

  chart.rightScale = function(_) {
    if (!arguments.length) return rightScale
    rightScale = _
    return chart
  }

  chart.renderBottomAxis = function(_) {
    if (!arguments.length) return renderBottom
    renderBottom = _
    return chart
  }

  chart.renderTopAxis = function(_) {
    if (!arguments.length) return renderTop
    renderTop = _
    return chart
  }

  chart.renderLeftAxis = function(_) {
    if (!arguments.length) return renderLeft
    renderLeft = _
    return chart
  }

  chart.renderRightAxis = function(_) {
    if (!arguments.length) return renderRight
    renderRight = _
    return chart
  }

  chart.bottomLabel = function(_) {
    if (!arguments.length) return bottomLabel
    bottomLabel = _
    return chart
  }

  chart.topLabel = function(_) {
    if (!arguments.length) return topLabel
    topLabel = _
    return chart
  }

  chart.leftLabel = function(_) {
    if (!arguments.length) return leftLabel
    leftLabel = _
    return chart
  }

  chart.rightLabel = function(_) {
    if (!arguments.length) return rightLabel
    rightLabel = _
    return chart
  }

  chart.bottomTickSize = function(_) {
    if (!arguments.length) return bottomTickSize
    bottomTickSize = functor(_)
    return chart
  }

  chart.topTickSize = function(_) {
    if (!arguments.length) return topTickSize
    topTickSize = functor(_)
    return chart
  }

  chart.leftTickSize = function(_) {
    if (!arguments.length) return leftTickSize
    leftTickSize = functor(_)
    return chart
  }

  chart.rightTickSize = function(_) {
    if (!arguments.length) return rightTickSize
    rightTickSize = functor(_)
    return chart
  }

  chart.bottomTicks = function(_) {
    if (!arguments.length) return bottomTicks
    bottomTicks = functor(_)
    return chart
  }

  chart.topTicks = function(_) {
    if (!arguments.length) return topTicks
    topTicks = functor(_)
    return chart
  }

  chart.leftTicks = function(_) {
    if (!arguments.length) return leftTicks
    leftTicks = functor(_)
    return chart
  }

  chart.rightTicks = function(_) {
    if (!arguments.length) return rightTicks
    rightTicks = functor(_)
    return chart
  }

  chart.height = function(_) {
    if (!arguments.length) return height
    height = _
    return chart
  }

  chart.width = function(_) {
    if (!arguments.length) return width
    width = _
    return chart
  }

  chart.margin = function(_) {
    if (!arguments.length) return margin
    margin = Object.assign({}, margin, _)
    return chart
  }

  //------------------------------------------------------------

  return chart
}
