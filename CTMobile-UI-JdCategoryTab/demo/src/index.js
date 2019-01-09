import $ from 'jquery';
import JdCategoryTab from '@ctmobile/ui-jdcategorytab';
import DemoUtil from '@ctmobile/ui-demo-util';
import 'normalize.less';
import './index.less';
// import '@ctmobile/ui-jdcategorytab/jdcategorytab.less';
// import '@ctmobile/ui-jdcategorytab/themes/default/jdcategorytab.less';

function add(index) {
  return {
    menu: $(`<li><a>菜单 ${index + 1} </a></li>`)[0],
    tab: $(`<li>${index + 1}</li>`)[0]
  }
}

function initMenuAndTab(jdel) {
  const df1 = document.createDocumentFragment();
  const df2 = document.createDocumentFragment();
  for (let count = 0; count < 100; count++) {
    const objs = add(count);
    df1.appendChild(objs.menu);
    df2.appendChild(objs.tab);
  }
  jdel.find('.ct-jdcategorytab-menu > ul')[0].appendChild(df1);
  jdel.find('.ct-jdcategorytab-tab')[0].appendChild(df2);
}

DemoUtil.initial();

window.onload = () => {

  // 添加
  $('#ct-jdcategorytab-dynamic-addbtn').on('click', () => {
    let length = jdcategorytabDynamicJO.find(' > .ct-jdcategorytab-menu > ul > li').length;
    const objs = add(length);
    jdcategorytabDynamicJO.find(' > .ct-jdcategorytab-menu > ul').append(objs.menu);
    jdcategorytabDynamicJO.find(' > .ct-jdcategorytab-tab').append(objs.tab);
    jdcategorytabDynamic.refresh();
    jdcategorytabDynamic.scrollTo(length);
  });

  // 置顶
  $('#ct-jdcategorytab-dynamic-scrolltopbtn').on('click', () => {
    jdcategorytabScrollto.scrollTo(0);
  });

  // 置底
  $('#ct-jdcategorytab-dynamic-scrollbottombtn').on('click', () => {
    let length = jdcategorytabScrolltoJO.find(' > .ct-jdcategorytab-menu > ul > li').length;
    jdcategorytabScrollto.scrollTo(length - 1);
  });

  const jdcategorytabBaseJO = $('#ct-jdcategorytab-base');
  const jdcategorytabDynamicJO = $('#ct-jdcategorytab-dynamic');
  const jdcategorytabScrolltoJO = $('#ct-jdcategorytab-scrollto');

  initMenuAndTab(jdcategorytabBaseJO);
  initMenuAndTab(jdcategorytabDynamicJO);
  initMenuAndTab(jdcategorytabScrolltoJO);

  const jdcategorytabBase = JdCategoryTab(jdcategorytabBaseJO[0]);
  const jdcategorytabDynamic = JdCategoryTab(jdcategorytabDynamicJO[0]);
  const jdcategorytabScrollto = JdCategoryTab(jdcategorytabScrolltoJO[0]);
};

