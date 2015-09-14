var React = require('react');
var Beacon = require('./Beacon.react.js');
var PrevSlide = require('./PrevSlide.react.js');
var NextSlide = require('./NextSlide.react.js');
var Slide = require('./Slide.react.js');

var SlideShow = React.createClass({
  getInitialState: function () {
    return {
      slide: 0,
      slides: 4
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
    this.interval = false;
  },

  _displaySlide: function() {
    var fade = '';
    if (this.interval) {
      fade = ' fade'
    };
    return (
      <Slide slide={this.state.slide} fade={fade} />
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
      var slideNumber = this.state.slides - 1;
    };
    this._changeSlide(slideNumber);
  },

  _nextSlide: function(slide) {
    if (slide + 1 >= this.state.slides) {
      var slideNumber = 0;
    } else {
      var slideNumber = slide + 1;
    };
    this._changeSlide(slideNumber);
  },

  render: function() {
    var insert = this._displaySlide(this.state.slide);
    return (
      <div className="slideshow">
        <div className="slideshow__tint" >
          <Beacon slide={this.state.slide} slides={this.state.slides} changeSlide={this._changeSlide} stopSlideShow={this._stopSlideShow} />
          <PrevSlide slide={this.state.slide} prevSlide={this._prevSlide} stopSlideShow={this._stopSlideShow} />
          { insert }
          <NextSlide slide={this.state.slide} nextSlide={this._nextSlide} stopSlideShow={this._stopSlideShow} />
        </div>
      </div>
    )
  }

});

module.exports = SlideShow;
