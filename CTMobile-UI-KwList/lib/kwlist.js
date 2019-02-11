const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', { value: !0 }), exports.default = _default; let _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _uiUtil = require('@ctmobile/ui-util');

function show(e) {
  let t = e.querySelector('.ct-list-kw-item-option'),
    i = e.querySelector('.ct-list-kw-item-buttons'); this.preContentEl && e !== this.preContentEl && hide.call(this, this.preContentEl), t.classList.add('activity'), i.style.display = 'flex', e !== this.preContentEl && (this.preContentEl = e), this.events.trigger('show', e, e.dataset.index);
} function hide(e) {
  let t = e.querySelector('.ct-list-kw-item-option'),
    i = e.querySelector('.ct-list-kw-item-buttons'); t.classList.remove('activity'), i.style.display = 'none', this.events.trigger('hide', e, e.dataset.index);
} function initEvents() { const l = this; this.el.addEventListener('click', (e) => { const t = e.target; if (t.classList.contains('ct-list-kw-item-option')) { const i = _uiUtil.Dom6.getTopDom(t, 'ct-list-kw-item-content'); t.classList.contains('activity') ? hide.call(l, i) : show.call(l, i); } }); } const KwList = (function () { function t(e) { (0, _classCallCheck2.default)(this, t), this.el = e, this.events = new _uiUtil.Events(), this.refresh(), initEvents.call(this); } return (0, _createClass2.default)(t, [{ key: 'refresh', value() { for (let e = this.el.querySelectorAll('.ct-list-kw-item-content'), t = 0; t < e.length; t++)e[t].dataset.index = t; } }, { key: 'on', value(e, t) { this.events.on(e, t); } }, { key: 'expand', value(e) { const t = this.el.querySelector(".ct-list-kw-item-content[data-index='".concat(e, "']")); show.call(this, t); } }, { key: 'close', value(e) { const t = this.el.querySelector(".ct-list-kw-item-content[data-index='".concat(e, "']")); hide.call(this, t); } }]), t; }()); function _default(e) { return new KwList(e); }
// # sourceMappingURL=kwlist.js.map
