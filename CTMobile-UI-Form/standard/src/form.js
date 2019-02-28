import $ from 'jquery';
import _ from 'lodash';

/** *
 * requireInputTypes
 */
const requireInputTypes = [
  'text', 'number', 'email', 'url', 'tel', 'date', 'week', 'datetime', 'datetime-local', 'image', 'month', 'time', 'password', 'range', 'search',
];

/** *
 * insetMaterialLabel
 */
const insetMaterialLabel = {
  label:
    `<%if(label) {%>
      <div class="label">
        <%if(require) {%><i class="require"></i><%}%>
        <%=label%>
      </div>
      <%}%>`,
  input: '     <%=input%>',
};

/** *
 * rangeTipTemplate
 */
const rangeTipTemplate = _.template(
  '<%=minLength%> / <%=maxLength%>'
);

/** *
 * templates
 */
const templates = {
  layout: {
    outset:
      _.template(
        `<div class="ct-form-control <%=type%> <%=labelposition%> <%=labelalign%>">
           <div class="ct-form-control-inner">
             <div class="label">
             <%if(require) {%><i class="require"></i><%}%>
             <%=label%>
             </div>
             <div class="controlWrap <%=full%>"><%=control%></div>
           </div>
           <div class="tooltipwrap">
              <div class="errormessage"></div>
              <div class="tooltipfixed">
              <%if(tooltip){%><div class="tooltip"><%=tooltip%></div><%}%>
              <%if(rangetip){%><div class="rangetip"><%=rangetip%></div><%}%>
              </div>
           </div>
        </div>`
      ),
    inset: {
      default:
        _.template(
          `<div class="ct-form-control default labelleft labelinset">
             <div class="ct-form-control-inner">
               <%=control%>
             </div>
             <div class="tooltipwrap">
              <div class="errormessage"></div>
              <div class="tooltipfixed">
              <%if(tooltip){%><div class="tooltip"><%=tooltip%></div><%}%>
              <%if(rangetip){%><div class="rangetip"><%=rangetip%></div><%}%>
              </div>
             </div>
           </div>`
        ),
      material:
        _.template(
          `<div class="ct-form-control material labelleft labelinset">
             <div class="ct-form-control-inner">
               <%=control%>
             </div>
             <div class="tooltipwrap">
              <div class="errormessage"></div>
              <div class="tooltipfixed">
              <%if(tooltip){%><div class="tooltip"><%=tooltip%></div><%}%>
              <%if(rangetip){%><div class="rangetip"><%=rangetip%></div><%}%>
              </div>
             </div>
           </div>`
        ),
    },
  },
  controls: {
    clearinput:
      _.template(
        `<div class="ct-form-clearinput <%=type%> <%=full%>">
           <div class="inner <%=labelalign%>">
             <%if(inset && type === "material"){%>
             ${insetMaterialLabel.input + insetMaterialLabel.label}
             <%}else{%>
             ${insetMaterialLabel.label + insetMaterialLabel.input}
             <%}%>
             <%if(border){%><div class="border"></div><%}%>
           </div>
           <div class="ct-form-tool"><span class="clear"></span></div>
        </div>`
      ),
    pwdtoggle:
      _.template(
        `<div class="ct-form-clearinput ct-form-pwdtoggle <%=type%> <%=full%>">
           <div class="inner <%=labelalign%>">
             <%if(inset && type === "material"){%>
             ${insetMaterialLabel.input + insetMaterialLabel.label}
             <%}else{%>
             ${insetMaterialLabel.label + insetMaterialLabel.input}
             <%}%>
             <%if(border){%><div class="border"></div><%}%>
           </div>
           <div class="ct-form-tool">
             <span class="toggle"></span>
             <span class="clear"></span>
           </div>
        </div>`
      ),
    autoheighttextarea:
      _.template(
        `<div class="ct-form-expandingarea <%=type%> <%=full%>">
           <div class="inner <%=labelalign%>">
              <%if(label) {%>
              <div class="label">
                <%if(require) {%><i class="require"></i><%}%>
                <%=label%>
              </div>
              <%}%>
              <div class="ct-form-expandingarea-inner">
               <pre><span></span><br></pre>
               <%=input%>
              </div>
              <%if(border){%><div class="border"></div><%}%>
           </div>
        </div>`
      ),
    select:
      _.template(
        `<div class="ct-form-select <%=type%> <%=full%>">
           <div class="inner <%=labelalign%>">
              <%if(label) {%>
              <div class="label">
                <%if(require) {%><i class="require"></i><%}%>
                <%=label%>
              </div>
              <%}%>
              <%=input%>
              <%if(border){%><div class="border"></div><%}%>
           </div>
         </div>`
      ),
    radio:
      _.template(
        `<div class="ct-form-radio <%=type%>">
           <%=input%>
           <div class="radio">
              <div class="inner"></div>
           </div>
         </div>`
      ),
    checkbox:
      _.template(
        `<div class="ct-form-checkbox <%=type%>">
           <%=input%>
           <div class="checkbox"></div>
         </div>`
      ),
    switch:
      _.template(
        `<div class="ct-form-switch <%=type%>">
           <%=input%>
           <div class="checkbox"></div>
         </div>`
      ),
    slider:
      _.template(
        `<div class="ct-form-slider <%=type%>">
          <%=input%>
         </div>`
      ),
    spinner:
      _.template(
        `<div class="ct-form-spinner <%=type%>">
           <%=input%>
           <a class="minus"></a>
           <a class="plus"></a>
         </div>`
      ),
    radiogroup:
      _.template(
        `<div class="ct-form-radiogroup-wrap <%=type%>">
           <%=input%>
         </div>`
      ),
    checkboxgroup:
      _.template(
        `<div class="ct-form-checkboxgroup-wrap <%=type%>">
           <%=input%>
         </div>`
      ),
  },
};

