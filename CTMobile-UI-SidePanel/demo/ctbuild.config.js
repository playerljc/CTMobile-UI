// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const runtimePath = 'D:\\frameworker\\frameworks\\ctmobile\\CTMobile-UI\\CTMobile-UI-SidePanel\\demo\\';

module.exports = {
  getConfig({plugins}) {
    return {
      /**
       * 入口
       */
      entry: {
        mobile: `${runtimePath}src\\mobile.js`,
      },

      plugins: [
        new plugins.HtmlWebpackPlugin({
          title: 'CtMobile Demo',
          filename: 'mobile.html',
          template: `${runtimePath}src\\mobile.html`,
          chunks: ['mobile'],
          // hash: true, // 防止缓存
          // // chunks: ['mobile'],
          // minify: {
          //   removeAttributeQuotes: true, // 压缩 去掉引号
          // },
        }),
        new CopyWebpackPlugin([
          {
            from: 'src/static',
            to: 'static/html',
            toType: 'dir',
            context: runtimePath,
          },
        ]),
      ],
      // resolve: {
      //   alias: {
      //     '@ctmobile/ui-sidepanel': path.resolve(__dirname, 'src/ctmobile-ui-sidepanel'),
      //   },
      // },
    };
  },
};
