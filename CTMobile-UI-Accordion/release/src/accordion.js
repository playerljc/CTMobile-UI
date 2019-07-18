import $ from 'jquery';

/**
 * init
 * @access private
 */
function init() {
  const self = this;

  // initMask
  this.$mask = $('<div class="ct-accordion-radius-mask"></div>');
  window.document.body.appendChild(this.$mask[0]);

  // initClickEvent
  this.$el.on('click', 'dt', function () {
    onElClick.call(self, this);
  });

  // defaultCollapse
  this.$el.find('[data-collapse="collapse"]').each(function () {
    self.collapse(this, true, true);
  });
}

/**
 * trigger
 * @access private
 */
function trigger() {
  const type = arguments[0];
  const params = Array.prototype.slice.call(arguments, 1);
  if (this.events[type]) {
    this.events[type].apply(this, params);
  }
}

/**
 * onElClick
 * @access private
 * @param {HtmlElement} rowDom
 */
function onElClick(rowDom) {
  if (rowDom.dataset.collapse === 'collapse') {
    // close
    this.collapse(rowDom, false);
  } else {
    // open
    this.collapse(rowDom, true);
  }
}

/**
 * Accordion
 * @class Accordion
 * @classdesc Accordion
 */
class Accordion {
  constructor(el) {
    this.el = el;
    this.$el = $(this.el);
    this.events = {};
    init.call(this);
  }

  /**
   * 打开或折叠
   * @param {HtmlElement} rowDom
   * @param {boolean} collapse
   * @param {boolean} isDefault 是否是默认
   */
  collapse(rowDom, collapse, isDefault) {
    /**
     * openAfter
     * @access private
     */
    function openAfter() {
      rowDom.dataset.collapse = 'collapse';
      self.$mask.hide();
      trigger.apply(self, ['aftershow', rowDom]);
    }

    /**
     * closeAfter
     * @access private
     */
    function closeAfter() {
      $dd.removeClass('activityDD');
      rowDom.dataset.collapse = '';
      self.$mask.hide();
      trigger.apply(self, ['afterhide', rowDom]);
    }

    const self = this;

    if (collapse) {
      if (!isDefault && rowDom.dataset.collapse === 'collapse') return;
    } else if (!isDefault && (!rowDom.dataset.collapse || rowDom.dataset.collapse === '')) return;

    const $rowDom = $(rowDom);
    const $dd = $rowDom.next();
    this.$mask.show();


    // 打开
    if (collapse) {
      trigger.apply(self, ['beforeshow', rowDom]);
      $rowDom.addClass('activity');
      $dd.addClass('activityDD').show();
      if (self.$el.hasClass('ct-accordion-classic')) {
        $rowDom.addClass('activityDT');
      }

      $dd[0].style.height = 'auto';
      const targetHeight = window.getComputedStyle($dd[0]).height;

      if (isDefault) {
        setTimeout(() => {
          $dd[0].style.height = targetHeight;
          openAfter();
        }, 15);
      } else {
        $dd[0].style.height = '1px';
        setTimeout(() => {
          $dd.off('transitionend').one('transitionend', () => {
            openAfter();
          });
          $dd[0].style.height = targetHeight;
        }, 15);
      }
    } else {
      // 关闭
      trigger.apply(self, ['beforehide', rowDom]);
      $rowDom.removeClass('activity');

      $dd[0].style.height = '0';
      if (self.$el.hasClass('ct-accordion-classic')) {
        $rowDom.removeClass('activityDT');
      }
      if (isDefault) {
        closeAfter();
      } else {
        $dd.off('transitionend').one('transitionend', () => {
          closeAfter();
        });
      }
    }
  }

  /**
   * show 打开
   * @param dtDom
   */
  show(dtDom) {
    this.collapse(dtDom, true, true);
  }

  /**
   * close 关闭
   * @param dtDom
   */
  close(dtDom) {
    this.collapse(dtDom, false, true);
  }

  /**
   * 显示所有
   */
  showAll() {
    const self = this;
    this.$el.find('dt').each(function () {
      self.collapse(this, true);
    });
  }

  /**
   * 全部关闭
   */
  closeAll() {
    const self = this;
    self.$el.find('dt').each(function () {
      self.collapse(this, false);
    });
  }

  /**
   * 刷新
   */
  refresh() {
    const self = this;
    this.$el.find('dt').each(function () {
      if (this.dataset.collapse === 'collapse') {
        self.collapse(this, true, true);
      } else {
        self.collapse(this, false, true);
      }
    });
  }

  /**
   * 注册事件
   * @param {string} type
   * @param {Function} handler
   */
  on(type, handler) {
    this.events[type] = handler;
  }
}

/**
 * AccordionFactory
 * @param {HtmlElement} el
 * @return {Accordion}
 */
export default function (el) {
  return new Accordion(el);
}
