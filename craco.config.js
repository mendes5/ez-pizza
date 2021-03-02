const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      'constants': path.resolve(__dirname, 'src/constants'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'images': path.resolve(__dirname, 'src/images'),
      'modules': path.resolve(__dirname, 'src/modules'),
    }
  },
};