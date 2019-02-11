const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', { value: !0 }), exports.default = _default; let _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _photoswipe = _interopRequireDefault(require('photoswipe/dist/photoswipe.js')),
  _photoswipeUiDefault = _interopRequireDefault(require('photoswipe/dist/photoswipe-ui-default.js')),
  ImageViewer = function e(t, i, r) { (0, _classCallCheck2.default)(this, e), this.el = t, this.photoswipe = new _photoswipe.default(this.el, _photoswipeUiDefault.default, i, r); };

function _default(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; return new ImageViewer(e, t, i);
}
// # sourceMappingURL=imageviewer.js.map
