/**
 * getTemplateStr
 * @access private
 * @param {object} config
 * @return {string}
 */
function getTemplateStr(config = {min: '0', max: '100', setp: '1', value: '0'}) {
  return (
    `<div class="ct-fontsizesetting-rangeWrap">
      <div class="ct-fontsizesetting-separatedtool">
        <div class="ct-fontsizesetting-separated"><span>小</span></div>
        <div class="ct-fontsizesetting-separated"><span>中</span></div>
        <div class="ct-fontsizesetting-separated"><span>大</span></div>
        <div class="ct-fontsizesetting-separated"><span>特大</span></div>
      </div>
      <input type="range" ...config>
    </div>`
  );
}

/**
 * initial
 * @access private
 */
function initial() {
  this.el.innerHTML = getTemplateStr(this.config);
}

/**
 * trigger
 * @access private
 * @param {string} type
 * @param {Object} params
 */
function trigger(type = 'change', params) {
  if (this.events[type]) {
    this.events[type](params);
  }
}

/**
 * FontSizeSetting
 * @class FontSizeSetting
 * @classdesc FontSizeSetting
 */
class FontSizeSetting {
  /**
   * contrutor
   * @param {HTMLElement} el 父容器
   * @param {Object} config
   * {
   *   min:{string} 最小值
   *   max:{string} 最大值
   *   step:{string} 步进
   *   value:{string} 当前值
   * }
   */
  constructor(el, config) {
    const self = this;
    this.el = el;
    this.events = {};
    this.config = config;
    initial.call(this);
    this.range = this.el.querySelector('input[type="range"]');
    this.range.addEventListener('change', function () {
      if (self.events['change']) {
        trigger.call(self, 'change', this.value);
      }
    }, false);
  }

  /**
   * setMin
   * @param {number} min
   */
  setMin(min = 0) {
    this.range.setAttribute('min', min);
  }

  /**
   * setMax
   * @param {number} max
   */
  setMax(max = '100') {
    this.range.setAttribute('max', max);
  }

  /**
   * setStep
   * @param {number} setp
   */
  setSetp(setp = '1') {
    this.range.setAttribute('setp', setp);
  }

  /**
   * setValue
   * @param {string} value
   */
  setValue(value) {
    this.range.value = value;
    if (this.events['change']) {
      trigger.call(this, 'change', this.range.value);
    }
  }

  /**
   * getValue
   * @return {string} value
   */
  getValue() {
    return this.range.value;
  }

  /**
   * on
   * @param {string} type
   * @param {Function} handler
   */
  on(type, handler) {
    this.events[type] = handler;
  }
}

/**
 * FontSizeSettingFactory
 * @param {HtmlElement} el
 * @param {Object} config
 * @return {FontSizeSetting}
 */
export default function (el, config) {
  return new FontSizeSetting(el, config);
}