$.fn.pin = function (r) {
  let p = 0,
    c = [],
    d = !1,
    l = $(window); r = r || {}; let s = function () {
      for (let t = 0, o = c.length; t < o; t++) {
        const s = c[t]; if (r.minWidth && l.width() <= r.minWidth)s.parent().is('.pin-wrapper') && s.unwrap(), s.css({ width: '', left: '', top: '', position: '' }), r.activeClass && s.removeClass(r.activeClass), d = !0; else {
          d = !1; let e = r.containerSelector ? s.closest(r.containerSelector) : $(document.body),
            i = s.offset(),
            a = e.offset(),
            n = s.offsetParent().offset(); s.parent().is('.pin-wrapper') || s.wrap("<div class='pin-wrapper'>"); const p = $.extend({ top: 0, bottom: 0 }, r.padding || {}); s.data('pin', { pad: p, from: (r.containerSelector ? a.top : i.top) - p.top, to: a.top + e.height() - s.outerHeight() - p.bottom, end: a.top + e.height(), parentTop: n.top }), s.css({ width: s.outerWidth() }), s.parent().css('height', s.outerHeight());
        }
      }
    },
    t = function () {
      if (!d) {
        p = l.scrollTop(); for (var t = [], o = 0, s = c.length; o < s; o++) {
          let e = $(c[o]),
            i = e.data('pin'); if (i) {
            t.push(e); let a = i.from - i.pad.bottom,
              n = i.to - i.pad.top; a + e.outerHeight() > i.end ? e.css('position', '') : a < p && p < n ? (e.css('position') != 'fixed' && e.css({ left: e.offset().left, top: i.pad.top }).css('position', 'fixed'), r.activeClass && e.addClass(r.activeClass)) : n <= p ? (e.css({ left: '', top: n - i.parentTop + i.pad.top }).css('position', 'absolute'), r.activeClass && e.addClass(r.activeClass)) : (e.css({ position: '', top: '', left: '' }), r.activeClass && e.removeClass(r.activeClass));
          }
        }c = t;
      }
    },
    e = function () { s(), t(); }; return this.each(function () {
    let t = $(this),
      o = $(this).data('pin') || {}; o && o.update || (c.push(t), $('img', this).one('load', s), o.update = e, $(this).data('pin', o));
  }), l.scroll(t), l.resize(() => { s(); }), s(), window.onload = e, this;
};
// # sourceMappingURL=jquery.pin.js.map
