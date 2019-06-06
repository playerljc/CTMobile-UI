const path = require('path');

// const runtimePath = 'D:\\frameworker\\frameworks\\ctmobile\\CTMobile-UI\\CTMobile-UI-Tab\\demo\\';

module.exports = {
  getConfig({ plugins }) {
    return {
      // /**
      //  * 入口
      //  */
      // entry: {
      //   mobile: `${runtimePath}src\\mobile.js`,
      // },
      //
      // plugins: [
      //   new plugins.HtmlWebpackPlugin({
      //     title: 'CtMobile Demo',
      //     filename: 'mobile.html',
      //     template: `${runtimePath}src\\mobile.html`,
      //     chunks: ['mobile'],
      //   }),
      //   new plugins.CopyWebpackPlugin([
      //     {
      //       from: 'src/static',
      //       to: 'static/html',
      //       toType: 'dir',
      //       context: runtimePath,
      //     },
      //   ]),
      // ],
      resolve: {
        alias: {
          '@ctmobile/ui-tree': path.resolve(__dirname, 'src/ctmobile-ui-tree'),
        },
      },
    };
  },
};
