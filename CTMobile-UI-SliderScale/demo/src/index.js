// import SliderScaleFactory from '@ctmobile/ui-sliderscale/sliderscale';
// import '@ctmobile/ui-sliderscale/sliderscale.less';
//
// const s1 = SliderScaleFactory.create(document.getElementById('s1'), {
//   min: 0,
//   max: 10,
//   value: 0,
//   step: 1,
//   interval: 2,
// });
//
//
// s1.on('change', (params) => {
//   console.log(params.value);
// });
//
// const s2 = SliderScaleFactory.create(document.getElementById('s2'), {
//   min: 0,
//   max: 60,
//   value: 0,
//   step: 1,
//   interval: 5,
// });
//
// s2.on('change', (params) => {
//   console.log(params.value);
// });

import DemoUtil from '@ctmobile/ui-demo-util';
import SliderScaleFactory from '@ctmobile/ui-sliderscale';

import './index.less';

DemoUtil.initial();

const s1 = SliderScaleFactory.create(document.getElementById('s1'), {
  min: 0,
  max: 10,
  value: 0,
  step: 1,
  interval: 2,
});

const s2 = SliderScaleFactory.create(document.getElementById('s2'), {
  min: 0,
  max: 60,
  value: 0,
  step: 1,
  interval: 5,
});

const s3 = SliderScaleFactory.create(document.getElementById('s3'), {
  min: 0,
  max: 50,
  value: 0,
  step: 1,
  interval: 5,
});

document.getElementById('controlS3').addEventListener('change', (e) => {
  s3.setValue(e.target.value);
});
