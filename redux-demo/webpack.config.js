const path = require('path');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    resolve: { // These options change how modules are resolved
      modules: [path.resolve(__dirname, "src", "app"), "node_modules"]      
    },
    module: {
      rules: [{
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      }, {
        test: /\.jsx$/, // files ending with .jsx
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      }]
    },
    devServer: {
      contentBase: path.resolve(__dirname, './public'), // A directory url to serve html content from
      historyApiFallback: true, // fallback to /index.html for Single Page Applications
      inline: true, // inline mode (set to false to disable including client scripts like live reload)
      open: true // open default browser while launching
    },
    devtool: 'eval-source-map' // enable dev tool for better debugging experience
};

/* var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
   devServer:{
    contentBase: path.resolve(__dirname, './public'), // A directory url to serve html content from
      historyApiFallback: true, // fallback to /index.html for Single Page Applications
      inline: true, // inline mode (set to false to disable including client scripts like live reload)
      open: true // open default browser while launching    
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel-loader'
      },
      {
        test : /\.css$/,
        include : APP_DIR + '/css',
        exclude: /node_modules/,
        loader : 'style!css'
      }
    ]
  }
};

module.exports = config;
 */