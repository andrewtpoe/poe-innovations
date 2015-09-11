var React = require('react');
var test = require('./Beacon.react.js');
var PrevSlide = require('./PrevSlide.react.js');
var NextSlide = require('./NextSlide.react.js');

var SlideShow = React.createClass({
  render: function() {
    return (
      <test />
    )
  }
})

module.exports = SlideShow;
