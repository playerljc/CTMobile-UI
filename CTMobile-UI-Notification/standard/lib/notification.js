"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_uiUtil=require("@ctmobile/ui-util"),defaultConfig={style:"material",type:"top"},className=["ct","notification"];function init(){this.config=Object.assign({},defaultConfig,this.config),this.el.classList.remove([].concat(className).concat(["top"===this.config.type?"bottom":"top",this.config.style]).join("-")),this.el.classList.add([].concat(className).concat([this.config.type,this.config.style]).join("-"))}function initEvents(){var i=this;if(this.config.listeners)for(var t=this.config.listeners,e=void 0===t?{}:t,n=Object.keys(e),a=0;a<n.length;a+=1){var s=n[a];this.events.on(s,e[s])}this.notificationEl.addEventListener("click",function(t){t.target.classList.contains("closeBtn")&&closeNotification.call(i,t.target.parentNode.dataset.id)})}function closeNotification(t){if(!this.key){this.key=!0;var i=this,e=this.notifications[t];this.events.trigger.apply(i,["closeBefore",e]),e.addEventListener("transitionend",function t(){e.removeEventListener("transitionend",t),i.notificationEl.removeChild(e),i.key=!1,i.events.trigger("closeAfter",e)}),e.style.overflow="hidden",e.querySelector(".info").style.opacity="0",e.style.height="0"}}function buildStandard(t){var i=t.headerLabel,e=void 0===i?"":i,n=t.headerIcon,a=void 0===n?"":n,s=t.title,o=void 0===s?"":s,c=t.text,l=void 0===c?"":c,r=t.icon,d=void 0===r?"":r,u=t.closed,f=void 0===u||u,v=t.datetime,h=void 0===v?"":v,g=(0,_uiUtil.uuid)(6),y=_uiUtil.Dom6.createElement('<li data-id="'.concat(g,'">\n       <div class="info">\n          <div class="ct-notification-standard-header">\n             <div class="ct-notification-standard-header-icon">').concat(a?'<img src="'.concat(a,'">'):"",'</div>\n             <div class="ct-notification-standard-header-label">').concat(e||"",'</div>\n          </div>\n          <div class="ct-notification-standard-content">\n             <div class="ct-notification-standard-content-media-l">').concat(d?'<img src="'.concat(d,'">'):"",'</div>\n             <div class="ct-notification-standard-content-row">\n               <div class="ct-notification-standard-content-row-title">').concat(o||"",'</div>\n               <div class="ct-notification-standard-content-row-text">').concat(l||"",'</div>\n             </div>\n             <div class="ct-notification-standard-content-media-r">').concat(h||"","</div>\n          </div>\n       </div>").concat(f?'<span class="closeBtn"></span>':"","\n    </li>"));return build.call(this,g,y)}function buildCustom(t){var i=t.html,e=void 0===i?"":i,n=t.closed,a=void 0===n||n,s=(0,_uiUtil.uuid)(6),o=_uiUtil.Dom6.createElement('<li data-id="'.concat(s,'">\n       <div class="info">').concat(e,"</div>").concat(a?'<span class="closeBtn"></span>':"","\n    </li>"));return build.call(this,s,o)}function build(t,i){var e=this;this.notifications[t]=i,this.notificationEl.appendChild(i),this.events.trigger("create",i),i.style.height="auto";var n=i.clientHeight;return"material"===e.config.style?n<40&&(n=40):"ios"===e.config.style&&n<70&&(n=70),i.style.height="0",setTimeout(function(){i.style.height="".concat(n,"px"),i.querySelector(".info").style.opacity="1",e.events.trigger("show",i)},100),t}var Notification=function(){function e(t,i){(0,_classCallCheck2.default)(this,e),this.config=i,this.el=t,this.notifications={},this.key=!1,this.notificationEl=this.el.children[0],this.events=new _uiUtil.Events,init.call(this),initEvents.call(this)}return(0,_createClass2.default)(e,[{key:"show",value:function(t){return buildCustom.call(this,t)}},{key:"showStandard",value:function(t){return buildStandard.call(this,t)}},{key:"close",value:function(t){closeNotification.call(this,t)}},{key:"on",value:function(t,i){this.events.on(t,i)}},{key:"off",value:function(t,i){t?i?this.events.remove(t,i):this.events.clear(t):this.events.clearAll()}}]),e}(),_default=Notification;exports.default=_default;
//# sourceMappingURL=notification.js.map