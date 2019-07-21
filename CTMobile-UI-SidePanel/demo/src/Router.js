export default function () {
  let context = '/';
  if (process.env.NODE_ENV === 'production') {
    context = '/playerljc.github.io/ctmobile-ui/html/SidePanel/';
  }

  return {
    overlay: {
      url: `${context}static/html/overlay.html`,
      component: import(/* webpackChunkName: "page" */ './pages/overlay'),
    },
    push: {
      url: `${context}static/html/push.html`,
    },
    pushLeft: {
      url: `${context}static/html/pushLeft.html`,
      component: import(/* webpackChunkName: "page" */ './pages/push/pushLeft'),
    },
    pushRight: {
      url: `${context}static/html/pushRight.html`,
      component: import(/* webpackChunkName: "page" */ './pages/push/pushRight'),
    },
    reveal: {
      url: `${context}static/html/reveal.html`,
    },
    revealLeft: {
      url: `${context}static/html/revealLeft.html`,
      component: import(/* webpackChunkName: "page" */ './pages/reveal/revealLeft'),
    },
    revealRight: {
      url: `${context}static/html/revealRight.html`,
      component: import(/* webpackChunkName: "page" */ './pages/reveal/revealRight'),
    },
  };
}
