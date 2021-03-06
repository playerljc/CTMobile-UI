import _ from 'lodash';

const template = {
  toast:
    _.template(
      `<div class="ct-messdialog-toast-<%=position%>">
          <div class="ct-messdialog-toast-wrap"><%=text%></div>
       </div>`
    ),
  alert:
    _.template(
      `<div class="ct-messdialog-dialog">
         <div class="ct-messdialog-dialog-in">
             <div class="ct-messdialog-dialog-in-inner">
                 <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>
                 <div class="ct-messdialog-dialog-in-inner-text <%=icon%>"><%=text%></div>
             </div>
             <div class="ct-messdialog-dialog-in-buttons">
                 <span class="ct-messdialog-dialog-in-buttons-button">确定</span>
             </div>
         </div>
      </div>`
    ),
  confirm:
    _.template(
      `<div class="ct-messdialog-dialog">
         <div class="ct-messdialog-dialog-in">
             <div class="ct-messdialog-dialog-in-inner">
                 <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>
                 <div class="ct-messdialog-dialog-in-inner-text <%=icon%>"><%=text%></div>
             </div>
             <div class="ct-messdialog-dialog-in-buttons">
                 <span class="ct-messdialog-dialog-in-buttons-button ok">确定</span>
                 <span class="ct-messdialog-dialog-in-buttons-button cancel">取消</span>
             </div>
         </div>
      </div>`
    ),
  prompt:
    _.template(
      `<div class="ct-messdialog-dialog">
         <div class="ct-messdialog-dialog-in">
             <div class="ct-messdialog-dialog-in-inner">
                 <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>
                 <div class="ct-messdialog-dialog-in-inner-text"><%=text%></div>
                 <div class="ct-messdialog-dialog-in-inner-input-field <%=icon%>">
                     <input type="text" value="<%=defaultVal%>" class="text-input" placeholder="<%=placeholder%>">
                 </div>
             </div>
             <div class="ct-messdialog-dialog-in-buttons">
                 <span class="ct-messdialog-dialog-in-buttons-button ok">确定</span>
                 <span class="ct-messdialog-dialog-in-buttons-button cancel">取消</span>
             </div>
         </div>
      </div>`
    ),
  promptmulit:
    _.template(
      `<div class="ct-messdialog-dialog">
         <div class="ct-messdialog-dialog-in">
             <div class="ct-messdialog-dialog-in-inner">
                 <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>
                 <div class="ct-messdialog-dialog-in-inner-text"><%=text%></div>
                 <div class="ct-messdialog-dialog-in-inner-input-field <%=icon%>">
                     <textarea value="<%=defaultVal%>" class="text-input" placeholder="<%=placeholder%>"></textarea>
                 </div>
             </div>
             <div class="ct-messdialog-dialog-in-buttons">
                 <span class="ct-messdialog-dialog-in-buttons-button ok">确定</span>
                 <span class="ct-messdialog-dialog-in-buttons-button cancel">取消</span>
             </div>
         </div>
      </div>`
    ),
  custom:
    _.template(
      `<div class="ct-messdialog-dialog">
         <div class="ct-messdialog-dialog-in">
             <div class="ct-messdialog-dialog-in-inner">
                 <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>
                 <div class="ct-messdialog-dialog-in-inner-container"><%=html%></div>
             </div>
             <div class="ct-messdialog-dialog-in-buttons"></div>
         </div>
      </div>`
    ),
  infinite:
    _.template(
      `<div class="ct-messdialog-dialog">
         <div class="ct-messdialog-dialog-in">
             <div class="ct-messdialog-dialog-in-inner">
                 <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>
                 <div class="ct-messdialog-dialog-in-inner-text"><%=text%></div>
                 <div class="ct-messdialog-dialog-in-inner-input-field">
                   <div class="progress-infinite"></div>
                 </div>
             </div>
             <div class="ct-messdialog-dialog-in-buttons"></div>
         </div>
      </div>`
    ),
  determined:
    _.template(
      `<div class="ct-messdialog-dialog">
         <div class="ct-messdialog-dialog-in">
             <div class="ct-messdialog-dialog-in-inner">
                 <div class="ct-messdialog-dialog-in-inner-title"><%=title%></div>
                 <div class="ct-messdialog-dialog-in-inner-text"><%=text%></div>
                 <div class="ct-messdialog-dialog-in-inner-text ct-messdialog-dialog-in-inner-progress-text "><%=format%></div>
                 <div class="ct-messdialog-dialog-in-inner-input-field">
                   <div class="progress-determined">
                    <div class="progress-bar"></div>
                   </div>
                 </div>
             </div>
             <div class="ct-messdialog-dialog-in-buttons"></div>
         </div>
      </div>`
    ),
  loading:
    _.template(
      `<div class="ct-messdialog-loading">
          <!-- nonetwork -->
          <div class="ct-messdialog-loading-nonetwork">
              <div class="ct-messdialog-loading-nonetwork-header">
                <a data-role="none" class="icon-back-purple"></a>
              </div>
              <div class="ct-messdialog-loading-nonetwork-content">
                 <div class="ct-messdialog-loading-nonetwork-content-logo"></div>
                 <div class="ct-messdialog-loading-nonetwork-content-tip"></div>
                 <div class="ct-messdialog-loading-nonetwork-content-setting">设置</div>
              </div>
          </div>
          <!-- fail -->
          <div class="ct-messdialog-loading-fail">
              <div class="ct-messdialog-loading-fail-header">
                <a data-role="none" class="icon-back-purple"></a>
              </div>
              <div class="ct-messdialog-loading-fail-content">
                 <div class="ct-messdialog-loading-fail-content-logo"></div>
                 <div class="ct-messdialog-loading-fail-content-tip"></div>
                 <div class="ct-messdialog-loading-fail-content-refresh">重试</div>
              </div>
          </div>
          <!-- loading -->
         <div class="ct-messdialog-loading-loading">
             <div class="la-ball-clip-rotate la-dark" style="color: #3e98f0;">
                 <div></div>
             </div>
             <div class="ct-messdialog-loading-loading-tip">加载中...</div>
         </div>
          <!-- empty -->
          <div class="ct-messdialog-loading-empty">
              <div class="ct-messdialog-loading-empty-logo"></div>
              <div class="ct-messdialog-loading-empty-tip"></div>
              <div class="ct-messdialog-loading-empty-refresh">重新加载</div>
          </div>
          <!-- submit -->
          <div class="ct-messdialog-loading-submit">
              <div class="ct-messdialog-loading-submit-inner">
                  <div class="la-line-spin-clockwise-fade-rotating la-dark">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
                  <span class="ct-messdialog-loading-submit-inner-tip">玩命处理中，请稍后...</span>
              </div>
          </div>
      </div>`
    ),
};

