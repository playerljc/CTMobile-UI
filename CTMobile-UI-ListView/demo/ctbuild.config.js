const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    if (curModule.mode === 'production') {
      return {
        output: {
          publicPath: '/playerljc.github.io/ctmobile-ui/html/ListView/',
        },
      };
    } else {
      return {
        // resolve: {
        //   alias: {
        //     '@ctmobile/ui-listview': path.resolve(__dirname,'src/ctmobile-ui-listview'),
        //   }
        // }
      };
    }
  },
};
