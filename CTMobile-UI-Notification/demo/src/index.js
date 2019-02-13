import DemoUtil, { Bone } from '@ctmobile/ui-demo-util';
import {
  MeTopClosedCustomClass,
  MeTopClosedStandardClass,
  MeTopUnClosedCustomClass,
  MeTopUnClosedStandardClass,

  MeBottomClosedCustomClass,
  MeBottomClosedStandardClass,
  MeBottomUnClosedCustomClass,
  MeBottomUnClosedStandardClass,

  iOSTopClosedCustomClass,
  iOSTopClosedStandardClass,
  iOSTopUnClosedCustomClass,
  iOSTopUnClosedStandardClass,

  iOSBottomClosedCustomClass,
  iOSBottomClosedStandardClass,
  iOSBottomUnClosedCustomClass,
  iOSBottomUnClosedStandardClass,

} from './SliderClassFactory';

import '@ctmobile/ui-notification/notification.less';
import '@ctmobile/ui-notification/themes/default/notification.less';
import 'normalize.less';
import './index.less';

DemoUtil.initial();

const demoBone = new Bone(document.getElementById('swiper-container'), [
  ['style'],
  ['style-me'],
  ['style-me-top'],
  ['style-me-top-closed'],
  ['style-me-top-closed-custom', MeTopClosedCustomClass],
  ['style-me-top-closed-standard', MeTopClosedStandardClass],
  ['style-me-top-unclosed'],
  ['style-me-top-unclosed-custom', MeTopUnClosedCustomClass],
  ['style-me-top-unclosed-standard', MeTopUnClosedStandardClass],

  ['style-me-bottom'],
  ['style-me-bottom-closed'],
  ['style-me-bottom-closed-custom', MeBottomClosedCustomClass],
  ['style-me-bottom-closed-standard', MeBottomClosedStandardClass],
  ['style-me-bottom-unclosed'],
  ['style-me-bottom-unclosed-custom', MeBottomUnClosedCustomClass],
  ['style-me-bottom-unclosed-standard', MeBottomUnClosedStandardClass],

  ['style-ios'],
  ['style-ios-top'],
  ['style-ios-top-closed'],
  ['style-ios-top-closed-custom', iOSTopClosedCustomClass],
  ['style-ios-top-closed-standard', iOSTopClosedStandardClass],
  ['style-ios-top-unclosed'],
  ['style-ios-top-unclosed-custom', iOSTopUnClosedCustomClass],
  ['style-ios-top-unclosed-standard', iOSTopUnClosedStandardClass],

  ['style-ios-bottom'],
  ['style-ios-bottom-closed'],
  ['style-ios-bottom-closed-custom', iOSBottomClosedCustomClass],
  ['style-ios-bottom-closed-standard', iOSBottomClosedStandardClass],
  ['style-ios-bottom-unclosed'],
  ['style-ios-bottom-unclosed-custom', iOSBottomUnClosedCustomClass],
  ['style-ios-bottom-unclosed-standard', iOSBottomUnClosedStandardClass],
]);

// let meTopN,
//   meBottomN,
//   iosTopN,
//   iosBottomN;
//
// const StandardNConfig = {
//   headerLabel: 'Framework7',
//   headerIcon: 'http://framework7.io/kitchen-sink/core/img/f7-icon.png',
//   title: 'Notification with close button',
//   text: 'Notification with close buttonNotification with close buttonNotification with close buttonNotification with close buttonNotification with close buttonNotification with close buttonNotification with close button',
//   icon: 'http://framework7.io/kitchen-sink/core/img/f7-icon.png',
//   closed: true,
//   datetime: '2019-02-12',
// };
//
// const listenersConfig = {
//   create() {
//     console.log('create');
//   },
//   show() {
//     console.log('show');
//   },
//   closeBefore() {
//     console.log('closeBefore');
//   },
//   closeAfter() {
//     console.log('closeAfter');
//   },
// };
//
// $('#showNotifictionBottomMaterial').on('click', () => {
//   // material bottom
//   if (!meBottomN) {
//     meBottomN = new Notification(
//       document.getElementById('ct-notification-bottom-material'),
//       {
//         style: 'material',
//         type: 'bottom',
//         listeners: listenersConfig,
//       });
//   }
//
//   meBottomN.showStandard(StandardNConfig);
// });
//
// $('#showNotifictionTopMaterial').on('click', () => {
//   // material top
//   if (!meTopN) {
//     meTopN = new Notification(
//       document.getElementById('ct-notification-top-material'),
//       {
//         style: 'material',
//         type: 'top',
//         listeners: listenersConfig,
//       });
//   }
//
//   meTopN.showStandard(StandardNConfig);
// });
//
// $('#showNotifictionBottomiOS').on('click', () => {
//   // iOS bottom
//   if (!iosBottomN) {
//     iosBottomN = new Notification(
//       document.getElementById('ct-notification-bottom-ios'),
//       {
//         style: 'ios',
//         type: 'bottom',
//         listeners: listenersConfig,
//       });
//   }
//
//   iosBottomN.showStandard(StandardNConfig);
// });
//
// $('#showNotifictionTopiOS').on('click', () => {
//   // iOS top
//   if (!iosTopN) {
//     iosTopN = new Notification(
//       document.getElementById('ct-notification-top-ios'),
//       {
//         style: 'ios',
//         type: 'top',
//         listeners: listenersConfig,
//       });
//   }
//
//   iosTopN.showStandard(StandardNConfig);
// });
