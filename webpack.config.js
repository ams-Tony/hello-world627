var config = {
  entry: './main.js',

  output: {
    path: './',
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    ip: '0.0.0.0',
    port: 8000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;
