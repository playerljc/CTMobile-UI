const
  STATUS_NOSWIPE = 'noswipe',
  STATUS_SWIPE = 'swipe',
  // 快速滑动时间
  SWIPE_FAST_DISTANCE = 1200,
  // 滑动操作的最大距离
  SWIPE_VERTICAL_DISTANCE = 30,
  // 滑动动画持续时间
  SWIPE_DURATION = '300';


/**
 * clearTouchEventListener
 * @access private
 */
function clearTouchEventListener() {
  const self = this;
  self.masterDom.removeEventListener('touchmove', onTouchmoveAction);
  self.masterDom.removeEventListener('touchend', onTouchendAction);
}

/**
 * noSwipe
 * @access private
 * @param {Function} callback
 */
function noSwipe(callback) {
  const self = this;

  setTransform(self.masterDom, 'scale(1,1) translate3d(0,0,0)');
  setTransform(self.slaveDom, 'scale(0,0)');
  setOpacity(self.slaveDom, '0');

  if (callback) {
    callback();
  }
}

/**
 * swipeEnd
 * @access private
 * @param {Function} callback
 */
function swipeEnd(callback) {
  const self = this;

  setTransform(self.masterDom, `scale(1,${self.masterScaleMixVal.scaleY}) translate3d(${self.swipeWidth}px,0,0)`);
  setTransform(self.slaveDom, 'scale(1,1)');
  setOpacity(self.slaveDom, '1');

  if (callback) {
    callback();
  }
}

/**
 * swipe
 * @access private
 * @param {number} distance
 */
function swipe(distance) {
  const self = this;
  let mTransitionX = null;
  let mScaleY = null;
  let sScaleX = null;

  setTransformOrigin(self.masterDom, 'right center');
  setTransformOrigin(self.slaveDom, 'left center');
  if (self.masterDom.dataset.status === STATUS_NOSWIPE) {
    mTransitionX = Math.abs(distance);
    mScaleY = 1 - Math.abs(distance) / self.masterHeight;
    sScaleX = Math.abs(distance) / self.swipeWidth;
  } else if (self.masterDom.dataset.status === STATUS_SWIPE) {
    mTransitionX = self.swipeWidth + distance;
    mScaleY = self.masterScaleMixVal.scaleY + Math.abs(distance) / self.masterHeight;
    sScaleX = 1 - Math.abs(distance) / self.swipeWidth;
  }
  setTransform(self.masterDom, `scale(1,${mScaleY}) translate3d(${mTransitionX}px,0,0)`);
  setTransform(self.slaveDom, `scale(${sScaleX})`);
  setOpacity(self.slaveDom, sScaleX);
}

/**
 * setTransitionByMasterAndSlave
 * @access private
 * @param {number} duation
 * @param {string} unit
 */
function setTransitionByMasterAndSlave(duation, unit) {
  const self = this;
  const value = `transform ${duation}${unit} linear,opacity ${duation}${unit} linear`;
  setTransition(self.masterDom, value);
  setTransition(self.slaveDom, value);
}

/**
 * 获取master缩放的最小值
 * @access private
 * @returns {{scaleX: number, scaleY: number}}
 */
function getMasterScaleMinValue() {
  const self = this;
  return {
    scaleX: 1 - self.swipeWidth / self.masterWidth,
    scaleY: 1 - self.swipeWidth / self.masterHeight,
  };
}

/**
 * setTransform
 * @access private
 * @param {HTMLElement} dom
 * @param {string} value
 */
function setTransform(dom, value) {
  dom.style.webkitTransform = dom.style.MozTransform = dom.style.msTransform = dom.style.OTransform = dom.style.transform = value;
}

/**
 * setTransition
 * @access private
 * @param {HTMLElement} dom
 * @param {string} value
 */
function setTransition(dom, value) {
  dom.style.webkitTransition = dom.style.MozTransition = dom.style.msTransition = dom.style.OTransition = dom.style.transition = value;
}

/**
 * setTransformOrigin
 * @access private
 * @param {HTMLElement} dom
 * @param {string} value
 */
