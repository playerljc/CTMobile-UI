import KwList from '@ctmobile/ui-kwlist';
import DemoUtil from '@ctmobile/ui-demo-util';
import 'normalize.less';
import './index.less';

DemoUtil.initial();

document.getElementById('openIndexBtn').addEventListener('click', () => {
  kwlist.expand(0);
});

document.getElementById('closeIndexBtn').addEventListener('click', () => {
  kwlist.close(0);
});

document.getElementById('addBtn').addEventListener('click', () => {
  const ctlistkwEl = document.getElementById('ct-list-kw');
  ctlistkwEl.appendChild($(
    `
    <li class="ct-list-kw-item-content">
      <div class="ct-list-kw-item-info">
        <div class="ct-list-kw-item-link">
          <a href="#" class="item-link item-content">
            <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"/></div>
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Yellow Submarine</div>
                <div class="item-after">$15</div>
              </div>
              <div class="item-subtitle">Beatles</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                vel dui laoreet, commodo augue id, pulvinar lacus.
              </div>
            </div>
          </a>
        </div>
        <div class="ct-list-kw-item-option"></div>
      </div>
      <div class="ct-list-kw-item-buttons">
        <i class="fa fa-address-book">编辑1</i>
        <i class="fa fa-address-book">编辑2</i>
        <i class="fa fa-address-book">编辑3</i>
        <i class="fa fa-address-book">编辑4</i>
      </div>
    </li>
    `
  )[0]);
  kwlist.refresh();
});

const kwlist = KwList(document.getElementById('ct-list-kw'));
kwlist.on('show', (contentEl, index) => {
  console.log(contentEl, index);
});
kwlist.on('hide', (contentEl, index) => {
  console.log(contentEl, index);
});
