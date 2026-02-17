const path = require("path");

module.exports = {
  plugins: {
    "postcss-import": {
      path: [path.join(__dirname, "site/assets/css")]
    },
    "postcss-preset-env": { stage: 1 },
    "cssnano": {}
  }
};
