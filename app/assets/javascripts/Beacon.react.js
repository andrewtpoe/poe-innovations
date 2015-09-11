// Libraries
var React = require('react');
var Request = require('superagent');
// Components
var Indicator = require('./beacon/Indicator.react');

var Beacon = React.createClass({

  _buildBeacons() {
    return this.props.slides.map(function(slideNumber) {
      return <Indicator slide={this.props.slide} indicatorNumber={slideNumber} key={slideNumber} changeSlide={this.props.changeSlide} stopSlideShow={this.props.stopSlideShow}/>
    }.bind(this))
  },

  render: function() {
    return (
      <div className="slideshow__beacon">
        {this._buildBeacons()}
      </div>
    )
  }
});

module.exports = Beacon;
