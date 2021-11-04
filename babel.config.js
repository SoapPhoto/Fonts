module.exports = function (api) {
  return {
    presets: ['next/babel'],
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          pure: true,
          displayName: api.env('development'),
        },
      ],
    ],
  };
};
