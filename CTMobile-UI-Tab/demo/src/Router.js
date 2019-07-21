export default function () {
  let context = '/';
  if (process.env.NODE_ENV === 'production') {
    context = '/playerljc.github.io/ctmobile-ui/html/Tab/';
  }

  return {
    dynamic: {
      url: `${context}static/html/dynamic.html`,
      component: import(/* webpackChunkName: "page" */ './pages/dynamic'),
    },

    average: {
      url: `${context}static/html/average.html`,
      component: import(/* webpackChunkName: "page" */ './pages/average'),
    },

    tabBar: {
      url: `${context}static/html/tabBar.html`,
      component: import(/* webpackChunkName: "page" */ './pages/tabBar'),
    },

    left: {
      url: `${context}static/html/left.html`,
      component: import(/* webpackChunkName: "page" */ './pages/left'),
    },

    cascadeTopBottom: {
      url: `${context}static/html/cascadeTopBottom.html`,
      component: import(/* webpackChunkName: "page" */ './pages/cascadeTopBottom'),
    },

    cascadeLeftRight: {
      url: `${context}static/html/cascadeLeftRight.html`,
      component: import(/* webpackChunkName: "page" */ './pages/cascadeLeftRight'),
    },
    update: {
      url: `${context}static/html/update.html`,
      component: import(/* webpackChunkName: "page" */ './pages/update'),
    },

  };
}
