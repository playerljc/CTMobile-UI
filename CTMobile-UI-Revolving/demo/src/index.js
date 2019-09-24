import Revolving from '@ctmobile/ui-revolving-sd';
import DemoUtil from '@ctmobile/ui-demo-util';
import './index.less';

DemoUtil.initial();

const leftRevolving = Revolving(
  document.getElementById('ct-revolving-left'), {
    direction: 'left',
  }
);

const rightRevolving = Revolving(
  document.getElementById('ct-revolving-right'), {
    direction: 'right',
  }
);

const topRevolving = Revolving(
  document.getElementById('ct-revolving-top'), {
    direction: 'top',
  }
);

const bottomRevolving = Revolving(
  document.getElementById('ct-revolving-bottom'), {
    direction: 'bottom',
  }
);

const speedRevolving = Revolving(
  document.getElementById('ct-revolving-speed'), {
    speed: 1000 * 3,
  }
);

const delayRevolving = Revolving(
  document.getElementById('ct-revolving-delay'), {
    delay: 1000 * 3,
  }
);

const apiRevolving = Revolving(
  document.getElementById('ct-revolving-api')
);

document.getElementById('startRevolving').addEventListener('click', () => {
  apiRevolving.start();
});

document.getElementById('stopRevolving').addEventListener('click', () => {
  apiRevolving.stop();
});

