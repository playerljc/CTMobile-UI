const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    if (curModule.mode === 'production') {
      return {
        output: {
          publicPath: '/playerljc.github.io/ctmobile-ui/html/ImageViewer/',
        },
      };
    } else {
      return {
        // resolve: {
        //   alias: {
        //     '@ctmobile/ui-imageviewer': path.resolve(__dirname, 'src/ctmobile-ui-imageviewer'),
        //   }
        // }
      };
    }
  },
};
