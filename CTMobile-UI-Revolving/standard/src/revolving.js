import Swiper from 'swiper';

const defaultConfig = {
  speed: 1000,
  delay: 1000,
  direction: 'top',
  loop: true,
  stopOnLastSlide: false,
};

const selectorPrefix = 'ct-revolving-';

/**
 * mixinsSwiperClass
 * @access private
 */
function mixinsSwiperClass() {
  if (!this.el.classList.contains('swiper-container')) {
    this.el.classList.add('swiper-container');
  }

  if (!this.wrapperEl.classList.contains('swiper-wrapper')) {
    this.wrapperEl.classList.add('swiper-wrapper');
  }

  const slideEls = this.el.querySelectorAll(`.${selectorPrefix}slide`);
  for (let i = 0; i < slideEls.length; i++) {
    if (!slideEls[i].classList.contains('swiper-slide')) {
      slideEls[i].classList.add('swiper-slide');
    }
  }
}

/**
 * getDirection
 * @param {string} direction
 * @return {string}
 * @access private
 */
function getDirection(direction) {
  return direction === 'left' || direction === 'right' ?
    'horizontal' : 'vertical';
}

/**
 * initial
 * @access private
 */
function initial() {
  const { speed, delay, loop, direction, stopOnLastSlide } = this.config;
  this.swiper = new Swiper(this.el, {
    allowTouchMove: false,
    direction: getDirection(direction),
    loop,
    speed,
    autoplay: {
      delay,
      stopOnLastSlide,
      reverseDirection: direction === 'right' || direction === 'bottom',
    },
  });
}

/**
 * Revolving
 * @class Revolving
 * @classdesc Revolving
 */
class Revolving {
  /**
   * constructor
   * @param {HtmlElement} el
   * @param {Object} config
   * {
   *  speed: {number} 幻灯片之间的过渡持续时间（毫秒）
   *  delay: {number} 转换之间的延迟（以ms为单位）
   *  direction: {string} [left | right | top | bottom] 滚动方向
   *  loop: {boolean} 是否循环播放
   *  stopOnLastSlide: {booelan} 启用此参数并在到达最后一张幻灯片时停止自动播放（在循环模式下无效）
   * }
   */
  constructor(el, config = {}) {
    this.el = el;
    this.wrapperEl = this.el.querySelector(`.${selectorPrefix}wrapper`);
    this.config = Object.assign(defaultConfig, config);

    mixinsSwiperClass.call(this);
    initial.call(this);
  }

  /**
   * start
   */
  start() {
    this.swiper.autoplay.start();
  }

  /**
   * stop
   */
  stop() {
    this.swiper.autoplay.stop();
  }

  /**
   * isRunning
   * @return {boolean}
   */
  isRunning() {
    return this.swiper.autoplay.running;
  }

  /**
   * on
   * autoplayStart Event will be fired in when autoplay started
   * autoplayStopEvent will be fired when autoplay stopped
   * autoplay Event will be fired when slide changed with autoplay
   * @param {string} type
   * @param {Function} handler
   */
  on(type, handler) {
    this.swiper.on(type, handler);
  }
}

/**
 * Revolving
 * @param {HtmlElement} el
 * @param {Object} config
 * @return {Revolving}
 */
export default function (el, config) {
  return new Revolving(el, config);
}
