'use strict'

var webpack = require('webpack')

module.exports = {
    entry: [
        // 'webpack-dev-server/client?http://localhost:9090/assets',
        // 'webpack/hot/only-dev-server',
        './index.jsx'
    ],
    output: {
        publicPath: 'http://192.168.1.2:9090/assets'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ],

    devServer: {
        contentBase: 'http://192.168.1.2:9091',
        info: true,
        quiet: false,

        stats: {
            colors: true,
            progress: true
        }
    }
}