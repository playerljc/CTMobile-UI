import CtMobile from 'ctmobile';
import Tab, { TabItem } from '@ctmobile/ui-tab-sd';
import { Dom6 } from '@ctmobile/ui-util';
import './index.less';
import config from './config.json';


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

function initDom() {
  const id = this.getId();

  this.tabInstances = [];

  const tabDom = document.getElementById(`${id}ttab-left`).content.querySelector('.ct-tab');
  const indicatorWrapDom = tabDom.querySelector('.ct-tab-indicator .swiper-wrapper');
  const contentWrapDom = tabDom.querySelector('.ct-tab-content .swiper-wrapper');

  const dfIndicator = document.createDocumentFragment();
  const dfContent = document.createDocumentFragment();
  for (const p in config) {
    const { data: { data: list } } = config[p];
    for (let i = 0; i < list.length; i++) {
      const { name, catelogyList } = list[i];
      dfIndicator.appendChild(Dom6.createElement(`
          <div class="swiper-slide">
            <span class="ct-tab-indicator-item-label">${name}</span>
          </div>
      `));
      this.tabInstances.push(new MyTabItem());

      let contentStr = `
        <div class="ct-tab-content-item swiper-slide">
          <div class="list">
            <ul>
      `;
      for (let j = 0; j < catelogyList.length; j++) {
        contentStr += `
          <li>
              <img src="${catelogyList[j].icon}"/>
              <span>${catelogyList[j].name}</span>
          </li>`;
      }
      contentStr += `
            </ul>
          </div>
        </div>
      `;

      dfContent.appendChild(Dom6.createElement(contentStr));
    }
  }
  indicatorWrapDom.appendChild(dfIndicator);
  contentWrapDom.appendChild(dfContent);
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
    console.log(this.getId(), 'pageCreate');

    initDom.call(this);


    const pageDOM = this.getPageDOM();
    const id = this.getId();
    const el = pageDOM.querySelector('.ct-content');
    const tel = document.getElementById(`${id}ttab-left`);
    const myTab = new Tab(el, tel, {
      // 指示器
      indicator: {
        position: 'left',
        type: 'dynamic',
        theme: 'normal',
        slidesPerView: 'auto',
        arrow: false,
      },
      content: {
        mode: 'mulit',
        isSwiper: true,
        direction: 'horizontal',
        tabInstances: this.tabInstances,
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
