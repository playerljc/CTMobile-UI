const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    if (curModule.mode === 'production') {
      return {
        output: {
          publicPath: '/playerljc.github.io/ctmobile-ui/html/CascadeCompared/',
        },
      };
    } else {
      return {
      // resolve: {
      //   alias: {
      //     '@ctmobile/ui-cascadecompared': path.resolve(__dirname, 'src/ctmobile-ui-cascadecompared'),
      //   },
      // },
      };
    }
  },
};
