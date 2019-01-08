"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _photoswipe = _interopRequireDefault(require("photoswipe/dist/photoswipe.js"));

var _photoswipeUiDefault = _interopRequireDefault(require("photoswipe/dist/photoswipe-ui-default.js"));

var ImageViewer = function ImageViewer(el, items, options) {
  (0, _classCallCheck2.default)(this, ImageViewer);
  this.el = el;
  this.photoswipe = new _photoswipe.default(this.el, _photoswipeUiDefault.default, items, options);
};
/**
 * ImageViewerFactory
 * @param {HtmlElement} el
 * @param {Array} items
 * @param {Object} options
 * @return {ImageViewer}
 */


function _default(el) {
  var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new ImageViewer(el, items, options);
}