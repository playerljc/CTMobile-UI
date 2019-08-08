"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),Events=function(){function e(){(0,_classCallCheck2.default)(this,e),this.events={}}return(0,_createClass2.default)(e,[{key:"remove",value:function(e,t){if(this.events[e]){var n=this.events[e].handlers.findIndex(function(e){return e===t});-1!==n&&this.events[e].handlers.splice(n,1)}}},{key:"hasType",value:function(e){return-1!==Object.keys(this.events).indexOf(e)}},{key:"clear",value:function(e){this.events[e]&&(this.events[e].handlers=[])}},{key:"clearAll",value:function(){this.events={}}},{key:"on",value:function(e,t){this.events[e]||(this.events[e]={handlers:[]}),this.events[e].handlers.push(t)}},{key:"trigger",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s;return this.events[e]&&this.events[e].handlers.forEach(function(e){s=e.apply(void 0,n)}),s}}],[{key:"trigger",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];document.dispatchEvent(new CustomEvent(e,{bubbles:"true",cancelable:"true",detail:n}))}}]),e}(),_default=Events;exports.default=_default;
//# sourceMappingURL=events.js.map
