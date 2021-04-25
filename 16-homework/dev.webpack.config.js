const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    loader:{

    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
        new HtmlWebpackPlugin (),
        new HotModuleReplacementPlugin ({
          title: 'My App',
          filename: './src/index.html'
        })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/img',
              },
            },
          ],
        },
        {
          test: /\.mp3$/,
          loader: 'file-loader'
        }        
      ],
    },
  };