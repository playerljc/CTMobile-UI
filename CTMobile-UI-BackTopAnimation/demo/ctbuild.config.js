const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    if (curModule.mode === 'production') {
      return {
        output: {
          publicPath: '/playerljc.github.io/ctmobile-ui/html/BackTopAnimation/',
        },
      };
    } else {
      return {
        // resolve: {
        //   alias: {
        //     '@ctmobile/ui-backtopanimation': path.resolve(__dirname, 'src/ctmobile-ui-backtopanimation'),
        //   },
        // },
      };
    }
  },
};
