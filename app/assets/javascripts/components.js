var React = require('react');
// var Slides = require('./Slides.react.js');
var Test = require('./test.react.js')

var components = function() {
  var div = document.querySelector('[data-js="slide-show"]');
  if (div) {
    React.render(<Test />, div);
    // React.render(<div className="foo" />);
  }
};

module.exports = components;
