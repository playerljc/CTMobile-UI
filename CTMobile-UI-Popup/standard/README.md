# Popup

* [基本布局](#popup-layout)
* [初始化](#popup-initial)
  - [API方式](#popup-initial-api)
  - [配置方式](#popup-initial-config)
* [例子](#popup-demo)
* [方法](#popup-methods)
* [事件](#popup-events)
  -
  - 事件类型
    + [create](#popup-events-create)
    + [afterclose](#popup-events-afterclose)
    + [aftershow](#popup-events-aftershow)
    + [beforeshow](#popup-events-beforeshow)
    + [beforeclose](#popup-events-beforeclose)
    + [distory](#popup-events-distory)
    + [ct-popup-event-create](#popup-events-ct-popup-event-create)
    + [ct-popup-event-afterclose](#popup-events-ct-popup-event-afterclose)
    + [ct-popup-event-aftershow](#popup-events-ct-popup-event-aftershow)
    + [ct-popup-event-beforeshow](#popup-events-ct-popup-event-beforeshow)
    + [ct-popup-event-beforeclose](#popup-events-ct-popup-event-beforeclose)
    + [ct-popup-event-distory](#popup-events-ct-popup-event-distory)

## 基本布局

```

<template id="popup">
  <div class="ct-popup">
    ...
  </div>
</template>

```

## 初始化

API方式 html

```

<template id="popup1">
  <div class="ct-popup">
    <button class="openPopup">openPopup2</button>
    <button class="closePopup">closePopup</button>
    <p>popup1</p>
  </div>
</template>

<template id="popup2">
  <div class="ct-popup">
    <button class="closePopup">closePopup</button>
    <p>popup2</p>
  </div>
</template>

<button id="openPopup1">openPopup1</button>

```

js

```

import Popup from '@ctmobile/ui-popup/popup';
import '@ctmobile/ui-popup/popup.less';

let popup1 = Popup.create(
  document.getElementById('popup1'),
  {
    listeners: {
      create: (el) => {
        el.querySelector('.openPopup2').addEventListener('click', () => {
          Popup.close(popup2);
        });

        el.querySelector('.closePopup').addEventListener('click', () => {
          Popup.close(popup1);
        });
      }
    }
  }
});

let popup2 = Popup.create(
  document.getElementById('popup2'),
  {
    listeners: {
      create: (el) => {
        el.querySelector('.closePopup').addEventListener('click', () => {
          Popup.close(popup2);
        });
      }
    }
  }
);

document.getElementById('openPopup1').addEventListener('click', (e) => {
  if(popup1.isDestory()) {
    popup1 = Popup.create(
      document.getElementById('popup1'),
      {
        listeners: {
          create: (el) => {
            el.querySelector('.openPopup2').addEventListener('click', () => {
              Popup.close(popup2);
            });

            el.querySelector('.closePopup').addEventListener('click', () => {
              Popup.close(popup1);
            });
          }
        }
      }
    });
  }
  Popup.show(popup1);
});

```

<dl>
  <dt>配置方式</dt>
  <dd>
    <div>
      <div>html</div>
      <div>
        <pre>
          <code>
<template>
<div>
  <a>openPopup2</a>
  <a>closePopup</a>
  <p>popup1</p>
</div>
</template>

<template>
<div>
  <a>closePopup</a>
  <p>popup2</p>
</div>
</template>

<a>openPopup1</a>
          </code>
        </pre>
      </div>
    </div>
    <div>
      <div>js</div>
      <div>
        <pre>
          <code>
import Popup from &apos;@ctmobile/ui-popup/popup&apos;;
import &apos;@ctmobile/ui-popup/popup.less&apos;;

document.body.addEventListener(&apos;ct-popup-event-create&apos;, (el) =&gt; {
console.log(el);
});

document.body.addEventListener(&apos;ct-popup-event-beforeshow&apos;, (el) =&gt; {
console.log(el);
});

document.body.addEventListener(&apos;ct-popup-event-aftershow&apos;, (el) =&gt; {
console.log(el);
});

document.body.addEventListener(&apos;ct-popup-event-beforeclose&apos;, (el) =&gt; {
console.log(el);
});

document.body.addEventListener(&apos;ct-popup-event-afterclose&apos;, (el) =&gt; {
console.log(el);
});

document.body.addEventListener(&apos;ct-popup-event-distory&apos;, (el) =&gt; {
console.log(el);
});
          </code>
        </pre>
      </div>
    </div>
  </dd>
</dl>

## 例子

#### html

```

<!--demo-config-popup1-->
<template id="demo-config-popup1">
<div class="ct-popup">
  <div class="demo-popup">
    <div class="demo-popup-header">
      <a class="demo-popup-header-left" data-popup="demo-config-popup2">Open Popup2</a>
      <div class="demo-popup-header-title">Popup1 Title</div>
      <a data-close class="demo-popup-header-right">Close</a>
    </div>
    <div class="demo-popup-content">
      <div class="block">
        <p class>Here comes popup. You can put here anything, even independent view with its own
          navigation.
          Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is
          fullscreen.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu
          bibendum
          neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus
          faucibus,
          viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl
          semper
          tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare
          consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed
          libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse
          a
          faucibus lectus.</p>
        <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem
          semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus
          libero,
          auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor
          ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum.
          Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis
          faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.</p>
      </div>
    </div>
  </div>
</div>
</template>

<!--demo-config-popup2-->
<template id="demo-config-popup2">
<div class="ct-popup">
  <div class="demo-popup">
    <div class="demo-popup-header">

      <div class="demo-popup-header-title">Popup2 Title</div>
      <a data-close class="demo-popup-header-right">Close</a>
    </div>
    <div class="demo-popup-content">
      <div class="block">
        <p class>Here comes popup. You can put here anything, even independent view with its own
          navigation.
          Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is
          fullscreen.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu
          bibendum
          neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus
          faucibus,
          viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl
          semper
          tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare
          consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed
          libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse
          a
          faucibus lectus.</p>
        <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem
          semper
          pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero,
          auctor
          vel
          tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper
          erat,
          at
          vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem,
          suscipit
          in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc
          eros,
          convallis blandit dui sit amet, gravida adipiscing libero.</p>
      </div>
    </div>
  </div>
</div>
</template>

<!--demo-api-popup1-->
<template id="demo-api-popup1">
<div class="ct-popup">
  <div class="demo-popup">
    <div class="demo-popup-header">
      <a class="openPopup2Btn">Open Popup2</a>
      <div class="demo-popup-header-title">Popup1 Title</div>
      <a class="closeBtn demo-popup-header-right">Close</a>
    </div>
    <div class="demo-popup-content">
      <div class="block">
        <p class>Here comes popup. You can put here anything, even independent view with its own
          navigation.
          Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is
          fullscreen.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu
          bibendum
          neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus
          faucibus,
          viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl
          semper
          tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare
          consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed
          libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse
          a
          faucibus lectus.</p>
        <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem
          semper
          pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero,
          auctor
          vel
          tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper
          erat,
          at
          vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem,
          suscipit
          in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc
          eros,
          convallis blandit dui sit amet, gravida adipiscing libero.</p>
      </div>
    </div>
  </div>
</div>
</template>

<!--demo-api-popup2-->
<template id="demo-api-popup2">
<div class="ct-popup">
  <div class="demo-popup">
    <div class="demo-popup-header">

      <div class="demo-popup-header-title">Popup2 Title</div>
      <a class="closeBtn demo-popup-header-right">Close</a>
    </div>
    <div class="demo-popup-content">
      <div class="block">
        <p class>Here comes popup. You can put here anything, even independent view with its own
          navigation.
          Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is
          fullscreen.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu
          bibendum
          neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus
          faucibus,
          viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl
          semper
          tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare
          consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed
          libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse
          a
          faucibus lectus.</p>
        <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem
          semper
          pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero,
          auctor
          vel
          tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper
          erat,
          at
          vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem,
          suscipit
          in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc
          eros,
          convallis blandit dui sit amet, gravida adipiscing libero.</p>
      </div>
    </div>
  </div>
</div>
</template>

<div class="swiper-container ctmobile-ui-demo-done-container" id="swiper-container">
<div class="swiper-wrapper ctmobile-ui-demo-done-wrapper">
  <!--Page1-->
  <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="popup-initial">
    <div class="ctmobile-ui-demo-done-page-content">
      <a class="ctmobile-ui-demo-done-button" data-donekey="popup-initial-config">配置方式</a>
      <a class="ctmobile-ui-demo-done-button" data-donekey="popup-initial-api">api方式</a>
    </div>
  </div>

  <!--config-Page-->
  <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="popup-initial-config">
    <div class="ctmobile-ui-demo-done-page-header">

      <div class="ctmobile-ui-demo-done-page-header-title">配置方式</div>
    </div>
    <div class="ctmobile-ui-demo-done-page-content">
      <a data-popup="demo-config-popup1" class="ctmobile-ui-demo-done-button">Open Popup1</a>
    </div>
  </div>

  <!--api-Page-->
  <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="popup-initial-api">
    <div class="ctmobile-ui-demo-done-page-header">

      <div class="ctmobile-ui-demo-done-page-header-title">api方式</div>
    </div>
    <div class="ctmobile-ui-demo-done-page-content">
      <a id="openPopup1Btn" class="ctmobile-ui-demo-done-button">Open Popup1</a>
    </div>
  </div>

</div>
</div>

```

#### js

```

import Popup from '@ctmobile/ui-popup/popup';
import DemoUtil, { Bone } from '@ctmobile/ui-demo-util';

import '@ctmobile/ui-popup/popup.less';
import 'normalize.less';
import './index.less';

DemoUtil.initial();

new Bone(document.getElementById('swiper-container'), [
  ['popup-initial'],
  ['popup-initial-config'],
  ['popup-initial-api'],
]);

Popup.setEl(document.getElementById('ctmobile-ui-doc-demo-device'));

const demoApiPopup1 = Popup.create(document.getElementById('demo-api-popup1'), {
  listeners: {
    create: (el) => {
      el.querySelector('.openPopup2Btn').addEventListener('click', () => {
        Popup.show(demoApiPopup2);
      });

      el.querySelector('.closeBtn').addEventListener('click', () => {
        Popup.closeAll();
      });
    },
  },
});

const demoApiPopup2 = Popup.create(document.getElementById('demo-api-popup2'), {
  listeners: {
    create: (el) => {
      el.querySelector('.closeBtn').addEventListener('click', () => {
        Popup.closeAll();
      });
    },
  },
});

document.getElementById('openPopup1Btn').addEventListener('click', () => {
  Popup.show(demoApiPopup1);
});

```

## 方法

<dl>
  <dt>PopupFactory</dt>
  <dd>
    <div>
      <p>create(
        <span>tel</span>,
        <span>config</span>
        ) - 创建一个Popup</p>
      <ul>
        <li>
          <span>tel</span>-<span>HtmlElement</span> template的id
        </li>
        <li>
          <span>config</span>-<span>Object</span>
          <ul>
            <li>
              <span>listeners</span>-<span>object</span> 事件注册对象
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      <p>show(<span>popup</span>) - 显示Popup</p>
      <ul>
        <li>
          <span>popup</span>-<span>Popup</span> 通过PopupFactory创建的Popup
        </li>
      </ul>
    </div>

    <div>
      <p>close(<span>popup</span>) - 关闭Popup</p>
      <ul>
        <li>
          <span>popup</span>-<span>Popup</span> 通过PopupFactory创建的Popup
        </li>
      </ul>
    </div>

    <div>
      <p>closeAll() - 关闭所有Popup</p>
    </div>

    <div>
      <p>distory(<span>popup</span>) - 销毁Popup</p>
      <ul>
        <li>
          <span>popup</span>-<span>Popup</span> 通过PopupFactory创建的Popup
        </li>
      </ul>
    </div>

    <div>
      <p>setEl(<span>tel</span>) - 设置Popup的上下文el</p>
      <ul>
        <li>
          <span>tel</span>-<span>HtmlElement</span>
          上下文el
        </li>
      </ul>
    </div>

    <div>
      <p>getEl - 获取Popup的上下文el</p>
    </div>

  </dd>
</dl>
<dl>
  <dt>Popup</dt>
  <dd>
    <div>
      <p>show - 显示Popup</p>
    </div>

    <div>
      <p>close - 关闭Popup</p>
    </div>

    <div>
      <p>distory - 销毁Popup</p>
    </div>

    <div>
      <p>isDistory - Popup是否销毁</p>
    </div>

    <div>
      <p>getId - 获取Popup的id</p>
    </div>

    <div>
      <p>on(
        <span>type</span>,
        <span>handler</span>,
        ) - 注册事件</p>
      <ul>
        <li>
          <span>type</span>-<span>string</span>
          事件类型
        </li>
        <li>
          <span>handler</span>-<span>Function</span>
          事件句柄
        </li>
      </ul>
    </div>

    <div>
      <p>off(
        <span>type</span>,
        <span>handler</span>,
        ) - 删除指定type下的时间或清除所有事件</p>
      <ul>
        <li>
          <span>type</span>-<span>string</span>
          事件类型
        </li>
        <li>
          <span>handler</span>-<span>Function</span>
          事件句柄
        </li>
      </ul>
    </div>
  </dd>
</dl>

## 事件

|  名称 |  说明 |
| --- | --- |
| create | Popup创建放入Dom后 |
| beforeshow | popup显示之前 |
| aftershow | popup显示之后 |
| beforeclose | popup关闭之前 |
| afterclose | popup关闭之后 |
| distory | popup销毁 |
| ct-popup-event-create | Popup创建放入Dom后 |
| ct-popup-event-beforeshow | popup显示之前 |
| ct-popup-event-aftershow | popup显示之后 |
| ct-popup-event-beforeclose | popup关闭之前 |
| ct-popup-event-afterclose | popup关闭之后 |
| ct-popup-event-distory | popup销毁 |

```

import Popup from '@ctmobile/ui-popup/popup';
import '@ctmobile/ui-popup/popup.less';

let popup1 = Popup.create(
  document.getElementById('popup1'),
  {
    listeners: {
      create: (el) => {
        el.querySelector('.openPopup2').addEventListener('click', () => {
          Popup.close(popup2);
        });

        el.querySelector('.closePopup').addEventListener('click', () => {
          Popup.close(popup1);
        });
      }
    }
  }
});

popup1.on('beforeshow', (el) => {
  console.log(el);
});

popup1.on('aftershow', (el) => {
  console.log(el);
});

popup1.on('beforeclose', (el) => {
  console.log(el);
});

popup1.on('afterclose', (el) => {
  console.log(el);
});

popup1.on('distory', (el) => {
  console.log(el);
});

document.body.addEventListener('ct-popup-event-create', (el) => {
  console.log(el);
});

document.body.addEventListener('ct-popup-event-beforeshow', (el) => {
  console.log(el);
});

document.body.addEventListener('ct-popup-event-aftershow', (el) => {
  console.log(el);
});

document.body.addEventListener('ct-popup-event-beforeclose', (el) => {
  console.log(el);
});

document.body.addEventListener('ct-popup-event-afterclose', (el) => {
  console.log(el);
});

document.body.addEventListener('ct-popup-event-distory', (el) => {
  console.log(el);
});

```
