var React = require('react');
var SlideShow = require('./slideshow/Main.react.js')

var components = function() {
  var div = document.querySelector('[data-js="slide-show"]');
  if (div) {
    React.render(<SlideShow />, div);
  }
};

module.exports = components;
