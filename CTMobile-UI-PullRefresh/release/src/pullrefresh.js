import moment from 'moment';
import { Dom6, Events } from '@ctmobile/ui-util';

let maskEl;
const selectorPrefix = 'ct-pullrefresh-';
const dataFormatStr = 'YYYY-MM-DD HH:mm:ss';

const template =
  `<div class="${selectorPrefix}inner">
      <div class="${selectorPrefix}icon"></div>
      <p class="${selectorPrefix}label">下拉刷新</p>
      <p class="${selectorPrefix}update">更新时间：<span class="${selectorPrefix}update-label">${moment().format(dataFormatStr)}</span></p>
   </div>
   <div class="${selectorPrefix}refresh la-ball-circus la-dark">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
   </div>`;

/**
 * Y平移
 * @param {HtmlElement} el
 * @param {string} y
 * @param {string} duration
 * @access private
 */
function translateY(el, y = 0, duration = 0) {
  el.style.transition = el.style.webkitTransition = `transform ${duration}ms ease`;
  el.style.transform = el.style.webkitTransform = `translate3d(0,${y}px,0)`;
}

/**
 * rotateIcon
 * @param {HtmlElement} el
 * @param {string} distance
 * @param {string} duration
 * @access private
 */
function rotateIcon(el, distance, duration = 0) {
  const deg = distance;
  el.style.transition = el.style.webkitTransition = `transform ${duration}ms linear`;
  el.style.transform = el.style.webkitTransform = `rotate(${deg}deg)`;
}

/**
 * clear
 * @access private
 */
function clear() {
  this.scrollEl.removeEventListener('mousemove', this.onTouchMove);
  this.scrollEl.removeEventListener('mouseup', this.onTouchEnd);
  this.scrollEl.removeEventListener('touchmove', this.onTouchMove);
  this.scrollEl.removeEventListener('touchend', this.onTouchEnd);
  this.downpull = false;
  this.isTop = true;
  this.pullEl.style.display = 'flex';
  this.refreshEl.style.display = 'none';
  rotateIcon(this.iconEl, 180, 0);
  this.scrollEl.style.overflowY = 'auto';
  maskEl.style.display = 'none';
}

/**
 * refresh
 * @access private
 */
function refresh() {
  const self = this;
  maskEl.style.display = 'block';

  this.scrollEl.removeEventListener('mousemove', this.onTouchMove);
  this.scrollEl.removeEventListener('mouseup', this.onTouchEnd);
  this.scrollEl.removeEventListener('touchmove', this.onTouchMove);
  this.scrollEl.removeEventListener('touchend', this.onTouchEnd);

  function onTransitionEnd() {
    self.pullEl.style.display = 'none';
    self.refreshEl.style.display = 'block';
    self.events.trigger('pullRefresh', self);
    self.scrollEl.removeEventListener('transitionend', onTransitionEnd);
  }

  self.scrollEl.addEventListener('transitionend', onTransitionEnd);
  translateY(self.scrollEl, self.refreshHeight, 500);
  translateY(self.el, self.refreshHeight, 500);
  rotateIcon(self.iconEl, 180, 300);
}

/**
 * reset
 * @access private
 */
function reset() {
  const self = this;

  clear.call(self);

  function onTransitionEnd() {
    self.scrollEl.removeEventListener('transitionend', onTransitionEnd);
  }

  self.scrollEl.addEventListener('transitionend', onTransitionEnd);
  translateY(self.scrollEl, 0, 200);
  translateY(self.el, 0, 200);
}

/**
 * PullRefresh
 * @class PullRefresh
 * @classdesc PullRefresh
 */
class PullRefresh {
  /**
   * constructor
   * @param {HtmlElement} scrollEl
   * @param {HtmlElement} scrollInnerEl
   * @param {HtmlElement} pullEl
   * @param {number} pullHeight
   */
  constructor({ scrollEl, scrollInnerEl, pullEl, pullHeight = 200 }) {
    this.scrollEl = scrollEl;
    this.scrollInnerEl = scrollInnerEl;
    this.el = pullEl;

    this.pullHeight = pullHeight;
    if (pullHeight <= 0) {
      this.pullHeight = 200;
    } else if (pullHeight > this.scrollEl.clientHeight) {
      this.pullHeight = this.scrollEl.clientHeight;
    } else {
      this.pullHeight = pullHeight;
    }

    this.el.innerHTML = template;

    this.pullEl = this.el.querySelector(`.${selectorPrefix}inner`);
    this.iconEl = this.el.querySelector(`.${selectorPrefix}icon`);
    this.labelEl = this.el.querySelector(`.${selectorPrefix}label`);
    this.updateEl = this.el.querySelector(`.${selectorPrefix}update-label`);
    this.refreshEl = this.el.querySelector(`.${selectorPrefix}refresh`);
    this.refreshHeight = this.el.clientHeight;

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onScroll = this.onScroll.bind(this);

    if (!maskEl) {
      maskEl = Dom6.createElement(`<div class='${selectorPrefix}mask'></div>`);
      document.body.appendChild(maskEl);
    }

    this.events = new Events();

    /**
     * 更新时间
     * @type {boolean}
     * @private
     */
    this.updateTime = moment().format(dataFormatStr);
    this.updateEl.innerText = this.updateTime;

    this.isTop = true;

    this.scrollEl.addEventListener('touchstart', this.onTouchStart);
    this.scrollEl.addEventListener('mousedown', this.onTouchStart);
    this.scrollEl.addEventListener('scroll', this.onScroll);
  }

