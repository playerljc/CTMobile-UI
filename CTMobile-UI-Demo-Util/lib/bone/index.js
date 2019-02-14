import Swiper from 'swiper';
import { Dom6 } from '@ctmobile/ui-util';

/**
 * initEvents
 * @access private
 */
function initEvents() {
  this.swiper.on('slideChange', this.onSlideChange);
  this.swiper.on('slideChangeTransitionStart', this.onSlideChangeTransitionStart);
}

/**
 * LinkCapture
 * @param {HtmlElement} - target
 * @return {boolean}
 */
function LinkCapture(target) {
  // 不是a元素
  if (
    target.tagName.toLocaleLowerCase() !== 'a' &&
    !(target = Dom6.getParentElementByTag(target, 'a'))
  ) {
    return false;
  }

  const doneKey = target.dataset.donekey;
  if (!doneKey) return false;

  const index = this.findIndexByKey(doneKey);
  if (index === -1) return false;
  this.swiper.slideTo(index);
  this.history.push(index);
  console.log('historyStart', this.history);
  return true;
}

/**
 * BackCapture
 * @param {HtmlElement} - target
 * @return {boolean}
 */
function BackCapture(target) {
  if (target.className.indexOf('ctmobile-ui-demo-done-page-header-backicon') === -1) {
    return false;
  }

  if (this.history.length <= 1) return false;
  const index = this.history.length - 2;
  console.log('backIndex:', index);
  this.swiper.slideTo(index);
  this.history.pop();
  console.log('historyEnd', this.history);
  return true;
}

/**
 * CaptureElement
 * @access private
 */
const CaptureElement = (function () {
  const chain = [LinkCapture, BackCapture];

  return function () {
    const self = this;
    this.el.firstElementChild.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      if (!target) return false;

      for (let i = 0; i < chain.length; i++) {
        const CaptureTarget = chain[i];
        const flag = CaptureTarget.call(self, target);
        if (flag) break;
      }
    });
  };
}());


/**
 * Bone
 * @class Bone
 * @classdesc bone
 */
class Bone {
  /**
   * constructor
   * @constructor
   * @param {HtmlElement} el
   * @param {Array} classed
   */
  constructor(el, classed = []) {
    this.el = el;
    this.classed = new Map(classed);
    this.slideInstances = new Map();
    this.history = [];

    CaptureElement.call(this);

    this.onInit = this.onInit.bind(this);
    this.onSlideChange = this.onSlideChange.bind(this);
    this.onSlideChangeTransitionStart = this.onSlideChangeTransitionStart.bind(this);

    this.swiper = new Swiper(this.el, {
      // 如果为false，则切换幻灯片的唯一方法是使用外部API函数，如slidePrev或slideNext
      allowTouchMove: false,
      on: {
        init: this.onInit(),
      },
    });

    initEvents.call(this);
  }

  /**
   * onInit
   */
  onInit() {
    this.classed.forEach((value, key) => {
      if (!value) return false;

      const slideInstance = new value({ context: this, key, el: this.getElByKey(key) });
      if (slideInstance.onInit) {
        slideInstance.onInit();
      }
      this.slideInstances.set(key, slideInstance);
    });

    // 调用第一页的onShow
    this.onSlideChange();
    this.history.push(0);
  }

  /**
   * onSlideChangeTransitionStart
   */
  onSlideChangeTransitionStart() {
    this.preIndex = this.swiper.activeIndex;
  }

  /**
   * onSlideChange
   */
  onSlideChange() {
    const activeIndex = this.swiper ? this.swiper.activeIndex : 0;
    const key = this.findKeyByIndex(activeIndex);
    const slideInstance = this.slideInstances.get(key);
    if (slideInstance && slideInstance.onShow) {
      slideInstance.onShow();
    }
  }

  /**
   * 通过索引寻找key
   * @param {number} - index
   * @return {string} - key
   */
  findKeyByIndex(index = 0) {
    const el = this.el.firstElementChild.children[index];
    if (el) {
      return el.dataset.key;
    }
  }

  /**
   * findIndexByKey
   * @param {string} - key
   * @return {number} - index
   */
  findIndexByKey(key) {
    const el = this.getElByKey(key);
    if (!el) return -1;

    let index = -1;
    const children = this.swiper.$wrapperEl.children();
    for (let i = 0; i < children.length; i++) {
      if (children[i] === el) {
        index = i;
        break;
      }
    }

    return index;
  }

  /**
   * getElByKey
   * @param {string} - key
   * @return - {HtmlElement}
   */
  getElByKey(key) {
    return this.el.firstElementChild.querySelector(`[data-key="${key}"]`);
  }
}

export default Bone;