/** *
 * containers
 */
const containers = {
  // 自动适应高的textarea
  autoheighttextarea: renderAutoheighttextarea,
  // 带清除功能的input
  clearinput: renderClearinput,
  // 带有眼睛的password
  pwdtoggle: renderPwdToggle,
  // select
  select: renderSelect,
  // radio
  radio: renderRadio,
  // checkbox
  checkbox: renderCheckbox,
  // switch
  switch: renderSwitch,
  // slider
  slider: renderSlider,
  // spinner
  spinner: renderSpinner,
  // radiogroup
  radiogroup: renderRadioGroup,
  // checkboxgroup
  checkboxgroup: renderCheckboxGroup,
};

/** *
 * _validateChainConfig
 */
const validateChainConfig = [
  {
    isValidate: ['data-ctform-config-require'],
    validate: RequireChain,
  }, {
    isValidate: ['data-ctform-config-minlength', 'data-ctform-config-maxlength'],
    validate: PatternChain,
  }, {
    isValidate: ['data-ctform-config-pattern'],
    validate: LengthChain,
  },
];

/**
 * patterns
 */
const patterns = {
  // // 数字
  // 'digit': /^[-]?\d+$/,
  // // email
  // 'email': /^\w+((-\w+)|(\.\w+))*\\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
  // // phone
  // 'phone': /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
  // // tel
  // 'tel': /^\d+(-\d+)*$/,
  // // 身份证
  // 'idcard': /^[1-9]\d{5}(19\d{2}|[2-9]\d{3})((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{4}|\d{3}X)$/,
  // // 中文
  // 'chinese': /^[\u4E00-\u9FA5]+$/,
  // // 文件名的校验
  // 'file': /[^\\\\/:\\*\\?"<>@#%￥《》|$!^&~]/
};


/**
 * makeExpandingArea
 * outset inset 两种模式
 * @param {HtmlElement} textarea
 * @param {string} type
 * @access private
 */
function makeExpandingArea(textarea, type) {
  const isRender = textarea.dataset.render;
  if (isRender) return false;

  const self = this;
  const name = textarea.dataset.ctformConfigName;
  const container = createContainer(textarea, type, (parent) => {
    const dom = parent.querySelector('textarea');
    dom.parentNode.replaceChild(textarea.cloneNode(true), dom);
  });
  const textAreaDom = container.querySelector('textarea');
  const spanDom = container.querySelector('span');
  const rangetipDom = container.querySelector('.rangetip');

  let maxLangth;
  if (rangetipDom) {
    maxLangth = window.parseInt(textAreaDom.dataset.ctformConfigMaxlength);
    textAreaDom.setAttribute('maxlength', `${maxLangth}`);
  }

  const ctFormExpandingareaInner = container.querySelector('.ct-form-expandingarea-inner');
  textAreaDom.dataset.render = 'true';

  textAreaDom.addEventListener('input', function () {
    spanDom.textContent = textAreaDom.value;

    if (rangetipDom) {
      if (this.value.length <= maxLangth) {
        rangetipDom.innerText = rangeTipTemplate({ minLength: this.value.length, maxLength: maxLangth });
      }
    }
  }, false);
  textAreaDom.addEventListener('focus', (e) => {
    if (!e.relatedTarget) {
      self.hideErrorMessageTip(name);
    }
    if (textarea.dataset.ctformConfigInset) {
      if (!ctFormExpandingareaInner.classList.contains('focus')) {
        ctFormExpandingareaInner.classList.add('focus');
      }
    }
  });
  textAreaDom.addEventListener('blur', () => {
    if (textarea.dataset.ctformConfigInset) {
      if (ctFormExpandingareaInner.classList.contains('focus')) {
        ctFormExpandingareaInner.classList.remove('focus');
      }
    }
  });
  spanDom.textContent = textAreaDom.value;

  container.querySelector('.ct-form-expandingarea').className += ' active';
}

/**
 * makeClearInput
 * @param {HTMLElement} input
 * @param {string} type
 * @access private
 */
function makeClearInput(input, type) {
  const isRender = input.dataset.render;
  if (isRender) return false;

  const container = createContainer(input, type, (parent) => {
    const dom = parent.querySelector('input');
    dom.parentNode.replaceChild(input.cloneNode(true), dom);
  });
  const inputDom = container.querySelector('input');
  inputDom.dataset.render = 'true';
  clearInputEvent.call(this, container);
}

/**
 * makePwdToggle
 * @param {HTMLElement} password
 * @param {string} type
 * @access private
 */
