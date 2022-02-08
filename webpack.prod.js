const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    },
                },
                extractComments: false
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            },
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
});