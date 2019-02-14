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
