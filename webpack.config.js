const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

const production = process.env.NODE_ENV === 'production';
const port = 3004;

module.exports = () => {
  const env = dotenv?.config()?.parsed || {};
  const envKeys = Object.keys(env).reduce((prev, next) => {
    // eslint-disable-next-line no-param-reassign
    prev[next] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    entry: { myAppName: path.resolve(__dirname, './src/index.tsx') },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: production ? '[name].[contenthash].js' : '[name].js',
      // https://ui.dev/react-router-cannot-get-url-refresh
      publicPath: '',
    },

    module: {
      rules: [
        // {
        //   // https://chriscourses.com/blog/loading-fonts-webpack
        //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         name: '[name].[ext]',
        //         outputPath: 'fonts/',
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(s(a|c)ss|css)$/,
          exclude: /node_modules/,
          use: [
            production ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: !production,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !production,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@modules': path.join(__dirname, 'src/modules'),
        '@common': path.join(__dirname, 'src/common'),
        '@src': path.join(__dirname, 'src'),
      },
      extensions: ['*', '.js', '.jsx', '.scss', '.ts', '.tsx'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
            {
                from: 'public/fonts', // Папка-источник, откуда копируем
                to: 'fonts', // Папка назначения, куда копируем
            },
            {
              from: 'public/fonts.css', // Папка-источник, откуда копируем
              to: 'fonts.css', // Папка назначения, куда копируем
          },

        ],
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Webpack & React',
        template: './public/index.html',
        // favicon: "./public/favicon.ico"
      }),
      new MiniCssExtractPlugin({
        filename: production ? '[name].[contenthash].css' : '[name].css',
      }),
      new webpack.DefinePlugin(
        {
          process:
            {
              env: envKeys,
            },
        },
      ),
    ],
    devServer: {
      port,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    mode: production ? 'production' : 'development',
  };
};
