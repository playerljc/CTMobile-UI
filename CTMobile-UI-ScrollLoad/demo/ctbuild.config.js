const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    if (curModule.mode === 'production') {
      return {
        output: {
          publicPath: '/playerljc.github.io/ctmobile-ui/html/ScrollLoad/',
        },
      };
    } else {
      return {
        // resolve: {
        //   alias: {
        //     '@ctmobile/ui-scrollload': path.resolve(__dirname, 'src/ctmobile-ui-scrollload'),
        //   },
        // },
      };
    }
  },
};
