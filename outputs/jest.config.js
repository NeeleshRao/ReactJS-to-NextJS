const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // ✅ use jsdom to support document
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
