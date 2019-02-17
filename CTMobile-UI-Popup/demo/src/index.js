import Popup from '@ctmobile/ui-popup';
import DemoUtil, { Bone } from '@ctmobile/ui-demo-util';

import 'normalize.less';
import './index.less';

DemoUtil.initial();

new Bone(document.getElementById('swiper-container'), [
  ['popup-initial'],
  ['popup-initial-config'],
  ['popup-initial-api'],
]);


Popup.setEl(document.getElementById('ctmobile-ui-doc-demo-device'));


const demoApiPopup1 = Popup.create(document.getElementById('demo-api-popup1'), {
  listeners: {
    create: (el) => {
      el.querySelector('.openPopup2Btn').addEventListener('click', () => {
        Popup.show(demoApiPopup2);
      });

      el.querySelector('.closeBtn').addEventListener('click', () => {
        Popup.closeAll();
      });
    },
  },
});

const demoApiPopup2 = Popup.create(document.getElementById('demo-api-popup2'), {
  listeners: {
    create: (el) => {
      el.querySelector('.closeBtn').addEventListener('click', () => {
        Popup.closeAll();
      });
    },
  },
});

document.getElementById('openPopup1Btn').addEventListener('click', () => {
  Popup.show(demoApiPopup1);
});
