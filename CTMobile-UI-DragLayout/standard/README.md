# DragLayout

* [基本布局](#draglayout-layout)
* [初始化](#draglayout-initial)
* [例子](#draglayout-demo)
* [方法](#draglayout-methods)

## 基本布局

常见的布局如下：

```

  <div class="ct-draglayout">
    <div class="ct-draglayout-slave" style="width: 60%;">
      我是隐藏的面板
    </div>
    <div class="ct-draglayout-master">
      我是主面板
    </div>
  </div>

```

* ct-draglayout - 代表是一个draglayout组件
  - ct-draglayout-master - 代表主面板
  - ct-draglayout-slave - 代表副面板

## 初始化

```

  import DragLayout from '@ctmobile/ui-draglayout';
  const draglayout = DragLayout(el);

```

## 例子

#### html

```

          <div class="ct-draglayout" id="ct-draglayout-demo">
            <div class="ct-draglayout-slave" style="width: 60%;">
              我是隐藏的面板
            </div>
            <div class="ct-draglayout-master">
              我是主面板
            </div>
          </div>

```

#### js

```

          import DragLayout from '@ctmobile/ui-draglayout';
          DragLayout($('#ct-draglayout-demo')[0],{
            showCallback() {
              console.log('show');
            },
            hideCallback() {
              console.log('hide');
            }
          });

```

## 方法

show() - 显示

hide() - 隐藏

isShow() - 收显示
