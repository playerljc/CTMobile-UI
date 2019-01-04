import Form from '@ctmobile/ui-form';
import DemoUtil from '@ctmobile/ui-demo-util';
import 'normalize.less';
import './index.less';
// import '@ctmobile/ui-form/form.less';
// import '@ctmobile/ui-form/themes/default/form.less';

DemoUtil.initial();

const validatePropagationDom = document.getElementById('validatePropagation');
const validateStopPropagationDom = document.getElementById('validateStopPropagation');
const submitDom = document.getElementById('submit');

validatePropagationDom.addEventListener('click', () => {
  const flag = form.validatePropagation();
  console.log(flag);
  return false;
});

validateStopPropagationDom.addEventListener('click', () => {
  const flag = form.validateStopPropagation();
  console.log(flag);
  return false;
});

submitDom.addEventListener('click', () => {
  const entry = form.getEntrys();
  alert(JSON.stringify(entry));
  return false;
});

const form = Form(document.getElementById('containerdemo'), [
  'autoheighttextarea',
  'clearinput',
  'pwdtoggle',
  'select',
  'slider',
  'radio',
  'checkbox',
  'switch',
  'spinner',
  'radiogroup',
  'checkboxgroup',
]);

