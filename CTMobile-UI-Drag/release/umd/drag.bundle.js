!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.drag=t():e.drag=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="dTC2")}({PVIG:function(e,t){},bYmg:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dTC2:function(e,t,o){"use strict";o.r(t);var n=o("bYmg"),l=o.n(n),i=o("p9oh"),s=o.n(i),r="ct-drag-";function c(){var e=this,t=this,o=t.config,n=o.dragSourceExtendClasses,l=void 0===n?[]:n,i=o.onDragClone,s=o.onPutSuccess,r=o.onSourceEnter,c=o.onSourceLeave,h=o.isDragSourceExist,d=void 0===h||h;t.sourceEventHanlder=new WeakMap;for(var g=function(o){var n,h=e.sourceEls[o],g={};h.addEventListener("mousedown",function(){function e(){var e=h.cloneNode(!0);return l?e.className+=" ".concat(l.join(" ")):e.style.border="1px dashed black",e}var o=function(o){t.isdown=!0,t.sourceEl=h;var n=h.getBoundingClientRect();t.baseX=n.left,t.baseY=n.top,t.firstX=o.pageX,t.firstY=o.pageY,i?(t.cloneEl=i(h),t.cloneEl||(t.cloneEl=e())):t.cloneEl=e(),t.cloneEl.setAttribute("id",""),t.cloneEl.style.minWidth="".concat(h.offsetWidth,"px"),t.cloneEl.style.minHeight="".concat(h.offsetHeight,"px"),t.cloneEl.style.position="fixed",t.cloneEl.style.zIndex="9999",t.cloneEl.style.left="".concat(t.baseX,"px"),t.cloneEl.style.top="".concat(t.baseY,"px"),t.cloneEl.style.margin="0",t.cloneEl.addEventListener("mouseup",function(){if(!t.ismove)return f.call(t),!1;var e=a.call(t);if(e.complete.length>0){if(s){var o=t.cloneEl.getBoundingClientRect(),n=h.cloneNode(!0);n.style.visibility="visible",n.style.cursor="default",s({cloneSourceEl:n,sourceEl:h,targetEls:e.complete,rect:{left:o.left,right:o.right,top:o.top,bottom:o.bottom,width:o.width,height:o.height,x:o.x,y:o.y}})?(d||t.sourceEl&&(t.sourceEl.parentElement.removeChild(t.sourceEl),t.sourceEl=null),f.call(t,e.complete)):u.call(t,h,e.complete)}}else u.call(t,h,e.section)}),t.el.appendChild(t.cloneEl)};return g.mousedown=o,o}()),h.addEventListener("mouseenter",(n=function(){h.style.cursor="move",r&&r(h)},g.mouseenter=n,n)),h.addEventListener("mouseleave",function(){var e=function(){h.style.cursor="default",c&&c(h)};return g.mouseover=e,e}()),t.sourceEventHanlder.set(h,g)},E=0;E<this.sourceEls.length;E++)g(E)}function a(){for(var e=this,t=[],o=[],n=this.cloneEl.getBoundingClientRect(),l=this.config.dragTargetExtendClasses,i=void 0===l?[]:l,s=function(l){var s=e.targetEls[l],r=s.getBoundingClientRect();(n.left>=r.left&&n.left<=r.right||n.right>=r.left&&n.right<=r.right)&&(n.top>=r.top&&n.top<=r.bottom||n.bottom>=r.top&&n.bottom<=r.bottom)?(i?(i.map(function(e){e&&s.classList.remove(e)}),s.className+=" ".concat(i.join(" "))):s.style.border="2px dashed black",n.left>=r.left&&n.left<=r.right&&n.right>=r.left&&n.right<=r.right&&n.top>=r.top&&n.top<=r.bottom&&n.bottom>=r.top&&n.bottom<=r.bottom?t.push(s):o.push(s)):i?i.map(function(e){e&&s.classList.remove(e)}):s.style.border="0"},r=0;r<this.targetEls.length;r++)s(r);return{complete:t,section:o}}function u(e,t){var o=this,n=this.config.noDragReturnAnimate;void 0!==n&&n?setTimeout(function(){o.isdown=!1,o.cloneEl.addEventListener("transitionend",function n(){o.cloneEl.removeEventListener("transitionend",n),f.call(o,t),e.style.visibility="visible"}),o.cloneEl.style.transition="all .25s ease-out",o.cloneEl.style.transform="translateZ(0)";var n=e.getBoundingClientRect();o.cloneEl.style.left="".concat(n.left,"px"),o.cloneEl.style.top="".concat(n.top,"px")},100):(f.call(o,t),e.style.visibility="visible")}function f(e){var t=this.config.dragTargetExtendClasses,o=void 0===t?[]:t;if(this.cloneEl&&this.el.removeChild(this.cloneEl),e&&e.length>0)for(var n=function(t){o?o.map(function(o){o&&e[t].classList.remove(o)}):e[t].style.border="0"},l=0;l<e.length;l++)n(l);this.isdown=!1,this.ismove=!1,this.baseX=null,this.baseY=null,this.firstX=null,this.firstY=null,this.cloneEl=null,this.sourceEl=null}var h=function(){function e(t,o){l()(this,e),this.el=t,this.config=Object.assign({},o),this.sourceEls=this.el.querySelectorAll(".".concat(r,"source")),this.targetEls=this.el.querySelectorAll(".".concat(r,"target")),this.isdown=!1,this.ismove=!1,this.baseX=null,this.baseY=null,this.firstX=null,this.firstY=null,this.cloneEl=null,this.sourceEl=null,function(){var e=this;c.call(e);var t=e.config,o=t.isDragSourceDisplay,n=void 0===o||o,l=t.isDragSourceExist,i=void 0===l||l;e.el.addEventListener("mousemove",function(t){if(!e.isdown)return!1;e.ismove||(e.ismove=!0,n&&i||(e.sourceEl.style.visibility="hidden"));var o=t.pageX,l=t.pageY;console.log(o,l),a.call(e).complete.length>0?e.cloneEl.style.cursor="pointer":e.cloneEl.style.cursor="not-allowed";var s=o-e.firstX,r=l-e.firstY;e.cloneEl.style.left="".concat(e.baseX+s,"px"),e.cloneEl.style.top="".concat(e.baseY+r,"px")}),e.el.addEventListener("mouseleave",function(){if(!e.isdown)return!1;f.call(e)})}.call(this)}return s()(e,[{key:"refresh",value:function(){for(var e=0;e<this.sourceEls.length;e++){var t=this.sourceEls[e],o=this.sourceEventHanlder.get(t);for(var n in o)t.removeEventListener(n,o[n])}this.sourceEls=document.querySelectorAll(".".concat(r,"source")),this.targetEls=this.el.querySelectorAll(".".concat(r,"target")),c.call(this)}}]),e}(),d={create:function(e,t){return new h(e,t)}},g="ct-drag-";function E(){var e=this,t=this,o=t.config,n=o.dragSourceExtendClasses,l=void 0===n?[]:n,i=o.onDragClone,s=o.onPutSuccess,r=o.isDragSourceExist,c=void 0===r||r,a=o.isDragSourceDisplay,u=void 0===a||a;t.sourceEventHanlder=new WeakMap;for(var f=function(o){var n=e.sourceEls[o],r={};n.addEventListener("touchstart",function(){function e(){var e=n.cloneNode(!0);return l?e.className+=" ".concat(l.join(" ")):e.style.border="1px dashed black",e}var o=function(o){t.isdown=!0,t.sourceEl=n;var l=n.getBoundingClientRect();t.baseX=l.left,t.baseY=l.top,t.firstX=o.touches[0].pageX,t.firstY=o.touches[0].pageY,i?(t.cloneEl=i(n),t.cloneEl||(t.cloneEl=e())):t.cloneEl=e(),t.cloneEl.setAttribute("id",""),t.cloneEl.style.minWidth="".concat(n.offsetWidth,"px"),t.cloneEl.style.minHeight="".concat(n.offsetHeight,"px"),t.cloneEl.style.position="fixed",t.cloneEl.style.zIndex="9999",t.cloneEl.style.left="".concat(t.baseX,"px"),t.cloneEl.style.top="".concat(t.baseY,"px"),t.cloneEl.style.margin="0",document.body.appendChild(t.cloneEl)};return r.mousedown=o,o}()),n.addEventListener("touchmove",function(e){if(!t.isdown)return!1;t.ismove||(t.ismove=!0,u&&c||(t.sourceEl.style.visibility="hidden"));var o=e.touches[0].pageX,n=e.touches[0].pageY;v.call(t);var l=o-t.firstX,i=n-t.firstY;t.cloneEl.style.left="".concat(t.baseX+l,"px"),t.cloneEl.style.top="".concat(t.baseY+i,"px")}),n.addEventListener("touchend",function(){if(!t.ismove)return m.call(t),!1;var e=v.call(t);if(e.complete.length>0){if(s){var o=t.cloneEl.getBoundingClientRect(),l=t.sourceEl.cloneNode(!0);l.style.visibility="visible",l.style.cursor="default",s({cloneSourceEl:l,sourceEl:n,targetEls:e.complete,rect:{left:o.left,right:o.right,top:o.top,bottom:o.bottom,width:o.width,height:o.height,x:o.x,y:o.y}})?(t.config.isDragSourceExist||t.sourceEl&&(t.sourceEl.parentElement.removeChild(t.sourceEl),t.sourceEl=null),m.call(t,e.complete)):p.call(t,t.sourceEl,e.complete)}}else p.call(t,t.sourceEl,e.section)}),t.sourceEventHanlder.set(n,r)},h=0;h<this.sourceEls.length;h++)f(h)}function v(){for(var e=this,t=[],o=[],n=this.cloneEl.getBoundingClientRect(),l=this.config.dragTargetExtendClasses,i=void 0===l?[]:l,s=function(l){var s=e.targetEls[l],r=e.targetsIndex.get(s);(n.left>=r.left&&n.left<=r.right||n.right>=r.left&&n.right<=r.right)&&(n.top>=r.top&&n.top<=r.bottom||n.bottom>=r.top&&n.bottom<=r.bottom)?(i?(i.map(function(e){e&&s.classList.remove(e)}),s.className+=" ".concat(i.join(" "))):s.style.border="2px dashed black",n.left>=r.left&&n.left<=r.right&&n.right>=r.left&&n.right<=r.right&&n.top>=r.top&&n.top<=r.bottom&&n.bottom>=r.top&&n.bottom<=r.bottom?t.push(s):o.push(s)):i?i.map(function(e){e&&s.classList.remove(e)}):s.style.border="0"},r=0;r<this.targetEls.length;r++)s(r);return{complete:t,section:o}}function p(e,t){var o=this,n=this.config.noDragReturnAnimate;void 0!==n&&n?setTimeout(function(){o.isdown=!1,o.cloneEl.addEventListener("transitionend",function n(){o.cloneEl.removeEventListener("transitionend",n),m.call(o,t),e.style.visibility="visible"}),o.cloneEl.style.transition="all .25s ease-out",o.cloneEl.style.transform="translateZ(0)";var n=e.getBoundingClientRect();o.cloneEl.style.left="".concat(n.left,"px"),o.cloneEl.style.top="".concat(n.top,"px")},100):(m.call(o,t),e.style.visibility="visible")}function m(e){var t=this.config.dragTargetExtendClasses,o=void 0===t?[]:t;if(this.cloneEl&&document.body.removeChild(this.cloneEl),e&&e.length>0)for(var n=function(t){o?o.map(function(o){o&&e[t].classList.remove(o)}):e[t].style.border="0"},l=0;l<e.length;l++)n(l);this.isdown=!1,this.ismove=!1,this.baseX=null,this.baseY=null,this.firstX=null,this.firstY=null,this.cloneEl=null,this.sourceEl=null}var b=function(){function e(t,o){l()(this,e),this.el=t,this.config=Object.assign({},o),this.sourceEls=this.el.querySelectorAll(".".concat(g,"source")),this.targetEls=this.el.querySelectorAll(".".concat(g,"target")),this.config=Object.assign({},o),this.isdown=!1,this.ismove=!1,this.baseX=null,this.baseY=null,this.firstX=null,this.firstY=null,this.cloneEl=null,this.sourceEl=null,function(){E.call(this)}.call(this)}return s()(e,[{key:"refresh",value:function(){for(var e=0;e<this.sourceEls.length;e++){var t=this.sourceEls[e],o=this.sourceEventHanlder.get(t);for(var n in o)t.removeEventListener(n,o[n])}this.sourceEls=document.querySelectorAll(".".concat(g,"source")),this.targetEls=this.el.querySelectorAll(".".concat(g,"target")),E.call(this)}}]),e}(),y={create:function(e,t){return new b(e,t)}};o("PVIG");o.d(t,"DragFactory",function(){return d}),o.d(t,"DragTouchFactory",function(){return y})},p9oh:function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}})});