/**
 * 显示
 * @param {HtmlElement} component
 * @param {HtmlElement} inner
 * @access private
 */
function show(component, inner) {
  const handler = setTimeout(() => {
    clearTimeout(handler);
    component.classList.add('ct-messdialog-dialog-in-show');
    inner.classList.add('ct-messdialog-dialog-in-show');
  }, 100);
}

/** *
 * 关闭
 * @param {HtmlElement} parent 父对象
 * @param {HtmlElement} inner
 * @param {HtmlElement}component 组件本身
 * @param {Function} callback 回调
 * @access private
 */
function close(parent, inner, component, callback) {
  function transitionendAction() {
    inner.removeEventListener('transitionend', transitionendAction);
    component.classList.remove('ct-messdialog-dialog-in-hide');
    inner.classList.remove('ct-messdialog-dialog-in-hide');
    component.style.display = 'none';
    parent.removeChild(component);
    inner = null;
    component = null;
    if (callback) {
      callback();
    }
  }

  inner.addEventListener('transitionend', transitionendAction);
  inner.classList.remove('ct-messdialog-dialog-in-show');
  component.classList.remove('ct-messdialog-dialog-in-show');
  inner.classList.add('ct-messdialog-dialog-in-hide');
  component.classList.add('ct-messdialog-dialog-in-hide');
}

/**
 * 根据html创建dom
 * @param {template} template
 * @param {Object} obj
 * @access private
 * @return {HtmlElement}
 */
function createElement(template, obj = {}) {
  const html = template(obj);
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
}