function setTransformOrigin(dom, value) {
  dom.style.webkitTransformOrigin = dom.style.MozTransformOrigin = dom.style.msTransformOrigin = dom.style.OTransformOrigin = dom.style.transformOrigin = value;
}

/**
 * setOpacity
 * @access private
 * @param {HTMLElement} dom
 * @param {string} value
 */
function setOpacity(dom, value) {
  dom.style.webkitOpacity = dom.style.MozOpacity = dom.style.msOpacity = dom.style.OOpacity = dom.style.opacity = value;
}

/**
 * onTouchstartAction
 * @access private
 * @param {Object} e
 */
function onTouchstartAction(e) {
  const self = this;
  self.startTime = +new Date();
  self.endTime = 0;
  self.startX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
  self.startY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
  self.endX = 0;
  self.endY = 0;
  self.isMove = false;
  self.scroll = false;

  setTransitionByMasterAndSlave.call(self, '0', 'ms');
  self.masterDom.addEventListener('touchmove', onTouchmoveAction);
  self.masterDom.addEventListener('mousemove', onTouchmoveAction);
  self.masterDom.addEventListener('touchend', onTouchendAction);
  self.masterDom.addEventListener('mouseup', onTouchendAction);
}

/**
 * onTouchmoveAction
 * @access private
 * @param {Object} e
 */
function onTouchmoveAction(e) {
  const self = this;

  self.endX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
  self.endY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
  const swipeYDistance = Math.abs(parseInt(self.endY) - parseInt(self.startY));
  const swipeXDistance = Math.abs(parseInt(self.endX) - parseInt(self.startX));

  if (swipeYDistance > SWIPE_VERTICAL_DISTANCE &&
    swipeXDistance < SWIPE_VERTICAL_DISTANCE) {
    // 如果滑动距离大于5则是滚动
    self.isMove = false;
    self.scroll = true;
    return;
  }

  self.isMove = true;

  const distance = parseInt(self.endX) - parseInt(self.startX);

  if (self.masterDom.dataset.status === STATUS_NOSWIPE) {
    // noswipe状态
    if (distance <= 0) {
      noSwipe.call(self);
    } else if (Math.abs(distance) <= self.swipeWidth) {
      swipe.call(self, distance);
    } else {
      swipeEnd.call(self);
    }
  } else if (self.masterDom.dataset.status === STATUS_SWIPE) {
    // swipe状态
    if (distance >= 0) {
      swipeEnd.call(self);
    } else if (Math.abs(distance) <= self.swipeWidth) {
      swipe.call(self, distance);
    } else {
      noSwipe.call(self);
    }
  }
}

/**
 * onTouchendAction
 * @access private
 * @param {Object} e
 */
