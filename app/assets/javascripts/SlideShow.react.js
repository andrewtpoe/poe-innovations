var React = require('react');
var Beacon = require('./Beacon.react.js');
var PrevSlide = require('./PrevSlide.react.js');
var NextSlide = require('./NextSlide.react.js');

var SlideShow = React.createClass({
  render: function() {
    return (
      <Beacon />
    )
  }
})

module.exports = SlideShow;