/**
 * 创建alert框
 * @param {Object} config
 * {
 *   {HtmlElement} parent 父容器 dom
 *   {string} title 标题
 *   {string} text 内容
 *   {string} icon 图标
 *   {Function} callback 点击确定回调函数
 * }
 * @access private
 * @returns {Object}
 */
function alertCreate({ parent, title, text, icon, callback }) {
  const alert = createElement(template.alert, { title, text, icon });
  alert.querySelector('.ct-messdialog-dialog-in-buttons-button').addEventListener('click', () => {
    close(parent, inner, alert, callback);
  });
  parent.appendChild(alert);

  const inner = alert.querySelector('.ct-messdialog-dialog-in');
  alert.style.display = 'flex';
  show(alert, inner);

  return {
    close() {
      close(parent, inner, alert, callback);
    },
  };
}

/**
 * 创建一个confirm框
 * @param config
 * {
 *  {HtmlElement} parent
 *  {string} title
 *  {string} text
 *  {string} icon
 *  {Function} callback
 * }
 * @access private
 */
function confirmCreate({ parent, title, text, icon, callback }) {
  const confirm = createElement(template.confirm, { title, text, icon });
  confirm.querySelector('.ok').addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    close(parent, inner, confirm, () => {
      if (callback) {
        callback(0);
      }
    });
  });
  confirm.querySelector('.cancel').addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    close(parent, inner, confirm, () => {
      if (callback) {
        callback(1);
      }
    });
  });
  parent.appendChild(confirm);

  const inner = confirm.querySelector('.ct-messdialog-dialog-in');
  confirm.style.display = 'flex';

  show(confirm, inner);
}

/**
 * 创建prompt
 * @param {Object} config
 * {
 *  {string} type [prompt | promptmulit]
 *  {HtmlElement} parent
 *  {string} selector 选择器为form(表单)中的控件
 *  {string} title
 *  {string} text
 *  {string} icon
 *  {string} defaultVal
 *  {string} placeholder
 *  {Function} callback
 * }
 * @access private
 */
function promptCreate({ type, parent, selector, title, text, icon, defaultVal, placeholder, callback }) {
  const prompt = createElement(template[type], {
    title,
    text,
    icon,
    defaultVal,
    placeholder,
  });
  prompt.querySelector('.ok').addEventListener('click', () => {
    close(parent, inner, prompt, () => {
      if (callback) {
        callback(0, formFieldDom.value);
      }
    });
  });
  prompt.querySelector('.cancel').addEventListener('click', () => {
    close(parent, inner, prompt, () => {
      if (callback) {
        callback(1, formFieldDom.value);
      }
    });
  });
  parent.appendChild(prompt);

  const inner = prompt.querySelector('.ct-messdialog-dialog-in');
  const formFieldDom = inner.querySelector(selector);
  prompt.style.display = 'flex';

  show(prompt, inner);
}

/**
 * 创建一个自定义对话框
 * @param {Object} config
 * {
 *  {HtmlElement} parent
 *  {string} title
 *  {string} html
 *  {Array} buttons
 *  {Function} rendercallback
 * }
 * @access private
 * @return {Object}
 */
function customdialogCreate({ parent, title, html, buttons, rendercallback }) {
  const dialog = createElement(template.custom, { title, html });

  const containerDom = dialog.querySelector('.ct-messdialog-dialog-in-inner-container');
  const buttonsDom = dialog.querySelector('.ct-messdialog-dialog-in-buttons');
  const btnDoms = buttonsDom.children;
  buttonsDom.addEventListener('click', (e) => {
    const { target } = e;
    const index = Array.prototype.indexOf.call(btnDoms, target);
    if (buttons[index] && buttons[index].handler) {
      buttons[index].handler();
    }
  });

  const df = document.createDocumentFragment();
  for (let i = 0; buttons && i < buttons.length; i++) {
    const button = buttons[i];
    df.appendChild(createElement(_.template(`<span class='ct-messdialog-dialog-in-buttons-button'>${button.text}</span>`)));
  }
  buttonsDom.appendChild(df);

  parent.appendChild(dialog);
  if (rendercallback) {
    rendercallback(containerDom);
  }

  const inner = dialog.querySelector('.ct-messdialog-dialog-in');
  dialog.style.display = 'flex';
  show(dialog, inner);

  return {
    el: dialog,
    close() {
      close(parent, inner, dialog);
    },
  };
}

