var React = require('react');
// var Slides = require('./Slides.react.js');
var SlideShow = require('./SlideShow.react.js')

var components = function() {
  var div = document.querySelector('[data-js="slide-show"]');
  if (div) {
    React.render(<SlideShow />, div);
    // React.render(<div className="foo" />);
  }
};

module.exports = components;
