export default {
  overlay: {
    url: '/static/html/overlay.html',
    component: import(/* webpackChunkName: "index" */ './pages/overlay'),
  },
  push: {
    url: '/static/html/push.html',
  },
  pushLeft: {
    url: '/static/html/pushLeft.html',
    component: import(/* webpackChunkName: "index" */ './pages/push/pushLeft'),
  },
  pushRight: {
    url: '/static/html/pushRight.html',
    component: import(/* webpackChunkName: "index" */ './pages/push/pushRight'),
  },
  reveal: {
    url: '/static/html/reveal.html',
  },
  revealLeft: {
    url: '/static/html/revealLeft.html',
    component: import(/* webpackChunkName: "index" */ './pages/reveal/revealLeft'),
  },
  revealRight: {
    url: '/static/html/revealRight.html',
    component: import(/* webpackChunkName: "index" */ './pages/reveal/revealRight'),
  },
};
