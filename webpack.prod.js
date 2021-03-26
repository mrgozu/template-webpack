const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const {CleanWebpackPlugin} = require ('clean-webpack-plugin');

module.exports ={
    mode: 'production',
    output:{
        filename: 'main.[contenthash].js',
        clean:true
    },
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                //   options: {
                //     presets: ['minify']
                // }
            }
                
            },
            
            {
                test: /\.css$/i,
                exclude: /styles\.css$/,
                use: ['style-loader', 'css-loader'],
               
                
            },
            {
                test: /styles\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test:/\.html$/,
                loader: 'html-loader',
                options: {
                    minimize:true,

                }
                
            },
            {
              test:/\.(png|svg|jpg|gif)$/,
              use: [{
                  loader: 'file-loader',
                  options:{
                      esModule:false
                  }
              }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets',to: 'assets/'}
            ]
        }),
        // new CleanWebpackPlugin(),
    ]
}