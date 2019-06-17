import { Events } from '@ctmobile/ui-util';
import SwipeoutFactory, { className } from './swipeout';

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
  if (this.swipers) {
    this.destory();
  }

  delete this.config.listeners;

  this.swipers = [];
  const swiperEls = this.el.querySelectorAll(`.${className}`);
  for (let i = 0; i < swiperEls.length; i++) {
    const swiper = SwipeoutFactory.create(swiperEls[i], Object.assign({
      listeners: {
        init: (self) => {
          this.events.trigger('init', self);
        },
      },
    }, this.config));

    swiper.on('slideChangeTransitionStart', (self) => {
      this.events.trigger('slideChangeTransitionStart', self);
    });

    swiper.on('slideChangeTransitionEnd', (self) => {
      this.events.trigger('slideChangeTransitionEnd', self);
    });

    this.swipers.push(swiper);
  }
}

/**
 * SwipeoutList
 * @class SwipeoutList
 * @classdesc SwipeoutList
 */
class SwipeoutList {
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
  }

  /**
   * changeDirection
   * @param {Swiperout} - swiper
   * @param {String} - direction
   */
  changeDirection(swiper, direction) {
    swiper.changeDirection(direction);
  }

  /**
   * slideBefore
   * @param {Swiperout} - swiper
   */
  slideBefore(swiper) {
    swiper.slideBefore();
  }

  /**
   * slideAfter
   * @param {Swiperout} - swiper
   */
  slideAfter(swiper) {
    swiper.slideAfter();
  }

  /**
   * close
   * @param {Swiperout} - swiper
   */
  close(swiper) {
    swiper.close();
  }

  /**
   * slideBeforeAll
   */
  slideBeforeAll() {
    for (let i = 0; i < this.swipers.length; i++) {
      this.swipers[i].slideBefore();
    }
  }

  /**
   * slideAfterAll
   */
  slideAfterAll() {
    for (let i = 0; i < this.swipers.length; i++) {
      this.swipers[i].slideAfter();
    }
  }

  /**
   * changeDirection
   * @param {String} - direction
   */
  changeDirections(direction) {
    for (let i = 0; i < this.swipers.length; i++) {
      this.swipers[i].changeDirection(direction);
    }
  }

  /**
   * closeAll
   */
  closeAll() {
    for (let i = 0; i < this.swipers.length; i++) {
      this.swipers[i].close();
    }
  }

  /**
   * destorySwiper
   * @param {Swiperout} - swiper
   */
  destorySwiper(swiper) {
    swiper.destory();
  }

  /**
   * removeSwiper
   * @param {Swiperout} - swiper
   */
  removeSwiper(swiper) {
    swiper.remove();
  }

  /**
   * getSwiper
   * @return {Swipeout}
   */
  getSwiper(index) {
    return this.swipers[index];
  }

  /**
   * refresh
   */
  refresh() {
    render.call(this);
  }

  /**
   * destory
   */
  destory() {
    for (let i = 0; i < this.swipers.length; i++) {
      this.swipers[i].destory();
    }
  }
}

/**
 * SwipeoutListFactory
 */
const SwipeoutListFactory = {
  /**
   * 创建一个Swipeout
   * @param {HtmlElement} - el
   * @param {Object} - config
   * @return {SwipeoutList} - SwipeoutList
   */
  create(el, config) {
    return new SwipeoutList(el, config);
  },
};

export default SwipeoutListFactory;
