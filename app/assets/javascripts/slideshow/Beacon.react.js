var React = require('react');
var Indicator = require('./beacon/Indicator.react.js');

var Beacon = React.createClass({

  _buildIndicators: function() {
    var self = this;
    var i;
    var arr = [];
    for(i = 0; i < self.props.slides; i++) {
      arr.push(<Indicator slide={self.props.slide} indicatorNumber={i} key={i} changeSlide={self.props.changeSlide} stopSlideShow={self.props.stopSlideShow}/>)
    };
    return arr;
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
