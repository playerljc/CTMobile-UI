const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', { value: !0 }), exports.default = void 0; let _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _template = { toast: '<div class="ct-messdialog-toast-<%=position%>">\n      <div class="ct-messdialog-toast-wrap"><%=text%></div>\n   </div>', alert: '<div class="ct-messdialog-dialog">\n     <div class="ct-messdialog-dialog-in">\n         <div class="ct-messdialog-dialog-in-inner">\n             <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>\n             <div class="ct-messdialog-dialog-in-inner-text <%=icon%>"><%=text%></div>\n         </div>\n         <div class="ct-messdialog-dialog-in-buttons">\n             <span class="ct-messdialog-dialog-in-buttons-button">确定</span>\n         </div>\n     </div>\n  </div>', confirm: '<div class="ct-messdialog-dialog">\n     <div class="ct-messdialog-dialog-in">\n         <div class="ct-messdialog-dialog-in-inner">\n             <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>\n             <div class="ct-messdialog-dialog-in-inner-text <%=icon%>"><%=text%></div>\n         </div>\n         <div class="ct-messdialog-dialog-in-buttons">\n             <span class="ct-messdialog-dialog-in-buttons-button ok">确定</span>\n             <span class="ct-messdialog-dialog-in-buttons-button cancel">取消</span>\n         </div>\n     </div>\n  </div>', prompt: '<div class="ct-messdialog-dialog">\n     <div class="ct-messdialog-dialog-in">\n         <div class="ct-messdialog-dialog-in-inner">\n             <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>\n             <div class="ct-messdialog-dialog-in-inner-text"><%=text%></div>\n             <div class="ct-messdialog-dialog-in-inner-input-field <%=icon%>">\n                 <input type="text" value="<%=defaultVal%>" class="text-input" placeholder="<%=placeholder%>">\n             </div>\n         </div>\n         <div class="ct-messdialog-dialog-in-buttons">\n             <span class="ct-messdialog-dialog-in-buttons-button ok">确定</span>\n             <span class="ct-messdialog-dialog-in-buttons-button cancel">取消</span>\n         </div>\n     </div>\n  </div>', promptmulit: '<div class="ct-messdialog-dialog">\n     <div class="ct-messdialog-dialog-in">\n         <div class="ct-messdialog-dialog-in-inner">\n             <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>\n             <div class="ct-messdialog-dialog-in-inner-text"><%=text%></div>\n             <div class="ct-messdialog-dialog-in-inner-input-field <%=icon%>">\n                 <textarea value="<%=defaultVal%>" class="text-input" placeholder="<%=placeholder%>"></textarea>\n             </div>\n         </div>\n         <div class="ct-messdialog-dialog-in-buttons">\n             <span class="ct-messdialog-dialog-in-buttons-button ok">确定</span>\n             <span class="ct-messdialog-dialog-in-buttons-button cancel">取消</span>\n         </div>\n     </div>\n  </div>', custom: '<div class="ct-messdialog-dialog">\n     <div class="ct-messdialog-dialog-in">\n         <div class="ct-messdialog-dialog-in-inner">\n             <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>\n             <div class="ct-messdialog-dialog-in-inner-container"><%=html%></div>\n         </div>\n         <div class="ct-messdialog-dialog-in-buttons"></div>\n     </div>\n  </div>', loading: '<div class="ct-messdialog-loading">\n      \x3c!-- nonetwork --\x3e\n      <div class="ct-messdialog-loading-nonetwork">\n          <div class="ct-messdialog-loading-nonetwork-header">\n            <a data-role="none" class="icon-back-purple"></a>\n          </div>\n          <div class="ct-messdialog-loading-nonetwork-content">\n             <div class="ct-messdialog-loading-nonetwork-content-logo"></div>\n             <div class="ct-messdialog-loading-nonetwork-content-tip"></div>\n             <div class="ct-messdialog-loading-nonetwork-content-setting">设置</div>\n          </div>\n      </div>\n      \x3c!-- fail --\x3e\n      <div class="ct-messdialog-loading-fail">\n          <div class="ct-messdialog-loading-fail-header">\n            <a data-role="none" class="icon-back-purple"></a>\n          </div>\n          <div class="ct-messdialog-loading-fail-content">\n             <div class="ct-messdialog-loading-fail-content-logo"></div>\n             <div class="ct-messdialog-loading-fail-content-tip"></div>\n             <div class="ct-messdialog-loading-fail-content-refresh">重试</div>\n          </div>\n      </div>\n      \x3c!-- loading --\x3e\n     <div class="ct-messdialog-loading-loading">\n         <div class="la-ball-clip-rotate la-dark" style="color: #3e98f0;">\n             <div></div>\n         </div>\n         <div class="ct-messdialog-loading-loading-tip">加载中...</div>\n     </div>\n      \x3c!-- empty --\x3e\n      <div class="ct-messdialog-loading-empty">\n          <div class="ct-messdialog-loading-empty-logo"></div>\n          <div class="ct-messdialog-loading-empty-tip"></div>\n          <div class="ct-messdialog-loading-empty-refresh">重新加载</div>\n      </div>\n      \x3c!-- submit --\x3e\n      <div class="ct-messdialog-loading-submit">\n          <div class="ct-messdialog-loading-submit-inner">\n              <div class="la-line-spin-clockwise-fade-rotating la-dark">\n                  <div></div>\n                  <div></div>\n                  <div></div>\n                  <div></div>\n                  <div></div>\n                  <div></div>\n                  <div></div>\n                  <div></div>\n              </div>\n              <span class="ct-messdialog-loading-submit-inner-tip">玩命处理中，请稍后...</span>\n          </div>\n      </div>\n  </div>' },
  _expressions = ['title', 'icon', 'text', 'placeholder', 'defaultVal', 'position', 'tip', 'html'];