function makePwdToggle(password, type) {
  const isRender = password.dataset.render;
  if (isRender) return false;

  const container = createContainer(password, type, (parent) => {
    const dom = parent.querySelector('input');
    dom.parentNode.replaceChild(password.cloneNode(true), dom);
  });
  const passwordDom = container.querySelector('input');
  passwordDom.dataset.render = 'true';

  const toggleDom = container.querySelector('.toggle');
  toggleDom.addEventListener('click', () => {
    if (toggleDom.classList.contains('close')) {
      passwordDom.type = 'password';
      toggleDom.classList.remove('close');
    } else {
      passwordDom.type = 'text';
      toggleDom.classList.add('close');
    }
  }, false);

  clearInputEvent.call(this, container);
}

/**
 * makeSelect
 * @param {HTMLElement} select
 * @param {string} type
 * @access private
 */
function makeSelects(select, type) {
  const isRender = select.dataset.render;
  if (isRender) return false;

  const self = this;
  const name = select.dataset.ctformConfigName;
  const container = createContainer(select, type, (parent) => {
    const dom = parent.querySelector('select');
    dom.parentNode.replaceChild(select.cloneNode(true), dom);
  });
  const selectDom = container.querySelector('select');
  selectDom.value = select.value;
  selectDom.dataset.render = 'true';
  selectDom.addEventListener('focus', (e) => {
    if (!e.relatedTarget) {
      self.hideErrorMessageTip(name);
    }
  });
}

/**
 * makeRadioGroups
 * @param {HtmlElement} radioGroup
 * @param {string} type
 * @access private
 */
function makeRadioGroups(radioGroup, type) {
  const isRender = radioGroup.dataset.render;
  if (isRender) return false;

  const self = this;
  const name = radioGroup.dataset.ctformConfigName;
  const container = createContainer(radioGroup, type, (parent) => {
    const dom = parent.querySelector('.ct-form-radiogroup');
    dom.parentNode.replaceChild(radioGroup.cloneNode(true), dom);
  });
  const radioGroupDom = container.querySelector('.ct-form-radiogroup');
  radioGroupDom.dataset.render = 'true';
  radioGroupDom.addEventListener('click', (e) => {
    if (!e.relatedTarget) {
      self.hideErrorMessageTip(name);
    }
  });
}

/**
 * makeCheckboxGroup
 * @param {HtmlElement} checkboxGroup
 * @param {string} type
 * @access private
 */
function makeCheckboxGroup(checkboxGroup, type) {
  const isRender = checkboxGroup.dataset.render;
  if (isRender) return false;

  const self = this;
  const name = checkboxGroup.dataset.ctformConfigName;
  const container = createContainer(checkboxGroup, type, (parent) => {
    const dom = parent.querySelector('.ct-form-checkboxgroup');
    dom.parentNode.replaceChild(checkboxGroup.cloneNode(true), dom);
  });
  const checkboxGroupDom = container.querySelector('.ct-form-checkboxgroup');
  checkboxGroupDom.dataset.render = 'true';
  checkboxGroupDom.addEventListener('click', () => {
    self.hideErrorMessageTip(name);
  });
}

/**
 * makeCheckbox
 * @param {HtmlElement} checkbox
 * @param {string} type
 * @access private
 */
function makeCheckboxs(checkbox, type) {
  const isRender = checkbox.dataset.render;
  if (isRender) return false;

  const self = this;
  const name = checkbox.dataset.ctformConfigName;
  const container = createContainer(checkbox, type, (parent) => {
    const dom = parent.querySelector('input[type="checkbox"]');
    dom.parentNode.replaceChild(checkbox.cloneNode(true), dom);
  });
  const checkboxDom = container.querySelector('input[type="checkbox"]');
  checkboxDom.dataset.render = 'true';
  container.addEventListener('click', (e) => {
    if (!e.relatedTarget) {
      self.hideErrorMessageTip(name);
    }
    if (checkboxDom.disabled || checkboxDom.readOnly) return false;
    if (checkboxDom.checked) {
      checkboxDom.checked = false;
    } else {
      checkboxDom.checked = true;
    }
  });
}

/**
 * makeRadios
 * @param {HtmlElement} radio
 * @param {string} type
 * @access private
 */
function makeRadios(radio, type) {
  const isRender = radio.dataset.render;
  if (isRender) return false;

  const self = this;
  const name = radio.dataset.ctformConfigName;
  const container = createContainer(radio, type, (parent) => {
    const dom = parent.querySelector('input[type="radio"]');
    dom.parentNode.replaceChild(radio.cloneNode(true), dom);
  });
  const radioDom = container.querySelector('input[type="radio"]');
  radioDom.dataset.render = 'true';
  container.addEventListener('click', (e) => {
    if (!e.relatedTarget) {
      self.hideErrorMessageTip(name);
    }
    if (radioDom.disabled || radioDom.readOnly) return false;
    if (radioDom.checked) {
      radioDom.checked = false;
    } else {
      radioDom.checked = true;
    }
  });
}

/**
 * makeSwitchs
 * @param {HtmlElement} checkbox
 * @param {string} type
 * @access private
 */
