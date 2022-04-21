const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { node } = require('webpack');

module.exports = {
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      title: 'development',
      inject: true,
    }),
    new MiniCssExtractPlugin(),
  ],
  mode: process.env.NODE_ENV,
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/dist',
    },
    proxy: {
      '/drawings': 'http://localhost:3000',
    },
    port: 8080,
    open: true,
    hot: true,
    // liveReload: true,
    compress: true,
    // watchContentBase: true,
  },
  // resolve: {
  //   extensions: ['.js', '.jsx', '.json'],
  // },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        test: /\.s[ac]ss$/i,
        // test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',

          // -> not currently working
          // process.env.NODE_ENV === 'development'
          //   ? 'style-loader'
          //   : MiniCssExtractPlugin.loader,

          // MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
