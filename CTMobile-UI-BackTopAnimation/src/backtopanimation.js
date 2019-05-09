import { Events, Dom6 } from '@ctmobile/ui-util';

/**
 * init
 * @access private
 */
function init() {
  this.el = Dom6.createElement('<div class="ct-scrollTopAnimation-btn"></div>');
  this.parent.appendChild(this.el);
}

/**
 * initMask
 * @access private
 */
function initMask() {
  this.maskEl = document.body.querySelector('.ct-scrollTopAnimation-mask');
  if (!this.maskEl) {
    this.maskEl = Dom6.createElement("<div class='ct-scrollTopAnimation-mask'></div>");
    document.body.appendChild(this.maskEl);
  }
}

/**
 * initEvents
 * @access private
 */
function initEvents() {
  const self = this;
  /**
   * 点击操作按钮
   */
  self.el.addEventListener('click', () => {
    if (self.key) return false;

    self.key = true;
    this.maskEl.style.display = 'block';

    const srcTop = self.scrollEl.scrollTop;
    let scrollVal = srcTop;
    const targetTop = 0;
    // 一次滚动的步进
    const setp = self.scrollEl.scrollHeight / (self.duration / (screen.updateInterval || 16.7) + (self.duration % (screen.updateInterval || 16.7) !== 0 ? 1 : 0));

    /**
     * 动画的滚动
     */
    function scrollAnimation() {
      if (srcTop < targetTop) {
        if ((scrollVal + setp) > targetTop) {
          scrollVal = targetTop;
        } else {
          scrollVal += setp;
        }
      } else if ((scrollVal - setp) < targetTop) {
        scrollVal = targetTop;
      } else {
        scrollVal -= setp;
      }

      self.scrollEl.scrollTop = scrollVal;

      if (srcTop < targetTop) {
        if (scrollVal >= targetTop) {
          clear();
        } else {
          window.requestAnimationFrame(scrollAnimation);
        }
      } else if (scrollVal <= targetTop) {
        clear();
      } else {
        window.requestAnimationFrame(scrollAnimation);
      }

      function clear() {
        self.key = false;
        self.maskEl.style.display = 'none';
        self.events.trigger('scrollTop');
      }
    }

    window.requestAnimationFrame(scrollAnimation);
  }, false);

  /**
   * 滚动的event
   */
  self.scrollEl.addEventListener('scroll', function () {
    if (this.scrollTop !== 0) {
      window.requestAnimationFrame(() => {
        self.el.style.display = 'block';
      });
    } else {
      window.requestAnimationFrame(() => {
        self.el.style.display = 'none';
      });
    }
  }, false);
}

/**
 * BackTopAnimation
 * @class BackTopAnimation
 * @classdesc BackTopAnimation
 */
class BackTopAnimation {
  constructor(parent, scrollEl) {
    this.parent = parent;
    this.scrollEl = scrollEl;
    // 执行动画时的锁
    this.key = false;
    this.duration = 300;

    // events
    this.events = new Events();

    init.call(this);
    initMask.call(this);
    initEvents.call(this);
  }

  /**
   * on 注册事件
   * @param {string} type
   * @param {Function} handler
   */
  on(type, handler) {
    this.events.on(type, handler);
  }

  /**
   * 删除指定type下的事件或清除所有
   * @param {string} type
   * @param {Function} handler
   */
  off(type, handler) {
    if (type) {
      if (handler) {
        this.events.remove(type, handler);
      } else {
        this.events.clear(type);
      }
    } else {
      this.events.clearAll();
    }
  }
}

/**
 * BackTopAnimationFactory
 * @param {HtmlElement} el
 * @param {HTMLElement} scrollEl
 * @return {BackTopAnimation}
 */
export default function (parent, scrollEl) {
  return new BackTopAnimation(parent, scrollEl);
}
