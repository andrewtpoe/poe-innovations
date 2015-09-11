// Libraries
var React = require('react');

var NextSlide = React.createClass({
  _handleChange: function() {
    event.preventDefault();
    this.props.stopSlideShow();
    this.props.nextSlide(this.props.slide);
  },

  render: function() {
    return (
      <div className="slideshow__nextSlide" onClick={this._handleChange}>
        <i className='fa fa-chevron-right'></i>
      </div>
    )
  }
});

module.exports = NextSlide;
