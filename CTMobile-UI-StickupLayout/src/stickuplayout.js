/**
 * position 查找位置
 * @access private
 * @return {boolean}
 */
function position() {
  const val = this.innerEl.scrollTop;
  let low = 0, high = this.index.length - 1, middle, target;
  while ((low <= high) &&
  (low <= this.index.length - 1) &&
  (high <= this.index.length - 1)) {
    middle = (high + low) >> 1;
    const targetVal = this.index[middle];
    if (val >= targetVal.start && val < targetVal.end) {
      target = targetVal;
      break;
    } else if (val < targetVal.start) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  if (target) {
    if (this.preScrollObj && this.preScrollObj.index === target.index) {
      return false;
    } else {
      this.preScrollObj = target;
      this.fixedEl.innerHTML = target.dom.outerHTML;
      if (this.events['change']) {
        this.events['change'](target.dom, target.index);
      }
    }
  }
}

/**
 * position 创建索引
 * @access private
 */
function createIndex() {
  let pre = 0;
  this.index = [];
  this.preScrollObj = null;
  for (let i = 0, len = this.headerEls.length; i < len; i++) {
    const header = this.headerEls[i];
    let ranageStart = pre, rangeEnd;
    if (i !== len - 1) {
      rangeEnd = this.headerEls[i + 1].offsetTop - header.offsetHeight;
    } else {
      rangeEnd = this.innerEl.scrollHeight;
    }
    this.index.push({
      start: ranageStart,
      end: rangeEnd,
      dom: header,
      index: i
    });
    pre = rangeEnd;

    if (pre > (this.innerEl.scrollHeight - this.innerEl.offsetHeight)) {
      break;
    }
  }
}

/**
 * scrollAnimationTo
 * @access private
 * @param {number} targetTop
 * @param {number} duration
 */
function scrollAnimationTo(targetTop = 0, duration = 300) {
  const self = this;

  if (self.key) return;

  initMask.call(self);

  self.key = true;

  this.maskEl.style.display = 'block';

  let srcTop = this.innerEl.scrollTop,
    scrollVal = srcTop,
    /**
     * 一次滚动的步进
     * @type {number}
     */
    setp = this.innerEl.scrollHeight / ( duration / (screen.updateInterval || 16.7) + (duration % (screen.updateInterval || 16.7) !== 0 ? 1 : 0) );

  /***
   * 动画的滚动
   */
  function scrollAnimation() {
    if (srcTop < targetTop) {
      if ((scrollVal + setp) > targetTop) {
        scrollVal = targetTop;
      } else {
        scrollVal += setp;
      }
    } else {
      if ((scrollVal - setp) < targetTop) {
        scrollVal = targetTop;
      } else {
        scrollVal -= setp;
      }
    }

    self.innerEl.scrollTop = scrollVal;

    if (srcTop < targetTop) {
      if (scrollVal >= targetTop) {
        clear();
      } else {
        window.requestAnimationFrame(scrollAnimation);
      }
    } else {
      if (scrollVal <= targetTop) {
        clear();
      } else {
        window.requestAnimationFrame(scrollAnimation);
      }
    }

    function clear() {
      self.key = false;
      self.maskEl.style.display = 'none';
    }
  }

  /***
   * 滚动core
   */
  window.requestAnimationFrame(scrollAnimation);
}

/**
 * scrollTo
 * @access private
 * @param {Object} item
 * @param {number} duration
 */
function scrollTo(item, duration = 300) {
  const targetTop = item.start + this.headerEls[item.index].offsetHeight;
  if (duration === 0) {
    this.innerEl.scrollTop = targetTop;
  } else {
    scrollAnimationTo.call(this, targetTop, duration);
  }
}

/**
 * initMask
 * @access private
 */
function initMask() {
  if(!this.maskEl) {
    this.maskEl = document.createElement('div');
    this.maskEl.className = 'ct-stickuplayout-mask';
    window.document.body.appendChild(this.maskEl);
  }
}

/**
 * position 初始化
 * @access private
 */
function initial() {
  const self = this;
  this.key = false;
  this.index = [];
  this.events = {};
  this.innerEl = this.el.querySelector(".ct-stickuplayout-inner");
  this.fixedEl = this.el.querySelector(".ct-stickuplayout-fixed");
  this.headerEls = this.el.querySelectorAll(".ct-stickuplayout-inner .ct-stickuplayout-item-header");

  createIndex.call(this);
  position.call(this);

  this.innerEl.addEventListener("scroll", function () {
    position.call(self);
  });
}

/**
 * StickupLayout
 * @class StickupLayout
 * @classdesc StickupLayout
 */
class StickupLayout {
  constructor(el) {
    this.el = el;
    initial.call(this);
  }

  /**
   * scrollToByIndex
   * @param {number} index
   * @param {number} duration
   * @return {boolean}
   */
  scrollToByIndex(index, duration = 300) {
    let i = 0, item;
    for (; i < this.index.length; i++) {
      if (this.index[i].index === index) {
        item = this.index[i];
        break;
      }
    }
    if (!item) return false;
    scrollTo.call(this, item, duration);
  }

  /**
   * scrollToByHeaderEl
   * @param {HtmlElement} headerEl
   * @param {number} duration
   * @return {boolean}
   */
  scrollToByHeaderEl(headerEl, duration = 300) {
    let i = 0, item, index = -1;
    for (; i < this.index.length; i++) {
      if (this.index[i].dom === headerEl) {
        item = this.index[i];
        index = i;
        break;
      }
    }
    if (!item) return false;
    scrollTo.call(this, item, duration);
  }

  /**
   * 刷新
   */
  refresh() {
    this.headerEls = this.el.querySelectorAll('.ct-stickuplayout-inner .ct-stickuplayout-item-header');
    createIndex.call(this);
    position.call(this);
  }

  /**
   * 注册事件
   * @param {string} type 事件类型
   * @param {Function} handler 事件处理函数
   */
  on(type, handler) {
    this.events[type] = handler;
  }
}

/**
 * StickupLayoutFactory
 * @param {HtmlElement} el
 * @return {StickupLayout}
 */
export default function (el) {
  return new StickupLayout(el);
}