/**
 *  无限进度的对话框
 *  @param {Object} config
 *  {
 *    {HtmlElement} parent
 *    {string} title
 *    {string} text
 *    {Array} buttons
 *    {Function} rendercallback
 *  }
 *  @access private
 *  @return {Object}
 */
function infiniteProgressDialogCreate({ parent, title, text = '', buttons, rendercallback }) {
  const dialog = createElement(template.infinite, { title, text });

  const containerDom = dialog.querySelector('.ct-messdialog-dialog-in-inner-container');
  const buttonsDom = dialog.querySelector('.ct-messdialog-dialog-in-buttons');
  const btnDoms = buttonsDom.children;
  buttonsDom.addEventListener('click', (e) => {
    const { target } = e;
    const index = Array.prototype.indexOf.call(btnDoms, target);
    if (buttons[index] && buttons[index].handler) {
      buttons[index].handler();
    }
  });

  const df = document.createDocumentFragment();
  for (let i = 0; buttons && i < buttons.length; i++) {
    const button = buttons[i];
    df.appendChild(createElement(_.template(`<span class='ct-messdialog-dialog-in-buttons-button'>${button.text}</span>`)));
  }
  buttonsDom.appendChild(df);

  parent.appendChild(dialog);
  if (rendercallback) {
    rendercallback(containerDom);
  }

  const inner = dialog.querySelector('.ct-messdialog-dialog-in');
  dialog.style.display = 'flex';
  show(dialog, inner);

  return {
    el: dialog,
    close() {
      close(parent, inner, dialog);
    },
  };
}

/**
 进度对话框
 * * @param {Object} config
 * {
 *  {HtmlElement} parent
 *  {string} title
 *  {string} text
 *  {string} format
 *  {number} total
 *  {Array} buttons
 *  {Function} rendercallback
 *  {Function} completecallback
 *  {Function} changecallback
 *  @return {Object}
 * }
 */
function determinedProgressDialogCreate({ parent, title = '', text = '', format = '<%=value%> of <%=total%>', total = 100, buttons = [], rendercallback, completecallback, changecallback }) {
  const templateStr = template.determined({ title, text, format });
  const dialog = createElement(_.template(templateStr), { value: 0, total });

  const containerDom = dialog.querySelector('.ct-messdialog-dialog-in-inner-container');
  const buttonsDom = dialog.querySelector('.ct-messdialog-dialog-in-buttons');
  const progressBarDom = dialog.querySelector('.progress-bar');
  const progressTextDom = dialog.querySelector('.ct-messdialog-dialog-in-inner-progress-text');
  const btnDoms = buttonsDom.children;
  buttonsDom.addEventListener('click', (e) => {
    const { target } = e;
    const index = Array.prototype.indexOf.call(btnDoms, target);
    if (buttons[index] && buttons[index].handler) {
      buttons[index].handler();
    }
  });

  const df = document.createDocumentFragment();
  for (let i = 0; buttons && i < buttons.length; i++) {
    const button = buttons[i];
    df.appendChild(createElement(_.template(`<span class='ct-messdialog-dialog-in-buttons-button'>${button.text}</span>`)));
  }
  buttonsDom.appendChild(df);

  parent.appendChild(dialog);
  if (rendercallback) {
    rendercallback(containerDom);
  }

  const inner = dialog.querySelector('.ct-messdialog-dialog-in');
  dialog.style.display = 'flex';
  show(dialog, inner);

  return {
    el: dialog,
    close() {
      close(parent, inner, dialog);
    },
    setValue(value) {
      if (!value) return false;
      if (typeof value === 'string') {
        value = parseFloat(value);
      }

      if (isNaN(value)) return false;

      if (value < 0) {
        value = 0;
      }

      if (value > total) {
        value = total;
      }

      progressBarDom.style.width = `${Math.floor(value / total * 100)}%`;
      const progressText = _.template(format)({ value, total });
      progressTextDom.innerText = progressText;
      if (value !== total) {
        if (changecallback) {
          changecallback(value);
        }
      } else if (completecallback) {
        completecallback();
      }
    },
  };
}

