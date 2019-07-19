/**
 * 配置:
 el
 {
  min: 0 最小值,
  max: 10 最大值,
  value: 0 当前值,
  step: 1 步进,一次滑动距离,
  interval: 2 每隔interval标识一个刻度,
}

 布局:
 <div class="ct-sliderscale" id="s1">
 <div class="scale"></div>
 <input type="range">
 </div>
 */

import { Dom6, Events } from '@ctmobile/ui-util';

/**
 * initVar
 * @access private
 */
function initVar() {
  this.scaleEl = this.el.querySelector('.scale');
  this.rangeEl = this.el.querySelector("input[type='range']");
}

/**
 * init
 * @access private
 */
function init() {
  const { min, max, value, step, interval } = this.config;

  this.rangeEl.setAttribute('min', min);
  this.rangeEl.setAttribute('max', max);
  this.rangeEl.setAttribute('step', step);
  this.rangeEl.setAttribute('value', value);

  const df = document.createDocumentFragment();
  for (let i = min; i < max; i++) {
    if (max - 1 === min) {
      break;
    }

    const scaleEl = Dom6.createElement('<div></div>');
    scaleEl.classList.add('scaleItem');

    if ((i + 1) % interval === 0) {
      scaleEl.classList.add('point');
      scaleEl.appendChild(Dom6.createElement(`<span class='value'>${i + 1}</span>`));
    }

    if (i === min) {
      scaleEl.appendChild(Dom6.createElement(`<span class='value'>${min}</span>`));
    }

    if (((i + 1) % interval !== 0) && i === (max - 1)) {
      scaleEl.appendChild(Dom6.createElement(`<span class='value'>${i + 1}</span>`));
    }

    df.appendChild(scaleEl);
  }

  if (min === max) {
    this.scaleEl.appendChild(Dom6.createElement(
      `<div class='scaleItem'>
        <span class='value'>0</span>
        <span class='value' style='right:0;left: auto;'>${max}</span>
       </div>`
    ));
  } else if (max - 1 === min) {
    this.scaleEl.appendChild(Dom6.createElement(
      `<div class='scaleItem'>
        <span class='value'>${min}</span>
        <span class='value' style='right:0;left: auto;'>${max}</span>
       </div>`
    ));
  }

  this.scaleEl.appendChild(df);
}

/**
 * initEvents
 * @access private
 */
function initEvents() {
  const self = this;

  this.rangeEl.addEventListener('mousemove', function () {
    touchEvent.call(self, this);
  });

  this.rangeEl.addEventListener('touchmove', function () {
    touchEvent.call(self, this);
  });
}

/**
 * toychEvent
 * @access private
 * @param {HTMLElement} dom
 */
function touchEvent(dom) {
  const self = this;
  if (self.preValue !== dom.value) {
    self.preValue = dom.value;
    self.events.trigger('change', {
      value: dom.value,
      el: self.el,
    });
  }
}

/**
 * SliderScale
 * @class SliderScale
 * @classdesc SliderScale
 */
class SliderScale {
  /**
   * constructor
   * @constructor
   * @param {HTMLElement} el
   * @param {Object} config
   */
  constructor(el, config) {
    this.el = el;
    this.config = Object.assign({
      min: 0,
      max: 100,
      step: 1,
      value: 0,
      interval: 5,
    }, config);

    this.events = new Events();

    initVar.call(this);
    init.call(this);
    initEvents.call(this);
  }

  /**
   * setValue
   * @param {String} value
   */
  setValue(value) {
    this.rangeEl.value = value;
  }

  /**
   * getValue
   * @return {String}
   */
  getValue() {
    return this.rangeEl.value;
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
 * SliderScaleFactory
 */
const SliderScaleFactory = {
  /**
   * 创建一个SliderScale
   * @param {HtmlElement} - el
   * @param {Object} - config
   * @return {SliderScale} - SliderScale
   */
  create(tel, config) {
    return new SliderScale(tel, config);
  },
};

export default SliderScaleFactory;

