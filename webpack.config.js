const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: ['./src/index.js', './src/scss/styles.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            // translates CSS into CommonJS
            loader: "css-loader", options: {
              sourceMap: true
            }
          }, {
            // compiles Sass to CSS
              loader: "sass-loader", options: {
                sourceMap: true
              }
          }],
          // creates style nodes from JS strings
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader', options: {
                name: './[name].[ext]',
                outputPath: '/assets'
              }
            },
            {
              loader: 'image-webpack-loader',
              query: {
                // Compress JPEG images
                mozjpeg: {
                  progressive: true,
                },
                // Compress GIF images
                gifsicle: {
                  interlaced: false,
                },
                // Compress PNG images
                optipng: {
                  optimizationLevel: 4,
                },
                // Compress PNG images
                pngquant: {
                  quality: '75-90',
                  speed: 3,
                },
                svgo: {}
              }
            }
          ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      // define where to save the file
      filename: 'bundle.css',
      allChunks: true
    })
  ],
};