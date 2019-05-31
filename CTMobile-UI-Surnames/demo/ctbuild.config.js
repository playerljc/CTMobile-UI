const path = require('path');

module.exports = {
  getConfig({ plugins }) {
    return {
      resolve: {
        alias: {
          '@ctmobile/ui-surnames': path.resolve(__dirname, 'src/ctmobile-ui-surnames'),
        },
      },
    };
  },
};
