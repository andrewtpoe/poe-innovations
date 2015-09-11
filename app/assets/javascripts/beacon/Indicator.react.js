var React = require('react');

var test = React.createClass({
  render: function () {
    return (
      <div className="testClass" />
    )
  }
})

module.exports = test;


// var React = require('react');
//
// var Indicator = React.createClass({
//   _handleChange: function() {
//     event.preventDefault();
//     this.props.stopSlideShow();
//     this.props.changeSlide(this.props.indicatorNumber);
//   },
//
//   render: function() {
//     if (this.props.indicatorNumber === this.props.slide) {
//       var circle = <i className="fa fa-dot-circle-o"></i>
//     } else {
//       var circle = <i className="fa fa-circle-o" ></i>
//     }
//     return (
//       <div className="slideshow__beaconIndicator" onClick={this._handleChange}>
//         {circle}
//       </div>
//     )
//   }
// });
//
// module.exports = Indicator;
