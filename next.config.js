const withReactSvg = require("next-react-svg");
const path = require("path");
const withImages = require("next-images");


// module.exports = withReactSvg({
//   include: path.resolve(__dirname, "src/assets/svg"),
//   webpack(config, options) {
//     return config;
//   },
// });



module.exports = withImages({
  esModule: true,
  sass: true,
  modules: true,
  webpack(config, options) {
    return config;
  },
});