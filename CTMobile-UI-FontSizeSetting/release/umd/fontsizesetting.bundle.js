!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fontsizesetting=t():e.fontsizesetting=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="zUkv")}({"0vyi":function(e,t,n){},gV46:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}},zUkv:function(e,t,n){"use strict";n.r(t);var i=n("zzQi"),r=n.n(i),o=n("gV46"),s=n.n(o);function a(){this.el.innerHTML=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],'<div class="ct-fontsizesetting-rangeWrap">\n      <div class="ct-fontsizesetting-separatedtool">\n        <div class="ct-fontsizesetting-separated"><span>小</span></div>\n        <div class="ct-fontsizesetting-separated"><span>中</span></div>\n        <div class="ct-fontsizesetting-separated"><span>大</span></div>\n        <div class="ct-fontsizesetting-separated"><span>特大</span></div>\n      </div>\n      <input type="range" ...config>\n    </div>'}(this.config)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"change",t=arguments.length>1?arguments[1]:void 0;this.events[e]&&this.events[e](t)}var c=function(){function e(t,n){r()(this,e);var i=this;this.el=t,this.events={},this.config=n,a.call(this),this.range=this.el.querySelector('input[type="range"]'),this.range.addEventListener("change",(function(){i.events.change&&u.call(i,"change",this.value)}),!1)}return s()(e,[{key:"setMin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.range.setAttribute("min",e)}},{key:"setMax",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"100";this.range.setAttribute("max",e)}},{key:"setSetp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";this.range.setAttribute("setp",e)}},{key:"setValue",value:function(e){this.range.value=e,this.events.change&&u.call(this,"change",this.range.value)}},{key:"getValue",value:function(){return this.range.value}},{key:"on",value:function(e,t){this.events[e]=t}}]),e}(),f=function(e,t){return new c(e,t)};n("0vyi");n.d(t,"FontSizeSetting",(function(){return f}))},zzQi:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}})}));