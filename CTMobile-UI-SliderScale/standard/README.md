# SliderScale

* [基本布局](#sliderscale-layout)
* [初始化](#sliderscale-initial)
* [例子](#sliderscale-demo)
* [方法](#sliderscale-methods)
* [事件](#sliderscale-events)
  - [change](#sliderscale-events-change)

## 基本布局

* ct-sliderscale - 整体容器
  - .scale - 刻度
  - type="range" - 刻度控件

## 初始化

```

import SliderScaleFactory from '@ctmobile/ui-sliderscale/sliderscale';
import '@ctmobile/ui-sliderscale/sliderscale.less';

const s1 = SliderScaleFactory.create(document.getElementById('s1'), {
  min: 0,
  max: 10,
  value: 0,
  step: 1,
  interval: 2,
});
```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - el |  整体元素 |
| {object} - config |

配置

min {String} - 最小值

max {String} - 最大值

value {String} - 当前值

step {String} - 步进,一次滑动距离

interval {String} - 每隔interval标识一个刻度  |

## 例子

#### html

```

<dl>
  <dt>基本</dt>
  <dd>

  </dd>
</dl>
<dl>
  <dt>动态设置</dt>
  <dd>

  </dd>
</dl>
```

#### js

```

import SliderScaleFactory from '@ctmobile/ui-sliderscale';
import '@ctmobile/ui-sliderscale/lib/sliderscale.less';
const s1 = SliderScaleFactory.create(document.getElementById('s1'), {
  min: 0,
  max: 10,
  value: 0,
  step: 1,
  interval: 2,
});

const s2 = SliderScaleFactory.create(document.getElementById('s2'), {
  min: 0,
  max: 60,
  value: 0,
  step: 1,
  interval: 5,
});

const s3 = SliderScaleFactory.create(document.getElementById('s3'), {
  min: 0,
  max: 50,
  value: 0,
  step: 1,
  interval: 5,
});

document.getElementById('controlS3').addEventListener('change', (e) => {
  s3.setValue(e.target.value);
});
```

## 方法

setValue( value ) - 设置当前值

* value-string 当前值

getValue - 获取当前值

on( type, handler, ) - 注册事件

* type-string 事件类型
* handler-Function 事件句柄

off( type, handler, ) - 注销事件

* type-string 事件类型
* handler-Function 事件句柄

## 事件

|  名称 |  说明 |
| --- | --- |
| change |  值发生变化 |

```

import SliderScaleFactory from '@ctmobile/ui-sliderscale';
import '@ctmobile/ui-sliderscale/lib/sliderscale.less';
const s3 = SliderScaleFactory.create(document.getElementById('s3'), {
  min: 0,
  max: 50,
  value: 0,
  step: 1,
  interval: 5,
});

document.getElementById('controlS3').addEventListener('change', (e) => {
  s3.setValue(e.target.value);
});
```