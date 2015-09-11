var React = require('react');
var Slides = require('./Slides');

var browser = function() {
  var div = document.querySelector('[data-js="slide-show"]');
  if (div) {
    // React.render(<Slides />, div);
    React.render(<div className="foo" />);
  }
};

module.exports = browser;
