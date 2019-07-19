# KwList

* [布局](#kwlist-layout)
* [初始化](#kwlist-initial)
* [例子](#kwlist-demo)
* [方法](#kwlist-methods)
* [事件](#kwlist-events)
  - [show](#kwlist-events-show)
  - [hide](#kwlist-events-hide)

## 布局

```

    <ul class="ct-list-kw">
      <li class="ct-list-kw-item-content">

        <div class="ct-list-kw-item-buttons">
          <i class="fa fa-...">...</i>
        </div>
      </li>
      ...
    </ul>

```

* ct-list-kw - 代表是一个kwlist组件 ct-list-kw-item-content - 代表一项
    + ct-list-kw-item-info - 一项的详细 ct-list-kw-item-link - 一项的主体部分 ct-list-kw-item-option - 展开的收起的操作按钮
    + ct-list-kw-item-buttons - 工具栏 fa fa-xxx - 工具项

## 初始化

```

  import KwList from @ctmobile/ui-kwlist;
  const kwlist = KwList(el);

```

## 例子

#### html

```

  <div>
    <button id="openIndexBtn">打开第一项</button>
    <button id="closeIndexBtn">关闭第一项</button>
    <button id="addBtn">添加</button>
  </div>
  <div class="ct-list ios media-list">
    <ul class="ct-list-kw" id="ct-list-kw">
      <li class="ct-list-kw-item-content">
        <div class="ct-list-kw-item-info">
          <div class="ct-list-kw-item-link">
            <a href="#" class="item-link item-content">

              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Yellow Submarine</div>
                  <div class="item-after">$15</div>
                </div>
                <div class="item-subtitle">Beatles</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.
                </div>
              </div>
            </a>
          </div>

        </div>
        <div class="ct-list-kw-item-buttons">
          <i class="fa fa-address-book">编辑1</i>
          <i class="fa fa-address-book">编辑2</i>
          <i class="fa fa-address-book">编辑3</i>
          <i class="fa fa-address-book">编辑4</i>
        </div>
      </li>

      <li class="ct-list-kw-item-content">
        <div class="ct-list-kw-item-info">
          <div class="ct-list-kw-item-link">
            <a href="#" class="item-link item-content">

              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Don't Stop Me Now</div>
                  <div class="item-after">$22</div>
                </div>
                <div class="item-subtitle">Queen</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.
                </div>
              </div>
            </a>
          </div>

        </div>
        <div class="ct-list-kw-item-buttons">
          <i class="fa fa-address-book">编辑1</i>
          <i class="fa fa-address-book">编辑2</i>
          <i class="fa fa-address-book">编辑3</i>
          <i class="fa fa-address-book">编辑4</i>
        </div>
      </li>

      <li class="ct-list-kw-item-content">
        <div class="ct-list-kw-item-info">
          <div class="ct-list-kw-item-link">
            <a href="#" class="item-link item-content">

              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Billie Jean</div>
                  <div class="item-after">$16</div>
                </div>
                <div class="item-subtitle">Michael Jackson</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.
                </div>
              </div>
            </a>
          </div>

        </div>
        <div class="ct-list-kw-item-buttons">
          <i class="fa fa-address-book">编辑1</i>
          <i class="fa fa-address-book">编辑2</i>
          <i class="fa fa-address-book">编辑3</i>
          <i class="fa fa-address-book">编辑4</i>
        </div>
      </li>
    </ul>
  </div>

```

#### js

```

import KwList from '@ctmobile/ui-kwlist';
import $ from 'jquery';

document.getElementById('openIndexBtn').addEventListener('click',() => {
  kwlist.expand(0);
});

document.getElementById('closeIndexBtn').addEventListener('click',() => {
  kwlist.close(0);
});

document.getElementById('addBtn').addEventListener('click',() => {
  const ctlistkwEl = document.querySelector('.ct-list-kw');
  ctlistkwEl.appendChild($(
    <pre>
      <code class="html">
        `
    <li class="ct-list-kw-item-content">
      <div class="ct-list-kw-item-info">
        <div class="ct-list-kw-item-link">
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Yellow Submarine</div>
                <div class="item-after">$15</div>
              </div>
              <div class="item-subtitle">Beatles</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                vel dui laoreet, commodo augue id, pulvinar lacus.
              </div>
            </div>
          </a>
        </div>

      </div>
      <div class="ct-list-kw-item-buttons">
        <i class="fa fa-address-book">编辑1</i>
        <i class="fa fa-address-book">编辑2</i>
        <i class="fa fa-address-book">编辑3</i>
        <i class="fa fa-address-book">编辑4</i>
      </div>
    </li>
    `
      </code>
    </pre>
  )[0]);
  kwlist.refresh();
});

const kwlist = KwList(document.querySelector('.ct-list-kw'));
kwlist.on('show',() => {

});
kwlist.on('hide',() => {

});

```

## 方法

refresh() - 刷新整个KwList

on(type, handler) - 注册事件

* type-string 注册事件的类型,包括[show,hide]
* handler-Function 注册事件的回调函数

expand(index) - 展开一项

* index-number 打开项的索引

close(index) - 关闭一项

* index-number 关闭项的索引

## 事件

|  名称 |  说明 |
| --- | --- |
| show |  一项展开触发 |
| hide |  一项关闭触发 |

```

  import KwList from '@ctmobile/ui-kwlist';
  const kwlist = KwList(document.querySelector('.ct-list-kw'));
  kwlist.on('show',(contentEl,index) => {
    console.log(contentEl,index);
  });
  kwlist.on('hide',(contentEl,index) => {
    console.log(contentEl,index);
  });

```