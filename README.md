# d3-chart-xybase

SVG chart base with X and Y axes on all 4 sides.

## Installing

If you use NPM, `npm install d3-chart-xybase`. Otherwise, download the [latest release](https://github.com/bobmonteverde/d3-chart-xybase/releases/latest). You can also load directly from [d3js.org](https://d3js.org), either as a [standalone library](https://d3js.org/d3-axis.v0.3.min.js) or as part of [D3 4.0](https://github.com/d3/d3). (Some dependencies are optional.) AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3_chart_xybase` global is exported:

```html
<script src="https://d3js.org/d3-array.v0.7.min.js"></script>
<script src="https://d3js.org/d3-collection.v0.1.min.js"></script>
<script src="https://d3js.org/d3-color.v0.4.min.js"></script>
<script src="https://d3js.org/d3-format.v0.5.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v0.5.min.js"></script>
<script src="https://d3js.org/d3-time.v0.2.min.js"></script>
<script src="https://d3js.org/d3-time-format.v0.3.min.js"></script>
<script src="https://d3js.org/d3-scale.v0.7.min.js"></script>
<script src="https://d3js.org/d3-selection.v0.7.min.js"></script>
<script src="https://d3js.org/d3-dispatch.v0.4.min.js"></script>
<script src="https://d3js.org/d3-ease.v0.7.min.js"></script>
<script src="https://d3js.org/d3-timer.v0.4.min.js"></script>
<script src="https://d3js.org/d3-transition.v0.2.min.js"></script>
<script src="https://d3js.org/d3-axis.v0.3.min.js"></script>
<script src="build/d3-chart-xybase.js"></script>
<script>

var chart = d3_chart_xybase.chart_xybase()

</script>
```

## Running the example

After running `npm install` in the root folder, to run the example start a simple server in the root folder.
For example, on linux/mac you can run `python -m SimpleHTTPServer 8888` and open `http://localhost:8888/example/chart_xybase.html`

## API Reference

<a name="chart_xybase" href="#chart_xybase">#</a> d3_chart_xybase.<b>chart_xybase</b>()

Constructs a new chart base, defaults to left and bottom axes active, returns a chart. (Must provide chart with scales for the axes that are active.)

<a name="chart" href="#chart">#</a> chart(<i>context</i>)

Render the chart base to the given context, which may be either a selection of SVG containers (either SVG or G elements) or a corresponding transition.

<a name="axisBottom" href="#axisBottom">#</a> chart.<b>axisBottom</b>([<i>axis</i>])

If axis is provided, sets chart's axisBottom to this axis and returns the chart.

If no argument passed, returns chart's axisBottom.

<a name="axisTop" href="#axisTop">#</a> chart.<b>axisTop</b>([<i>axis</i>])

If axis is provided, sets chart's axisTop to this axis and returns the chart.

If no argument passed, returns chart's axisTop.

<a name="axisLeft" href="#axisLeft">#</a> chart.<b>axisLeft</b>([<i>axis</i>])

If axis is provided, sets chart's axisLeft to this axis and returns the chart.

If no argument passed, returns chart's axisLeft.

<a name="axisRight" href="#axisRight">#</a> chart.<b>axisRight</b>([<i>axis</i>])

If axis is provided, sets chart's axisRight to this axis and returns the chart.

If no argument passed, returns chart's axisRight.

<a name="scaleBottom" href="#scaleBottom">#</a> chart.<b>scaleBottom</b>([<i>scale</i>])

If scale is provided, sets chart's scaleBottom to this scale and returns the chart.

If no argument passed, returns chart's scaleBottom.

<a name="scaleTop" href="#scaleTop">#</a> chart.<b>scaleTop</b>([<i>scale</i>])

If scale is provided, sets chart's scaleTop to this scale and returns the chart.

If no argument passed, returns chart's scaleTop.

<a name="scaleLeft" href="#scaleLeft">#</a> chart.<b>scaleLeft</b>([<i>scale</i>])

If scale is provided, sets chart's scaleLeft to this scale and returns the chart.

If no argument passed, returns chart's scaleLeft.

<a name="scaleRight" href="#scaleRight">#</a> chart.<b>scaleRight</b>([<i>scale</i>])

If scale is provided, sets chart's scaleRight to this scale and returns the chart.

If no argument passed, returns chart's scaleRight.

<a name="renderAxisBottom" href="#renderAxisBottom">#</a> chart.<b>renderAxisBottom</b>([<i>bool</i>])

If true, renders bottom axis (bottomScale must be set) and returns the chart.

If no argument passed, returns renderAxisBottom setting.

Default: true

<a name="renderAxisTop" href="#renderAxisTop">#</a> chart.<b>renderAxisTop</b>([<i>bool</i>])

If true, renders bottom axis (bottomScale must be set) and returns the chart.

If no argument passed, returns renderAxisTop setting.

Default: false

<a name="renderAxisLeft" href="#renderAxisLeft">#</a> chart.<b>renderAxisLeft</b>([<i>bool</i>])

If true, renders bottom axis (bottomScale must be set) and returns the chart.

If no argument passed, returns renderAxisLeft setting.

Default: true

<a name="renderAxisRight" href="#renderAxisRight">#</a> chart.<b>renderAxisRight</b>([<i>bool</i>])

If true, renders bottom axis (bottomScale must be set) and returns the chart.

If no argument passed, returns renderAxisRight setting.

Default: false

<a name="labelBottom" href="#labelBottom">#</a> chart.<b>labelBottom</b>([<i>string</i>])

If string is provided, sets bottom axis' labe to string and returns the chart.

If no argument passed, returns current axis label.

<a name="labelTop" href="#labelTop">#</a> chart.<b>labelTop</b>([<i>string</i>])

If string is provided, sets bottom axis' labe to string and returns the chart.

If no argument passed, returns current axis label.

<a name="labelLeft" href="#labelLeft">#</a> chart.<b>labelLeft</b>([<i>string</i>])

If string is provided, sets bottom axis' labe to string and returns the chart.

If no argument passed, returns current axis label.

<a name="labelRight" href="#labelRight">#</a> chart.<b>labelRight</b>([<i>string</i>])

If string is provided, sets bottom axis' labe to string and returns the chart.

If no argument passed, returns current axis label.

<a name="labelPosBottom" href="#labelPosBottom">#</a> chart.<b>labelPosBottom</b>([<i>'(insides|outside)'</i>, <i>'(left|center|right)'</i>])

Sets bottom axis label's position inside/outside of chart, and left/center/right aligned on the axis and returns the chart.

If no argument passed, returns current axis label positions.

Default: ['inside', 'right']

<a name="labelPosTop" href="#labelPosTop">#</a> chart.<b>labelPosTop</b>([<i>'(insides|outside)'</i>, <i>'(left|center|right)'</i>])

Sets bottom axis label's position inside/outside of chart, and left/center/right aligned on the axis and returns the chart.

If no argument passed, returns current axis label positions.

Default: ['inside', 'right']

<a name="labelPosLeft" href="#labelPosLeft">#</a> chart.<b>labelPosLeft</b>([<i>'(insides|outside)'</i>, <i>'(top|middle|bottom)'</i>])

Sets bottom axis label's position inside/outside of chart, and top/middle/bottom aligned on the axis and returns the chart.

If no argument passed, returns current axis label positions.

Default: ['inside', 'top']

<a name="labelPosRight" href="#labelPosRight">#</a> chart.<b>labelPosRight</b>([<i>'(insides|outside)'</i>, <i>'(top|middle|bottom)'</i>])

Sets bottom axis label's position inside/outside of chart, and top/middle/bottom aligned on the axis and returns the chart.

If no argument passed, returns current axis label positions.

Default: ['inside', 'top']

<a name="tickSizeBottom" href="#tickSizeBottom">#</a> chart.<b>tickSizeBottom</b>([<i>size</i>])

If size is specified, sets the inner and outer tick size to the specified value and returns the chart.

If no argument passed, returns current axis tick size.

Default: height => [-height, 1]  // where height argument is the overall height minus the margins.

<a name="tickSizeTop" href="#tickSizeTop">#</a> chart.<b>tickSizeTop</b>([<i>size</i>])

If size is specified, sets the inner and outer tick size to the specified value and returns the chart.

If no argument passed, returns current axis tick size.

Default: height => [-height, 1]  // where height argument is the overall height minus the margins.

<a name="tickSizeLeft" href="#tickSizeLeft">#</a> chart.<b>tickSizeLeft</b>([<i>size</i>])

If size is specified, sets the inner and outer tick size to the specified value and returns the chart.

If no argument passed, returns current axis tick size.

Default: width => [-width, 1]  // where width argument is the overall width minus the margins.

<a name="tickSizeRight" href="#tickSizeRight">#</a> chart.<b>tickSizeRight</b>([<i>size</i>])

If size is specified, sets the inner and outer tick size to the specified value and returns the chart.

If no argument passed, returns current axis tick size.

Default: width => [-width, 1]  // where width argument is the overall width minus the margins.

<a name="ticksBottom" href="#ticksBottom">#</a> <i>chart</i>.<b>ticksBottom</b>([<i>arguments</i>])

If *arguments* are specified, stores the specified arguments for subsequent use in generating ticks and returns the chart. The arguments will later be passed to [*scale*.ticks](https://github.com/d3/d3-scale#continuous_ticks) to generate tick values (unless tick values are specified explicitly via [*axis*.tickValues](#axis_tickValues)). These arguments are also passed to the scale’s [tickFormat method](https://github.com/d3/d3-scale#continuous_tickFormat) to generate a tick format (unless a tick format is specified explicitly via [*axis*.tickFormat](#axis_tickFormat)). If no arguments are specified, returns the current tick arguments, which defaults to the empty array.

Suitable arguments depends on the associated scale: for a [quantitative scale](https://github.com/d3/d3-scale#continuous-scales), you might specify a suggested tick count such as `[20]` or a tick count and a tick format specifier such as `[10, "$,.2f"]`; for a [time scale](https://github.com/d3/d3-scale#time-scales), a [time interval](https://github.com/d3/d3-time#intervals) such as `[d3.timeMinute, 15]` might be appropriate.

If no argument passed, returns current axis tick arguments.

Default: width => [Math.round( width / 80 )] // where width argument is the overall width minus the margins.

<a name="ticksTop" href="#ticksTop">#</a> <i>chart</i>.<b>ticksTop</b>([<i>arguments</i>])

If *arguments* are specified, stores the specified arguments for subsequent use in generating ticks and returns the chart.

If no argument passed, returns current axis tick arguments.

Default: width => [Math.round( width / 80 )] // where width argument is the overall width minus the margins.

<a name="ticksLeft" href="#ticksLeft">#</a> <i>chart</i>.<b>ticksLeft</b>([<i>arguments</i>])

If *arguments* are specified, stores the specified arguments for subsequent use in generating ticks and returns the chart.

If no argument passed, returns current axis tick arguments.

Default: height => [Math.round( height / 40 )] // where height argument is the overall height minus the margins.

<a name="ticksRight" href="#ticksRight">#</a> <i>chart</i>.<b>ticksRight</b>([<i>arguments</i>])

If *arguments* are specified, stores the specified arguments for subsequent use in generating ticks and returns the chart.

If no argument passed, returns current axis tick arguments.

Default: height => [Math.round( height / 40 )] // where height argument is the overall height minus the margins.

<a name="width" href="#width">#</a> <i>chart</i>.<b>width</b>(<i>number</i>)

If width is passed, set's chart's overall width to value provided.

If no argument passed, returns current chart's width.

Default: 600

<a name="height" href="#height">#</a> <i>chart</i>.<b>height</b>(<i>number</i>)

If height is passed, set's chart's overall height to value provided.

If no argument passed, returns current chart's height.

Default: 400

<a name="margin" href="#margin">#</a> <i>chart</i>.<b>margin</b>(<i>object</i>)

If margin is passed, set's some or all of the chart's margins.

Default margin: { "top": 10, "right": 10, "bottom": 30, "left": 40 }

If no argument passed, returns current chart's margin.