function makeSwitchs(checkbox, type) {
  const isRender = checkbox.dataset.render;
  if (isRender) return false;

  const self = this;
  const name = checkbox.dataset.ctformConfigName;
  const container = createContainer(checkbox, type, (parent) => {
    const dom = parent.querySelector('input[type="checkbox"]');
    dom.parentNode.replaceChild(checkbox.cloneNode(true), dom);
  });
  const checkboxDom = container.querySelector('input[type="checkbox"]');
  checkboxDom.dataset.render = 'true';
  container.addEventListener('click', (e) => {
    if (!e.relatedTarget) {
      self.hideErrorMessageTip(name);
    }
    if (checkboxDom.disabled || checkboxDom.readOnly) return false;
    if (checkboxDom.checked) {
      checkboxDom.checked = false;
    } else {
      checkboxDom.checked = true;
    }
  });
}

/**
 * makeSliders
 * @param {HtmlElement} slider
 * @param {string} type
 * @access private
 */
function makeSliders(slider, type) {
  const isRender = slider.dataset.render;
  if (isRender) return false;

  const self = this;
  const name = slider.dataset.ctformConfigName;
  const container = createContainer(slider, type, (parent) => {
    const dom = parent.querySelector('input[type="range"]');
    dom.parentNode.replaceChild(slider.cloneNode(true), dom);
  });
  const sliderDom = container.querySelector('input[type="range"]');
  sliderDom.dataset.render = 'true';
  sliderDom.addEventListener('focus', (e) => {
    if (!e.relatedTarget) {
      self.hideErrorMessageTip(name);
    }
  });
}

/**
 * makeSpinner
 * @param {HtmlElement} spinner
 * @param {string} type
 * @access private
 */
function makeSpinners(spinner, type) {
  const isRender = spinner.dataset.render;
  if (isRender) return false;

  const self = this;
  const name = spinner.dataset.ctformConfigName;
  const container = createContainer(spinner, type, (parent) => {
    const dom = parent.querySelector('input[type="number"].ios');
    dom.parentNode.replaceChild(spinner.cloneNode(true), dom);
  });

  const min = window.parseInt(spinner.getAttribute('min')) || 1;
  const max = window.parseInt(spinner.getAttribute('max')) || 100;
  const setp = window.parseInt(spinner.getAttribute('setp')) || 1;
  let value = window.parseInt(spinner.value) || 0;

  container.querySelector('.ct-form-spinner').className += spinner.className;
  const spinnerDom = container.querySelector('input[type="number"].ios');
  const plusDom = container.querySelector('.plus');
  const minusDom = container.querySelector('.minus');
  spinnerDom.dataset.render = 'true';

  // plus
  plusDom.addEventListener('click', () => {
    self.hideErrorMessageTip(name);
    if (spinnerDom.disabled || spinnerDom.readOnly) return false;
    if (value >= max) return false;
    if (value + setp > max) {
      value += ((value + setp) - max);
    } else {
      value += setp;
    }
    spinnerDom.value = value;
  });
  // minus
  minusDom.addEventListener('click', () => {
    self.hideErrorMessageTip(name);
    if (spinnerDom.disabled || spinnerDom.readOnly) return false;
    if (value <= min) return false;
    if (value - setp < min) {
      value -= (setp - min);
    } else {
      value -= setp;
    }
    spinnerDom.value = value;
  });
}


/**
 * 渲染高度自适应的textarea
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderAutoheighttextarea(container, type) {
  const areas = container.querySelectorAll('textarea');
  let l = areas.length;
  while (l--) {
    makeExpandingArea.call(this, areas[l], type);
  }
}

/**
 * 渲染带有删除操作的input
 <input type="button">
 <input type="checkbox">
 <input type="color">
 <input type="file">
 <input type="hidden">
 <input type="radio">
 <input type="reset">
 <input type="submit">
 <input type="email">
 <input type="text">
 <input type="number">
 <input type="tel">
 <input type="url">
 <input type="date">
 <input type="week">
 <input type="datetime">
 <input type="datetime-local">
 <input type="image">
 <input type="month">
 <input type="time">
 <input type="password">
 <input type="range">
 <input type="search">
 *
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderClearinput(container, type) {
  const input = container.querySelectorAll(
    `input[type="text"],
     input[type="number"]:not(.ios),
     input[type="email"],
     input[type="url"],
     input[type="tel"],
     input[type="date"],
     input[type="week"],
     input[type="datetime"],
     input[type="datetime-local"],
     input[type="image"],
     input[type="month"],
     input[type="time"],
     input[type="search"]`);
  let l = input.length;
  while (l--) {
    makeClearInput.call(this, input[l], type);
  }
}

/**
 * 渲染password
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderPwdToggle(container, type) {
  const passwords = container.querySelectorAll('input[type="password"]');
  let l = passwords.length;
  while (l--) {
    makePwdToggle.call(this, passwords[l], type);
  }
}

/**
 * 渲染checkbox
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderCheckbox(container, type) {
  const checkboxs = container.querySelectorAll('input[type="checkbox"]:not(.switch)');
  let l = checkboxs.length;
  while (l--) {
    makeCheckboxs.call(this, checkboxs[l], type);
  }
}

/**
 * 渲染radio
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderRadio(container, type) {
  const radios = container.querySelectorAll('input[type="radio"]');
  let l = radios.length;
  while (l--) {
    makeRadios.call(this, radios[l], type);
  }
}

/**
 * 渲染switch
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderSwitch(container, type) {
  const switchs = container.querySelectorAll('input[type="checkbox"].switch');
  let l = switchs.length;
  while (l--) {
    makeSwitchs.call(this, switchs[l], type);
  }
}

/**
 * 渲染slider
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderSlider(container, type) {
  const slider = container.querySelectorAll('input[type="range"]');
  let l = slider.length;
  while (l--) {
    makeSliders.call(this, slider[l], type);
  }
}

/**
 * 渲染spinner
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderSpinner(container, type) {
  const spinner = container.querySelectorAll('input[type="number"].ios');
  let l = spinner.length;
  while (l--) {
    makeSpinners.call(this, spinner[l], type);
  }
}

/**
 * renderSelect
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderSelect(container, type) {
  const select = container.querySelectorAll('select');
  let l = select.length;
  while (l--) {
    makeSelects.call(this, select[l], type);
  }
}

/**
 * renderRadioGroup
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderRadioGroup(container, type) {
  const radiogroup = container.querySelectorAll('.ct-form-radiogroup');
  let l = radiogroup.length;
  while (l--) {
    makeRadioGroups.call(this, radiogroup[l], type);
  }
}

/**
 * renderCheckboxGroup
 * @param {HtmlElement} container
 * @param {string} type
 * @access private
 */
