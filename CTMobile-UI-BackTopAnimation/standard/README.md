# BackTopAnimation

* [初始化](#scrollload-initial)
* [例子](#scrollload-demo)
* [方法](#scrollload-methods)
* [事件](#scrollload-events)
  - [scrollTop](#scrollload-events-scrolltop)

## 初始化

html js

```

import BackTopAnimation from '@ctmobile/ui-backtopanimation';

const listEl = document.getElementById('ct-list');
const f = document.createDocumentFragment();
for (let i = 0; i > 50; i++) {
  f.appendChild(Dom6.createElement(<pre><code class="html">'<li>CTMobileUI中的BackTopAnimation组件</li>'</code></pre>));
}
listEl.appendChild(f);

const parent = document.getElementById('ctmobile-ui-doc-demo-device');
const scrollEl = document.querySelector('.ct-list');
const BackTop = BackTopAnimation(parent, scrollEl);
BackTop.on('scrollTop', () => {
  console.log('scrollTop');
});
```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - el |  父元素 |
| {HtmlElement} - el |  滚动元素 |

## 例子

#### html

#### js

```

import BackTopAnimation from '@ctmobile/ui-backtopanimation';

const listEl = document.getElementById('ct-list');
const f = document.createDocumentFragment();
for (let i = 0; i > 50; i++) {
  f.appendChild(Dom6.createElement(<pre><code class="html">'<li>CTMobileUI中的BackTopAnimation组件</li>'</code></pre>));
}
listEl.appendChild(f);

const parent = document.getElementById('ctmobile-ui-doc-demo-device');
const scrollEl = document.querySelector('.ct-list');
const BackTop = BackTopAnimation(parent, scrollEl);
BackTop.on('scrollTop', () => {
  console.log('scrollTop');
});
```

## 方法

on( type, handler, ) - 注册事件

* type-string 事件类型
* handler-Function 事件句柄

off( type, handler, ) - 注销事件

* type-string 事件类型
* handler-Function 事件句柄

## 事件

|  名称 |  说明 |
| --- | --- |
| scrollTop |  滚动到了顶部 |
