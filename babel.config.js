module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
