import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
  mode: 'development', // or 'production'
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Uses public/index.html as template
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images', // where the images will go under the output directory
              publicPath: '/images', // path used to generate URLs to the images
              name: '[name].[ext]', // retain original file names
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output JS bundle in dist folder
    publicPath: '/', // Important to serve from root during development
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'), // Serve files from public directory
      },
      {
        directory: path.join(__dirname, 'dist'), // Serve files from dist directory for JS
      },
    ],
    compress: true,
    port: 3000,
    historyApiFallback: true, // Handle client-side routing
  },
};

export default config;
