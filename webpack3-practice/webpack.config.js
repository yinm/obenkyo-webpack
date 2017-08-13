const webpack = require('webpack');

module.exports = {
  // webpackでビルドを行う際の、エントリーポイント
  entry: './src/main.js',
  // バンドルファイルの出力設定
  output: {
    // 出力先のディレクトリ
    path: `${__dirname}/addtasks/`,
    // 出力ファイル名
    filename: 'bundle.js'
  },

  // ソースマップを有効にする
  devtool: 'source-map',

  plugins: [
    // JSファイルのminifyを実行する
    new webpack.optimize.UglifyJsPlugin({
      // minify時でもソースマップを利用する
      sourceMap: true
    })
  ]
};