const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', { value: !0 }), exports.default = _default; let _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

function position() { for (var e, t, i = this.innerEl.scrollTop, l = 0, n = this.index.length - 1; l <= n && l <= this.index.length - 1 && n <= this.index.length - 1;) { e = n + l >> 1; const s = this.index[e]; if (i >= s.start && i < s.end) { t = s; break; }i < s.start ? n = e - 1 : l = e + 1; } if (t) { if (this.preScrollObj && this.preScrollObj.index === t.index) return !1; this.preScrollObj = t, this.fixedEl.innerHTML = t.dom.outerHTML, this.events.change && this.events.change(t.dom, t.index); } } function createIndex() {
  let e = 0; this.index = [], this.preScrollObj = null; for (let t = 0, i = this.headerEls.length; t < i; t++) {
    let l = this.headerEls[t],
      n = e,
      s = void 0; if (s = t !== i - 1 ? this.headerEls[t + 1].offsetTop - l.offsetHeight : this.innerEl.scrollHeight, this.index.push({ start: n, end: s, dom: l, index: t }), (e = s) > this.innerEl.scrollHeight - this.innerEl.offsetHeight) break;
  }
} function scrollAnimationTo() {
  let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
    l = this; if (!l.key) {
    initMask.call(l), l.key = !0, this.maskEl.style.display = 'block'; let n = this.innerEl.scrollTop,
      s = n,
      r = this.innerEl.scrollHeight / (e / (screen.updateInterval || 16.7) + (e % (screen.updateInterval || 16.7) != 0 ? 1 : 0)); window.requestAnimationFrame(function e() { function t() { l.key = !1, l.maskEl.style.display = 'none'; }n < i ? i < s + r ? s = i : s += r : s - r < i ? s = i : s -= r, l.innerEl.scrollTop = s, n < i ? i <= s ? t() : window.requestAnimationFrame(e) : s <= i ? t() : window.requestAnimationFrame(e); });
  }
} function scrollTo(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
    i = e.start + this.headerEls[e.index].offsetHeight; t === 0 ? this.innerEl.scrollTop = i : scrollAnimationTo.call(this, i, t);
} function initMask() { this.maskEl || (this.maskEl = document.createElement('div'), this.maskEl.className = 'ct-stickuplayout-mask', window.document.body.appendChild(this.maskEl)); } function initial() { const e = this; this.key = !1, this.index = [], this.events = {}, this.innerEl = this.el.querySelector('.ct-stickuplayout-inner'), this.fixedEl = this.el.querySelector('.ct-stickuplayout-fixed'), this.headerEls = this.el.querySelectorAll('.ct-stickuplayout-inner .ct-stickuplayout-item-header'), createIndex.call(this), position.call(this), this.innerEl.addEventListener('scroll', () => { position.call(e); }); } const StickupLayout = (function () { function t(e) { (0, _classCallCheck2.default)(this, t), this.el = e, initial.call(this); } return (0, _createClass2.default)(t, [{ key: 'scrollToByIndex', value(e) { for (var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300, l = 0; l < this.index.length; l++) if (this.index[l].index === e) { t = this.index[l]; break; } if (!t) return !1; scrollTo.call(this, t, i); } }, { key: 'scrollToByHeaderEl', value(e) { for (var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300, l = 0; l < this.index.length; l++) if (this.index[l].dom === e) { t = this.index[l], l; break; } if (!t) return !1; scrollTo.call(this, t, i); } }, { key: 'refresh', value() { this.headerEls = this.el.querySelectorAll('.ct-stickuplayout-inner .ct-stickuplayout-item-header'), createIndex.call(this), position.call(this); } }, { key: 'on', value(e, t) { this.events[e] = t; } }]), t; }()); function _default(e) { return new StickupLayout(e); }
// # sourceMappingURL=stickuplayout.js.map
