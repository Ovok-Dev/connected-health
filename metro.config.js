// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
module.exports = mergeConfig(getDefaultConfig(__dirname), {
  transformer: {
    unstable_allowRequireContext: true,
  },
});
