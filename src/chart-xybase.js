import d3_axis from 'd3-axis'

function functor (f) {
  return typeof f === 'function' ? f : function() { return f }
}

export default function() {

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------

  // var axisBottom     = d3.svg.axis(),
  // axisTop        = d3.svg.axis(),
  // axisLeft       = d3.svg.axis(),
  // axisRight      = d3.svg.axis(),
  var axisBottom,
      axisTop,
      axisLeft,
      axisRight,
      scaleBottom    = null,
      scaleTop       = null,
      scaleLeft      = null,
      scaleRight     = null,
      labelBottom    = null,
      labelTop       = null,
      labelLeft      = null,
      labelRight     = null,
      labelPosBottom = 'right',
      labelPosTop    = 'right',
      labelPosLeft   = 'top',
      labelPosRight  = 'top',
      labelOutBottom = false,
      labelOutTop    = false,
      labelOutLeft   = false,
      labelOutRight  = false,
      tickSizeBottom = height => [-height, 1],
      tickSizeTop    = height => [-height, 1],
      tickSizeLeft   = width => [-width, 1],
      tickSizeRight  = width => [-width, 1],
      ticksBottom    = width => [Math.round(width/80)],
      ticksTop       = width => [Math.round(width/80)],
      ticksLeft      = height => [Math.round(height/40)],
      ticksRight     = height => [Math.round(height/40)],
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

    gEnter.append('g').attr('class', 'd3-chart-axis d3-chart-axisBottom')
    gEnter.append('g').attr('class', 'd3-chart-axis d3-chart-axisTop')
    gEnter.append('g').attr('class', 'd3-chart-axis d3-chart-axisLeft')
    gEnter.append('g').attr('class', 'd3-chart-axis d3-chart-axisRight')

    g.attr('transform', `translate(${margin.left},${margin.top})`)

    //------------------------------------------------------------

    //------------------------------------------------------------
    // Bottom Axis

    if (renderBottom) {
      var labelBottomX, labelBottomDX, labelBottomAnchor
      switch (labelPosBottom) {
        case 'left':
          labelBottomX = 0
          labelBottomDX = 6
          labelBottomAnchor = 'start'
          break
        case 'center':
          labelBottomX = availableWidth / 2
          labelBottomDX = 0
          labelBottomAnchor = 'middle'
          break
        case 'right':
        default:
          labelBottomX = availableWidth
          labelBottomDX = -6
          labelBottomAnchor = 'end'
          break
      }

      axisBottom = d3_axis.axisBottom(scaleBottom)
      axisBottom
        .tickSize.apply(axisBottom, tickSizeBottom(availableHeight))
      axisBottom
        .ticks.apply(axisBottom, ticksBottom(availableWidth))
      gEnter.select('.d3-chart-axisBottom').append('g')
          .attr('class', 'd3-chart-x d3-chart-axis')
        .append('text')
          .attr('class', 'd3-chart-label')
          .attr('dy', '-.3em')
      g.select('.d3-chart-axisBottom .d3-chart-label')
          .attr('x', labelBottomX)
          .attr('dx', labelBottomDX)
          .attr('y', labelOutBottom ? margin.bottom : 0)
          .style('text-anchor', labelBottomAnchor)
          .text(labelBottom)
      g.select('.d3-chart-axisBottom .d3-chart-axis')
          .attr('transform', `translate(0,${availableHeight})`)
          .call(axisBottom)
    }

    //------------------------------------------------------------

    //------------------------------------------------------------
    // Top Axis

    if (renderTop) {
      var labelTopX, labelTopDX, labelTopAnchor
      switch (labelPosTop) {
        case 'left':
          labelTopX = 0
          labelTopDX = 6
          labelTopAnchor = 'start'
          break
        case 'center':
          labelTopX = availableWidth / 2
          labelTopDX = 0
          labelTopAnchor = 'middle'
          break
        case 'right':
        default:
          labelTopX = availableWidth
          labelTopDX = -6
          labelTopAnchor = 'end'
          break
      }

      axisTop = d3_axis.axisTop(scaleTop)
      axisTop
        .tickSize.apply(axisTop, tickSizeTop(availableHeight))
      axisTop
        .ticks.apply(axisTop, ticksTop(availableWidth))
      gEnter.select('.d3-chart-axisTop').append('g')
          .attr('class', 'd3-chart-x d3-chart-axis')
        .append('text')
          .attr('class', 'd3-chart-label')
          .attr('dy', '1.2em')
      g.select('.d3-chart-axisTop .d3-chart-label')
          .attr('x', labelTopX)
          .attr('dx', labelTopDX)
          .attr('y', labelOutTop ? -margin.top : 0)
          .style('text-anchor', labelTopAnchor)
          .text(labelTop)
      g.select('.d3-chart-axisTop .d3-chart-axis')
          //.attr('transform', 'translate(0,0)')
          .call(axisTop)
    }

    //------------------------------------------------------------

    //------------------------------------------------------------
    // Left Axis

    if (renderLeft) {
      var labelLeftX, labelLeftDX, labelLeftAnchor
      switch (labelPosLeft) {
        case 'top':
          labelLeftX = 0
          labelLeftDX = -6
          labelLeftAnchor = 'end'
          break
        case 'middle':
          labelLeftX = -availableHeight / 2
          labelLeftDX = 0
          labelLeftAnchor = 'middle'
          break
        case 'bottom':
        default:
          labelLeftX = -availableHeight
          labelLeftDX = 6
          labelLeftAnchor = 'start'
          break
      }

      axisLeft = d3_axis.axisLeft(scaleLeft)
      axisLeft
        .tickSize.apply(axisLeft, tickSizeLeft(availableWidth))
      axisLeft
        .ticks.apply(axisLeft, ticksLeft(availableHeight))
      gEnter.select('.d3-chart-axisLeft').append('g')
          .attr('class', 'd3-chart-y d3-chart-axis')
        .append('text')
          .attr('class', 'd3-chart-label')
          .attr('transform', 'rotate(-90)')
          .attr('dy', '1.2em')
      g.select('.d3-chart-axisLeft .d3-chart-label')
          .attr('x', labelLeftX)
          .attr('dx', labelLeftDX)
          .attr('y', labelOutLeft ? -margin.left : 0)
          .style('text-anchor', labelLeftAnchor)
          .text(labelLeft)
      g.select('.d3-chart-axisLeft .d3-chart-axis')
          .call(axisLeft)
    }

    //------------------------------------------------------------

    //------------------------------------------------------------
    // Right Axis

    if (renderRight) {
      var labelRightX, labelRightDX, labelRightAnchor
      switch (labelPosRight) {
        case 'top':
          labelRightX = 0
          labelRightDX = 6
          labelRightAnchor = 'start'
          break
        case 'middle':
          labelRightX = availableHeight / 2
          labelRightDX = 0
          labelRightAnchor = 'middle'
          break
        case 'bottom':
        default:
          labelRightX = availableHeight
          labelRightDX = -6
          labelRightAnchor = 'end'
          break
      }

      axisRight = d3_axis.axisRight(scaleRight)
      axisRight
        .tickSize.apply(axisRight, tickSizeRight(availableWidth))
      axisRight
        .ticks.apply(axisRight, ticksRight(availableHeight))
      gEnter.select('.d3-chart-axisRight').append('g')
          .attr('class', 'd3-chart-y d3-chart-axis')
        .append('text')
          .attr('class', 'd3-chart-label')
          .attr('transform', 'rotate(90)')
          .attr('dy', '1.2em')
      g.select('.d3-chart-axisRight .d3-chart-label')
          .attr('x', labelRightX)
          .attr('dx', labelRightDX)
          .attr('y', labelOutRight ? -margin.right : 0)
          .style('text-anchor', labelRightAnchor)
          .text(labelRight)
      g.select('.d3-chart-axisRight .d3-chart-axis')
          .attr('transform', `translate(${availableWidth},0)`)
          .call(axisRight)
    }

    //------------------------------------------------------------

  }

  //============================================================
  // Expose Public API
  //------------------------------------------------------------

  chart.axisBottom = axisBottom
  chart.axisTop    = axisTop
  chart.axisLeft   = axisLeft
  chart.axisRight  = axisRight

  chart.scaleBottom = function(_) {
    if (!arguments.length) return scaleBottom
    scaleBottom = _
    return chart
  }

  chart.scaleTop = function(_) {
    if (!arguments.length) return scaleTop
    scaleTop = _
    return chart
  }

  chart.scaleLeft = function(_) {
    if (!arguments.length) return scaleLeft
    scaleLeft = _
    return chart
  }

  chart.scaleRight = function(_) {
    if (!arguments.length) return scaleRight
    scaleRight = _
    return chart
  }

  chart.renderAxisBottom = function(_) {
    if (!arguments.length) return renderBottom
    renderBottom = _
    return chart
  }

  chart.renderAxisTop = function(_) {
    if (!arguments.length) return renderTop
    renderTop = _
    return chart
  }

  chart.renderAxisLeft = function(_) {
    if (!arguments.length) return renderLeft
    renderLeft = _
    return chart
  }

  chart.renderAxisRight = function(_) {
    if (!arguments.length) return renderRight
    renderRight = _
    return chart
  }

  chart.labelBottom = function(_) {
    if (!arguments.length) return labelBottom
    labelBottom = _
    return chart
  }

  chart.labelTop = function(_) {
    if (!arguments.length) return labelTop
    labelTop = _
    return chart
  }

  chart.labelLeft = function(_) {
    if (!arguments.length) return labelLeft
    labelLeft = _
    return chart
  }

  chart.labelRight = function(_) {
    if (!arguments.length) return labelRight
    labelRight = _
    return chart
  }

  chart.labelPosBottom = function(_) {
    if (!arguments.length) return labelPosBottom
    labelPosBottom = _
    return chart
  }

  chart.labelPosTop = function(_) {
    if (!arguments.length) return labelPosTop
    labelPosTop = _
    return chart
  }

  chart.labelPosLeft = function(_) {
    if (!arguments.length) return labelPosLeft
    labelPosLeft = _
    return chart
  }

  chart.labelPosRight = function(_) {
    if (!arguments.length) return labelPosRight
    labelPosRight = _
    return chart
  }

  chart.labelOutBottom = function(_) {
    if (!arguments.length) return labelOutBottom
    labelOutBottom = _
    return chart
  }

  chart.labelOutTop = function(_) {
    if (!arguments.length) return labelOutTop
    labelOutTop = _
    return chart
  }

  chart.labelOutLeft = function(_) {
    if (!arguments.length) return labelOutLeft
    labelOutLeft = _
    return chart
  }

  chart.labelOutRight = function(_) {
    if (!arguments.length) return labelOutRight
    labelOutRight = _
    return chart
  }

  chart.tickSizeBottom = function(_) {
    if (!arguments.length) return tickSizeBottom
    tickSizeBottom = functor(_)
    return chart
  }

  chart.tickSizeTop = function(_) {
    if (!arguments.length) return tickSizeTop
    tickSizeTop = functor(_)
    return chart
  }

  chart.tickSizeLeft = function(_) {
    if (!arguments.length) return tickSizeLeft
    tickSizeLeft = functor(_)
    return chart
  }

  chart.tickSizeRight = function(_) {
    if (!arguments.length) return tickSizeRight
    tickSizeRight = functor(_)
    return chart
  }

  chart.ticksBottom = function(_) {
    if (!arguments.length) return ticksBottom
    ticksBottom = functor(_)
    return chart
  }

  chart.ticksTop = function(_) {
    if (!arguments.length) return ticksTop
    ticksTop = functor(_)
    return chart
  }

  chart.ticksLeft = function(_) {
    if (!arguments.length) return ticksLeft
    ticksLeft = functor(_)
    return chart
  }

  chart.ticksRight = function(_) {
    if (!arguments.length) return ticksRight
    ticksRight = functor(_)
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
