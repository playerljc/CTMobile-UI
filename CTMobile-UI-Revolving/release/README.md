# Revolving

* [基本布局](#revolving-layout)
* [初始化](#revolving-initial)
* [例子](#revolving-demo)
* [方法](#revolving-methods)
* [事件](#revolving-events)
  - [autoplayStart](#revolving-events-autoplaystart)
  - [autoplayStopEvent](#revolving-events-autoplaystopevent)
  - [autoplay](#revolving-events-autoplay)

## 基本布局

```

<div class="ct-revolving">
  <div class="ct-revolving-wrapper">
      <div class="ct-revolving-slide">Slide 1</div>
      ...
  </div>
</div>

```

* ct-revolving - 整体容器
  - ct-revolving-wrapper - 滚动项包装容器
    + ct-revolving-slide - 滚动项(多个)

## 初始化

```

import Revolving from '@ctmobile/ui-revolving';
import '@ctmobile/ui-revolving/lib/revolving.less';

const revolving = new Revolving(
  document.getElementById('ct-revolving'), {
    delay: 3000,
    direction: 'top',
  }
);

revolving.on('autoplayStart', () => { console.log('autoplayStart'); });
revolving.on('autoplayStopEvent', () => { console.log('autoplayStopEvent'); });
revolving.on('autoplay', () => { console.log('autoplay'); });

```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - el |  整体元素 |
| {object} - config |

配置

speed {number} - 幻灯片之间的过渡持续时间（毫秒）

delay {number} - 转换之间的延迟（以ms为单位）

direction {string} - [left | right | top | bottom] 滚动方向

loop {boolean} - 是否循环播放

stopOnLastSlide {boolean} - 启用此参数并在到达最后一张幻灯片时停止自动播放（在循环模式下无效）  |

## 例子

#### html

```

<dl>
          <dt>direction - left</dt>
          <dd>
            <div class="ct-revolving" id="ct-revolving-left">
              <div class="ct-revolving-wrapper">
                <div class="ct-revolving-slide">Slide 1</div>
                <div class="ct-revolving-slide">Slide 2</div>
                <div class="ct-revolving-slide">Slide 3</div>
                <div class="ct-revolving-slide">Slide 4</div>
                <div class="ct-revolving-slide">Slide 5</div>
                <div class="ct-revolving-slide">Slide 6</div>
                <div class="ct-revolving-slide">Slide 7</div>
                <div class="ct-revolving-slide">Slide 8</div>
                <div class="ct-revolving-slide">Slide 9</div>
                <div class="ct-revolving-slide">Slide 10</div>
              </div>
            </div>
          </dd>
        </dl>

<dl>
  <dt>direction - right</dt>
  <dd>
    <div class="ct-revolving" id="ct-revolving-right">
      <div class="ct-revolving-wrapper">
        <div class="ct-revolving-slide">Slide 1</div>
        <div class="ct-revolving-slide">Slide 2</div>
        <div class="ct-revolving-slide">Slide 3</div>
        <div class="ct-revolving-slide">Slide 4</div>
        <div class="ct-revolving-slide">Slide 5</div>
        <div class="ct-revolving-slide">Slide 6</div>
        <div class="ct-revolving-slide">Slide 7</div>
        <div class="ct-revolving-slide">Slide 8</div>
        <div class="ct-revolving-slide">Slide 9</div>
        <div class="ct-revolving-slide">Slide 10</div>
      </div>
    </div>
  </dd>
</dl>

<dl>
  <dt>direction - top</dt>
  <dd>
    <div class="ct-revolving" id="ct-revolving-top">
      <div class="ct-revolving-wrapper">
        <div class="ct-revolving-slide">Slide 1</div>
        <div class="ct-revolving-slide">Slide 2</div>
        <div class="ct-revolving-slide">Slide 3</div>
        <div class="ct-revolving-slide">Slide 4</div>
        <div class="ct-revolving-slide">Slide 5</div>
        <div class="ct-revolving-slide">Slide 6</div>
        <div class="ct-revolving-slide">Slide 7</div>
        <div class="ct-revolving-slide">Slide 8</div>
        <div class="ct-revolving-slide">Slide 9</div>
        <div class="ct-revolving-slide">Slide 10</div>
      </div>
    </div>
  </dd>
</dl>

<dl>
  <dt>direction - bottom</dt>
  <dd>
    <div class="ct-revolving" id="ct-revolving-bottom">
      <div class="ct-revolving-wrapper">
        <div class="ct-revolving-slide">Slide 1</div>
        <div class="ct-revolving-slide">Slide 2</div>
        <div class="ct-revolving-slide">Slide 3</div>
        <div class="ct-revolving-slide">Slide 4</div>
        <div class="ct-revolving-slide">Slide 5</div>
        <div class="ct-revolving-slide">Slide 6</div>
        <div class="ct-revolving-slide">Slide 7</div>
        <div class="ct-revolving-slide">Slide 8</div>
        <div class="ct-revolving-slide">Slide 9</div>
        <div class="ct-revolving-slide">Slide 10</div>
      </div>
    </div>
  </dd>
</dl>

<dl>
  <dt>speed - 过度时间</dt>
  <dd>
    <div class="ct-revolving" id="ct-revolving-speed">
      <div class="ct-revolving-wrapper">
        <div class="ct-revolving-slide">Slide 1</div>
        <div class="ct-revolving-slide">Slide 2</div>
        <div class="ct-revolving-slide">Slide 3</div>
        <div class="ct-revolving-slide">Slide 4</div>
        <div class="ct-revolving-slide">Slide 5</div>
        <div class="ct-revolving-slide">Slide 6</div>
        <div class="ct-revolving-slide">Slide 7</div>
        <div class="ct-revolving-slide">Slide 8</div>
        <div class="ct-revolving-slide">Slide 9</div>
        <div class="ct-revolving-slide">Slide 10</div>
      </div>
    </div>
  </dd>
</dl>

<dl>
  <dt>delay - 转换时间</dt>
  <dd>
    <div class="ct-revolving" id="ct-revolving-delay">
      <div class="ct-revolving-wrapper">
        <div class="ct-revolving-slide">Slide 1</div>
        <div class="ct-revolving-slide">Slide 2</div>
        <div class="ct-revolving-slide">Slide 3</div>
        <div class="ct-revolving-slide">Slide 4</div>
        <div class="ct-revolving-slide">Slide 5</div>
        <div class="ct-revolving-slide">Slide 6</div>
        <div class="ct-revolving-slide">Slide 7</div>
        <div class="ct-revolving-slide">Slide 8</div>
        <div class="ct-revolving-slide">Slide 9</div>
        <div class="ct-revolving-slide">Slide 10</div>
      </div>
    </div>
  </dd>
</dl>

<dl>
  <dt>api控制</dt>
  <dd>
    <div class="ct-revolving" id="ct-revolving-api">
      <div class="ct-revolving-wrapper">
        <div class="ct-revolving-slide">Slide 1</div>
        <div class="ct-revolving-slide">Slide 2</div>
        <div class="ct-revolving-slide">Slide 3</div>
        <div class="ct-revolving-slide">Slide 4</div>
        <div class="ct-revolving-slide">Slide 5</div>
        <div class="ct-revolving-slide">Slide 6</div>
        <div class="ct-revolving-slide">Slide 7</div>
        <div class="ct-revolving-slide">Slide 8</div>
        <div class="ct-revolving-slide">Slide 9</div>
        <div class="ct-revolving-slide">Slide 10</div>
      </div>
    </div>

    <div>
      <a class="ctmobile-ui-demo-button" id="startRevolving">start</a>
      <a class="ctmobile-ui-demo-button" id="stopRevolving">stop</a>
    </div>
  </dd>
</dl>
```

#### js

```

import Revolving from '@ctmobile/ui-revolving';
import '@ctmobile/ui-revolving/revolving.less';

const leftRevolving = Revolving(
document.getElementById('ct-revolving-left'), {
  direction: 'left',
});

const rightRevolving = Revolving(
document.getElementById('ct-revolving-right'), {
  direction: 'right',
});

const topRevolving = Revolving(
document.getElementById('ct-revolving-top'), {
  direction: 'top',
});

const bottomRevolving = Revolving(
document.getElementById('ct-revolving-bottom'), {
  direction: 'bottom',
});

const speedRevolving = Revolving(
document.getElementById('ct-revolving-speed'), {
  speed: 1000 * 3,
});

const delayRevolving = Revolving(
document.getElementById('ct-revolving-delay'), {
  delay: 1000 * 3,
});

const apiRevolving = Revolving(
  document.getElementById('ct-revolving-api')
);

document.getElementById('startRevolving').addEventListener('click', () => {
  apiRevolving.start();
});

document.getElementById('stopRevolving').addEventListener('click', () => {
  apiRevolving.stop();
});
```

## 方法

start - 播放

stop - 暂停播放

isRunning - 是否进行播放

on( type, handler, ) - 注册事件

* type-string 事件类型
* handler-Function 事件句柄

## 事件

|  名称 |  说明 |
| --- | --- |
| autoplayStart |  自动播放开始时将触发事件 |
| autoplayStopEvent |  自动播放停止时将触发事件 |
| autoplay |  使用自动播放更改幻灯片时将触发事件 |

```

import Revolving from '@ctmobile/ui-revolving';
import '@ctmobile/ui-revolving/lib/revolving.less';

const revolving = Revolving(
  document.getElementById('ct-revolving'), {
    delay: 3000,
    direction: 'top',
  }
);

revolving.on('autoplayStart', () => { console.log('autoplayStart'); });
revolving.on('autoplayStopEvent', () => { console.log('autoplayStopEvent'); });
revolving.on('autoplay', () => { console.log('autoplay'); });

```
