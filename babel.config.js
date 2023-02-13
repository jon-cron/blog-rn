module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // NOTE step 4. copy and paste the plugin line of code to your babel
    plugins: ["react-native-reanimated/plugin"],
  };
};
