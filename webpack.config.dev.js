module.exports = {
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js',
    publicPath: '/js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ["transform-object-rest-spread", ]
          }
        }
      },
      {
        test:/\.css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test:/\.scss$/,
        use: [ 
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },

  devtool: 'source-map',

};