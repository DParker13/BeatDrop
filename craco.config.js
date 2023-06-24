module.exports = {
  // ...
  webpack: {
    plugins: {
      add: [ /* ... */ ],
      remove: [ /* ... */ ],
    },
    configure: { /* ... */ },
    configure: (webpackConfig, { env, paths }) => {
      /* ... */
      webpackConfig.resolve.fallback = {
        path: require.resolve('path-browserify'),
        zlib: require.resolve("browserify-zlib"),
        fs: false,
        request: require.resolve('request'),
        crypto: require.resolve('crypto'),
        AdmZip: require.resolve('adm-zip'),
        execFile: require.resolve('child_process'),
        semver: require.resolve('semver'),
      };

      return webpackConfig;
    },
  },
};