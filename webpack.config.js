const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'production',
	devtool: 'eval-source-map',
	entry: './src/index.ts', // entry point
	plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ 
			filename: 'css/style.css',
		}),
		new HtmlWebpackPlugin({
      template: "./index.html" // index.html을 기본 템플릿으로 반영할 수 있도록 설정
    }),
		new CleanWebpackPlugin(), // 불필요한 build 파일 삭제
		new Dotenv(), // 환경변수
  ],
	module: {
		rules: [
			{
				test: /\.ts$/, // .ts 파일일 때 적용
				use: 'ts-loader', // ts-loader 모듈을 사용해서 javaScript로 컴파일 
				include: [path.resolve(__dirname, 'src')] // src 경로에 있는 파일들 모두 포함
			},
			{
				test:  /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		// import 시 해당 확장자는 붙이지 않아도 된다.
		extensions: ['.ts', '.js'] 
	},
	output: {
		filename: 'bundle.js',
		// absolute path를 현재 경로로 설정 (__dirname)
		// 현재 경로를 기준으로 public (빌드 폴더) 경로를 적는다
		path: path.resolve(__dirname, 'public'),
	},
	devServer: {// 코드 변경 감지
		// 개발 서버가 dist 폴더를 제공할 수 있도록 설정
		static: {
			directory: path.resolve(__dirname, 'public')
		},
		port: 5000
	}
}