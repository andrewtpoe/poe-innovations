var React = require('react');
var Beacon = require('./Beacon.react.js');
var PrevSlide = require('./PrevSlide.react.js');
var NextSlide = require('./NextSlide.react.js');

var SlideShow = React.createClass({
  getInitialState: function () {
    return {
      slide: 0,
      slides: [0,1,2,3,4]
    }
  },

  render: function() {
    return (
      <Beacon />
    )
  }
});

module.exports = SlideShow;
