module.exports = {
  // webpackでビルドを行う際の、エントリーポイント
  entry: './src/main.js',
  // バンドルファイルの出力設定
  output: {
    // 出力先のディレクトリ
    path: `${__dirname}/dist/`,
    // 出力ファイル名
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};