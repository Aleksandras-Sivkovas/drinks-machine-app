const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry : path.join(__dirname, 'src/main/js/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'drinks-machine-app.js',
    },
    devtool: "inline-sourcemap",
    devServer: {
      contentBase: './dist',
      hot: false,
      inline: false,
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: true
    },
    // Tell webpack to use html plugin
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/main/html/index.html'),
        title: 'Drinks machine',
      }),
      new CopyWebpackPlugin([
      {
       from: 'test_data/rest',
        to: 'rest/drinks-machine-app-data'
      }
    ],{copyUnmodified : true})
    ],
    // Loaders configuration
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.css$/,
          use:['style-loader','css-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images/'
              }
            }
          ],
        },
        {
          test: /favicon.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
      ],
    },
    resolve: {
      modules: ['src/main/js','src/main/css', 'node_modules','test_data'],
      extensions: ['.js', '.jsx'],
    },
}
