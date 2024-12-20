module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          lazyImport: true,
          // Unistyle can't import if enabled this
          // native: {
          //   // Disable ESM -> CJS compilation because Metro takes care of it.
          //   // However, we need it in Jest tests since those run without Metro.
          //   disableImportExportTransform: false,
          // },
        },
      ],
    ],
    plugins: [
      "@lingui/babel-plugin-lingui-macro",
      [
        "react-native-unistyles/plugin",
        {
          debug: true,
        },
      ],
      "react-native-reanimated/plugin", //Reanimated must be last
    ],
    env: {
      production: {
        plugins: ["transform-remove-console"],
      },
    },
  };
};
