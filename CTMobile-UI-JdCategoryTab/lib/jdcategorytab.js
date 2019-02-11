const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', { value: !0 }), exports.default = _default; let _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _iscroll = _interopRequireDefault(require('iscroll/build/iscroll'));

function initMenuScroll() { this.scroll = new _iscroll.default(this.menuDom, { mouseWheel: !0, click: !0 }), this.menuDom.addEventListener('touchmove', (e) => { e.preventDefault(); }); } function initEvents() { const r = this; this.menuULDom.addEventListener('click', (e) => { const t = e.target; _scrollTo.call(r, t); }); } function _scrollTo(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
    r = arguments.length > 2 ? arguments[2] : void 0; r = r || this.ease.circular; const i = this; i.scroll.scrollToElement(e.parentElement, t, null, null, r), this.menuULDom.querySelector('[data-index="'.concat(this.activeIndex, '"]')).parentNode.classList.remove('cur'), e.parentNode.classList.add('cur'); const l = i.tabDom.children; l[this.activeIndex].classList.remove('cur'), l[parseInt(e.dataset.index)].classList.add('cur'), this.activeIndex = parseInt(e.dataset.index), i.event && i.event.change && i.event.change.handler(e.dataset.index, e, l[this.activeIndex]);
} function initVar() { this.menuDom = this.el.querySelector('.ct-jdcategorytab-menu'), this.menuULDom = this.menuDom.querySelector('ul'), this.tabDom = this.el.querySelector('.ct-jdcategorytab-tab'); } const JdCategoryTab = (function () {
  function r(e, t) { (0, _classCallCheck2.default)(this, r), (0, _defineProperty2.default)(this, 'ease', _iscroll.default.utils.ease), this.el = e, this.activeIndex = t, initVar.call(this), initMenuScroll.call(this), initEvents.call(this), this.refresh(), this.menuULDom.querySelector('[data-index="'.concat(this.activeIndex, '"]')).parentNode.classList.add('cur'); } return (0, _createClass2.default)(r, [{ key: 'on', value(e, t) { this.event || (this.event = {}), this.event[e] = { type: e, handler: t }; } }, { key: 'refresh', value() { for (let e = this.menuULDom.querySelectorAll('li > a'), t = 0; t < e.length; t++)e[t].dataset.index = t; this.scroll.refresh(); } }, { key: 'scrollTo',
    value(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = this.menuULDom.querySelector("[data-index='".concat(e, "']")); _scrollTo.call(this, i, t, r);
    } }]), r;
}()); function _default(e) { const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return new JdCategoryTab(e, t); }
// # sourceMappingURL=jdcategorytab.js.map
