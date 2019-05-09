const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  getConfig(webpack) {
    return {
      plugins: [
        new CopyWebpackPlugin([
          {
            from: 'src/static',
            to: 'static/html',
            toType: 'dir',
            context: 'D:\\frameworker\\frameworks\\ctmobile\\CTMobile-UI\\CTMobile-UI-SidePanel\\demo\\',
          },
        ]),
      ],
      resolve: {
        alias: {
          '@ctmobile/ui-sidepanel': path.resolve(__dirname, 'src/ctmobile-ui-sidepanel'),
        },
      },
    };
  },
};
