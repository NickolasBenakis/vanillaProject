
//let ExtractTextPlugin = require('extract-text-webpack-plugin'); 
// let extractPlugin = new ExtractTextPlugin({
//     filename: 'main.css'
// });
//  for webpack 4
let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let extractPlugin = new MiniCssExtractPlugin({
    filename: "main.css",
    chunkFilename: "id.css"
})

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [
        extractPlugin
    ]
};