function onTouchendAction(e) {
  const self = this;
  if (!self.isMove) {
    self.masterDom.removeEventListener('touchmove', onTouchmoveAction);
    self.masterDom.removeEventListener('mousemove', onTouchmoveAction);
    self.masterDom.removeEventListener('touchend', onTouchendAction);
    self.masterDom.removeEventListener('mouseup', onTouchendAction);
    if (self.masterDom.dataset.status === STATUS_SWIPE) {
      swipeEnd.call(self);
    } else if (self.masterDom.dataset.status === STATUS_NOSWIPE) {
      noSwipe.call(self);
    }
    return;
  }

  self.endX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
  self.endTime = +new Date();
  const distance = parseInt(self.endX) - parseInt(self.startX);

  setTransitionByMasterAndSlave.call(self, SWIPE_DURATION, 'ms');

  if (self.masterDom.dataset.status === STATUS_NOSWIPE) {
    // noswipe状态
    if (distance <= 0) {
      noSwipe.call(self);
    } else if (Math.abs(distance) <= self.swipeWidth) {
      if (Number(self.endTime) - Number(self.startTime) <= SWIPE_FAST_DISTANCE) {
        // 快速滑动
        swipeEnd.call(self, () => {
          self.masterDom.dataset.status = STATUS_SWIPE;
          if (self.config.showCallback) {
            self.config.showCallback();
          }
        });
      } else if (Math.abs(distance) >= self.swipeWidth / 2) {
        // 滑过1/2
        swipeEnd.call(self, () => {
          self.masterDom.dataset.status = STATUS_SWIPE;
          if (self.config.showCallback) {
            self.config.showCallback();
          }
        });
      } else {
        // 没滑过1/2
        noSwipe.call(self);
      }
    } else {
      swipeEnd.call(self, () => {
        self.masterDom.dataset.status = STATUS_SWIPE;
        if (self.config.showCallback) {
          self.config.showCallback();
        }
      });
    }
  } else if (self.masterDom.dataset.status === STATUS_SWIPE) {
    // swipe状态
    if (distance >= 0) {
      swipeEnd.call(self);
    } else if (Math.abs(distance) <= self.swipeWidth) {
      // 快速滑动
      if (Number(self.endTime) - Number(self.startTime) <= SWIPE_FAST_DISTANCE) {
        noSwipe.call(self, () => {
          self.masterDom.dataset.status = STATUS_NOSWIPE;
          if (self.config.hideCallback) {
            self.config.hideCallback();
          }
        });
      } else if (Math.abs(distance) >= self.swipeWidth / 2) {
        // 滑过1/2
        noSwipe.call(self, () => {
          self.masterDom.dataset.status = STATUS_NOSWIPE;
          if (self.config.hideCallback) {
            self.config.hideCallback();
          }
        });
      } else {
        // 没滑过1/2
        swipeEnd.call(self);
      }
    } else {
      noSwipe.call(self, () => {
        self.masterDom.dataset.status = STATUS_NOSWIPE;
        if (self.config.hideCallback) {
          self.config.hideCallback();
        }
      });
    }
  }

  clearTouchEventListener.call(self);
}

/**
 * DragLayout
 * @class DragLayout
 * @classdesc DragLayout
 */
class DragLayout {
  /**
   * contrutor
   * @param {HTMLElement} el父容器
   * @param {Object} config
   * {
   *    showCallback {Function}
   *    hideCallback {Function}
   * }
   */
  constructor(el, config) {
    this.el = el;
    this.config = Object.assign({}, config);

    this.slaveDom = this.el.querySelector('.ct-draglayout-slave');
    this.masterDom = this.el.querySelector('.ct-draglayout-master');

    // 可滑动的宽度
    this.swipeWidth = this.slaveDom.clientWidth;
    this.masterWidth = this.masterDom.clientWidth;
    this.masterHeight = this.masterDom.clientHeight;
    this.masterScaleMixVal = getMasterScaleMinValue.call(this);

    if (!this.masterDom.dataset.status) {
      this.masterDom.dataset.status = STATUS_NOSWIPE;
    }

    onTouchstartAction = onTouchstartAction.bind(this);
    onTouchmoveAction = onTouchmoveAction.bind(this);
    onTouchendAction = onTouchendAction.bind(this);
    this.masterDom.addEventListener('touchstart', onTouchstartAction);
    this.masterDom.addEventListener('mousedown', onTouchstartAction);
  }

  /**
   * show
   */
  show() {
    const self = this;
    setTransitionByMasterAndSlave.call(self, SWIPE_DURATION, 'ms');
    swipeEnd.call(self, () => {
      self.masterDom.dataset.status = STATUS_SWIPE;
    });
  }

  /**
   * hide
   */
  hide() {
    const self = this;
    setTransitionByMasterAndSlave.call(self, SWIPE_DURATION, 'ms');
    noSwipe.call(self, () => {
      self.masterDom.dataset.status = STATUS_NOSWIPE;
    });
  }

  /**
   * isShow
   * @return {boolean}
   */
  isShow() {
    if (this.masterDom.dataset.status === STATUS_NOSWIPE) {
      return false;
    } else {
      return true;
    }
  }
}

/**
 * DragLayoutFactory
 * @param {HtmlElement} el
 * @param {Object} config
 * @return {DragLayout}
 */
export default function (el, config) {
  return new DragLayout(el, config);
}