/**
 * Toast
 * @class
 * @classdesc
 */
class Toast {
  /**
   * @constructor
   * @param {Object} config
   */
  constructor(config) {
    this.config = config;
    this.init();
  }

  static toastQueue = [];
  static toastKey = false;

  /**
   * init
   */
  init() {
    let { parent, text = '', position, duration } = this.config;
    duration = duration === 'long' ? 2000 : 1000;
    const toast = createElement(template.toast, {
      text,
      position,
    });

    Toast.toastQueue.push({
      parent,
      toast,
      duration,
    });

    if (Toast.toastKey) return;
    Toast.toastKey = true;
    this.showToast();
  }

  /**
   * showToast
   */
  showToast() {
    const self = this;

    if (Toast.toastQueue.length === 0) {
      Toast.toastKey = false;
      return;
    }

    let toast = Toast.toastQueue.shift();
    const { duration, parent } = toast;
    toast = toast.toast;

    const inner = toast.querySelector('.ct-messdialog-toast-wrap');
    parent.appendChild(toast);

    toast.style.display = 'flex';
    setTimeout(() => {
      inner.classList.add('ct-messdialog-toast-show');
      setTimeout(() => {
        function transitionendAction() {
          inner.removeEventListener('transitionend', transitionendAction);
          toast.style.display = 'none';
          parent.removeChild(toast);
          self.showToast();
        }

        inner.addEventListener('transitionend', transitionendAction);
        inner.classList.remove('ct-messdialog-toast-show');
      }, duration);
    }, 100);
  }
}

/**
 * 创建一个toast
 * @param {Object} config
 * {
 *  {HtmlElement} parent
 *  {string} text
 *  {string} position
 *  {string} duration
 * }
 * @access private
 */
const makeTextCreate = (config) => {
  new Toast(config);
};

/**
 * 显示一个数据加载的遮罩
 * @param {Object} config
 * {
 *  {HtmlElement} parent 父元素 dom
 *  {string} tip string 提示
 *  {string} refreshCallback 重新加载数据的回调函数
 *  {string} boundingCallback 加载loading,empty的时候top和bottom的值
 *  {boolean} isShowHeader nonetwork,fail 是否需要显示头
 * }
 * @access private
 *
 * loading,empty需要设置top和bottom
 * nonetwork,fail,submit 不需要设置
 * nonetwork,fail 是有header的
 */
