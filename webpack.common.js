module.exports = {
    entry: "./src/index.js",
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash][ext]'
                }
            }
        ]
    }
};