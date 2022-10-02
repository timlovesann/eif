/*
 * Webpack is going to take your JavaScript, run it through some transformations, and create a new, transformed JavaScript file. This file will be the ones that the browser actually reads.
 *
 * In order to do this, Webpack needs to know three things:
 * What JavaScript file it should transform.
 * Which transformations it should use on that file.
 * Where the new, transformed file should go.
 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv');


var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html'
  });
  
module.exports = {
  mode: "production",
  //devtool: 'inline-source-map',
  entry: __dirname + '/src/index.tsx',
  output: {    
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, '/dist/'),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },    
  },   
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader'},
        exclude: /node_modules/
      }, 
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(jpe?g|png|gif|jpg|svg|ico)$/i, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'assets/images',
            }
          },
        ]
      },
      {
        test: /\.(config)$/, 
        use: [
         {
          loader: 'file-loader',
          options: {
           name: '[name].[ext]' 
          }
         } 
        ]
      }   
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },  
  plugins: 
    [
      new HtmlWebpackPlugin({
        hash: true,
        title: 'Election Integrity Force/Fund',
        template: './src/index.html',
        filename: './index.html'
      }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public/'),
    historyApiFallback: true,
    port: 8080,
  },
};