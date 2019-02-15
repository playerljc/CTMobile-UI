import Popup from '@ctmobile/ui-popup/popup';
import '@ctmobile/ui-popup/popup.less';


document.addEventListener('ct-popup-event-create', (e) => {

});

const popup1 = Popup.create({
  tel: document.getElementById('popup1'),
  config: {},
});
// const popup2 = Popup.create(document.getElementById('popup2'), {});

setTimeout(() => {
  Popup.show(popup1);
  // setTimeout(() => {
  //   Popup.show(popup2);
  //   setTimeout(() => {
  //     Popup.close(popup2);
  //   }, 2000);
  // }, 2000);
}, 2000);
