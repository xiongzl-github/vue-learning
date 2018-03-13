{
  // ...
  rules: {
    loaders: [
      // ...
      {
        test: /muse-ui.src.*?js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: [
              'vue-style-loader',
              'css-loader',
              {
                loader: 'less-loader',
                options: {
                  globalVars: {
                    museUiTheme: `'${museUiThemePath}'`,
                  }
                }
              }
            ]
          }
        }
      }
    ]
  },
  resolve: {
    // ...
    alias: {
      'muse-components': 'muse-ui/src'
    }
  }
}