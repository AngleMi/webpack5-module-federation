const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development', // production
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [path.resolve(process.cwd(), 'src')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'app1',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new ModuleFederationPlugin({
      name: 'hostApp',
      filename: 'remoteEntry.js',
      remotes: {
        // 声明需要引用的远程应用
        remote: 'remoteApp@http://localhost:3000/remoteEntry.js',
      },
      shared: ['vue', 'element-plus'],
    }),
  ],
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 9000,
  },
}
