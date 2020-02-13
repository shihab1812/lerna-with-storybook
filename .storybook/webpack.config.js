const DependenciesPlugin = require('storybook-dep-webpack-plugin');
const path = require('path');

module.exports = ({ config, mode }) => {

  // the following is the only configuration required for collecting dependencies data
  config.plugins.push(new DependenciesPlugin({
  }));
  return config;
};