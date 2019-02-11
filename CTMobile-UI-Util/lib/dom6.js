Object.defineProperty(exports, '__esModule', { value: !0 }), exports.default = void 0; const _default = { getTopDom(e, r) { if (!e || !r) return null; if (e.className.indexOf(r) !== -1) return e; for (var n = e; (n = n.parentNode) && n.className.indexOf(r) === -1 && n !== document.body;);return n || null; },
  insertAfter(e, r) { const n = r.parentNode; n.lastChild === r ? n.appendChild(e) : n.insertBefore(e, r.nextSibling); },
  createElement(e) { const r = document.createElement('div'); return r.innerHTML = e, r.firstChild; },
  prevSibling(e) {
    let r,
      n = -1; if (!e || !e.parentNode) return r; for (var t = e.parentNode.children, i = 0; i < t.length; i++) if (e === t[i]) { n = i; break; } return n !== -1 && (r = n === 0 ? t[0] : t[n - 1]), r;
  },
  nextSibling(e) {
    let r,
      n = -1; if (!e || !e.parentNode) return r; for (var t = e.parentNode.children, i = 0; i < t.length; i++) if (e === t[i]) { n = i; break; } return n !== -1 && (r = n === t.length - 1 ? t[0] : t[n + 1]), r;
  } }; exports.default = _default;
// # sourceMappingURL=dom6.js.map
