生产线 Webpack 代码生产工艺 工作流 Work Flow

- html + css + js = development
  html  template {{}}
  css   stylus
  js    es6,7,8,9 => es5
最后代码运行的env(运行环境)

- js 
  babel
  使用最新的技术来开发， babel 编译成es5
  
- babel-core 核心的转译库 
  npm run build "babel..."
  babel-cli
  babel-preset-env .babelrc
  {                         <!-- 编译的环境 -->
    "preset": ["env"]  
  }

  build
  dev

- presrt 预处理
  env 搞不定 安装插件

- webpack 是一起工作流的主宰
  webpack --mode development
  /src 开发目录
  /dist 

- 开发时 development 代码的可读性 dev  -- 本地 localhost
- 上线时 production 代码要压缩， 混淆代码  -- build  域名访问
- 测试   test   -- 局域网