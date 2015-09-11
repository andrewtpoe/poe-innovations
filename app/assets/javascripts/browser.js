var React = require('react');
var Slides = require('./Slides.react');

var browser = function() {
  var div = document.querySelector('[data-js="slide-show"]');
  if (div) {
    React.render(<Slides />, div);
  }
};

module.exports = browser;
