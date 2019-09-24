/**
 * 配置:
 el
 {
  listeners: Object,
  direction: [horizontal | vertical] 方向
}

 布局:
 <div class="ct-swipeout swiper-container">
 <div class="swiper-wrapper">
 <div class="swiper-slide ct-swipeout-before">opt1</div>
 <div class="swiper-slide ct-swipeout-main"></div>
 <div class="swiper-slide ct-swipeout-after">opt3</div>
 </div>
 </div>

 功能:
 .滚动到指定的位置
 .关闭
 .事件

 测试:

 logs:

 demo:
 */

import Swiper from 'swiper';
import { Events } from '@ctmobile/ui-util';

const className = 'ct-swipeout';

export { className };

/**
 * initEvents
 * @access private
 */
function initEvents() {
  if (this.config && this.config.listeners) {
    const { listeners = {} } = this.config;
    const keys = Object.keys(listeners);
    for (let i = 0; i < keys.length; i += 1) {
      const p = keys[i];
      this.events.on(p, listeners[p]);
    }
  }
}

/**
 * render
 * @access private
 */
function render() {
  const { direction = 'horizontal' } = this.config;
  if (this.swiper) {
    this.swiper.destroy();
  }

  this.swiper = new Swiper(this.el, {
    init: false,
    // 初始化在第一个选项卡上
    initialSlide: 1,
    direction,
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 0,
  });

  this.swiper.on('init', () => {
    this.events.trigger('init', this);
  });

  this.swiper.on('slideChangeTransitionStart', () => {
    this.events.trigger('slideChangeTransitionStart', this);
  });

  this.swiper.on('slideChangeTransitionEnd', () => {
    this.events.trigger('slideChangeTransitionEnd', this);
  });
}

/**
 * Swipeout
 * @class Swipeout
 * @classdesc Swipeout
 */
class Swipeout {
  /**
   * constructor
   * @constructor
   * @param {HTMLElement} - el
   * @param {Object} - config
   */
  constructor(el, config) {
    this.el = el;
    this.config = Object.assign({}, config);
    this.events = new Events();

    initEvents.call(this);
    render.call(this);
    this.swiper.init();
  }

  /**
   * refresh
   */
  refresh() {
    this.swiper.update();
  }

  /**
   * changeDirection
   * @param {String} - direction
   */
  changeDirection(direction) {
    this.swiper.changeDirection(direction);
  }

  /**
   * slideBefore
   */
  slideBefore() {
    this.swiper.slideTo(0);
  }

  /**
   * slideAfter
   */
  slideAfter() {
    this.swiper.slideTo(2);
  }

  /**
   * close
   */
  close() {
    this.swiper.slideTo(1);
  }

  /**
   * destory
   */
  destory() {
    this.clearAll();
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  /**
   * remove
   */
  remove() {
    this.destory();
    this.el.parentElement.removeChild(this.el);
  }

  /**
   * removeAnimation
   * @param {HTMLElement} - el
   */
  removeAnimation(el) {
    const self = this;
    function onTransitionEnd() {
      el.removeEventListener('transitionEnd', onTransitionEnd);
      self.remove();
    }

    el.addEventListener('transitionEnd', onTransitionEnd);
    const height = el.offsetHeight;
    el.style.transition = 'height 300ms linear';
    el.style.transform = 'translateZ(0)';
    el.style.height = `${height}px`;
    setTimeout(() => {
      el.style.height = 0;
    }, 100);
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

  /**
   * clearAll
   */
  clearAll() {
    this.events.clearAll();
  }
}

/**
 * SwipeoutFactory
 */
const SwipeoutFactory = {
  /**
   * 创建一个Swipeout
   * @param {HtmlElement} - el
   * @param {Object} - config
   * @return {Swipeout} - Swipeout
   */
  create(el, config) {
    return new Swipeout(el, config);
  },
};

export default SwipeoutFactory;
