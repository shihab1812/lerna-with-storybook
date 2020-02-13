
const path = require('path');
  
module.exports = {
  stories: ['../components/**/*.stories.(js|ts|tsx|mdx)'],
  presets: ['@storybook/addon-docs/preset','storybook-addon-deps/preset-explorer'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links','@storybook/addon-a11y/register', 'storybook-addon-deps','@storybook/addon-storysource'],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    

    // postc ss loader config
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [
              require("postcss-import"),
              require("tailwindcss"),
              require("autoprefixer")
            ]
          }
        }
      ],
      include: path.resolve(__dirname, "../")
    });

    // Return the altered config
    return config;
  },
};
