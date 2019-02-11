import DemoUtil from '@ctmobile/ui-demo-util';
import Form from '@ctmobile/ui-form';
import 'normalize.less';
import './index.less';

DemoUtil.initial();

const form = Form(document.querySelector('.ctmobile-ui-doc-demo-device-inner'), [
  'switch',
]);
