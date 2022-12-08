const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // entrada
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // saída
  output: {
    path: path.resolve(__dirname, 'build'), // caminho para salvar o bundle
    filename: 'bundle[hash].js', // nome que ele dará para o arquivo bundle
  },
  plugins: [
    // criando a instância
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        use: 'babel-loader', // quero rodar o babel-loader
        test: /\.js$/, // em todos os arquivos .js
        exclude: /node_modules/, // exceto nos arquivos .js que estão dentro da node_modules
      },
    ],
  }
};
