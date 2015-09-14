// Libraries
var React = require('react');

var PrevSlide = React.createClass({
  _handleChange: function() {
    this.props.stopSlideShow();
    this.props.prevSlide(this.props.slide);
  },

  render: function() {
    return (
      <div className="slideshow__prevSlide" onClick={this._handleChange}>
        <i className='fa fa-chevron-left'></i>
      </div>
    )
  }
});

module.exports = PrevSlide;
