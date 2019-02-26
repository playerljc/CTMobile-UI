import Revolving from '@ctmobile/ui-revolving';
import DemoUtil from '@ctmobile/ui-demo-util';
import './index.less';

DemoUtil.initial();

const leftRevolving = new Revolving(
  document.getElementById('ct-revolving-left'), {
    direction: 'left',
  }
);

const rightRevolving = new Revolving(
  document.getElementById('ct-revolving-right'), {
    direction: 'right',
  }
);

const topRevolving = new Revolving(
  document.getElementById('ct-revolving-top'), {
    direction: 'top',
  }
);

const bottomRevolving = new Revolving(
  document.getElementById('ct-revolving-bottom'), {
    direction: 'bottom',
  }
);

const speedRevolving = new Revolving(
  document.getElementById('ct-revolving-speed'), {
    speed: 1000 * 3,
  }
);

const delayRevolving = new Revolving(
  document.getElementById('ct-revolving-delay'), {
    delay: 1000 * 3,
  }
);

const apiRevolving = new Revolving(
  document.getElementById('ct-revolving-api')
);

document.getElementById('startRevolving').addEventListener('click', () => {
  apiRevolving.start();
});

document.getElementById('stopRevolving').addEventListener('click', () => {
  apiRevolving.stop();
});

