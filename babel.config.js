module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
        {
          lazyImport: true,
          native: {
            // Disable ESM -> CJS compilation because Metro takes care of it.
            // However, we need it in Jest tests since those run without Metro.
            disableImportExportTransform: false,
          },
        },
      ],
    ],
    plugins: ["macros", "react-native-reanimated/plugin"],
    env: {
      production: {
        plugins: ["transform-remove-console"],
      },
    },
  };
};
