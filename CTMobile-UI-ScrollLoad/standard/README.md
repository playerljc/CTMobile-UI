# ScrollLoad

* [基本布局](#scrollload-layout)
* [初始化](#scrollload-initial)
* [例子](#scrollload-demo)
* [方法](#scrollload-methods)
* [事件](#scrollload-events)
  - [scrollbottom](#scrollload-events-scrollbottom)
  - [emptyclick](#scrollload-events-emptyclick)
  - [errorclick](#scrollload-events-errorclick)

## 基本布局

```

<div class="ct-scrolload">
  <header>header</header>
  <div class="ct-scrolload-content">
    <ul id="listView">
      ...
    </ul>
    <div class="ct-scrolload-load standard">数据加载中</div>
    <div class="ct-scrolload-empty">~没有更多</div>
    <div class="ct-scrolload-error">出现错误</div>
  </div>
  <footer>footer</footer>
</div>

```

* ct-scrolload - 整体容器
  - 头元素(header) - 用来遮罩下拉刷新
  - ct-scrolload-content - 可滚动容器
    + 任意一个元素(listView) - 用来显示滚动数据
    + ct-scrolload-load - 加载tip
    + ct-scrolload-empty - 没有数据的tip
    + ct-scrolload-error - 错误tip
  - 底部元素(footer)

## 初始化

```

import ScrollLoad, { CONSTANT } from '@ctmobile/ui-scrollload';
import '@ctmobile/ui-scrollload/lib/themes/default/scrollload.less';
import '@ctmobile/ui-scrollload/lib/scrollload.less';

function appendData() {
  const df = document.createDocumentFragment();

  for (let i = 0; i < 30; i++) {
    df.appendChild($(<pre><code class="html">'<li>CTMobileUI移动框架中的ScrollLoad组件</li>'</code></pre>)[0]);
  }

  listViewEl.appendChild(df);
}

const listViewEl = $('#listView')[0];
let count = 0;

appendData();

const scrollLoad = ScrollLoad(document.getElementById('container'));

scrollLoad.on('scrollbottom', (config) => {
  if (count === 3) {
    config.done(CONSTANT.EMPTY);
  } else {
    setTimeout(() => {
      appendData();
      config.done(CONSTANT.NORMAL);
      count++;
    }, 1000 * 3);
  }
});

scrollLoad.on('emptyclick', () => {
  console.log('emptyclick');
});

scrollLoad.on('errorclick', () => {
  console.log('errorclick');
});

```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - el |  整体元素 |
| {object} - config |

配置

distance {number} - 属性允许配置距页面底部（以px为单位）的距离以触发无限滚动事件。默认情况下，如果未指定，则为50（px）  |

## 例子

#### html

```

  <div class="ct-scrolload" id="container">
    <header>ScrollLoad</header>
    <div class="ct-scrolload-content" id="content">

      <div class="ct-scrolload-load standard">数据加载中</div>
      <div class="ct-scrolload-empty">~没有更多</div>
      <div class="ct-scrolload-error">出现错误</div>
    </div>
    <footer></footer>
  </div>
```

#### js

```

import ScrollLoad, { CONSTANT } from '@ctmobile/ui-scrollload';
import '@ctmobile/ui-scrollload/lib/themes/default/scrollload.less';
import '@ctmobile/ui-scrollload/lib/scrollload.less';

function appendData() {
  const df = document.createDocumentFragment();

  for (let i = 0; i < 30; i++) {
    df.appendChild($(<pre><code class="html">'<li>CTMobileUI移动框架中的ScrollLoad组件</li>'</code></pre>)[0]);
  }

  listViewEl.appendChild(df);
}

const listViewEl = $('#listView')[0];
let count = 0;

appendData();

const scrollLoad = ScrollLoad(document.getElementById('container'));

scrollLoad.on('scrollbottom', (config) => {
  if (count === 3) {
    config.done(CONSTANT.EMPTY);
  } else {
    setTimeout(() => {
      appendData();
      config.done(CONSTANT.NORMAL);
      count++;
    }, 1000 * 3);
  }
});

scrollLoad.on('emptyclick', () => {
  console.log('emptyclick');
});

scrollLoad.on('errorclick', () => {
  console.log('errorclick');
});
```

## 方法

getLoadEl - 获取.ct-scrolload-load元素

getEmptyEl - 获取.ct-scrolload-empty元素

getErrorEl - 获取.ct-scrolload-error元素

hideAll - 隐藏所有.ct-scrolload-元素

on( type, handler, ) - 注册事件

* type-string 事件类型
* handler-Function 事件句柄

off( type, handler, ) - 注销事件

* type-string 事件类型
* handler-Function 事件句柄

## 事件

|  名称 |  说明 |
| --- | --- |
| scrollbottom |  滚动到了底部 |
| emptyclick |  点击了没有数据 |
| errorclick |  点击了错误 |

```

import ScrollLoad, { CONSTANT } from '@ctmobile/ui-scrollload';
import '@ctmobile/ui-scrollload/themes/default/scrollload.less';
import '@ctmobile/ui-scrollload/scrollload.less';

function appendData() {
  const df = document.createDocumentFragment();

  for (let i = 0; i < 30; i++) {
    df.appendChild($(<pre><code class="html">'<li>CTMobileUI移动框架中的ScrollLoad组件</li>'</code></pre>)[0]);
  }

  listViewEl.appendChild(df);
}

const listViewEl = $('#listView')[0];
let count = 0;

appendData();

const scrollLoad = ScrollLoad(document.getElementById('container'));

scrollLoad.on('scrollbottom', (config) => {
  if (count === 3) {
    config.done(CONSTANT.EMPTY);
  } else {
    setTimeout(() => {
      appendData();
      config.done(CONSTANT.NORMAL);
      count++;
    }, 1000 * 3);
  }
});

scrollLoad.on('emptyclick', () => {
  console.log('emptyclick');
});

scrollLoad.on('errorclick', () => {
  console.log('errorclick');
});

```
