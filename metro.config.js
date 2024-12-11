// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
const { transformer, resolver } = config;
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("@lingui/metro-transformer/expo"),
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: true,
      inlineRequires: true,
      nonInlinedRequires: [
        // We can remove this option and rely on the default after
        // https://github.com/facebook/metro/pull/1390 is released.
        "React",
        "react",
        "react-compiler-runtime",
        "react/jsx-dev-runtime",
        "react/jsx-runtime",
        "react-native",
      ],
    },
  }),
};
config.resolver = {
  ...resolver,
  sourceExts: [...resolver.sourceExts, "po"],
};

module.exports = withNativeWind(config, { input: "./global.css" });
