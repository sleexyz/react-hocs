'use strict';

var _react = require('react');

module.exports = {
  mapElement: function mapElement(f) {
    return function (component) {
      return function (props) {
        return f((0, _react.createElement)(component, props));
      };
    };
  },
  mapProps: function mapProps(f) {
    return function (component) {
      return function (props) {
        return (0, _react.createElement)(component, f(props));
      };
    };
  }
};