function renderCheckboxGroup(container, type) {
  const checkboxgroup = container.querySelectorAll('.ct-form-checkboxgroup');
  let l = checkboxgroup.length;
  while (l--) {
    makeCheckboxGroup.call(this, checkboxgroup[l], type);
  }
}


/**
 * clearInputEvent
 * @param {HtmlElement} container
 * @access private
 */
function clearInputEvent(container) {
  const self = this;
  const inputDom = container.querySelector('input');
  const clearDom = container.querySelector('.clear');
  const labelDom = container.querySelector('.label');
  const rangetipDom = container.querySelector('.rangetip');
  const name = inputDom.dataset.ctformConfigName;
  let maxLangth;
  if (rangetipDom) {
    maxLangth = window.parseInt(inputDom.dataset.ctformConfigMaxlength);
    inputDom.setAttribute('maxlength', `${maxLangth}`);
  }

  clearDom.addEventListener('click', () => {
    inputDom.value = '', inputDom.focus(), clearDom.style.display = 'none';
    if (inputDom.dataset.ctformConfigInset && inputDom.dataset.ctformConfigType === 'material') {
      labelDom.classList.remove('animate');
    }
  }, false);

  inputDom.addEventListener('input', function () {
    if (rangetipDom) {
      if (this.value.length <= maxLangth) {
        rangetipDom.innerText = rangeTipTemplate({ minLength: this.value.length, maxLength: maxLangth });
      }
    }

    inputDom.value ? clearDom.style.display = 'block' : clearDom.style.display = 'none';
    if (inputDom.dataset.ctformConfigInset && inputDom.dataset.ctformConfigType === 'material') {
      if (!this.value) {
        labelDom.classList.remove('animate');
      } else if (!labelDom.classList.contains('animate')) {
        labelDom.classList.add('animate');
      }
    }
  }, false);

  inputDom.addEventListener('focus', (e) => {
    if (!e.relatedTarget) {
      self.hideErrorMessageTip(name);
    }
    if (inputDom.dataset.ctformConfigInset && inputDom.dataset.ctformConfigType === 'material') {
      labelDom.classList.add('animate');
    }
  });

  inputDom.addEventListener('blur', function () {
    if (inputDom.dataset.ctformConfigInset && inputDom.dataset.ctformConfigType === 'material') {
      if (this.value) return;
      labelDom.classList.remove('animate');
    }
  });
}

/**
 * createContainer
 * @param {HtmlElement} dom
 * @param {string} type
 * @param {Function} replaceSelfCallback
 * @access private
 */
