// set NODE_ENV=production in console, then - webpack

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || "development";

console.log('NODE ENV - ' + NODE_ENV);

let config = {
    entry: [
        // "babel-polyfill",
        "./src/js/index.js",
    ],
    devtool: "source-map",
    output: {
        path: __dirname + "/dist/js",
        filename: NODE_ENV === "development" ? 'weather.js' : 'weather.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            test: /\.min.js$/,
            exclude: /src|node_modules/,
            sourceMap: true,
            uglifyOptions: {
                ecma: 8
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
};

if (NODE_ENV === "development") {
    config.plugins.push(new ExtractTextPlugin("../css/weather.css"));
} else {
    config.plugins.push(new ExtractTextPlugin("../css/weather.min.css"));
    config.plugins.push(new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min.css$/g,
        cssProcessorOptions: {discardComments: {removeAll: true}},
    }));
}

module.exports = config;