function show(e, t) { var i = setTimeout(() => { clearTimeout(i), e.classList.add('ct-messdialog-dialog-in-show'), t.classList.add('ct-messdialog-dialog-in-show'); }, 100); } function _close(t, i, l, s) { i.addEventListener('transitionend', function e() { i.removeEventListener('transitionend', e), l.classList.remove('ct-messdialog-dialog-in-hide'), i.classList.remove('ct-messdialog-dialog-in-hide'), l.style.display = 'none', t.removeChild(l), l = i = null, s && s(); }), i.classList.remove('ct-messdialog-dialog-in-show'), l.classList.remove('ct-messdialog-dialog-in-show'), i.classList.add('ct-messdialog-dialog-in-hide'), l.classList.add('ct-messdialog-dialog-in-hide'); } function _expressionReplace(e, t) { for (let i = 0, l = _expressions.length; i < l; i++)e = e.replace('<%='.concat(_expressions[i], '%>'), t[_expressions[i]]); return e; } function _$(e, t) { t && (e = _expressionReplace(e, t)); const i = document.createElement('div'); return i.innerHTML = e, i.firstElementChild; } function alertCreate(e) {
  let t = e.parent,
    i = e.title,
    l = e.text,
    s = e.icon,
    n = e.callback,
    a = _$(_template.alert, { title: i, text: l, icon: s }); a.querySelector('.ct-messdialog-dialog-in-buttons-button').addEventListener('click', () => { _close(t, o, a, n); }), t.appendChild(a); var o = a.querySelector('.ct-messdialog-dialog-in'); return a.style.display = 'flex', show(a, o), { close() { _close(t, o, a, n); } };
} function confirmCreate(e) {
  let t = e.parent,
    i = e.title,
    l = e.text,
    s = e.icon,
    n = e.callback,
    a = _$(_template.confirm, { title: i, text: l, icon: s }); a.querySelector('.ok').addEventListener('click', (e) => { e.stopPropagation(), e.preventDefault(), _close(t, o, a, () => { n && n(0); }); }), a.querySelector('.cancel').addEventListener('click', (e) => { e.stopPropagation(), e.preventDefault(), _close(t, o, a, () => { n && n(1); }); }), t.appendChild(a); var o = a.querySelector('.ct-messdialog-dialog-in'); a.style.display = 'flex', show(a, o);
} function promptCreate(e) {
  let t = e.type,
    i = e.parent,
    l = e.selector,
    s = e.title,
    n = e.text,
    a = e.icon,
    o = e.defaultVal,
    d = e.placeholder,
    c = e.callback,
    r = _$(_template[t], { title: s, text: n, icon: a, defaultVal: o, placeholder: d }); r.querySelector('.ok').addEventListener('click', () => { _close(i, g, r, () => { c && c(0, u.value); }); }), r.querySelector('.cancel').addEventListener('click', () => { _close(i, g, r, () => { c && c(1, u.value); }); }), i.appendChild(r); var g = r.querySelector('.ct-messdialog-dialog-in'),
    u = g.querySelector(l); r.style.display = 'flex', show(r, g);
} function customdialogCreate(e) {
  let t = e.parent,
    i = e.title,
    l = e.html,
    s = e.buttons,
    n = e.rendercallback,
    a = _$(_template.custom, { title: i, html: l }),
    o = a.querySelector('.ct-messdialog-dialog-in-inner-container'),
    d = a.querySelector('.ct-messdialog-dialog-in-buttons'),
    c = d.children; d.addEventListener('click', (e) => {
    let t = e.target,
      i = Array.prototype.indexOf.call(c, t); s[i] && s[i].handler && s[i].handler();
  }); for (var r = document.createDocumentFragment(), g = 0; s && g < s.length; g++) { const u = s[g]; r.appendChild(_$("<span class='ct-messdialog-dialog-in-buttons-button'>".concat(u.text, '</span>'))); }d.appendChild(r), t.appendChild(a), n && n(o); const p = a.querySelector('.ct-messdialog-dialog-in'); return a.style.display = 'flex', show(a, p), { el: a, close() { _close(t, p, a); } };
} const Toast = (function () {
  function a(e) { (0, _classCallCheck2.default)(this, a), this.config = e, this.init(); } return (0, _createClass2.default)(a, [{ key: 'init',
    value() {
      let e = this.config,
        t = e.parent,
        i = e.text,
        l = e.position,
        s = e.duration; s = s === 'long' ? 2e3 : 1e3; const n = _$(_template.toast, { text: i, position: l }); a.toastQueue.push({ parent: t, toast: n, duration: s }), a.toastKey || (a.toastKey = !0, this.showToast());
    } }, { key: 'showToast',
    value() {
      const t = this; if (a.toastQueue.length !== 0) {
        let i = a.toastQueue.shift(),
          e = i.duration,
          l = i.parent,
          s = (i = i.toast).querySelector('.ct-messdialog-toast-wrap'); l.appendChild(i), i.style.display = 'flex', setTimeout(() => { s.classList.add('ct-messdialog-toast-show'), setTimeout(() => { s.addEventListener('transitionend', function e() { s.removeEventListener('transitionend', e), i.style.display = 'none', l.removeChild(i), t.showToast(); }), s.classList.remove('ct-messdialog-toast-show'); }, e); }, 100);
      } else a.toastKey = !1;
    } }]), a;
}()); (0, _defineProperty2.default)(Toast, 'toastQueue', []), (0, _defineProperty2.default)(Toast, 'toastKey', !1); const makeTextCreate = function (e) { new Toast(e); }; function makeLoadingCreate(e) {
  let t = e.parent,
    i = e.refreshCallback,
    l = e.boundingCallback,
    s = e.isShowHeader,
    n = _$(_template.loading),
    a = n.querySelector('.ct-messdialog-loading-loading'),
    o = n.querySelector('.ct-messdialog-loading-fail'),
    d = n.querySelector('.ct-messdialog-loading-nonetwork'),
    c = n.querySelector('.ct-messdialog-loading-empty'),
    r = n.querySelector('.ct-messdialog-loading-submit'),
    g = [n.querySelector('.ct-messdialog-loading-nonetwork-content-setting'), n.querySelector('.ct-messdialog-loading-fail-content-refresh'), n.querySelector('.ct-messdialog-loading-empty-refresh')]; if (g && g.length !== 0) for (let u = 0, p = g.length; u < p; u++)g[u].addEventListener('click', () => { i && i(); }); return n.querySelector('.ct-messdialog-loading-nonetwork-content-setting').addEventListener('click', () => {}), t.appendChild(n), { setLoadingTip(e) { a.querySelector('.ct-messdialog-loading-loading-tip').innerText = e; }, setNoNetWorkTip(e) { d.querySelector('.ct-messdialog-loading-nonetwork-content-tip').innerText = e; }, setFailTip(e) { o.querySelector('.ct-messdialog-loading-fail-content-tip').innerText = e; }, setEmptyTip(e) { c.querySelector('.ct-messdialog-loading-empty-tip').innerText = e; }, setSubmitTip(e) { r.querySelector('.ct-messdialog-loading-submit-inner-tip').innerText = e; }, showLoading() { if (t.style.overflowY = 'hidden', a.style.display = 'flex', d.style.display = o.style.display = c.style.display = r.style.display = 'none', l) { const e = l(); n.style.top = e.top, n.style.bottom = e.bottom; }n.style.display = 'flex'; }, showEmpty() { if (t.style.overflowY = 'hidden', c.style.display = 'flex', d.style.display = a.style.display = o.style.display = r.style.display = 'none', l) { const e = l(); n.style.top = e.top, n.style.bottom = e.bottom; }n.style.display = 'flex'; }, showNoNetWork() { t.style.overflowY = 'hidden', d.style.display = 'block', a.style.display = o.style.display = c.style.display = r.style.display = 'none', n.style.top = '0', n.style.bottom = '0', s ? s() ? d.querySelector('.ct-messdialog-loading-nonetwork-header').style.display = 'block' : d.querySelector('.ct-messdialog-loading-nonetwork-header').style.display = 'none' : d.querySelector('.ct-messdialog-loading-nonetwork-header').style.display = 'block', n.style.display = 'block'; }, showFail() { t.style.overflowY = 'hidden', o.style.display = 'block', d.style.display = a.style.display = c.style.display = r.style.display = 'none', n.style.top = '0', n.style.bottom = '0', s ? s() ? (o.querySelector('.ct-messdialog-loading-fail-content').style.top = '3rem', o.querySelector('.ct-messdialog-loading-fail-header').style.display = 'flex') : (o.querySelector('.ct-messdialog-loading-fail-content').style.top = '0', o.querySelector('.ct-messdialog-loading-fail-header').style.display = 'none') : (o.querySelector('.ct-messdialog-loading-fail-content').style.top = '3rem', o.querySelector('.ct-messdialog-loading-fail-header').style.display = 'flex'), n.style.display = 'block'; }, showSubmit() { t.style.overflowY = 'hidden', r.style.display = 'flex', d.style.display = a.style.display = o.style.display = c.style.display = 'none', n.style.top = '0', n.style.bottom = '0', n.style.display = 'flex'; }, hide() { t.style.overflowY = 'auto', n.style.display = 'none', d.style.display = c.style.display = a.style.display = o.style.display = r.style.display = 'none'; }, close() { t.style.overflowY = 'hidden', t.removeChild(n), n = null; }, isShowLoading() { return a.style.display !== 'none'; }, isShowNoNetWork() { return d.style.display !== 'none'; }, isShowFail() { return o.style.display !== 'none'; }, isShowEmpty() { return c.style.display !== 'none'; }, isShowSubmit() { return r.style.display !== 'none'; }, getParent() { return t; } };
} let MessageDialog = (function () { function e() { (0, _classCallCheck2.default)(this, e); } return (0, _createClass2.default)(e, null, [{ key: 'alert', value(e) { return alertCreate(e); } }, { key: 'confirm', value(e) { confirmCreate(e); } }, { key: 'prompt', value(e) { promptCreate((0, _objectSpread2.default)({ type: 'prompt', selector: 'input' }, e)); } }, { key: 'promptmulit', value(e) { promptCreate((0, _objectSpread2.default)({ type: 'promptmulit', selector: 'textarea' }, e)); } }, { key: 'customDialog', value(e) { return customdialogCreate(e); } }, { key: 'makeText', value(e) { makeTextCreate(e); } }, { key: 'makeLoading', value(e) { return makeLoadingCreate(e); } }]), e; }()),
  _default = MessageDialog; exports.default = _default;
// # sourceMappingURL=messagedialog.js.map
