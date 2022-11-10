const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].[chunkhash:4].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',    // 如果不设置，输出包的路径前面就没有/符号,找vendor.js的时候会定位错误。
        clean: {
            keep: /assets/, // 保留 'assets' 下的静态资源
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.ts$|\.tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: {
                        //         localIdentName: '[name].[local]',
                        //     },
                        //     esModule: false,
                        // }
                    }

                ]
            },
            {
                test: /\.less$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64]',
                            },
                            esModule: false,
                        }
                    },
                    { loader: 'less-loader' }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            // hash: true
        }),
        new webpack.DefinePlugin({
            'process.env.INTERPRETER_STACK_LOG': '0',
            'process.env.VERSION': '' + new Date().getTime(),
        })
    ]
}
