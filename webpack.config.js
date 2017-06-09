const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module : {
    rules : [
      {
        test : /\.scss$/,
        use : [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins : ['transform-decorators-legacy','transform-runtime']
          }
        }
      }
    ]
  },
  devServer: {
    hot : true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  }
};
