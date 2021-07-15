const webpack = require('webpack')
module.exports = {
    outputDir: 'dist',
    configureWebpack: {
        performance: {
            hints: 'warning',
            maxEntrypointSize: 50000000,
            maxAssetSize: 30000000,
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('js')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    devServer: {
        host: "127.0.0.1",
        port: 8050,
        proxy: {
            '/static': {
                target: 'http://www.gallstone.com.cn/yxkj/',
                ws: false,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/static': ''
                }
            },
        }
    }
}