  /**
   * onTouchStart
   * @param {Event} e
   */
  onTouchStart(e) {
    this.events.trigger('pullStart');
    this.startPageY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
    this.scrollEl.addEventListener('touchmove', this.onTouchMove);
    this.scrollEl.addEventListener('mousemove', this.onTouchMove);
    this.scrollEl.addEventListener('touchend', this.onTouchEnd);
    this.scrollEl.addEventListener('mouseup', this.onTouchEnd);
  }

  /**
   * onTouchMove
   * @param {Event} e
   */
  onTouchMove(e) {
    this.scrollEl.style.overflow = 'hidden';
    const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
    const difference = targetY - this.startPageY;
    const distance = Math.abs(difference);

    /**
     * 中线下
     */
    if (difference > 0) {
      e.preventDefault();
      this.downpull = true;
      /**
       * 正常拉
       */
      if (distance < this.pullHeight) {
        translateY(this.scrollEl, distance, 0);
        translateY(this.el, distance, 0);
        if (distance >= this.refreshHeight + 80) {
          rotateIcon(this.iconEl, 0, 150);
          console.log('3.具备刷新条件');
          this.labelEl.innerText = '松开刷新';
          this.events.trigger('pullCanRefresh');
        } else {
          rotateIcon(this.iconEl, 180, 150);
          this.labelEl.innerText = '下拉刷新';
        }
        this.el.style.display = 'flex';
      } else {
        /**
         * 越界了
         */
        translateY(this.scrollEl, this.pullHeight, 0);
        translateY(this.el, this.pullHeight, 0);
        rotateIcon(this.iconEl, 0, 150);
        console.log('4.拉动到了底部');
        this.labelEl.innerText = '松开刷新';
        this.events.trigger('pullBottom');
      }
    } else if (this.downpull) {
      /**
       * 中线上
       */
      e.preventDefault();
      translateY(this.scrollEl, 0, 0);
      translateY(this.el, 0, 0);
      rotateIcon(this.iconEl, 180, 0);
    } else {
      clear.call(this);
    }
  }

  /**
   * onTouchEnd
   * @param {Event} e
   */
  onTouchEnd(e) {
    const self = this;

    const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
    const difference = targetY - this.startPageY;
    const distance = Math.abs(difference);

    /**
     * 中线下
     */
    if (difference > 0) {
      /**
       * 正常拉
       */
      if (distance < this.pullHeight) {
        if (distance >= this.refreshHeight + 80) {
          refresh.call(self, false);
        } else {
          console.log('2.没有具备刷新条件弹回');
          self.events.trigger('pullRebound');
          reset.call(self);
        }
      } else {
        /**
         * 越界了
         */
        refresh.call(self, true);
      }
    } else {
      /**
       * 中线上
       */
      clear.call(self);
    }
  }

  /**
   * onScroll
   * @param {Event} e
   */
  onScroll(e) {
    const self = this;
    if (e.target.scrollTop === 0) {
      self.isTop = true;
      self.scrollEl.addEventListener('touchstart', this.onTouchStart);
      self.scrollEl.addEventListener('mousedown', this.onTouchStart);
    } else if (self.isTop) {
      self.isTop = false;
      self.scrollEl.removeEventListener('touchstart', this.onTouchStart);
      self.scrollEl.removeEventListener('mousedown', this.onTouchStart);
    }
  }

  /**
   * reset
   */
  reset() {
    this.updateTime = moment().format(dataFormatStr);
    this.updateEl.innerText = this.updateTime;
    reset.call(this);
  }

  /**
   * refresh
   */
  refresh() {
    refresh.call(this);
  }

  /**
   * on 注册事件
   * @param {string} type
   *
   * 1.拉动开始 pullStart
   * 2.没有具备刷新条件弹回 pullRebound
   * 3.具备刷新条件 pullCanRefresh
   * 4.拉动到了底部 pullBottom
   * 5.刷新 pullRefresh
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
}

export default PullRefresh;
