const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', { value: !0 }), exports.default = void 0; let _jquery = _interopRequireDefault(require('jquery')),
  _index = _interopRequireDefault(require('highlight.js/lib/index')); require('./jquery.pin');

const _default = { initial() { for (let e = document.getElementsByClassName('html'), i = 0; i < e.length; i++) { const r = e[i]; r.innerText = r.innerHTML; }_index.default.initHighlightingOnLoad(), (0, _jquery.default)('.ctmobile-ui-doc-demo-device').pin({ containerSelector: '.with-device' }); } }; exports.default = _default;
// # sourceMappingURL=index.js.map
