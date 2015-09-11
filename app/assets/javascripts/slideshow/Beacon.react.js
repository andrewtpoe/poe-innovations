var React = require('react');
var Indicator = require('./beacon/Indicator.react.js');

var Beacon = React.createClass({

  _buildIndicators: function() {
    return this.props.slides.map(function(slideNumber) {
      return <Indicator slide={this.props.slide} indicatorNumber={slideNumber} key={slideNumber} changeSlide={this.props.changeSlide} stopSlideShow={this.props.stopSlideShow}/>
    }.bind(this))
  },

  render: function() {
    return (
      <div className="slideshow__beacon" >
        {this._buildIndicators()}
      </div>
    )
  }
});

module.exports = Beacon;
