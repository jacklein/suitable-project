module.exports = {
  preset: 'jest-expo',
  transform: {
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/enzyme-to-json/serializer"
  ],
  setupTestFrameworkScriptFile: "<rootDir>/tests/setupTests.js"
};