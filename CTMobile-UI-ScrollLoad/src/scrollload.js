import { Events } from '@ctmobile/ui-util';

const selectorPrefix = 'ct-scrolload-';

/**
 * ScrollLoad
 * @class ScrollLoad
 * @classdesc ScrollLoad
 */
class ScrollLoad {
  static EMPTY = 'empty';
  static ERROR = 'error';
  static NORMAL = 'normal';

  /**
   * constructor
   * @constructor
   * @param {HtmlElement} el
   * @param {object} config
   * {
   *  @param {number} distance 属性允许配置距页面底部（以px为单位）的距离以触发无限滚动事件。默认情况下，如果未指定，则为50（px）
   * }
   */
  constructor(el, config = { distance: 50 }) {
    this.el = el;
    this.scrollEl = this.el.querySelector(`.${selectorPrefix}content`);
    this.loadEl = this.el.querySelector(`.${selectorPrefix}load`);
    this.emptyEl = this.el.querySelector(`.${selectorPrefix}empty`);
    this.errorEl = this.el.querySelector(`.${selectorPrefix}error`);
    this.config = config;

    // 锁
    this.lock = false;

    // events
    this.events = new Events();

    this.onScroll = this.onScroll.bind(this);
    this.onEmptyClick = this.onEmptyClick.bind(this);
    this.onErrorClick = this.onErrorClick.bind(this);

    this.scrollEl.addEventListener('scroll', this.onScroll);
    this.emptyEl.addEventListener('click', this.onEmptyClick);
    this.errorEl.addEventListener('click', this.onErrorClick);
  }

  /**
   * onScroll
   */
  onScroll() {
    const bottomHeight = this.scrollEl.scrollHeight - this.scrollEl.offsetHeight;
    const scrollTop = this.scrollEl.scrollTop;

    /**
     * 条件完全相等或误差值在1之间
     */
    if (this.events.hasType('scrollbottom') &&
      Math.abs(scrollTop - bottomHeight) <= this.config.distance
    ) {
      if (this.lock) return;
      this.lock = true;


      // 先显示loading
      this.loadEl.style.display = 'flex';

      this.events.trigger('scrollbottom', {
        /**
         * 完成
         * @param {string} status [empty(没有数据) | error(有错误) | normal(正常)]
         */
        done: (status) => {
          this.loadEl.style.display = 'none';

          if (status === ScrollLoad.EMPTY) {
            this.emptyEl.style.display = 'block';
          } else if (status === ScrollLoad.ERROR) {
            this.errorEl.style.display = 'block';
          }

          this.lock = false;
        },
      });
    }
  }

  /**
   * onEmptyClick
   */
  onEmptyClick() {
    if (this.events.hasType('emptyclick')) {
      this.events.trigger('emptyclick');
    }
  }

  /**
   * onErrorClick
   */
  onErrorClick() {
    if (this.events.hasType('errorclick')) {
      this.events.trigger('errorclick');
    }
  }

  /**
   * on 注册事件
   * @param {string} type
   *
   * 1.滚动到了底部 scrollbottom
   * 2.点击了没有数据 emptyclick
   * 3.点击了错误 errorclick
   *
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
   * getLoadEl
   * @return {HtmlElement}
   */
  getLoadEl() {
    return this.loadEl;
  }

  /**
   * getEmptyEl
   * @return {HtmlElement}
   */
  getEmptyEl() {
    return this.emptyEl;
  }

  /**
   * getErrorEl
   * @return {HtmlElement}
   */
  getErrorEl() {
    return this.errorEl;
  }

  /**
   * hideAll
   */
  hideAll() {
    this.loadEl.style.display = 'none';
    this.errorEl.style.display = 'none';
    this.emptyEl.style.display = 'none';
  }
}

const CONSTANT = {
  EMPTY: ScrollLoad.EMPTY,
  ERROR: ScrollLoad.ERROR,
  NORMAL: ScrollLoad.NORMAL,
};

export { CONSTANT };

/**
 * ScrollLoad
 * @param {HtmlElement} el
 * @param {object} config
 * @return {ScrollLoad}
 */
export default function (el, config) {
  return new ScrollLoad(el, config);
}
