const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

// eslint-disable-next-line no-undef
module.exports = {
    // eslint-disable-next-line no-undef
    entry : __dirname + '/src/index.js',
    mode: 'production',
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
        ]
    },
    output : {
        filename : 'lib.js',
        // eslint-disable-next-line no-undef
        path : path.resolve(__dirname, 'dist'),
        library: 'validator',
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new UglifyJsPlugin()
    ],
    optimization: {
        minimizer: [new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 6,
            },
          })],
    },
}