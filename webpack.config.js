var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    }, //below are transformations
    module: {
        rules: [
            {test:/\.js$/, use: 'babel-loader'},
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};