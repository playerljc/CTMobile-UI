import CtMobile from 'ctmobile';
import Tab, { TabItem } from '@ctmobile/ui-tab/tab';
import '@ctmobile/ui-tab/tab.less';
import './index.less';

class MyTabItem extends TabItem {
  constructor(index) {
    super(index);
  }

  create() {
    console.log(this.index, 'create');
  }

  show() {
    console.log(this.index, 'show');
  }

  beforeHide() {
    console.log(this.index, 'beforeHide');
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
    const tel = document.getElementById(`${id}ttab-tabBar`);
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
        isSwiper: true,
        direction: 'horizontal',
        tabInstances: [
          new MyTabItem(),
          new MyTabItem(),
          new MyTabItem(),
          new MyTabItem(),
          new MyTabItem(),
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
