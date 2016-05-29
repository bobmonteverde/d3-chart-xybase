var tape = require('tape'),
    chart_xybase = require('../');

tape('chart_xybase() returns a chart function.', function(test) {
  test.equal(typeof chart_xybase.chart_xybase(), 'function');
  test.end();
});
