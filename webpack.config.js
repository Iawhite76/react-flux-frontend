var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "eval",
  entry: {
    app: [
      'font-awesome-webpack!./src/font-awesome.config.js',
      "webpack-dev-server/client?http://0.0.0.0:8080",
      "webpack/hot/only-dev-server",
      "./src/scripts/main.js"
    ]
  },
  output: {
    path: "./build",
    filename: "bundle.js",
    publicPath: './'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('main.css'),
  ],
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot!babel",
        exclude: /node_modules/
      },

      {
        test: /\.styl$/,
        loader: "style!css!stylus"
      },

      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },

      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },

      // the url-loader uses DataUrls. 
      // the file-loader emits files. 
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff" 
      },

      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      },

      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },

      {
        test: /\.html$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      }
    ]
  }
};
