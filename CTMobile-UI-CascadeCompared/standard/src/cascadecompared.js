import $ from 'jquery';
import IScroll from 'iscroll/build/iscroll-probe';
import StickupLayout from '@ctmobile/ui-stickuplayout';

/** *
 * 选择器
 */
const SELECTORS = {
  column: '.ct-cascadecompared-indicator > .ct-cascadecompared-autoWrap > .ct-cascadecompared-item > .ct-cascadecompared-cell',
  indicatorFixedWrap: '.ct-cascadecompared-indicator > .ct-cascadecompared-fixedWrap',
  indicatorAutoWrap: '.ct-cascadecompared-indicator > .ct-cascadecompared-autoWrap',
  masterFixedWrap: '.ct-cascadecompared-master > .ct-cascadecompared-master-inner > .ct-stickuplayout-inner > .ct-stickuplayout-item > .ct-stickuplayout-item-content > .ct-cascadecompared-fixedWrap',
  masterAutoWrap: '.ct-cascadecompared-master > .ct-cascadecompared-master-inner > .ct-stickuplayout-inner > .ct-stickuplayout-item > .ct-stickuplayout-item-content > .ct-cascadecompared-autoWrap',
  indicatorFirstCell: '.ct-cascadecompared-indicator > .ct-cascadecompared-fixedWrap > .ct-cascadecompared-item > .ct-cascadecompared-cell',
  indicatorCellOfType: index => (`.ct-cascadecompared-indicator > .ct-cascadecompared-autoWrap > .ct-cascadecompared-item > .ct-cascadecompared-cell:nth-of-type(${index})`),
  masterCellOfType: index => (`.ct-cascadecompared-master > .ct-cascadecompared-master-inner > .ct-stickuplayout-inner > .ct-stickuplayout-item > .ct-stickuplayout-item-content > .ct-cascadecompared-autoWrap .ct-cascadecompared-item > .ct-cascadecompared-cell:nth-of-type(${index})`),

  row: '.ct-cascadecompared-master > .ct-cascadecompared-master-inner > .ct-stickuplayout-inner > .ct-stickuplayout-item > .ct-stickuplayout-item-content > .ct-cascadecompared-fixedWrap > .ct-cascadecompared-item',
  indicator: 'ct-cascadecompared-indicator',
  masterFixedWrapRow: '.ct-cascadecompared-master > .ct-cascadecompared-master-inner > .ct-stickuplayout-inner > .ct-stickuplayout-item > .ct-stickuplayout-item-content > .ct-cascadecompared-fixedWrap > .ct-cascadecompared-item',
  masterAutoWrapRow: '.ct-cascadecompared-master > .ct-cascadecompared-master-inner > .ct-stickuplayout-inner > .ct-stickuplayout-item > .ct-stickuplayout-item-content > .ct-cascadecompared-autoWrap > .ct-cascadecompared-autoInner > .ct-cascadecompared-item',
};

/**
 * isAuto
 * @access private
 */
function isAuto(value) {
  return !value || value === 'undefined' || value === null || value === '' || value === 'auto';
}

/**
 * initScroll
 * @access private
 */
function initScroll() {
  const self = this;

  this.wrapEls = this.el.querySelectorAll('.ct-cascadecompared-autoWrap');

  for (let i = 0; i < this.scrolls.length; i++) {
    this.scrolls[i].destroy();
  }

  this.scrolls = [];

  for (let i = 0; i < this.wrapEls.length; i++) {
    const scroll = new IScroll(this.wrapEls[i], {
      probeType: 3,
      eventPassthrough: true,
      scrollX: true,
      scrollY: false,
      preventDefault: false,
    });
    this.scrolls.push(scroll);

    scroll.on('scroll', function () {
      for (let j = 0; j < self.scrolls.length; j++) {
        if (self.scrolls[j] !== this) {
          self.scrolls[j].scrollTo(this.x, this.y);
        }
      }
    });

    scroll.on('scrollEnd', () => {
      if (self.stickup.events.scrollEnd) {
        self.stickup.events.scrollEnd();
      }
    });
  }
}

/**
 * position 初始化
 * @access private
 */
function initial() {
  this.scrolls = [];
  // 初始化stickup
  initDimension.call(this);
  this.stickup = StickupLayout(this.el);
  initScroll.call(this);
}

/**
 * 计算尺寸
 * @access private
 */
