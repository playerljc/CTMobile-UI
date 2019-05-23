const path = require('path');

module.exports = {
  getConfig({ plugins }) {
    return {
      resolve: {
        alias: {
          '@ctmobile/ui-tab': path.resolve(__dirname, 'src/ctmobile-ui-tab'),
        },
      },
    };
  },
};
