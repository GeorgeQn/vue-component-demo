/*
 * @Descripttion: 
 * @version: 
 * @Author: QinJiaJun
 * @Date: 2020-11-21 01:28:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-21 01:53:40
 */
const path = require('path');
module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8081, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        hotOnly: false,
    },
    // 第三方插件配置
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, "./src/assets/less/global.less") // 这段是自己加的，根据自己文件的位置来修改,用于添加全局样式表
            ]
        }
    }
}