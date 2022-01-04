const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // ↓デバッグ用ソースマップ
  // devtool: 'source-map',
  entry: './src/javascript/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './javascript/[name]-[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [
           { loader: 'ts-loader' },
         ]
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: '> 0.25%, not dead' }],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            // ↓デバッグ用ソースマップ
            // options: {
            //   sourceMap: true,
            // },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        // Webpack5
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[contenthash][ext]',
        },
        //
        use: [{ loader: 'image-webpack-loader' }],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/[name]-[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/access.pug',
      filename: 'access.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
