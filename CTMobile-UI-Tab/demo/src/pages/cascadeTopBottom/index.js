import CtMobile from 'ctmobile';
import Tab, { TabItem } from '@ctmobile/ui-tab-sd';
import './index.less';

class TabBarTabItem extends TabItem {
  constructor(id) {
    super();
    this.id = id;
  }

  create() {
    const pageDOM = this.el;
    const tel = document.getElementById(`${this.id}ttab-cascadeTopBottomDynamic`);
    const myTab = new Tab(pageDOM, tel, {
      // 指示器
      indicator: {
        position: 'top',
        type: 'dynamic',
        theme: 'normal',
        slidesPerView: 3,
        arrow: false,
      },
      content: {
        mode: 'mulit',
        isSwiper: true,
        direction: 'horizontal',
        tabInstances: [
          new TopBarTabItem(),
          new TopBarTabItem(),
          new TopBarTabItem(),
          new TopBarTabItem(),
          new TopBarTabItem(),
          new TopBarTabItem(),
          new TopBarTabItem(),
          new TopBarTabItem(),
          new TopBarTabItem(),
          new TopBarTabItem(),
        ],
      },
      initialSlide: 0,
    });
    console.log('TabBarTabItem', this.index, 'create ');
  }

  show() {
    console.log('TabBarTabItem', this.index, 'show');
  }

  beforeHide() {
    console.log('TabBarTabItem', this.index, 'beforeHide');
  }
}

class TopBarTabItem extends TabItem {
  create() {
    console.log('TopBarTabItem', this.index, 'create');
  }

  show() {
    console.log('TopBarTabItem', this.index, 'show');
  }

  beforeHide() {
    console.log('TopBarTabItem', this.index, 'beforeHide');
  }
}

export default class extends CtMobile.Page {
  constructor(ctmobile, id) {
    super(ctmobile, id);
  }

  /**
   * 页面创建调用
   * @callback
   * @override
   * @param {Object} e
   */
  pageCreate(e) {
    const pageDOM = this.getPageDOM();
    const id = this.getId();
    const el = pageDOM.querySelector('.ct-content');
    const tel = document.getElementById(`${id}ttab-cascadeTopBottom`);
    const myTab = new Tab(el, tel, {
      // 指示器
      indicator: {
        position: 'bottom',
        type: 'average',
        theme: 'normal',
        slidesPerView: 3,
        arrow: false,
      },
      content: {
        mode: 'mulit',
        isSwiper: false,
        direction: 'horizontal',
        tabInstances: [
          new TabBarTabItem(id),
          new TabBarTabItem(id),
          new TabBarTabItem(id),
          new TabBarTabItem(id),
          new TabBarTabItem(id),
        ],
      },
      initialSlide: 0,
    });
  }

  /** *
   * 页面显示之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforeShow(e) {
    console.log(this.getId(), 'pageBeforeShow');
  }

  /** *
   * 页面显示
   * @callback
   * @override
   * @param {Object} e
   */
  pageShow(e) {
    console.log(this.getId(), 'pageShow');
  }

  /** *
   *  页面显示之后
   * @callback
   * @override
   * @param {Object} e
   */
  pageAfterShow(e) {
    console.log(this.getId(), 'pageAfterShow');
  }

  /** *
   * 页面暂停之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforePause(e) {
    console.log(this.getId(), 'pageBeforePause');
  }

  /** *
   * 页面暂停之后
   * @callback
   * @override
   * @param {Object} e
   */
  pageAfterPause(e) {
    console.log(this.getId(), 'pageAfterPause');
  }

  /** *
   * 页面恢复之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforeRestore(e) {
    console.log(this.getId(), 'pageBeforeRestore');
  }

  /** *
   * 页面恢复
   * @callback
   * @override
   * @param {Object} e
   */
  pageRestore(e) {
    console.log(this.getId(), 'pageRestore');
  }

  /** *
   * 页面恢复之后
   * @callback
   * @override
   * @param {Object} e
   */
  pageAfterRestore(e) {
    console.log(this.getId(), 'pageAfterRestore');
  }

  /** *
   * 页面DOM销毁之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforeDestroy(e) {
    console.log(this.getId(), 'pageBeforeDestroy');
  }
}
