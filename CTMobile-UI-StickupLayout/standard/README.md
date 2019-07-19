# StickupLayout

* [基本布局](#stickuplayout-layout)
* [初始化](#stickuplayout-initial)
* [例子](#stickuplayout-demo)
* [方法](#stickuplayout-methods)
* [事件](#stickuplayout-events)
  - [change](#stickuplayout-events-beforeshow)

## 基本布局

常见的布局如下：

```

    <div class="ct-stickuplayout">

      <ul class="ct-stickuplayout-inner">
        <li class="ct-stickuplayout-item">
          <div class="ct-stickuplayout-item-header">header1</div>

        </li>
      </ul>
    </div>

```

* ct-stickuplayout - 代表是一个stickuplayout组件
  - ct-stickuplayout-fixed - 代表固定的头
  - ct-stickuplayout-inner - 代表滚动的列表部分
    + ct-stickuplayout-item - 代表滚动列表的一行
      * ct-stickuplayout-item-header - 列表一行的头部分
      * ct-stickuplayout-item-content - 列表一行的内容部分

## 初始化

```

  import StickupLayout from '@ctmobile/ui-stickuplayout';
  const stickuplayout = StickupLayout(el);

```

## 例子

#### html

```

      <!--基本的-->
      <dl>
          <dt>
            <h3 class="title">基本的</h3>
          </dt>
          <dd>
            <div class="ct-stickuplayout" id="stickuplayout-demo-base">

              <ul class="ct-stickuplayout-inner">
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">基本参数</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>厂商指导价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>本地参考底价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>厂商</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>级别</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>能源类型</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>上市时间</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大功率(KW)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>发动机</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">车身</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">发动机</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">变速箱</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">车轮制动</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">主/被动安全装备</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
          </dd>
      </dl>

      <!--动态插入和删除-->
      <dl>
          <dt>
            <h3 class="title">动态插入和删除</h3>
            <div class="toolbar">
              <button id="stickuplayout-demo-dynamic-append">插入</button>
            </div>
          </dt>
          <dd>
            <div class="ct-stickuplayout" id="stickuplayout-demo-dynamic">

              <ul class="ct-stickuplayout-inner">
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">基本参数</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>厂商指导价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>本地参考底价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>厂商</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>级别</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>能源类型</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>上市时间</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大功率(KW)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>发动机</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">车身</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">发动机</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">变速箱</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">车轮制动</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">主/被动安全装备</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
          </dd>
        </dl>

      <!--滚动到指定位置(通过索引)-->
      <dl>
          <dt>
            <h3 class="title">滚动到指定位置(通过索引)</h3>
            <div class="toolbar">
              <button id="stickuplayout-demo-scrollbyindex-noanimation-btn">滚动到最后一行(无动画)</button>
              <button id="stickuplayout-demo-scrollbyindex-animation-btn">滚动到最后一行(有动画)</button>
              <button id="stickuplayout-demo-scrollbyindex-top-btn">回到顶部</button>
            </div>
          </dt>
          <dd>
            <div class="ct-stickuplayout" id="stickuplayout-demo-scrollbyindex">

              <ul class="ct-stickuplayout-inner">
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">基本参数</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>厂商指导价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>本地参考底价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>厂商</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>级别</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>能源类型</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>上市时间</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大功率(KW)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>发动机</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">车身</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">发动机</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">变速箱</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">车轮制动</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">主/被动安全装备</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
          </dd>
        </dl>

      <!--滚动到指定位置(通过dom)-->
      <dl>
          <dt>
            <h3 class="title">滚动到指定位置(通过Dom)</h3>
            <div class="toolbar">
              <button id="stickuplayout-demo-scrollbyel-noanimation-btn">滚动到最后一行(无动画)</button>
              <button id="stickuplayout-demo-scrollbyel-animation-btn">滚动到最后一行(有动画)</button>
              <button id="stickuplayout-demo-scrollbyel-top-btn">回到顶部</button>
            </div>
          </dt>
          <dd>
            <div class="ct-stickuplayout" id="stickuplayout-demo-scrollbyel">

              <ul class="ct-stickuplayout-inner">
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">基本参数</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>厂商指导价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>本地参考底价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>厂商</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>级别</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>能源类型</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>上市时间</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大功率(KW)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>发动机</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">车身</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">发动机</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">变速箱</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">车轮制动</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li class="ct-stickuplayout-item">
                  <div class="ct-stickuplayout-item-header"><span class="title">主/被动安全装备</span></div>
                  <div class="ct-stickuplayout-item-content">
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
          </dd>
        </dl>

```

#### js

```

        <!--例子的js-->
        import $ from 'jquery';
        import StickupLayout from '@ctmobile/ui-stickuplayout/stickuplayout';
        import '@ctmobile/ui-stickuplayout/stickuplayout.less';

        let dynamicIndex = 0;

        function getDynamicTemplate() {
          return (
            <pre>
            <code class="html">
            `<li class="ct-stickuplayout-item">
              <div class="ct-stickuplayout-item-header"><span class="title">动态增加${++dynamicIndex}</span></div>
              <div class="ct-stickuplayout-item-content">
                <table>
                  <tr>
                  <td>长度(mm)</td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr>
                  <td>宽度(mm)</td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr>
                  <td>高度(mm)</td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr>
                  <td>轴距(mm)</td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr>
                  <td>前轮距(mm)</td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr>
                  <td>后轮距(mm)</td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr>
                  <td>车身结构</td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                  </tr>
                  <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                  </tr>
                </table>
              </div>
            </li>`
            </code>
            </pre>
          );
        }

        // 基本的
        StickupLayout($('#stickuplayout-demo-base')[0]);

        // 动态的插入
        const stickuplayoutDynamic = StickupLayout($('#stickuplayout-demo-dynamic')[0]);
        $('#stickuplayout-demo-dynamic-append').on('click', () => {
          const $dynamicItemJO = $(getDynamicTemplate());
          $('#stickuplayout-demo-dynamic .ct-stickuplayout-inner').append($dynamicItemJO);
          stickuplayoutDynamic.refresh();
          stickuplayoutDynamic.scrollToByHeaderEl($dynamicItemJO.find('.ct-stickuplayout-item-header')[0]);
        });

        // 通过索引滚动到指定位置
        const stickuplayoutScrollByIndex = StickupLayout($('#stickuplayout-demo-scrollbyindex')[0]);
        const $stickuplayoutScrollbyindexItemJO = $('#stickuplayout-demo-scrollbyindex .ct-stickuplayout-inner .ct-stickuplayout-item');
        $('#stickuplayout-demo-scrollbyindex-noanimation-btn').on('click', () => {
          stickuplayoutScrollByIndex.scrollToByIndex($stickuplayoutScrollbyindexItemJO.length - 1, 0);
        });
        $('#stickuplayout-demo-scrollbyindex-animation-btn').on('click', () => {
          stickuplayoutScrollByIndex.scrollToByIndex($stickuplayoutScrollbyindexItemJO.length - 1, 600);
        });
        $('#stickuplayout-demo-scrollbyindex-top-btn').on('click', () => {
          stickuplayoutScrollByIndex.scrollToByIndex(0);
        });

        // 通过dom滚动到指定位置
        const stickuplayoutScrollByDom = StickupLayout($('#stickuplayout-demo-scrollbyel')[0]);
        const $stickuplayoutScrollbyelItemJO = $('#stickuplayout-demo-scrollbyel .ct-stickuplayout-inner .ct-stickuplayout-item');
        $('#stickuplayout-demo-scrollbyel-noanimation-btn').on('click', () => {
          stickuplayoutScrollByDom.scrollToByHeaderEl($stickuplayoutScrollbyelItemJO[$stickuplayoutScrollbyelItemJO.length - 1].querySelector('.ct-stickuplayout-item-header'), 0);
        });
        $('#stickuplayout-demo-scrollbyel-animation-btn').on('click', () => {
          stickuplayoutScrollByDom.scrollToByHeaderEl($stickuplayoutScrollbyelItemJO[$stickuplayoutScrollbyelItemJO.length - 1].querySelector('.ct-stickuplayout-item-header'), 600);
        });
        $('#stickuplayout-demo-scrollbyel-top-btn').on('click', () => {
          stickuplayoutScrollByDom.scrollToByHeaderEl($stickuplayoutScrollbyelItemJO[0].querySelector('.ct-stickuplayout-item-header'));
        });

```

## 方法

scrollToByIndex(index,duration) - 通过索引滚动到某一项

* index-number 要滚动到目标的索引
* duration-number 滚动持续的时间(默认是300毫秒)

scrollToByHeaderEl(headerEl,duration) - 通过dom滚动到某一项

* headerEl-HtmlElement 要滚动到的dom(带有ct-stickuplayout-item-header样式的元素)
* duration-number 滚动持续的时间(默认是300毫秒)

refresh() - 刷新整个StickupLayout

on(type, handler) - 注册事件

* type-string 注册事件的类型,包括[change]
* handler-Function 注册事件的回调函数

## 事件

|  名称 |  说明 |
| --- | --- |
| change |  滚动切换时触发 |

```

  <!--事件例子代码-->
  import $ from 'jquery';
  import StickupLayout from '@ctmobile/ui-stickuplayout/stickuplayout';
  import '@ctmobile/ui-stickuplayout/stickuplayout.less';

  // 基本的
  const stickUpLayout = StickupLayout($('#stickuplayout-demo-base')[0]);
  stickUpLayout.on('change', (dom, index) => {
      console.log(dom);
      console.log(index);
  });

```
