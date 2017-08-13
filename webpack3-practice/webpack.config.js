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
    // Loaderの設定
    rules: [
      {
        // 対象となるファイルの拡張子
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      },
    ]
  }
};