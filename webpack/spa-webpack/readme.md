## rollup
three sharking
用到的代码  不会被打包

## parcel
零配置

## webpack 4.0
production 会自动开启 tree shaking
作用域里面的代码无法分析 

NODE_ENV development

## css-mmodule
命名冲突
利用 hash 值 解决重复命名

## webpack 3.0
import(/* webpackChunkName: 'async' */)
magic comment 魔法注释
异步加载模块
应用 路由 需要时才加载

import Home from 'lazy!./components/home'

用 babel-loader 金策有没有 lazy！
换成 magic comment

