"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.TabItem=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_swiper=_interopRequireDefault(require("swiper")),_uiUtil=require("@ctmobile/ui-util"),selectorPrefix="ct-tab-",defaultConfig={indicator:{position:"top",type:"dynamic",slidesPerView:3,activeClasses:"",activeStyle:"",theme:"normal",arrow:!1},content:{mode:"mulit",isSwiper:!0,tabInstances:[],direction:"horizontal"},initialSlide:0};function renderIndicator(){var t=this.config.indicator,e=t.position,i=t.type,n=t.theme,s=t.slidesPerView,a=(t.arrow,this.config.initialSlide);this.el.classList.add("".concat(selectorPrefix,"indicator-position-").concat(e)),this.el.classList.add("".concat(selectorPrefix,"indicator-type-").concat(i)),"average"===i&&this.el.classList.add("".concat(selectorPrefix,"indicator-theme-").concat(n));var r={init:!1,direction:"top"===e||"bottom"===e?"horizontal":"vertical",initialSlide:a,allowTouchMove:"average"!==i};r.slidesPerView="dynamic"===i?s:_uiUtil.Dom6.children(this.indicatorEl.firstElementChild,"swiper-slide").length,this.swiperIndicator=new _swiper.default(this.indicatorEl,r)}function renderContent(){var t=this.config.content,e=t.mode,i=t.isSwiper,n=t.direction,s=this.config.initialSlide;this.el.classList.add("".concat(selectorPrefix,"content-direction-").concat(n));var a={init:!1,allowTouchMove:i,initialSlide:s,direction:n,slidesPerView:1};"single"===e&&(a.effect="fade"),this.swiperContent=new _swiper.default(this.contentEl,a)}function initEvent(){var s=this,e=this;e.onIndicatorSlideChangeTransitionStart=e.onIndicatorSlideChangeTransitionStart.bind(this),e.onContentSlideChangeTransitionStart=e.onContentSlideChangeTransitionStart.bind(this),e.onContentSlideChangeTransitionEnd=e.onContentSlideChangeTransitionEnd.bind(this),this.swiperContent.on("init",function(){var t=createContentInstace.call(e,e.swiperContent.activeIndex);triggerContent.call(e,{instance:t,type:"create"}),triggerContent.call(e,{instance:t,type:"show"})}),this.swiperIndicator.on("slideChangeTransitionStart",e.onIndicatorSlideChangeTransitionStart),this.swiperContent.on("slideChangeTransitionStart",e.onContentSlideChangeTransitionStart),this.swiperContent.on("slideChangeTransitionEnd",e.onContentSlideChangeTransitionEnd),this.indicatorEl.addEventListener("click",function(t){var e=t.target;if(!e.classList.contains("swiper-slide")){var i=_uiUtil.Dom6.getTopDom(e,"swiper-slide");if(i&&i.classList.contains("swiper-slide")){var n=findIndicatorIndex.call(s,i);if(-1!==n){if(n===s.activeIndex)return!1;s.swiperContent.slideTo(n)}}}})}function findIndicatorIndex(t){for(var e=_uiUtil.Dom6.children(this.indicatorEl.firstElementChild,"swiper-slide"),i=-1,n=0;n<e.length;n++)t===e[n]&&(i=n);return i}function createContentInstace(t){var e=this.config.content.tabInstances,i=void 0===e?[]:e,n=this.contentClassInstances.get(t);if(!n){var s=i[t]||{},a=_uiUtil.Dom6.children(this.contentEl.firstElementChild,"ct-tab-content-item");(n=s).setEl&&n.setEl(a[t]),n.setIndex&&n.setIndex(t),this.contentClassInstances.set(t,n)}return n}function getContentInstance(t){return this.contentClassInstances.get(t)}function triggerContent(t){var e=t.instance,i=t.type,n=t.params;e[i]&&e[i](n)}function activeIndicatorItem(t){for(var e=_uiUtil.Dom6.children(this.indicatorEl.firstElementChild,"swiper-slide"),i=0;i<e.length;i++){var n=e[i];i==t?n.classList.add("active"):n.classList.remove("active")}}function showMask(){this.maskEl.style.display="block"}function hideMask(){this.maskEl.style.display="none"}var TabItem=function(){function t(){(0,_classCallCheck2.default)(this,t)}return(0,_createClass2.default)(t,[{key:"setIndex",value:function(t){this.index=t}},{key:"getIndex",value:function(){return this.index}},{key:"setEl",value:function(t){this.el=t}},{key:"getEl",value:function(){return this.el}}]),t}();exports.TabItem=TabItem;var Tab=function(){function n(t,e,i){(0,_classCallCheck2.default)(this,n),this.parent=t,this.tel=e,this.config=Object.assign({},defaultConfig,i),this.contentClassInstances=new Map,this.el=this.tel.content.querySelector(".ct-tab").cloneNode(!0),this.indicatorEl=this.el.querySelector(".".concat(selectorPrefix,"indicator")),this.contentEl=this.el.querySelector(".".concat(selectorPrefix,"content")),this.maskEl=_uiUtil.Dom6.createElement('<div class="'.concat(selectorPrefix,'mask"></div>')),this.el.appendChild(this.maskEl),renderIndicator.call(this),renderContent.call(this),this.parent.appendChild(this.el),this.activeIndex=this.swiperIndicator.activeIndex,activeIndicatorItem.call(this,this.activeIndex),initEvent.call(this),this.swiperIndicator.init(),this.swiperContent.init()}return(0,_createClass2.default)(n,[{key:"onIndicatorSlideChangeTransitionStart",value:function(){this.swiperContent.slideTo(this.swiperIndicator.activeIndex)}},{key:"onContentSlideChangeTransitionStart",value:function(){showMask.call(this);var t=getContentInstance.call(this,this.activeIndex);t&&triggerContent({instance:t,type:"beforeHide"}),this.swiperIndicator.off("slideChangeTransitionEnd",this.onIndicatorSlideChangeTransitionStart),this.swiperIndicator.slideTo(this.swiperContent.activeIndex)}},{key:"onContentSlideChangeTransitionEnd",value:function(){var t=getContentInstance.call(this,this.swiperContent.activeIndex);t||triggerContent({instance:t=createContentInstace.call(this,this.swiperContent.activeIndex),type:"create"}),triggerContent({instance:t,type:"show"}),this.activeIndex=this.swiperContent.activeIndex,activeIndicatorItem.call(this,this.activeIndex),this.swiperIndicator.on("slideChangeTransitionEnd",this.onIndicatorSlideChangeTransitionStart),hideMask.call(this)}},{key:"slideTo",value:function(t){if(t===this.activeIndex)return!1;this.swiperContent.slideTo(t)}},{key:"appendSlide",value:function(t,e,i){this.addSlide(this.config.content.tabInstances.length,t,e,i)}},{key:"prependSlide",value:function(t,e,i){this.addSlide(0,t,e,i)}},{key:"addSlide",value:function(t,e,i,n){var s,a=this.config.content.tabInstances.length;if(t<0||a<t)return!1;(s=this.config.content.tabInstances).splice.apply(s,[t,0].concat((0,_toConsumableArray2.default)([].concat(n)))),this.contentClassInstances.clear(),this.swiperIndicator.addSlide(t,e),this.swiperContent.addSlide(t,i),this.swiperIndicator.destroy(!1),renderIndicator.call(this),this.swiperIndicator.init(),this.activeIndex=-1}},{key:"removeSlide",value:function(t){var e=this,i=this.config.content.tabInstances.length;if(t<0||i<t)return!1;t instanceof Array?(t.sort(function(t,e){return e-t}),t.forEach(function(t){e.config.content.tabInstances.splice(t,1)})):this.config.content.tabInstances.splice(t,1),this.contentClassInstances.clear(),this.swiperIndicator.removeSlide(t),this.swiperContent.removeSlide(t),this.swiperIndicator.destroy(!1),renderIndicator.call(this),this.swiperIndicator.init(),this.activeIndex=-1}},{key:"getCount",value:function(){return _uiUtil.Dom6.children(this.indicatorEl.firstElementChild,"swiper-slide").length}}]),n}(),_default=Tab;exports.default=_default;
//# sourceMappingURL=tab.js.map