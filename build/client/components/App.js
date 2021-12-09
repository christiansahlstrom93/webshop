'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _categoryService = require('../api/categoryService');

var _categoryService2 = _interopRequireDefault(_categoryService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const categoryService = new _categoryService2.default();
categoryService.getCategories();

const App = exports.App = () => {
  return _react2.default.createElement(
    'div',
    null,
    'Hello world'
  );
};