# Accordion

* [基本布局](#accordion-layout)
* [类型](#accordion-type)
  - [圆角灰边](#accordion-type-radius)
  - [极简无边框](#accordion-type-base)
  - [经典](#accordion-type-classic)
  - [箭头](#accordion-type-arrow)
* [可折叠](#accordion-collapse)
* [初始化](#accordion-initial)
* [例子](#accordion-demo)
* [方法](#accordion-methods)
* [事件](#accordion-events)
  - [beforeshow](#accordion-events-beforeshow)
  - [aftershow](#accordion-events-aftershow)
  - [beforehide](#accordion-events-beforehide)
  - [afterhide](#accordion-events-afterhide)

## 基本布局

常见的布局如下：

```

    <div class="ct-accordion-radius">
      <div>
        <dl>
          <dt>title...</dt>
          <dd>
            content...
          </dd>
        </dl>
        <dl>
          <dt>title...</dt>
          <dd>
            content...
          </dd>
        </dl>
        <dl>
          <dt>title...</dt>
          <dd>
            content...
          </dd>
        </dl>
        ...
      </div>
    </div>

```

* ct-accordion-... - 代表是一个accordion组件 dl - 代表一组
    + dt - 头
    + dd - 体

## 类型

 一共有四中类型：

* 圆角灰边

```

        <div class="ct-accordion-radius">
          <div>
            <dl>
              <dt>item1-title</dt>
              <dd>
                第1项内容
              </dd>
            </dl>
            <dl>
              <dt>item2-title</dt>
              <dd>
                第二项内容
              </dd>
            </dl>
            <dl>
              <dt>item3-title</dt>
              <dd>
                第三项内容
              </dd>
            </dl>
          </div>
        </div>

```
* 极简无边框

```

        <div class="ct-accordion-base">
          <div>
            <dl>
              <dt>item1-title</dt>
              <dd>
                第1项内容
              </dd>
            </dl>
            <dl>
              <dt>item2-title</dt>
              <dd>
                第二项内容
              </dd>
            </dl>
            <dl>
              <dt>item3-title</dt>
              <dd>
                第三项内容
              </dd>
            </dl>
          </div>
        </div>

```
* 经典

```

        <div class="ct-accordion-classic">
          <div>
            <dl>
              <dt>item1-title</dt>
              <dd>
                第1项内容
              </dd>
            </dl>
            <dl>
              <dt>item2-title</dt>
              <dd>
                第二项内容
              </dd>
            </dl>
            <dl>
              <dt>item3-title</dt>
              <dd>
                第三项内容
              </dd>
            </dl>
          </div>
        </div>

```
* 箭头

```

        <div class="accordion-type-arrow">
          <div>
            <dl>
              <dt>item1-title</dt>
              <dd>
                第1项内容
              </dd>
            </dl>
            <dl>
              <dt>item2-title</dt>
              <dd>
                第二项内容
              </dd>
            </dl>
            <dl>
              <dt>item3-title</dt>
              <dd>
                第三项内容
              </dd>
            </dl>
          </div>
        </div>

```

## 可折叠

```

  <div class="ct-accordion-radius">
    <div>
      <dl>
        <dt data-collapse="collapse">item1-title</dt>
        <dd>
          第1项内容
        </dd>
      </dl>
      <dl>
        <dt>item2-title</dt>
        <dd>
          第二项内容
        </dd>
      </dl>
      <dl>
        <dt>item3-title</dt>
        <dd>
          第三项内容
        </dd>
      </dl>
    </div>
  </div>

```

* data-collapse="collapse"为默认打开

## 初始化

```

  import Accordion from @ctmobile/ui-accordion;
  const accordion = Accordion(el);

```

## 例子

#### html

```

      <p>圆角灰边</p>
      <div class="ct-accordion-radius">
        <div>
          <dl>
            <dt>item1-title</dt>
            <dd>
              第1项内容
            </dd>
          </dl>
          <dl>
            <dt>item2-title</dt>
            <dd>
              第二项内容
            </dd>
          </dl>
          <dl>
            <dt>item3-title</dt>
            <dd>
              第三项内容
            </dd>
          </dl>
        </div>
      </div>
      <p>极简无边框</p>
      <div class="ct-accordion-base">
        <div>
          <dl>
            <dt>item1-title</dt>
            <dd>
              第1项内容
            </dd>
          </dl>
          <dl>
            <dt>item2-title</dt>
            <dd>
              第二项内容
            </dd>
          </dl>
          <dl>
            <dt>item3-title</dt>
            <dd>
              第三项内容
            </dd>
          </dl>
        </div>
      </div>
      <p>经典</p>
      <div class="ct-accordion-classic">
        <div>
          <dl>
            <dt>item1-title</dt>
            <dd>
              第1项内容
            </dd>
          </dl>
          <dl>
            <dt>item2-title</dt>
            <dd>
              第二项内容
            </dd>
          </dl>
          <dl>
            <dt>item3-title</dt>
            <dd>
              第三项内容
            </dd>
          </dl>
        </div>
      </div>
      <p>箭头</p>
      <div class="accordion-type-arrow">
        <div>
          <dl>
            <dt>item1-title</dt>
            <dd>
              第1项内容
            </dd>
          </dl>
          <dl>
            <dt>item2-title</dt>
            <dd>
              第二项内容
            </dd>
          </dl>
          <dl>
            <dt>item3-title</dt>
            <dd>
              第三项内容
            </dd>
          </dl>
        </div>
      </div>
      <p>默认展开</p>
      <div class="ct-accordion-radius">
        <div>
          <dl>
            <dt data-collapse="collapse">item1-title</dt>
            <dd>
              第1项内容
            </dd>
          </dl>
          <dl>
            <dt>item2-title</dt>
            <dd>
              第二项内容
            </dd>
          </dl>
          <dl>
            <dt>item3-title</dt>
            <dd>
              第三项内容
            </dd>
          </dl>
        </div>
      </div>
      <p>展开/(关闭)所有</p>
      <div class="ct-accordion-radius">
        <div>
          <dl>
            <dt>item1-title</dt>
            <dd>
              第1项内容
            </dd>
          </dl>
          <dl>
            <dt>item2-title</dt>
            <dd>
              第二项内容
            </dd>
          </dl>
          <dl>
            <dt>item3-title</dt>
            <dd>
              第三项内容
            </dd>
          </dl>
        </div>
      </div>

```

#### js

```

        import $ from 'jquery';
        import Accordion from '@ctmobile/ui-accordion';

        Accordion($('#cuddd-ct-accordion-radius')[0]);
        Accordion($('#cuddd-ct-accordion-base')[0]);
        Accordion($('#cuddd-ct-accordion-classic')[0]);
        Accordion($('#cuddd-ct-accordion-arrow')[0]);
        Accordion($('#cuddd-collapse')[0]);
        const collapseAll = Accordion($('#cuddd-collapse-all')[0]);
        const collapseRefresh = Accordion($('#cuaddd-refresh')[0]);
        const collapseMethods = Accordion($('#cuaddd-collapse-methods')[0]);

        // 展开全部
        $('#cuddd-collapse-openall').on('click', () => {
          collapseAll.showAll();
        });

        // 关闭全部
        $('#cuddd-collapse-closeall').on('click', () => {
          collapseAll.closeAll();
        });

        // 动态修改样式
        $('#cuaddd-refresh-dynamicclass').on('click', () => {
          $('#cuaddd-refresh').find('[data-collapse="collapse"]').attr('data-collapse', '');
        });

        // 刷新
        $('#cuaddd-refresh-dynamicrefresh').on('click', () => {
          collapseRefresh.refresh();
        });

        const $dt = $('#cuaddd-collapse-methods-dt');

        // 通过属性打开
        $('#cuaddd-collpase-methods-modiprops-open').on('click', () => {
          $dt[0].dataset.collapse = 'collapse';
          collapseMethods.refresh();
        });
        // 通过属性关闭
        $('#cuaddd-collpase-methods-modiprops-close').on('click', () => {
          $dt[0].dataset.collapse = '';
          collapseMethods.refresh();
        });
        // 通过api打开
        $('#cuaddd-collpase-methods-api-open').on('click', () => {
          collapseMethods.show($dt[0]);
        });
        // 通过api关闭
        $('#cuaddd-collpase-methods-api-close').on('click', () => {
          collapseMethods.close($dt[0]);
        });

```

## 方法

show(dtDom) - 打开某一项

* dtDom-HtmlElement 要展开行dt元素的dom对象

close(dtDom) - 关闭某一项

* dtDom-HtmlElement 要关闭行dt元素的dom对象

showAll() - 打开所有项

closeAll() - 关闭所有项

refresh() - 刷新整个Accordion

on(type, handler) - 注册事件

* type-string 注册事件的类型,包括[beforeshow,aftershow,beforehide,afterhide]
* handler-Function 注册事件的回调函数

## 事件

|  名称 |  说明 |
| --- | --- |
| beforeshow |  一项展开之前触发 |
| aftershow |  一项展开之后触发 |
| beforehide |  一项关闭之前触发 |
| afterhide |  一项关闭之后触发 |

```

  import $ from 'jquery'
  import Accordion from '@ctmobile/ui-accordion';

  const accordion = Accordion($('#cuddd-ct-accordion-radius')[0]);
  accordion.on('beforeshow', (dtDom) => {
    console.log('beforeshow');
  });
  accordion.on('aftershow', (dtDom) => {
    console.log('aftershow');
  });
  accordion.on('beforehide', (dtDom) => {
    console.log('beforehide');
  });
  accordion.on('afterhide', (dtDom) => {
    console.log('afterhide');
  });

```
