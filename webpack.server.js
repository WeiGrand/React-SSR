/**
 * Created by heweiguang on 2018/3/10.
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');// 能够使 node_modules 下的包不会一起打包进 bundle.js 而只是用 require 调用

const config = {
    // 告诉 webpack 这是用于 node 环境 （区别于 浏览器 环境）
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
