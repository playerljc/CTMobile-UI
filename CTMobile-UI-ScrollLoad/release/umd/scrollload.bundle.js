!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.scrollload=t():e.scrollload=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="zUkv")}({"0vyi":function(e,t,n){},"8Ak3":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},DUnm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){for(var t=0<arguments.length&&void 0!==e?e:8,n=new Array(t),r=0;r<t;r++)n.push("x");return n.join("").replace(/x/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}},"a/r7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;new Map;var r={getTopDom:function(e,t){if(!e||!t)return null;if(-1!==e.className.indexOf(t))return e;for(var n=e;(n=n.parentNode)&&-1===n.className.indexOf(t)&&n!==document.body;);return n?n===document.body?null:n:null},off:function(){},on:function(){},once:function(){},addClass:function(e,t){for(var n=(1<arguments.length&&void 0!==t?t:"").split(" "),r=0;r<n.length;r++)e.classList.add(n[r])},removeClass:function(e,t){for(var n=(1<arguments.length&&void 0!==t?t:"").split(" "),r=0;r<n.length;r++)e.classList.remove(n[r])},hasClass:function(e,t){return e.classList.contains(t)},attr:function(e,t,n){},insertAfter:function(e,t){var n=t.parentNode;n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling)},append:function(e,t){var n;n=t instanceof String?this.createElement(t):t,e.appendChild(n)},prepend:function(e,t){var n;n=t instanceof String?this.createElement(t):t;var r=e.firstChild;e.insertBefore(n,r)},remove:function(e){e.parentNode.removeChild(e)},createElement:function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},prevSibling:function(e){var t,n=-1;if(!e||!e.parentNode)return t;for(var r=e.parentNode.children,o=0;o<r.length;o++)if(e===r[o]){n=o;break}return-1!==n&&(t=0===n?r[0]:r[n-1]),t},nextSibling:function(e){var t,n=-1;if(!e||!e.parentNode)return t;for(var r=e.parentNode.children,o=0;o<r.length;o++)if(e===r[o]){n=o;break}return-1!==n&&(t=n===r.length-1?r[0]:r[n+1]),t},getParentElementByTag:function(e,t){if(!t)return null;var n,r=e;return function e(){if(!(r=r.parentElement))return null;var o=r.tagName.toLocaleLowerCase();o===t?n=r:"body"===o?n=null:e()}(),n},children:function(e,t){return Array.prototype.filter.call(e.children,(function(e){return 1===e.nodeType})).filter((function(e){return e.classList.contains(t)}))},isTouch:function(){return"ontouchend"in document},objectToDataSet:function(e,t){for(var n in e)t.dataset[n]=e[n]},dataSetToObject:function(e){var t={};for(var n in e.dataset)t[n]=e.dataset[n];return t},getPageLeft:function(e){for(var t=e.offsetLeft,n=null;n=e.offsetParent;)t+=n.offsetLeft;return t},getPageTop:function(e){for(var t=e.offsetTop,n=null;n=e.offsetParent;)t+=n.offsetTop;return t},getPageRect:function(e){for(var t=e.offsetTop,n=e.offsetLeft,r=null;r=e.offsetParent;)t+=r.offsetTop,n+=r.offsetLeft;return{top:t,left:n}}};t.default=r},gV46:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},h41l:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},nzc7:function(e,t,n){"use strict";var r=n("h41l");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("zzQi")),i=r(n("gV46")),l=function(){function e(){(0,o.default)(this,e),this.events={}}return(0,i.default)(e,[{key:"remove",value:function(e,t){if(this.events[e]){var n=this.events[e].handlers.findIndex((function(e){return e===t}));-1!==n&&this.events[e].handlers.splice(n,1)}}},{key:"hasType",value:function(e){return-1!==Object.keys(this.events).indexOf(e)}},{key:"clear",value:function(e){this.events[e]&&(this.events[e].handlers=[])}},{key:"clearAll",value:function(){this.events={}}},{key:"on",value:function(e,t){this.events[e]||(this.events[e]={handlers:[]}),this.events[e].handlers.push(t)}},{key:"trigger",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o;return this.events[e]&&this.events[e].handlers.forEach((function(e){o=e.apply(void 0,n)})),o}}],[{key:"trigger",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];document.dispatchEvent(new CustomEvent(e,{bubbles:"true",cancelable:"true",detail:n}))}}]),e}();t.default=l},oGtI:function(e,t,n){"use strict";var r=n("h41l");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Dom6",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Events",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"uuid",{enumerable:!0,get:function(){return l.default}});var o=r(n("a/r7")),i=r(n("nzc7")),l=r(n("DUnm"))},zUkv:function(e,t,n){"use strict";n.r(t);var r=n("zzQi"),o=n.n(r),i=n("gV46"),l=n.n(i),s=n("8Ak3"),u=n.n(s),a=n("oGtI"),c="ct-scrolload-",f=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{distance:50};o()(this,e),this.el=t,this.scrollEl=this.el.querySelector(".".concat(c,"content")),this.loadEl=this.el.querySelector(".".concat(c,"load")),this.emptyEl=this.el.querySelector(".".concat(c,"empty")),this.errorEl=this.el.querySelector(".".concat(c,"error")),this.config=n,this.lock=!1,this.events=new a.Events,this.onScroll=this.onScroll.bind(this),this.onEmptyClick=this.onEmptyClick.bind(this),this.onErrorClick=this.onErrorClick.bind(this),this.scrollEl.addEventListener("scroll",this.onScroll),this.emptyEl.addEventListener("click",this.onEmptyClick),this.errorEl.addEventListener("click",this.onErrorClick)}return l()(e,[{key:"onScroll",value:function(){var t=this,n=this.scrollEl.scrollHeight-this.scrollEl.offsetHeight,r=this.scrollEl.scrollTop;if(this.events.hasType("scrollbottom")&&Math.abs(r-n)<=this.config.distance){if(this.lock)return;this.lock=!0,this.loadEl.style.display="flex",this.events.trigger("scrollbottom",{done:function(n){t.loadEl.style.display="none",n===e.EMPTY?t.emptyEl.style.display="block":n===e.ERROR&&(t.errorEl.style.display="block"),t.lock=!1}})}}},{key:"onEmptyClick",value:function(){this.events.hasType("emptyclick")&&this.events.trigger("emptyclick")}},{key:"onErrorClick",value:function(){this.events.hasType("errorclick")&&this.events.trigger("errorclick")}},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"off",value:function(e,t){e?t?this.events.remove(e,t):this.events.clear(e):this.events.clearAll()}},{key:"getLoadEl",value:function(){return this.loadEl}},{key:"getEmptyEl",value:function(){return this.emptyEl}},{key:"getErrorEl",value:function(){return this.errorEl}},{key:"hideAll",value:function(){this.loadEl.style.display="none",this.errorEl.style.display="none",this.emptyEl.style.display="none"}}]),e}();u()(f,"EMPTY","empty"),u()(f,"ERROR","error"),u()(f,"NORMAL","normal");f.EMPTY,f.ERROR,f.NORMAL;var d=function(e,t){return new f(e,t)};n("0vyi");n.d(t,"ScrollLoad",(function(){return d}))},zzQi:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}})}));