function makeLoadingCreate({ parent, refreshCallback, boundingCallback, isShowHeader }) {
  let loading = createElement(template.loading);
  const loadingDom = loading.querySelector('.ct-messdialog-loading-loading');
  const failDom = loading.querySelector('.ct-messdialog-loading-fail');
  const nonetworkDom = loading.querySelector('.ct-messdialog-loading-nonetwork');
  const emptyDom = loading.querySelector('.ct-messdialog-loading-empty');
  const submitDom = loading.querySelector('.ct-messdialog-loading-submit');

  // 重试
  const refreshDoms = [
    loading.querySelector('.ct-messdialog-loading-nonetwork-content-setting'),
    loading.querySelector('.ct-messdialog-loading-fail-content-refresh'),
    loading.querySelector('.ct-messdialog-loading-empty-refresh'),
  ];
  if (refreshDoms && refreshDoms.length !== 0) {
    for (let i = 0, len = refreshDoms.length; i < len; i++) {
      refreshDoms[i].addEventListener('click', () => {
        if (refreshCallback) {
          refreshCallback();
        }
      });
    }
  }

  /**
   * 进行网络设置
   */
  loading.querySelector('.ct-messdialog-loading-nonetwork-content-setting').addEventListener('click', () => {

  });

  parent.appendChild(loading);

  return {
    setLoadingTip(tip) {
      loadingDom.querySelector('.ct-messdialog-loading-loading-tip').innerText = tip;
    },
    setNoNetWorkTip(tip) {
      nonetworkDom.querySelector('.ct-messdialog-loading-nonetwork-content-tip').innerText = tip;
    },
    setFailTip(tip) {
      failDom.querySelector('.ct-messdialog-loading-fail-content-tip').innerText = tip;
    },
    setEmptyTip(tip) {
      emptyDom.querySelector('.ct-messdialog-loading-empty-tip').innerText = tip;
    },
    setSubmitTip(tip) {
      submitDom.querySelector('.ct-messdialog-loading-submit-inner-tip').innerText = tip;
    },
    showLoading() {
      parent.style.overflowY = 'hidden';
      loadingDom.style.display = 'flex';
      nonetworkDom.style.display = failDom.style.display = emptyDom.style.display = submitDom.style.display = 'none';
      if (boundingCallback) {
        const bound = boundingCallback();
        loading.style.top = bound.top;
        loading.style.bottom = bound.bottom;
      }
      loading.style.display = 'flex';
    },
    showEmpty() {
      parent.style.overflowY = 'hidden';
      emptyDom.style.display = 'flex';
      nonetworkDom.style.display = loadingDom.style.display = failDom.style.display = submitDom.style.display = 'none';
      if (boundingCallback) {
        const bound = boundingCallback();
        loading.style.top = bound.top;
        loading.style.bottom = bound.bottom;
      }
      loading.style.display = 'flex';
    },
    showNoNetWork() {
      parent.style.overflowY = 'hidden';
      nonetworkDom.style.display = 'block';
      loadingDom.style.display = failDom.style.display = emptyDom.style.display = submitDom.style.display = 'none';
      loading.style.top = '0';
      loading.style.bottom = '0';
      if (isShowHeader) {
        if (isShowHeader()) {
          nonetworkDom.querySelector('.ct-messdialog-loading-nonetwork-header').style.display = 'block';
        } else {
          nonetworkDom.querySelector('.ct-messdialog-loading-nonetwork-header').style.display = 'none';
        }
      } else {
        nonetworkDom.querySelector('.ct-messdialog-loading-nonetwork-header').style.display = 'block';
      }
      loading.style.display = 'block';
    },
    showFail() {
      parent.style.overflowY = 'hidden';
      failDom.style.display = 'block';
      nonetworkDom.style.display = loadingDom.style.display = emptyDom.style.display = submitDom.style.display = 'none';
      loading.style.top = '0';
      loading.style.bottom = '0';
      if (isShowHeader) {
        if (isShowHeader()) {
          failDom.querySelector('.ct-messdialog-loading-fail-content').style.top = '3rem';
          failDom.querySelector('.ct-messdialog-loading-fail-header').style.display = 'flex';
        } else {
          failDom.querySelector('.ct-messdialog-loading-fail-content').style.top = '0';
          failDom.querySelector('.ct-messdialog-loading-fail-header').style.display = 'none';
        }
      } else {
        failDom.querySelector('.ct-messdialog-loading-fail-content').style.top = '3rem';
        failDom.querySelector('.ct-messdialog-loading-fail-header').style.display = 'flex';
      }
      loading.style.display = 'block';
    },
    showSubmit() {
      parent.style.overflowY = 'hidden';
      submitDom.style.display = 'flex';
      nonetworkDom.style.display = loadingDom.style.display = failDom.style.display = emptyDom.style.display = 'none';
      loading.style.top = '0';
      loading.style.bottom = '0';
      loading.style.display = 'flex';
    },
    hide() {
      parent.style.overflowY = 'auto';
      loading.style.display = 'none';
      nonetworkDom.style.display = emptyDom.style.display = loadingDom.style.display = failDom.style.display = submitDom.style.display = 'none';
    },
    close() {
      parent.style.overflowY = 'hidden';
      parent.removeChild(loading);
      loading = null;
    },
    isShowLoading() {
      if (loadingDom.style.display === 'none') {
        return false;
      } else {
        return true;
      }
    },
    isShowNoNetWork() {
      if (nonetworkDom.style.display === 'none') {
        return false;
      } else {
        return true;
      }
    },
    isShowFail() {
      if (failDom.style.display === 'none') {
        return false;
      } else {
        return true;
      }
    },
    isShowEmpty() {
      if (emptyDom.style.display === 'none') {
        return false;
      } else {
        return true;
      }
    },
    isShowSubmit() {
      if (submitDom.style.display === 'none') {
        return false;
      } else {
        return true;
      }
    },
    getParent() {
      return parent;
    },
  };
}

