# FontSizeSetting

* [基本布局](#fontsizesetting-layout)
* [初始化](#fontsizesetting-initial)
* [例子](#fontsizesetting-demo)
* [方法](#fontsizesetting-methods)
* [事件](#fontsizesetting-events)
  - [change](#fontsizesetting-events-change)

## 基本布局

常见的布局如下：

```

```

* ct-fontsizesetting - 代表是一个fontsizesetting组件

## 初始化

```

  import FontSizeSetting from '@ctmobile/ui-fontsizesetting';
  const fontsizesetting = FontSizeSetting(el,{
    min: '0',
    max: '100',
    setp: '1',
    value: '33.3',
  });

```

## 例子

#### html

```

  <div style="margin-top:10px;">
    设置值：<input type="number" maxlength="3" id="setCurValue"><br>
    当前值：
  </div>
  <p style="font-size: .7rem" id="font">我是一个粉刷匠</p>

```

#### js

```

  import FontSizeSetting from '@ctmobile/ui-fontsizesetting/fontsizesetting';
  import '@ctmobile/ui-fontsizesetting/fontsizesetting.less';
  import '@ctmobile/ui-fontsizesetting/themes/default/fontsizesetting.less';

  const fontDom = $('#font')[0];
  const curValueDom = $('#setCurValue')[0];
  const baseRem = 0.7, baseValue = 33.3;

  curValueDom.addEventListener('input', () => {
    fontSizeSetting.setValue(curValueDom.value);
  });

  const fontSizeSetting = FontSizeSetting($('#ct-fontsizesetting-demo')[0], {
    min: '0',
    max: '100',
    setp: '1',
    value: '33.3',
  });
  fontSizeSetting.on('change', (value) => {
    let val = parseInt(value);
    if (val === 0) {
      val = 1;
    }
    fontDom.style.fontSize = `${(value * baseRem / baseValue)}rem`;
    $('#curValue')[0].innerText = fontSizeSetting.getValue();
  });

```

## 方法

setMin(min) - 设置最小值

* min-number 最小值

setMax(max) - 设置最大值

* setMax-number 最大值

setSetp(step) - 设置步进

* step-number 最步进

setValue(value) - 设置当前值

* value-number 当前值

getValue() - 获取当前值

on(type, handler) - 注册事件

* type-string 注册事件的类型,包括[change]
* handler-Function 注册事件的回调函数

## 事件

|  名称 |  说明 |
| --- | --- |
| change |  值发生改变的时候出发 |

```

  import FontSizeSetting from '@ctmobile/ui-fontsizesetting/fontsizesetting';
  import '@ctmobile/ui-fontsizesetting/fontsizesetting.less';
  import '@ctmobile/ui-fontsizesetting/themes/default/fontsizesetting.less';

  const fontDom = $('#font')[0];
  const curValueDom = $('#setCurValue')[0];
  const baseRem = 0.7, baseValue = 33.3;

  curValueDom.addEventListener('input', () => {
    fontSizeSetting.setValue(curValueDom.value);
  });

  const fontSizeSetting = FontSizeSetting($('#ct-fontsizesetting-demo')[0], {
    min: '0',
    max: '100',
    setp: '1',
    value: '33.3',
  });
  fontSizeSetting.on('change', (value) => {
    let val = parseInt(value);
    if (val === 0) {
      val = 1;
    }
    fontDom.style.fontSize = `${(value * baseRem / baseValue)}rem`;
    $('#curValue')[0].innerText = fontSizeSetting.getValue();
  });

```
