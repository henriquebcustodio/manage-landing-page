const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
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
            }
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