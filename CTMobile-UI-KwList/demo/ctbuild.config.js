const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    if (curModule.mode === 'production') {
      return {
        output: {
          publicPath: '/playerljc.github.io/ctmobile-ui/html/KwList/',
        },
      };
    } else {
      return {
        // resolve: {
        //   alias: {
        //     '@ctmobile/ui-kwlist': path.resolve(__dirname,'src/ctmobile-ui-kwlist'),
        //   }
        // }
      };
    }
  },
};
