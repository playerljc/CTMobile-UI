export default {
  dynamic: {
    url: '/static/html/dynamic.html',
    component: import(/* webpackChunkName: "page" */ './pages/dynamic'),
  },

  average: {
    url: '/static/html/average.html',
    component: import(/* webpackChunkName: "page" */ './pages/average'),
  },

  tabBar: {
    url: '/static/html/tabBar.html',
    component: import(/* webpackChunkName: "page" */ './pages/tabBar'),
  },

  left: {
    url: '/static/html/left.html',
    component: import(/* webpackChunkName: "page" */ './pages/left'),
  },

  cascadeTopBottom: {
    url: '/static/html/cascadeTopBottom.html',
    component: import(/* webpackChunkName: "page" */ './pages/cascadeTopBottom'),
  },

  cascadeLeftRight: {
    url: '/static/html/cascadeLeftRight.html',
    component: import(/* webpackChunkName: "page" */ './pages/cascadeLeftRight'),
  },
  update: {
    url: '/static/html/update.html',
    component: import(/* webpackChunkName: "page" */ './pages/update'),
  },

};
