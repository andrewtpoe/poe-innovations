// Libraries
var React = require('react');
var Router = require('director').Router;
var Request = require('superagent');
// Components
var Beacon = require('./Beacon.react');
var PrevSlide = require('./PrevSlide.react');
var NextSlide = require('./NextSlide.react');


var SlideShow = React.createClass({
  getInitialState: function () {
    console.log('Getting initial state');
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
    console.log('Rendering SlideShow');
    var insert = this._displaySlide(this.state.slide);
    return (
      <div className="slideshow">
        <Beacon slide={this.state.slide} slides={this.state.slides} changeSlide={this._changeSlide} stopSlideShow={this._stopSlideShow} />
        <PrevSlide slide={this.state.slide} slides={this.state.slides} prevSlide={this._prevSlide} stopSlideShow={this._stopSlideShow} />
        { insert }
        <NextSlide slide={this.state.slide} slides={this.state.slides} nextSlide={this._nextSlide} stopSlideShow={this._stopSlideShow} />
      </div>
    )
  }

});

module.exports = SlideShow;
