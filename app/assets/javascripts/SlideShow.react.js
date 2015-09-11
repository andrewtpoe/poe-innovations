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

  tick: function() {
    this._nextSlide(this.state.slide);
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 10000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  _stopSlideShow: function() {
    clearInterval(this.interval);
  },

  _displaySlide: function() {
    return (
      <h1>
        {this.state.slides[this.state.slide]}
      </h1>
    )
  },

  _changeSlide: function(slideNumber) {
    this.setState ({
      slide: slideNumber
    })
  },

  _prevSlide: function(slide) {
    if (slide - 1 >= 0) {
      var slideNumber = slide - 1;
    } else {
      var slideNumber = this.state.slides.length - 1;
    };
    this._changeSlide(slideNumber);
  },

  _nextSlide: function(slide) {
    if (slide + 1 >= this.state.slides.length) {
      var slideNumber = 0;
    } else {
      var slideNumber = slide + 1;
    };
    this._changeSlide(slideNumber);
  },

  render: function() {
    return (
      <Beacon />
    )
  }
});

module.exports = SlideShow;