/**
 * MessageDialog
 * @class MessageDialog
 * @classdesc MessageDialog
 */
class MessageDialog {
  /**
   * 显示一个消息提示框
   * @param {Object} config
   * {
   *   {HtmlElement} parent 父容器 dom
   *   {string} title 标题
   *   {string} text 内容
   *   {string} icon 图标
   *   {Function} callback 点击确定回调函数
   * }
   * @return {Object} {
   *   @param {Function} close 关闭窗体
   * }
   */
  static alert(config) {
    return alertCreate(config);
  }

  /**
   * 显示一个确认对话框
   * @param {Object} config
   * {
   *   {HtmlElement} parent 父容器 dom
   *   {string} title 标题
   *   {string} text 内容
   *   {string} icon 图标
   *   {Function} callback 回调函数
   *   flag [0 | 1] 0确定 1取消
   * }
   */
  static confirm(config) {
    confirmCreate(config);
  }

  /**
   * 弹出一个带有input的对话框
   * @param {Object} config
   * {
   *  {HtmlElement} parent 父容器 dom
   *  {string} title string 标题
   *  {string} text string 内容
   *  {string} icon string 图标
   *  {string} defaultVal string 缺省值
   *  {string} placeholder string input的缺省提示
   *  {Function} callback 成功的回调函数
   *  flag [0 | 1] 0确定 1取消
   *  {string} value 输入的值
   * }
   */
  static prompt(config) {
    promptCreate({ type: 'prompt', selector: 'input', ...config });
  }

  /**
   * 弹出一个带有textarea的对话框
   * @param {Object} config
   * {
   *  {HtmlElement} parent
   *  {string} title
   *  {string} text
   *  {string} icon
   *  {string} defaultVal
   *  {string} placeholder
   *  {Function} callback
   *  {string} value 输入的值
   * }
   */
  static promptmulit(config) {
    promptCreate({ type: 'promptmulit', selector: 'textarea', ...config });
  }

  /**
   * 自定义对话框
   * @param {Object} config
   * {
   *  {HtmlElement} parent
   *  {string} title
   *  {string} html
   *  {Array} buttons
   *  {Function} rendercallback
   *  @return {Object}
   * }
   */
  static customDialog(config) {
    return customdialogCreate(config);
  }

  /**
   * 无限进度的对话框
   * * @param {Object} config
   * {
   *  {HtmlElement} parent
   *  {string} title
   *  {string} text
   *  {Array} buttons
   *  {Function} rendercallback
   *  @return {Object}
   * }
   */
  static infiniteProgressDialog(config) {
    return infiniteProgressDialogCreate(config);
  }

  /**
   * 进度对话框
   * * @param {Object} config
   * {
   *  {HtmlElement} parent
   *  {string} title
   *  {string} text
   *  {string} format
   *  {number} total
   *  {Array} buttons
   *  {Function} rendercallback
   *  {Function} completecallback
   *  {Function} changecallback
   *  @return {Object}
   * }
   */
  static determinedProgressDialog(config) {
    return determinedProgressDialogCreate(config);
  }

  /**
   * 显示一个toast
   * @param {Object} config
   * {
   *  {HtmlElement} parent 父容器 dom
   *  {string} text 内容
   *  {string} position 位置 [top | bottom | center] default bottom
   *  {string} duration 持续时间 [long | short] default short
   * }
   */
  static makeText(config) {
    makeTextCreate(config);
  }

  /**
   * 显示一个数据加载的遮罩
   * @config {Object}
   * {
   *  {HtmlElement} parent 父元素 dom
   *  {string} tip 提示
   *  {Function} refreshCallback 重新加载数据的回调函数
   *  {Function} boundingCallback 加载loading,empty的时候top和bottom的值
   *  {Function} isShowHeader nonetwork,fail 是否需要显示头
   * }
   * loading,empty需要设置top和bottom
   * nonetwork,fail,submit 不需要设置
   * nonetwork,fail 是有header的
   *
   * @return {Object}
   */
  static makeLoading(config) {
    return makeLoadingCreate(config);
  }
}

/**
 * MessageDialogFactory
 * @param {HtmlElement} el
 * @return {MessageDialog}
 */
export default MessageDialog;
