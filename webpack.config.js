var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        tutorial: ['./app/js/main', 'webpack-hot-middleware/client']
    },
    output: {
        path: path.join(__dirname, './app/dist'),
        filename: '[name].bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [{
            test: /\.jsx$|\.js$/,
            loader: 'eslint-loader',
            include: path.join(__dirname, 'app/js'),
            exclude: /bundle\.js$/
        }],
        loaders: [{
            test: /\.jsx$|\.js$/,
            include: path.join(__dirname, 'app/js'),
            exclude: /node_modules/,
            loader: "babel"
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
}
