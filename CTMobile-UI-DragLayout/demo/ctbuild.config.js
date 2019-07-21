const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    if (curModule.mode === 'production') {
      return {
        output: {
          publicPath: '/playerljc.github.io/ctmobile-ui/html/DragLayout/',
        },
      };
    } else {
      return {
      // resolve: {
      //   alias: {
      //     '@ctmobile/ui-draglayout': path.resolve(__dirname,'src/ctmobile-ui-draglayout'),
      //   }
      // }
      };
    }
  },
};
