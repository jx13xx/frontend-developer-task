module.exports = {
  globals: {
    "ts-jest": {
      // Tell ts-jest about our typescript config.
      // You can specify a path to your tsconfig.json file,
      // but since we're compiling specifically for node here,
      // this works too.
      tsConfig: {
        target: "es2019",
      },
    },
  },
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
  moduleDirectories: ["node_modules", "src"],
};
