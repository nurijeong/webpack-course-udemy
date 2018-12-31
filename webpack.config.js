var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
      main: path.resolve(__dirname, 'main.js'),
      tweet: path.resolve(__dirname, 'tweetEntryPoint.js')
    },
    // entry: __dirname // app.js
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js' //main.bundle.js | tweet.bundle.js
    },
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node-modules/,
          query: require(path.resolve(__dirname, 'eslint.config.js'))
        }
      ],
      loaders: [
        {
          test: /\.coffee$/,
          loader: 'coffee-loader',
          exclude: /node_modules/
        },
        {
          test: /\.ya?ml$/,
          loaders: ['json-loader', 'yaml-loader'],
          // loader: 'json-loader!yaml-loader',
          include: path.resolve(__dirname, 'config')
        },
        {
          test: /\.ts$/,
          loaders: ['ts-loader'],
          include: path.resolve(__dirname, 'ts')
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.css$/,
          // exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader'] 
          // loader: 'style-loader!css-loader
        },
        {
          test: /\.scss$/,
          // exclude: /node_modules/,
          // loaders: ['style-loader', 'css-loader', 'sass-loader'] 주석
          // loader: 'style-loader!css-loader!sass-loader'
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
          loader: 'url-loader?limit=200000' // 100000 = 100kb
        } 
      ]
    },
    plugins: [
      new ExtractTextPlugin('main.css')
    ],
    resolve: {
      extensions: ['.js', '.coffee', '', '.ts', '.css', '.scss'],
      alias: {
        sectionThreeSolution$: path.resolve(__dirname, 'sectionThreeSolution.js'),
        Api: path.resolve(__dirname, 'apis'),
        welcomeUser$: path.resolve(__dirname, 'welcomeUser.coffee'),
        typescript: path.resolve(__dirname, 'ts'),
        styles: path.resolve(__dirname, 'styles')
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      inline: true,
      port: 3000
    }
}
  