function createContainer(dom, type, replaceSelfCallback) {
  let templateStr;

  const domClone = dom.cloneNode(true);
  if (!domClone.classList.contains(dom.dataset.ctformConfigType || 'default')) {
    domClone.classList.add(dom.dataset.ctformConfigType || 'default');
  }

  let domType = dom.dataset.ctformConfigType || 'default';

  if (dom.dataset.ctformConfigInset) {
    /** *
     * 有inset的type
     * autoheighttextarea default
     clearinput default material
     pwdtoggle default material
     select default
     */
    if (domType !== 'default' && domType !== 'material') {
      domType = 'default';
    }

    templateStr = templates.layout.inset[domType]({
      tooltip: dom.dataset.ctformConfigTooltip ? dom.dataset.ctformConfigTooltip : '',
      rangetip: getRangeTip(dom),
      control: templates.controls[type]({
        type: domType,
        input: domClone.outerHTML || '',
        full: dom.dataset.ctformConfigFull || '',
        labelalign: dom.dataset.ctformConfigLabelalign || '',
        label: dom.dataset.ctformConfigLabel || '',
        require: dom.dataset.ctformConfigRequire || '',
        border: domType !== 'material',
        inset: true,
      }),
    });
  } else {
    templateStr = templates.layout.outset({
      type: domType,
      labelposition: dom.dataset.ctformConfigLabelposition || '',
      labelalign: dom.dataset.ctformConfigLabelalign || '',
      require: dom.dataset.ctformConfigRequire || '',
      label: dom.dataset.ctformConfigLabel || '',
      full: dom.dataset.ctformConfigFull || '',
      tooltip: dom.dataset.ctformConfigTooltip ? dom.dataset.ctformConfigTooltip : '',
      rangetip: getRangeTip(dom),
      control: templates.controls[type]({
        type: domType,
        input: domClone.outerHTML || '',
        full: '',
        labelalign: '',
        label: '',
        require: false,
        border: false,
        inset: false,
      }),
    });
  }

  // 如果type是group去掉data-ctform-config-require='require'
  if (type.lastIndexOf('group') !== -1) {
    const tempDom = createDomByHtml(templateStr);
    const groupTempDom = tempDom.querySelector('.ct-form-radiogroup,.ct-form-checkboxgroup');
    groupTempDom.innerHTML = groupTempDom.innerHTML.replace(
      /data-ctform-config-require=["']require["']/igm, ''
    );
    templateStr = tempDom.outerHTML;
  }

  const container = createDomByHtml(templateStr);
  if (replaceSelfCallback) {
    replaceSelfCallback(container);
  }
  dom.parentNode.replaceChild(container, dom);
  return container;
}

/**
 * 根据字符串创建dom
 * @param {string} html
 * @returns {HtmlElement}
 * @access private
 */
function createDomByHtml(html) {
  const dom = document.createElement('div');
  dom.innerHTML = html;
  return dom.firstChild;
}

/**
 * getRangeTip
 * @param {HtmlElement} dom
 * @return {Object}
 * @access private
 */
function getRangeTip(dom) {
  let maxLength = dom.dataset.ctformConfigMaxlength;
  maxLength = parseInt(maxLength);

  let result = '';
  if (!isNaN(maxLength)) {
    result = rangeTipTemplate({
      minLength: 0,
      maxLength,
    });
  }

  return result;
}

/**
 * parentUntil
 * @param {HtmlElement} el
 * @param {string} className
 * @return {HtmlElement}
 * @access private
 */
function parentUntil(el, className) {
  if (!className || !el) return null;
  let element = null,
    parent = el;
  const popup = function () {
    if (parent.classList.contains(className)) {
      element = parent;
    } else if (parent !== document.body) {
      parent = parent.parentElement;
      popup();
    }
  };

  popup();
  return element;
}


/**
 * requireChain
 * 只验证输入类型，group，其他不验证
 * @param {HtmlElement} validateDom
 * @return {boolean}
 * @access private
 */
function RequireChain(validateDom) {
  // 输入类型的判断value
  // radioGroup 是否有input radio选中
  // checkboxGroup 是否有input checkbox选中
  let flag = false;
  const tagName = validateDom.tagName.toLowerCase();
  let inputType,
    groupName,
    name;
  if (tagName === 'input') {
    inputType = validateDom.type;
    if (requireInputTypes.indexOf(inputType) !== -1) {
      // 满足条件的input才行
      if (validateDom.value && validateDom.value.trim()) {
        flag = true;
      }
    }
  } else if (tagName === 'textarea') {
    if (validateDom.value && validateDom.value.trim()) {
      flag = true;
    }
  } else if (validateDom.classList.contains('ct-form-radiogroup') || validateDom.classList.contains('ct-form-checkboxgroup')) {
    groupName = validateDom.dataset.ctformConfigGroupname;
    if (validateDom.classList.contains('ct-form-radiogroup')) {
      if (validateDom.querySelector(`input[type="radio"][name="${groupName}"]:checked`)) {
        flag = true;
      }
    } else if (validateDom.classList.contains('ct-form-checkboxgroup')) {
      if (validateDom.querySelectorAll(`input[type="checkbox"][name="${groupName}"]:checked`).length !== 0) {
        flag = true;
      }
    }
  } else {
    flag = true;
  }

  // 有没填的项
  if (!flag) {
    name = validateDom.dataset.ctformConfigName;
    this.showErrorTip(name, validateDom.dataset.ctformConfigRequiremessage);
  }

  return flag;
}

/**
 * LengthChain
 * @param {HtmlElement} validateDom
 * @return {boolean}
 * @access private
 */
function LengthChain(validateDom) {
  let flag = false;
  let value;// = validateDom.value.trim();
  const tagName = validateDom.tagName.toLowerCase();
  let inputType;
  let name;
  const minlength = window.parseInt(validateDom.dataset.ctformConfigMinlength);
  const maxlength = window.parseInt(validateDom.dataset.ctformConfigMaxlength);

  if (!isNaN(minlength) && !isNaN(maxlength)) {
    if (tagName === 'input') {
      inputType = validateDom.type;
      if (requireInputTypes.indexOf(inputType) !== -1) {
        value = validateDom.value.trim();
        // 验证length
        if (value.length >= minlength && value.length <= maxlength) {
          flag = true;
        }
      }
    } else if (tagName === 'textarea') {
      // 验证length
      value = validateDom.value.trim();
      // 验证length
      if (value.length >= minlength && value.length <= maxlength) {
        flag = true;
      }
    } else {
      flag = true;
    }
  } else {
    flag = true;
  }

  // 有没填的项
  if (!flag) {
    name = validateDom.dataset.ctformConfigName;
    this.showErrorTip(name, validateDom.dataset.ctformConfigLengthmessage);
  }

  return flag;
}

/**
 * PatternChain
 * @param {HtmlElement} validateDom
 * @return {boolean}
 * @access private
 */
function PatternChain(validateDom) {
  let flag = false;
  let value;
  const tagName = validateDom.tagName.toLowerCase();
  let inputType;
  let name;
  const pattern = validateDom.dataset.ctformConfigPattern;
  const RegExp = patterns[pattern] ? patterns[pattern] : (pattern ? new RegExp(pattern) : '');

  if (tagName === 'input') {
    inputType = validateDom.type;
    if (requireInputTypes.indexOf(inputType) !== -1) {
      value = validateDom.value.trim();
      // 验证pattern
      flag = RegExp ? RegExp.test(value) : true;
    }
  } else if (tagName === 'textarea') {
    // 验证pattern
    value = validateDom.value.trim();
    flag = RegExp ? RegExp.test(value) : true;
  } else {
    flag = true;
  }

  // 有没填的项
  if (!flag) {
    name = validateDom.dataset.ctformConfigName;
    this.showErrorTip(name, validateDom.dataset.ctformConfigPatternmessage);
  }

  return flag;
}

/**
 * validateChain
 * @param validateDom
 * @return {boolean}
 * @access private
 */
function validateChain(validateDom) {
  let isValidate;
  let validate;
  let loopFlag = true;
  let isValidateFlag = false;
  for (let i = 0; i < validateChainConfig.length; i++) {
    isValidate = validateChainConfig[i].isValidate;
    validate = validateChainConfig[i].validate;

    for (let j = 0; j < isValidate.length; j++) {
      if (validateDom.hasAttribute(isValidate[j])) {
        isValidateFlag = true;
        break;
      }
    }
    // 需要验证才验证
    if (isValidateFlag) {
      loopFlag = validate.call(this, validateDom);
      if (!loopFlag) {
        break;
      }
    }
  }

  return loopFlag;
}

/**
 * validate form
 * @param {boolean} stopPropagation
 * @access private
 */
function validate(stopPropagation) {
  this.hideErrorMessageAllTips();
  const validateDoms = this.el.querySelectorAll(
    `[data-ctform-config-require],
     [data-ctform-config-pattern],
     [data-ctform-config-maxlength],
     [data-ctform-config-minlength]`
  );
  let validateDom;
  let loopFlag = true;
  let flag = true;
  let firstValidateDom;

  for (let i = 0; i < validateDoms.length; i++) {
    validateDom = validateDoms[i];
    if (validateDom.disabled || validateDom.readOnly) {
      loopFlag = true;
    } else {
      loopFlag = validateChain.call(this, validateDom);
    }
    if (!loopFlag) {
      if (flag) {
        firstValidateDom = validateDom;
      }
      flag = false;
      if (stopPropagation) break;
    }
  }

  if (firstValidateDom) {
    firstValidateDom.focus();
  }
  return flag;
}

/**
 * _showTip
 * @param {string} name
 * @param {string} tip
 * @param {string} type [tooltip | errortip | successtip | rangetip]
 * @access private
 */
function showTip(name, tip, type) {
  const dom = this.el.querySelector(`[data-ctform-config-name="${name}"]`);
  if (!dom) return false;
  const parentDom = parentUntil(dom, 'ct-form-control');
  if (!parentDom) return false;
  const $parent = $(parentDom);
  let tipDom;
  if (type === 'errortip' || type === 'successtip') {
    if (type === 'errortip') {
      parentDom.classList.add('validerror');
    } else {
      parentDom.classList.add('validsuccess');
    }
    tipDom = $parent.find(' > .tooltipwrap > .errormessage')[0];
  } else if (type === 'tooltip') {
    tipDom = $parent.find(' > .tooltipwrap > .tooltipfixed > .tooltip')[0];
  } else if (type === 'rangetip') {
    tipDom = $parent.find(' > .tooltipwrap > .tooltipfixed > .rangetip')[0];
  }
  if (!tipDom) return false;
  tipDom.innerText = tip;
  tipDom.style.display = 'block';
}

/**
 * hideTip
 * @param {string} name
 * @param {string} type [tooltip | errortip | rangetip]
 * @access private
 */
function hideTip(name, type) {
  const dom = this.el.querySelector(`[data-ctform-config-name="${name}"]`);
  if (!dom) return false;
  const parentDom = parentUntil(dom, 'ct-form-control');
  if (!parentDom) return false;
  const $parent = $(parentDom);
  let errorTipDom;
  let toolTipDom;
  let rangeTipDom;
  if (type === 'errortip') {
    parentDom.classList.remove('validerror');
    parentDom.classList.remove('validsuccess');
    errorTipDom = $parent.find(' > .tooltipwrap > .errormessage')[0];
  } else if (type === 'tooltip') {
    toolTipDom = $parent.find(' > .tooltipwrap > .tooltipfixed > .tooltip')[0];
  } else if (type === 'rangetip') {
    rangeTipDom = $parent.find(' > .tooltipwrap > .tooltipfixed > .rangetip')[0];
  } else if (type === 'alltip') {
    parentDom.classList.remove('validerror');
    parentDom.classList.remove('validsuccess');
    errorTipDom = $parent.find(' > .tooltipwrap > .errormessage')[0];
    toolTipDom = $parent.find(' > .tooltipwrap > .tooltipfixed > .tooltip')[0];
    rangeTipDom = $parent.find(' > .tooltipwrap > .tooltipfixed > .rangetip')[0];
  }

  if (errorTipDom) {
    errorTipDom.innerText = '';
    errorTipDom.style.display = 'none';
  }

  if (toolTipDom) {
    toolTipDom.innerText = '';
    toolTipDom.style.display = 'none';
  }

  if (rangeTipDom) {
    rangeTipDom.innerText = '';
    rangeTipDom.style.display = 'none';
  }
}


/**
 * init
 * @access private
 */
function init() {
  /** *
   * 渲染指定元素的区域内的组件
   */
  const grouptypes = [];
  const ungrouptypes = [];
  for (let i = 0; i < this.types.length; i++) {
    if (this.types[i].lastIndexOf('group') !== -1) {
      grouptypes.push(this.types[i]);
    } else {
      ungrouptypes.push(this.types[i]);
    }
  }
  const sorttypes = [].concat(grouptypes, ungrouptypes);

  for (let i = 0, len = sorttypes.length; i < len; i++) {
    containers[sorttypes[i]].call(this, this.el, sorttypes[i]);
  }
}

/**
 * Form
 * @class Form
 * @classdesc Form
 */
class Form {
  /**
   * @constructor
   * @param {HtmlElement} el
   * @param {Array} types
   */
  constructor(el, types) {
    this.el = el;
    this.$el = $(this.el);
    this.types = types;
    init.call(this);
  }

  /**
   * validatePropagation
   * @return {boolean}
   */
  validatePropagation() {
    return validate.call(this, false);
  }

  /**
   * validateStopPropagation
   * @return {boolean}
   */
  validateStopPropagation() {
    return validate.call(this, true);
  }

  /**
   * showToolTip
   * @param {string} name
   * @param {string} tip
   */
  showToolTip(name, tip = '') {
    showTip.call(this, name, tip, 'tooltip');
  }

  /**
   * showErrorTip
   * @param {string} name
   * @param {string} tip
   */
  showErrorTip(name, tip = '') {
    showTip.call(this, name, tip, 'errortip');
  }

  /**
   * showSuccessTip
   * @param {string} name
   * @param {string} tip
   */
  showSuccessTip(name, tip = '') {
    showTip.call(this, name, tip, 'successtip');
  }

  /**
   * showRangeTip
   * @param {string} name
   * @param {string} tip
   */
  showRangeTip(name, tip = '') {
    showTip.call(this, name, tip, 'rangetip');
  }

  /**
   * hideToolTip
   * @param {string} name
   */
  hideToolTip(name) {
    hideTip.call(this, name, 'tooltip');
  }

  /**
   * hideErrorMessageTip
   * @param {string} name
   */
  hideErrorMessageTip(name) {
    hideTip.call(this, name, 'errortip');
  }

  /**
   * hideErrorMessageAllTips
   */
  hideErrorMessageAllTips() {
    this.$el.find('.ct-form-control.validerror,.ct-form-control.validsuccess').removeClass('validerror').removeClass('validsuccess');
    this.$el.find('.ct-form-control .errormessage').text('').hide();
  }

  /**
   * hideRangeTip
   * @param {string} name
   */
  hideRangeTip(name) {
    hideTip.call(this, name, 'rangetip');
  }

  /**
   * hideAllTip
   * @param {string} name
   */
  hideAllTip(name) {
    hideTip.call(this, name, 'alltip');
  }

  /**
   * getEntrys
   * @return {Object}
   */
  getEntrys() {
    const entrys = {};
    let formItemDom;
    let tagName;
    let checkedDoms;

    const formItemDoms = this.el.querySelectorAll('[data-ctform-config-name]');
    for (let i = 0; i < formItemDoms.length; i++) {
      formItemDom = formItemDoms[i];
      if (formItemDom.classList.contains('ct-form-radiogroup') || formItemDom.classList.contains('ct-form-checkboxgroup')) {
        if (formItemDom.classList.contains('ct-form-radiogroup')) {
          checkedDoms = formItemDom.querySelector('input[type="radio"]:checked');
          if (checkedDoms) {
            entrys[formItemDom.dataset.ctformConfigName] = checkedDoms.value ? checkedDoms.value.trim() : '';
          }
        } else {
          checkedDoms = formItemDom.querySelectorAll('input[type="checkbox"]:checked');
          if (checkedDoms && checkedDoms.length !== 0) {
            entrys[formItemDom.dataset.ctformConfigName] = Array.prototype.map.call(checkedDoms, (t) => {
              return t.value ? t.value.trim() : '';
            });
          }
        }
      } else {
        tagName = formItemDom.tagName.toLowerCase();
        if (tagName === 'input' && (formItemDom.type === 'radio' || formItemDom.type === 'checkbox')) {
          if (formItemDom.checked) {
            entrys[formItemDom.dataset.ctformConfigName] = formItemDom.value ? formItemDom.value.trim() : '';
          }
        } else {
          entrys[formItemDom.dataset.ctformConfigName] = formItemDom.value ? formItemDom.value.trim() : '';
        }
      }
    }
    return entrys;
  }
}

/**
 * FormFactory
 * @param {HtmlElement} el
 * @param {Array} types
 * @return {Form}
 */
export default function (el, types) {
  return new Form(el, types);
}