function initDimension() {
  const { columnsWidth = [], rowsHeight = [] } = this.config;

  // 获取有多少列
  const columnCellLength = this.el.querySelectorAll(SELECTORS.column).length;

  // 设置列的宽度
  for (let i = 0; i < columnCellLength + 1; i++) {
    let value;
    if (i === 0) {
      // 第一列
      if (isAuto(columnsWidth[0])) {
        // 自动宽度,宽度需要计算
        // value = computeAutoMaxValue.call(this, [SELECTORS.indicatorFirstCell, SELECTORS.masterFixedWrap], 'height');
      } else {
        // 设置列值
        value = columnsWidth[0];
      }
      this.$el.find(SELECTORS.indicatorFixedWrap).css('width', `${parseInt(value)}px`);
      this.$el.find(SELECTORS.indicatorAutoWrap).css('margin-left', `${parseInt(value)}px`);
      this.$el.find(SELECTORS.masterFixedWrap).css('width', `${parseInt(value)}px`);
      this.$el.find(SELECTORS.masterAutoWrap).css('margin-left', `${parseInt(value)}px`);
    } else {
      // 其他列
      if (isAuto(columnsWidth[i])) {
        // 自动宽度，宽度需要计算
        // value = computeAutoMaxValue();
      } else {
        // 设置列值
        value = columnsWidth[i];
      }
      this.$el.find(SELECTORS.indicatorCellOfType(i)).css('width', `${parseInt(value)}px`);
      this.$el.find(SELECTORS.masterCellOfType(i)).css('width', `${parseInt(value)}px`);
    }
  }

  // 获取有多少行
  const rowLength = this.$el.find(SELECTORS.row).length;
  // 设置行的高度
  for (let i = 0; i < rowLength + 1; i++) {
    let value;
    if (i === 0) {
      // 第一行
      if (isAuto(rowsHeight[0])) {
        // 自动高度,高度需要计算
        // value = computeAutoMaxValue();
      } else {
        // 设置了行值
        value = rowsHeight[0];
      }
      this.$el.find(SELECTORS.indicator).css('height', `${parseInt(value)}px`);
    } else {
      if (isAuto(rowsHeight[i])) {
        // 自动高度,高度需要计算
        // value = computeAutoMaxValue();
      } else {
        // 其他行
        value = rowsHeight[i];
      }
      this.$el.find(SELECTORS.masterFixedWrapRow).eq(i - 1).css('height', `${value}px`);
      this.$el.find(SELECTORS.masterAutoWrapRow).eq(i - 1).css('height', `${value}px`);
    }
  }
}

/**
 * CascadeCompared
 * @class CascadeCompared
 * @classdesc CascadeCompared
 */
class CascadeCompared {
  /**
   * constructor
   * @param {HTMLElement} el
   * @param {Object} config {
   *   columnsWidth: [] 所有列的宽度 从头开始 如果自动设置为auto 否则是number数字 如果没有设置则是auto
   *   rowsHeight: [] 所有行的高度 从头开始 如果自动设置为auto 否则是number数字 如果没有设置则是auto
   * }
   */
  constructor(el, config) {
    this.el = el;
    this.$el = $(this.el);
    this.config = JSON.parse(JSON.stringify(config));
    initial.call(this);
  }

  /**
   * scrollToByIndex
   * @param {number} index
   * @param {number} duration
   * @return {boolean}
   */
  scrollToByIndex(index, duration = 300) {
    this.stickup.scrollToByIndex(index, duration);
  }

  /**
   * scrollToByHeaderEl
   * @param {HtmlElement} headerEl
   * @param {number} duration
   * @return {boolean}
   */
  scrollToByHeaderEl(headerEl, duration = 300) {
    this.stickup.scrollToByHeaderEl(headerEl, duration);
  }

  /**
   * scrollToByColumn
   * @param {number} columnIndex
   */
  scrollToByColumn(columnIndex) {
    const scroll = this.scrolls[0];
    scroll.scrollToElement($(scroll.wrapper).find(`.ct-cascadecompared-item .ct-cascadecompared-cell:nth-of-type(${columnIndex})`)[0]);
  }

  /**
   * 刷新
   */
  refresh() {
    initDimension.call(this);
    initScroll.call(this);
    this.stickup.refresh();
  }

  /**
   * 注册事件
   * @param {string} type 事件类型
   * @param {Function} handler 事件处理函数
   */
  on(type, handler) {
    this.stickup.on(type, handler);
  }
}

/**
 * CascadeComparedFactory
 * @param {HtmlElement} el
 * @param {Object} config
 * @return {CascadeCompared}
 */
export default function (el, config = {}) {
  return new CascadeCompared(el, config);
}
