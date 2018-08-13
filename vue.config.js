
module.exports = {
    baseUrl: '',
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: false,
        proxy: {
            '/xrf/': {
                target: 'http://reg.tool.hexun.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/xrf': ''
                }
            },
            '/wa/': {
                target: 'http://api.match.hexun.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/wa': ''
                }
            }
        }, // 设置代理
        before: app => { }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                // 修改它的选项...
                options.limit = 10000
                return options
            })
    },
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项,Sass 样式传入共享的全局变量
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: `@import "@/style/common.scss";`
            }
        }
    }
}