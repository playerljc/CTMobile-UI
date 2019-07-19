# CascadeCompared

* [基本布局](#cascadecompared-layout)
* [初始化](#cascadecompared-initial)
* [配置项](#cascadecompared-config)
* [例子](#cascadecompared-demo)
* [方法](#cascadecompared-methods)
* [事件](#cascadecompared-events)
  - [change](#cascadecompared-events-change)
  - [scrollend](#cascadecompared-events-scrollend)

## 基本布局

常见的布局如下：

```

```

* ct-cascadecompared和ct-stickuplayout - 代表是一个cascadecompared组件
  - ct-cascadecompared-indicator - 代表指示器
    + ct-cascadecompared-fixedWrap - 代表固定的部分
      * ct-cascadecompared-item - 代表固定部分的外层 这个元素始终只有一个
        - ct-cascadecompared-cell - 代表固定部分的里层
    + ct-cascadecompared-autoWrap - 代表可以滚动的部分
      * ct-cascadecompared-cell - 代表可滚动的单元格 元素个数同列数相同
  - ct-cascadecompared-master - 代表主体部分
    + ct-cascadecompared-master-inner - 代表主体内的部分
      * ct-stickuplayout-fixed - 固定的列头
      * ct-stickuplayout-inner - 主体部分
        - ct-stickuplayout-item - 一行
          + ct-stickuplayout-item-header - 一行的头
          + ct-stickuplayout-item-content - 一行的内容部分
            * ct-cascadecompared-fixedWrap - 代表固定的部分
              - ct-cascadecompared-item - 代表固定部分的外层 个数等于行数
                + ct-cascadecompared-cell - 代表固定部分的里层
            * ct-cascadecompared-autoWrap - 代表可以滚动的部分外层
              - ct-cascadecompared-autoInner - 代表可滚动的部分内层
                + ct-cascadecompared-item - 代表固定部分的外层 个数等于行数
                  * ct-cascadecompared-cell - 代表固定部分的里层 个数等于列数

## 初始化

```

  import CascadeCompared from '@ctmobile/ui-cascadecompared';
  import '@ctmobile/ui-cascadecompared/cascadecompared.less';
  const cascadecompared = CascadeCompared.create(el,config = {columnsWidth = [], rowsHeight = []});

```

## 配置项

|  参数 |  类型 |  描述 |
| --- | --- | --- |
| columnsWidth | array |  列的宽度，例如[50,80,90,....],如果想跳过，可以写成null,undefined,''，跳过的宽度默认为6rem |
| rowsHeight | array |  行的高度，例如[50,80,90,....],如果想跳过，可以写成null,undefined,''，跳过的宽度默认为3rem |

## 例子

#### html

```

        <!--基本的-->
        <dl>
            <dt>
              <h3 class="title">基本的</h3>
            </dt>
            <dd>
              <div class="ct-stickuplayout ct-cascadecompared" id="cascadecompared-demo-base">
                <div class="ct-cascadecompared-indicator">

                  <div class="ct-cascadecompared-autoWrap">
                    <div class="ct-cascadecompared-item">
                      <span class="ct-cascadecompared-cell">指标</span>
                      <span class="ct-cascadecompared-cell">比较1</span>
                      <span class="ct-cascadecompared-cell">比较2</span>
                      <span class="ct-cascadecompared-cell">比较3</span>
                      <span class="ct-cascadecompared-cell">比较4</span>
                      <span class="ct-cascadecompared-cell">比较5</span>
                      <span class="ct-cascadecompared-cell">比较6</span>
                      <span class="ct-cascadecompared-cell">比较7</span>
                      <span class="ct-cascadecompared-cell">比较8</span>
                      <span class="ct-cascadecompared-cell">比较9</span>
                    </div>
                  </div>
                </div>

              </div>
            </dd>
          </dl>

        <!--动态插入和删除-->
        <dl>
            <dt>
              <h3 class="title">动态插入和删除</h3>
              <div class="toolbar">
                <button id="cascadecompared-demo-dynamic-append">插入</button>
              </div>
            </dt>
            <dd>
              <div class="ct-stickuplayout ct-cascadecompared" id="cascadecompared-demo-dynamic">
                <div class="ct-cascadecompared-indicator">

                  <div class="ct-cascadecompared-autoWrap">
                    <div class="ct-cascadecompared-item">
                      <span class="ct-cascadecompared-cell">指标</span>
                      <span class="ct-cascadecompared-cell">比较1</span>
                      <span class="ct-cascadecompared-cell">比较2</span>
                      <span class="ct-cascadecompared-cell">比较3</span>
                      <span class="ct-cascadecompared-cell">比较4</span>
                      <span class="ct-cascadecompared-cell">比较5</span>
                      <span class="ct-cascadecompared-cell">比较6</span>
                      <span class="ct-cascadecompared-cell">比较7</span>
                      <span class="ct-cascadecompared-cell">比较8</span>
                      <span class="ct-cascadecompared-cell">比较9</span>
                    </div>
                  </div>
                </div>

              </div>
            </dd>
          </dl>

        <!--滚动到指定位置(通过索引)-->
        <dl>
            <dt>
              <h3 class="title">滚动到指定位置(通过索引)</h3>
              <div class="toolbar">
                <div class="toolbar">
                  <button id="cascadecompared-demo-scrollbyindex-noanimation-btn">滚动到最后一行(无动画)</button>
                  <button id="cascadecompared-demo-scrollbyindex-animation-btn">滚动到最后一行(有动画)</button>
                  <button id="cascadecompared-demo-scrollbyindex-top-btn">回到顶部</button>
                </div>
              </div>
            </dt>
            <dd>
              <div class="ct-stickuplayout ct-cascadecompared" id="cascadecompared-demo-scrollbyindex">
                <div class="ct-cascadecompared-indicator">

                  <div class="ct-cascadecompared-autoWrap">
                    <div class="ct-cascadecompared-item">
                      <span class="ct-cascadecompared-cell">指标</span>
                      <span class="ct-cascadecompared-cell">比较1</span>
                      <span class="ct-cascadecompared-cell">比较2</span>
                      <span class="ct-cascadecompared-cell">比较3</span>
                      <span class="ct-cascadecompared-cell">比较4</span>
                      <span class="ct-cascadecompared-cell">比较5</span>
                      <span class="ct-cascadecompared-cell">比较6</span>
                      <span class="ct-cascadecompared-cell">比较7</span>
                      <span class="ct-cascadecompared-cell">比较8</span>
                      <span class="ct-cascadecompared-cell">比较9</span>
                    </div>
                  </div>
                </div>

              </div>
            </dd>
          </dl>

        <!--滚动到指定位置(通过dom)-->
        <dl>
            <dt>
              <h3 class="title">滚动到指定位置(通过Dom)</h3>
              <div class="toolbar">
                <div class="toolbar">
                  <button id="cascadecompared-demo-scrollbyel-noanimation-btn">滚动到最后一行(无动画)</button>
                  <button id="cascadecompared-demo-scrollbyel-animation-btn">滚动到最后一行(有动画)</button>
                  <button id="cascadecompared-demo-scrollbyel-top-btn">回到顶部</button>
                </div>
              </div>
            </dt>
            <dd>
              <div class="ct-stickuplayout ct-cascadecompared" id="cascadecompared-demo-scrollbyel">
                <div class="ct-cascadecompared-indicator">

                  <div class="ct-cascadecompared-autoWrap">
                    <div class="ct-cascadecompared-item">
                      <span class="ct-cascadecompared-cell">指标</span>
                      <span class="ct-cascadecompared-cell">比较1</span>
                      <span class="ct-cascadecompared-cell">比较2</span>
                      <span class="ct-cascadecompared-cell">比较3</span>
                      <span class="ct-cascadecompared-cell">比较4</span>
                      <span class="ct-cascadecompared-cell">比较5</span>
                      <span class="ct-cascadecompared-cell">比较6</span>
                      <span class="ct-cascadecompared-cell">比较7</span>
                      <span class="ct-cascadecompared-cell">比较8</span>
                      <span class="ct-cascadecompared-cell">比较9</span>
                    </div>
                  </div>
                </div>

              </div>
            </dd>
          </dl>

```

#### js

```

        <!--例子的js-->
        import $ from 'jquery';
        import CascadeCompared from '@ctmobile/ui-cascadecompared';
        import '@ctmobile/ui-cascadecompared/cascadecompared.less';

        let dynamicIndex = 0;

        function getDynamicTemplate(title) {
          return (
            <pre>
            <code class="html">
            `<li class="ct-stickuplayout-item">
              <div class="ct-stickuplayout-item-header"><span class="title">${title}</span></div>
              <div class="ct-stickuplayout-item-content">
              <div class="ct-cascadecompared-fixedWrap">
                <div class="ct-cascadecompared-item">
                  <span class="ct-cascadecompared-cell">厂家指导价</span>
                </div>
                <div class="ct-cascadecompared-item">
                  <span class="ct-cascadecompared-cell">厂家指导价</span>
                </div>
                <div class="ct-cascadecompared-item">
                  <span class="ct-cascadecompared-cell">厂家指导价</span>
                </div>
              </div>
              <div class="ct-cascadecompared-autoWrap">
                <div class="ct-cascadecompared-autoInner">
                  <div class="ct-cascadecompared-item">
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                  </div>
                  <div class="ct-cascadecompared-item">
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                  </div>
                  <div class="ct-cascadecompared-item">
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                    <span class="ct-cascadecompared-cell">厂家指导价</span>
                  </div>
                </div>
              </div>
             </div>
             </li>`
            </code>
            </pre>
          );
        }

        function initListView(el) {
          let str = '';
          for(let i = 0; i < 10; i++) {
            str += getDynamicTemplate(`header${i + 1}`);
          }

          $(el).append(str);
        }

        // 基本的
        initListView($('#cascadecompared-demo-base .ct-stickuplayout-inner')[0]);
        CascadeCompared.create($('#cascadecompared-demo-base')[0]);

        // 动态的插入
        initListView($('#cascadecompared-demo-dynamic .ct-stickuplayout-inner')[0]);
        const cascadeComparedDynamic = CascadeCompared.create($('#cascadecompared-demo-dynamic')[0]);
        $('#cascadecompared-demo-dynamic-append').on('click', () => {
          const $dynamicItemJO = $(getDynamicTemplate(`动态增加${++dynamicIndex}`));
          $('#cascadecompared-demo-dynamic .ct-stickuplayout-inner').append($dynamicItemJO);
          cascadeComparedDynamic.refresh();
          cascadeComparedDynamic.scrollToByHeaderEl($dynamicItemJO.prev().find('.ct-stickuplayout-item-header')[0]);
        });

        // 滚动到指定位置(通过索引)
        initListView($('#cascadecompared-demo-scrollbyindex .ct-stickuplayout-inner')[0]);
        const cascadeComparedScrollbyindex = CascadeCompared.create($('#cascadecompared-demo-scrollbyindex')[0]);
        const $cascadeComparedScrollbyIndexItemJO = $('#cascadecompared-demo-scrollbyindex .ct-stickuplayout-inner .ct-stickuplayout-item');
        $('#cascadecompared-demo-scrollbyindex-noanimation-btn').on('click', () => {
          cascadeComparedScrollbyindex.scrollToByIndex($cascadeComparedScrollbyIndexItemJO.length - 2, 0);
        });
        $('#cascadecompared-demo-scrollbyindex-animation-btn').on('click', () => {
          cascadeComparedScrollbyindex.scrollToByIndex($cascadeComparedScrollbyIndexItemJO.length - 2, 600);
        });
        $('#cascadecompared-demo-scrollbyindex-top-btn').on('click', () => {
          cascadeComparedScrollbyindex.scrollToByIndex(0);
        });

        // 滚动到指定位置(通过dom)
        initListView($('#cascadecompared-demo-scrollbyel .ct-stickuplayout-inner')[0]);
        const cascadeComparedScrollbyel = CascadeCompared.create($('#cascadecompared-demo-scrollbyel')[0]);
        const $cascadeComparedScrollbyelItemJO = $('#cascadecompared-demo-scrollbyel .ct-stickuplayout-inner .ct-stickuplayout-item');
        $('#cascadecompared-demo-scrollbyel-noanimation-btn').on('click', () => {
          cascadeComparedScrollbyel.scrollToByHeaderEl($cascadeComparedScrollbyelItemJO[$cascadeComparedScrollbyelItemJO.length - 2].querySelector('.ct-stickuplayout-item-header'), 0);
        });
        $('#cascadecompared-demo-scrollbyel-animation-btn').on('click', () => {
          cascadeComparedScrollbyel.scrollToByHeaderEl($cascadeComparedScrollbyelItemJO[$cascadeComparedScrollbyelItemJO.length - 2].querySelector('.ct-stickuplayout-item-header'), 600);
        });
        $('#cascadecompared-demo-scrollbyel-top-btn').on('click', () => {
          cascadeComparedScrollbyel.scrollToByHeaderEl($cascadeComparedScrollbyelItemJO[0].querySelector('.ct-stickuplayout-item-header'));
        });

```

## 方法

scrollToByIndex(index,duration) - 通过索引滚动到某一项

* index-number 要滚动到目标的索引
* duration-number 滚动持续的时间(默认是300毫秒)

scrollToByHeaderEl(headerEl,duration) - 通过dom滚动到某一项

* headerEl-HtmlElement 要滚动到的dom(带有ct-cascadecompared-item-header样式的元素)
* duration-number 滚动持续的时间(默认是300毫秒)

refresh() - 刷新整个StickupLayout

on(type, handler) - 注册事件

* type-string 注册事件的类型,包括[change]
* handler-Function 注册事件的回调函数

## 事件

|  名称 |  说明 |
| --- | --- |
| change |  滚动切换时触发 |
| scrollEnd |  列滚动完成之后触发 |

```

  <!--事件例子代码-->
  import $ from 'jquery';
  import CascadeCompared from '@ctmobile/ui-cascadecompared';
  import '@ctmobile/ui-cascadecompared/cascadecompared.less';

  // 基本的
  const cascadeCompared = CascadeCompared.create($('#cascadecompared-demo-base')[0]);
  cascadeCompared.on('change', (dom, index) => {
    console.log(dom);
    console.log(index);
  });
  cascadeCompared.on('scrollend', () => {
    console.log('scrollend');
  });

```
