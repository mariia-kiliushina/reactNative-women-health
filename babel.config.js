module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            src: './src/',
            components: './src/components',
            assets: './src/assets',
            screens: './src/screens',
            tests: ['./tests/'],
          },
        },
      ],
    ],
  };
};
