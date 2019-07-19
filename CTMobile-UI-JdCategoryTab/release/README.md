# JdCategoryTab

* [基本布局](#jdcategorytab-layout)
* [初始化](#jdcategorytab-initial)
* [例子](#jdcategorytab-demo)
* [方法](#jdcategorytab-methods)
* [事件](#jdcategorytab-events)
  - [change](#jdcategorytab-events-change)

## 基本布局

常见的布局如下：

```

<div class="ct-jdcategorytab">
  <div class="ct-jdcategorytab-menu">
    <ul>

      ...
    </ul>
  </div>
  <ul class="ct-jdcategorytab-tab">

      ...
  </ul>
</div>

```

* ct-jdcategorytab - 代表是一个JdCategoryTab组件
  - ct-jdcategorytab-menu - 代表菜单
    + li - 代表菜单项
  - ct-jdcategorytab-tab - 代表面板
    + li - 代表面板项

## 初始化

```

  import JdCategoryTab from @ctmobile/ui-jdcategorytab;
  const jdcategorytab = JdCategoryTab(el);

```

## 例子

#### html

```

<dl>
  <dt>
    <h3>基本</h3>
  </dt>
  <dd>

  </dd>
</dl>

<dl>
  <dt>
    <h3>动态添加</h3>
    <div class="toolbar">
      <div class="toolbar">
        <button id="ct-jdcategorytab-dynamic-addbtn">添加</button>
      </div>
    </div>
  </dt>
  <dd>

  </dd>
</dl>

<dl>
  <dt>
    <h3>滚动到指定位置</h3>
    <div class="toolbar">
      <div class="toolbar">
        <button id="ct-jdcategorytab-dynamic-scrolltopbtn">置顶</button>
        <button id="ct-jdcategorytab-dynamic-scrollbottombtn">置底</button>
      </div>
    </div>
  </dt>
  <dd>

  </dd>
</dl>

```

#### js

```

import $ from 'jquery';
import JdCategoryTab from '@ctmobile/ui-jdcategorytab';

function add(index) {
  return {
    menu: $(<pre><code class="html">`<li><a>菜单 ${index + 1} </a></li>`</code></pre>)[0],
    tab: $(<pre><code class="html">`<li>${index + 1}</li>`</code></pre>)[0]
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
    jdcategorytabScrollto.scrollTo(length);
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
}

```

## 方法

scrollTo( index time easing) - 滚动到指定索引处

* index-number 滚动到的索引
* time-number 滚动所需时间
* easing-Object动画类型(quadratic,circular,back,bounce,elastic)

refresh() - 刷新

on(type, handler) - 注册事件

* type-string 注册事件的类型,包括[change]
* handler-Function 注册事件的回调函数

## 事件

|  名称 |  说明 |
| --- | --- |
| change |  菜单切换 |

```

import $ from 'jquery';
import JdCategoryTab from '@ctmobile/ui-jdcategorytab';

window.onload = () => {
  const jdcategorytabBaseJO = $('#ct-jdcategorytab-base');
  const jdcategorytabBase = JdCategoryTab(jdcategorytabBaseJO[0]);
  jdcategorytabBase.on((index,target,tab) => {
    console.log(index,target,tab);
  });
}

```
