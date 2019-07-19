# PullRefresh

* [基本布局](#pullrefresh-layout)
* [初始化](#pullrefresh-initial)
* [例子](#pullrefresh-demo)
* [方法](#pullrefresh-methods)
* [事件](#pullrefresh-events)
  - [pullStart](#pullrefresh-events-pullstart)
  - [pullRebound](#pullrefresh-events-pullrebound)
  - [pullCanRefresh](#pullrefresh-events-pullcanrefresh)
  - [pullBottom](#pullrefresh-events-pullbottom)
  - [pullRefresh](#pullrefresh-events-pullrefresh)

## 基本布局

* containerBlock - 整体容器
  - ct-pullrefresh - 下拉刷新容器
  - headerBlock - 头容器，覆盖下拉刷新容器
  - scrollBlock - 滚动容器
    + scrollInnerBlock - 滚动内容容器

## 初始化

```

import PullRefresh from '@ctmobile/ui-pullrefresh';
import '@ctmobile/ui-pullrefresh/themes/default/pullrefresh.less';
import '@ctmobile/ui-pullrefresh/pullrefresh.less';

const scrollEl = document.getElementById('content');
const scrollInnerEl = document.getElementById('list');
const pullEl = document.getElementById('ct-pullrefresh');

const pullRefresh = PullRefresh({
  scrollEl, scrollInnerEl, pullEl,
});

pullRefresh.on('pullRefresh', (ins) => {
  setTimeout(() => {
    ins.reset();
  }, 1000 * 2);
});

```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - scrollEl |  滚动元素 |
| {HtmlElement} - scrollInnerEl |  滚动元素inner |
| {HtmlElement} - pullEl |  下拉刷新元素 |
| {number} - pullHeight |  拉动高度 |
| {string} - icon |  图标html |
| {string} - label |  默认文本html |
| {string} - canLabel |  可以刷新文本html |
| {boolean} - showUpdate |  是否显示更新时间 |
| {string} - loadingAnimation |  动画html |

## 例子

#### html

```

<div id="container">

  <header id="header">pullrefreshExample</header>
  <div id="content" class="ct-list ios media-list">
    <ul id="list">
      <li>
        <div class="item-content">

          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Yellow Submarine</div>
            </div>
            <div class="item-subtitle">Beatles</div>
          </div>
        </div>
      </li>
      <li>
        <a class="item-link item-content">

          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Don't Stop Me Now</div>
            </div>
            <div class="item-subtitle">Queen</div>
          </div>
        </a>
      </li>
      <li>
        <div class="item-content">

          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Billie Jean</div>
            </div>
            <div class="item-subtitle">Michael Jackson</div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">

          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Yellow Submarine</div>
            </div>
            <div class="item-subtitle">Beatles</div>
          </div>
        </div>
      </li>
      <li>
        <a class="item-link item-content">

          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Don't Stop Me Now</div>
            </div>
            <div class="item-subtitle">Queen</div>
          </div>
        </a>
      </li>
      <li>
        <div class="item-content">

          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Billie Jean</div>
            </div>
            <div class="item-subtitle">Michael Jackson</div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">

          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Yellow Submarine</div>
            </div>
            <div class="item-subtitle">Beatles</div>
          </div>
        </div>
      </li>
      <li>
        <a class="item-link item-content">

          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Don't Stop Me Now</div>
            </div>
            <div class="item-subtitle">Queen</div>
          </div>
        </a>
      </li>
      <li>
        <div class="item-content">

          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Billie Jean</div>
            </div>
            <div class="item-subtitle">Michael Jackson</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <footer id="footer">
    <button id="pullrefresh-api-button">手动触发刷新</button>
  </footer>
</div>
```

#### js

```

import PullRefresh from '@ctmobile/ui-pullrefresh';
import '@ctmobile/ui-pullrefresh/themes/default/pullrefresh.less';
import '@ctmobile/ui-pullrefresh/pullrefresh.less';
import './index.less';

const scrollEl = document.getElementById('content');
const scrollInnerEl = document.getElementById('list');
const pullEl = document.getElementById('ct-pullrefresh');
const pullRefreshApiButton = document.getElementById('pullrefresh-api-button');

pullRefreshApiButton.addEventListener('click', () => {
  pullRefresh.refresh();
});

const pullRefresh = PullRefresh({
  scrollEl, scrollInnerEl, pullEl,
});

pullRefresh.on('pullRefresh', (ins) => {
  setTimeout(() => {
    ins.reset();
  }, 1000 * 2);
});
```

## 方法

reset - 取消下拉刷新

refresh - 手动调用下拉刷新

on( type, handler, ) - 注册事件

* type-string 事件类型
* handler-Function 事件句柄

off( type, handler, ) - 删除指定type下的时间或清除所有事件

* type-string 事件类型
* handler-Function 事件句柄

## 事件

|  名称 |  说明 |
| --- | --- |
| pullStart |  拉动开始 |
| pullRebound |  没有具备刷新条件弹回 |
| pullcanrefresh |  具备刷新条件 |
| pullBottom |  拉动到了底部 |
| pullRefresh |  刷新 |

```

import PullRefresh from '@ctmobile/ui-pullrefresh';
import '@ctmobile/ui-pullrefresh/themes/default/pullrefresh.less';
import '@ctmobile/ui-pullrefresh/pullrefresh.less';
import './index.less';

const scrollEl = document.getElementById('content');
const scrollInnerEl = document.getElementById('list');
const pullEl = document.getElementById('ct-pullrefresh');
const pullRefreshApiButton = document.getElementById('pullrefresh-api-button');

pullRefreshApiButton.addEventListener('click', () => {
  pullRefresh.refresh();
});

const pullRefresh = PullRefresh({
  scrollEl, scrollInnerEl, pullEl,
});

pullRefresh.on('pullStart',() => {console.log('pullStart')});
pullRefresh.on('pullRebound',() => {console.log('pullRebound')});
pullRefresh.on('pullCanRefresh', () => {console.log('pullCanRefresh')});
pullRefresh.on('pullBottom', () => {console.log('pullBottom')});
pullRefresh.on('pullRefresh', () => {console.log('pullRefresh')});

pullRefresh.on('pullRefresh', (ins) => {
  setTimeout(() => {
    ins.reset();
  }, 1000 * 2);
});

```
