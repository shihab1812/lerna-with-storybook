
const path = require('path');
  
module.exports = {
  stories: ['../components/**/*.stories.(js|mdx)'],
  presets: ['@storybook/addon-docs/preset','storybook-addon-deps/preset-explorer'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links','@storybook/addon-a11y/register', 'storybook-addon-deps',{
    name: '@storybook/addon-storysource',
    options: {
      rule: {
        // test: [/\.stories\.jsx?$/], This is default
        include: [path.resolve(__dirname, '../components')], // You can specify directories
      },
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: false },
      },
    },
  }],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    });
    
    // Return the altered config
    return config;
  },
};
