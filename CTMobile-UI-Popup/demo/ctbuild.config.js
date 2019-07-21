const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    if (curModule.mode === 'production') {
      return {
        output: {
          publicPath: '/playerljc.github.io/ctmobile-ui/html/Popup/',
        },
      };
    } else {
      return {
        // resolve: {
        //   alias: {
        //     '@ctmobile/ui-popup': path.resolve(__dirname, 'src/ctmobile-ui-popup'),
        //   },
        // },
      };
    }
  },
};
