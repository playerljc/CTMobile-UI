# Surnames

* [基本布局](#surnames-layout)
* [初始化](#surnames-initial)
* [例子](#surnames-demo)
* [方法](#surnames-methods)
* [事件](#surnames-events)
  - [scrollbefore](#surnames-events-scrollbefore)
  - [scroll](#surnames-events-scroll)

## 基本布局

```

<div class="ct-surnames" id="surnames">

  <div class="ct-surnames-content">
    <div class="ct-surnames-group">
      <a class="ct-surnames-group-title" data-name="A">A</a>
      <div class="ct-surnames-group-inner">
        <ul>
          <li>A1</li>
          ...
        </ul>
      </div>
    </div>
    ...
  </div>

</div>
```

* ct-surnames - 整体容器
  - ct-surnames-highlighted - 高亮指示器
  - ct-surnames-index - 索引
  - ct-surnames-content - 内容
    + ct-surnames-group - 内容项
      * ct-surnames-group-title - 索引名称 data-name - 索引名
      * ct-surnames-group-inner - 内容项容器

## 初始化

```

 import { Dom6 } from '@ctmobile/ui-util';
 import SurnamesFactory from '@ctmobile/ui-surnames/surnames';
 import '@ctmobile/ui-surnames/surnames.less';
 import '@ctmobile/ui-surnames/themes/default/surnames.less';

 const el = document.getElementById('surnames');

 function createSurnames() {
   const contentEl = el.querySelector('.ct-surnames-content');
   const indexNames = [
     'A',
     'B',
     'C',
     'D',
     'E',
     'F',
     'G',
     'H',
     'I',
     'J',
     'K',
     'L',
     'M',
     'N',
     'O',
     'P',
     'Q',
     'R',
     'S',
     'T',
     'U',
     'V',
     'W',
     'X',
     'Y',
     'Z',
     '#',
   ];
   const df = document.createDocumentFragment();
   for (let i = 0; i < indexNames.length; i++) {
     const index = indexNames[i];
     let str = `
         <div class="ct-surnames-group">
           <a class="ct-surnames-group-title" data-name="${index}">${index}</a>
           <div class="ct-surnames-group-inner">
             <ul>`;

     for (let j = 0; j < 10; j++) {
       str += `<li>${index}${j + 1}</li>`;
     }

     str += `    </ul>
           </div>
         </div>`;

     const groupEl = Dom6.createElement(str);
     df.appendChild(groupEl);
   }
   contentEl.appendChild(df);
 }

 createSurnames();

 const surnames = SurnamesFactory.create(el, { position: 'right' });
```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - el |  整体元素 |
| {object} - config |

配置

position {String} - 索引位置 [left | right | top | bottom] 默认是right  |

## 例子

#### html

#### js

```

 import { Dom6 } from '@ctmobile/ui-util';
 import SurnamesFactory from '@ctmobile/ui-surnames/surnames';
 import '@ctmobile/ui-surnames/surnames.less';
 import '@ctmobile/ui-surnames/themes/default/surnames.less';

 const el = document.getElementById('surnames');

 function createSurnames() {
   const contentEl = el.querySelector('.ct-surnames-content');
   const indexNames = [
     'A',
     'B',
     'C',
     'D',
     'E',
     'F',
     'G',
     'H',
     'I',
     'J',
     'K',
     'L',
     'M',
     'N',
     'O',
     'P',
     'Q',
     'R',
     'S',
     'T',
     'U',
     'V',
     'W',
     'X',
     'Y',
     'Z',
     '#',
   ];
   const df = document.createDocumentFragment();
   for (let i = 0; i < indexNames.length; i++) {
     const index = indexNames[i];
     let str = `
         <div class="ct-surnames-group">
           <a class="ct-surnames-group-title" data-name="${index}">${index}</a>
           <div class="ct-surnames-group-inner">
             <ul>`;

     for (let j = 0; j < 10; j++) {
       str += `<li>${index}${j + 1}</li>`;
     }

     str += `    </ul>
           </div>
         </div>`;

     const groupEl = Dom6.createElement(str);
     df.appendChild(groupEl);
   }
   contentEl.appendChild(df);
 }

 createSurnames();

 const surnames = SurnamesFactory.create(el, { position: 'right' });
```

## 方法

scrollToAnimation( indexName ) - 动画滚动到指定索引位置

* indexName-string 索引名称

scrollTo( indexName ) - 滚动到指定索引位置

* indexName-string 索引名称

update - 更新

on( type, handler, ) - 注册事件

* type-string 事件类型
* handler-Function 事件句柄

off( type, handler, ) - 注销事件

* type-string 事件类型
* handler-Function 事件句柄

## 事件

|  名称 |  说明 |
| --- | --- |
| scrollBefore |  滚动到指定索引之前 |
| scroll |  滚动到指定索引 |
