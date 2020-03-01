const path = require('path');
//引入自动生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入分离css的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//导入打包前清空dist文件夹插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//配置webpack文件，需要将配置的对象导出，给webpack使用
module.exports = {
  //入口文件
  entry: './src/main.js',
  //出口文件
  output: {
    //打包后输出的目录，必须是绝对路径
    path: path.join(__dirname, 'dist'),
    //打包后生成的文件名
    filename: 'js/bundle.js'
  },
  //打包的模式(development未压缩，production压缩)
  mode: 'development',
  //配置模块加载规则
  module: {
    rules: [
      //配置css解析
      {
        test: /\.css$/,
        //css-loader让webpack能够识别css文件
        //style-loader通过动态创建style标签的方式，让解析后的css样式作用到页面上
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader'
        ]
      },
      //配置less解析
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader',
          'less-loader'
        ]
      },
      //配置图像格式解析
      {
        test: /\.(jpg|png|gif)$/i,
        use: [
          {
            //如果不对url-loader进行配置的话，图像会转成base64字符串格式，体积会变大，好处是不用再去请求图像，减少请求次数；坏处是图像过大时不适合使用
            loader: 'url-loader',
            options: {
              //规定在多大的体积内才转成base64格式
              limit: 8 * 1024,
              //配置输出的文件名
              name: '[name],[ext]',
              //配置静态资源引用路径
              publicPath: '../images/',
              //配置输出的文件目录
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  //配置插件
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin({ filename: 'css/index.css' }),
    new CleanWebpackPlugin()
  ]
}