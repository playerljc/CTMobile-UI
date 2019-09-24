import DemoUtil from '@ctmobile/ui-demo-util';
import { Dom6 } from '@ctmobile/ui-util';
import SwipeoutListFactory from '@ctmobile/ui-swipeout-sd';
import './index.less';

DemoUtil.initial();


const tel = document.getElementById('template');
const listEl1 = tel.content.querySelector('.ct-list').cloneNode(true);
const listEl2 = tel.content.querySelector('.ct-list').cloneNode(true);
const listEl3 = tel.content.querySelector('.ct-list').cloneNode(true);
const listEl4 = tel.content.querySelector('.ct-list').cloneNode(true);

document.getElementById('normalDemo').append(listEl1);
document.getElementById('slideDemo').appendChild(listEl2);
document.getElementById('deleteLineDemo').appendChild(listEl3);
document.getElementById('dynamicDemo').appendChild(listEl4);

SwipeoutListFactory.create(listEl1,
  {
    listeners: {
      init: (swiper) => {
        console.log(swiper);
        listEl1.style.visibility = 'visible';
      },
      slideChangeTransitionStart: (swiper) => {
        console.log(swiper);
      },
      slideChangeTransitionEnd: (swiper) => {
        console.log(swiper);
      },
    },
  }
);

const sliderSwiperoutList = SwipeoutListFactory.create(listEl2,
  {
    listeners: {
      init: (swiper) => {
        console.log(swiper);
        listEl2.style.visibility = 'visible';
      },
      slideChangeTransitionStart: (swiper) => {
        console.log(swiper);
      },
      slideChangeTransitionEnd: (swiper) => {
        console.log(swiper);
      },
    },
  }
);

document.getElementById('slideBeforeAllBtn').addEventListener('click', () => {
  sliderSwiperoutList.slideBeforeAll();
});

document.getElementById('slideAfterAll').addEventListener('click', () => {
  sliderSwiperoutList.slideAfterAll();
});

document.getElementById('closeAll').addEventListener('click', () => {
  sliderSwiperoutList.closeAll();
});

const deleteLineSwiperoutList = SwipeoutListFactory.create(listEl3,
  {
    listeners: {
      init: (swiper) => {
        console.log(swiper);
        listEl3.style.visibility = 'visible';
      },
      slideChangeTransitionStart: (swiper) => {
        console.log(swiper);
      },
      slideChangeTransitionEnd: (swiper) => {
        console.log(swiper);
      },
    },
  }
);

const swiperoutBtns = listEl3.querySelectorAll('.swipeoutBtn');
Array.from(swiperoutBtns).map((el) => {
  el.addEventListener('click', () => {
    const firstRowEl = listEl3.querySelector('.firstRow');
    const swiper = deleteLineSwiperoutList.getSwiper(0);
    swiper.removeAnimation(firstRowEl);
  });
});

const dynamicSwiperoutList = SwipeoutListFactory.create(listEl4,
  {
    listeners: {
      init: (swiper) => {
        console.log(swiper);
        listEl4.style.visibility = 'visible';
      },
      slideChangeTransitionStart: (swiper) => {
        console.log(swiper);
      },
      slideChangeTransitionEnd: (swiper) => {
        console.log(swiper);
      },
    },
  }
);

document.getElementById('addBtn').addEventListener('click', () => {
  const insertEl = Dom6.createElement(
    `
      <li>
        <div class="ct-swipeout swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide ct-swipeout-before">
              <div class="swipeoutBtn del">opt1</div>
              <div class="swipeoutBtn edit">opt2</div>
            </div>
            <a class="swiper-slide ct-swipeout-main item-link item-content">
              <div class="item-media"><img src="http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg" width="80"/></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Yellow Submarine</div>
                  <div class="item-after">$15</div>
                </div>
                <div class="item-subtitle">Beatles</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet,
                  pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                  laoreet, commodo augue id, pulvinar lacus.
                </div>
              </div>
            </a>
            <div class="swiper-slide ct-swipeout-after">
              <div class="swipeoutBtn del">opt1</div>
              <div class="swipeoutBtn edit">opt2</div>
            </div>
          </div>
        </div>
      </li>
    `);

  const ulEl = listEl4.children[0];
  ulEl.appendChild(insertEl);
  dynamicSwiperoutList.refresh();
});
