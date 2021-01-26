const {injectBabelPlugin} = require('react-app-rewired');
  module.exports = function override(config, env) {
   config = injectBabelPlugin('transform-react-pug', config);
    return config;
  }