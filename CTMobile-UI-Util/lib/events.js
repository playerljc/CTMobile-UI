const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', { value: !0 }), exports.default = void 0; let _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  Events = (function () { function e() { (0, _classCallCheck2.default)(this, e), this.events = {}; } return (0, _createClass2.default)(e, [{ key: 'remove', value(e, t) { if (this.events[e]) { const r = this.events[e].handlers.findIndex((e) => { return e === t; }); r !== -1 && this.events[e].handlers.splice(r, 1); } } }, { key: 'on', value(e, t) { this.events[e] || (this.events[e] = { handlers: [] }), this.events[e].handlers.push(t); } }, { key: 'trigger', value(e) { for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)r[s - 1] = arguments[s]; this.events[e] && this.events[e].handlers.forEach((e) => { e(...r); }); } }]), e; }()),
  _default = Events;

exports.default = _default;
// # sourceMappingURL=events.js.map
