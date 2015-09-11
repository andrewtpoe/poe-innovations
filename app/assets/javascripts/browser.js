var React = require('react');
// var SlideShow = require('./SlideShow.react.js');

var browser = function() {
  var div = document.querySelector('[data-js="slide-show"]');
  if (div) {
    // React.render(<SlideShow />, div);
    React.render(<div className="foo" />, div);
  }
};

module.exports = browser;
