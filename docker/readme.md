- 项目要经过开发 测试 上线
  env cross-env
  这些环境是在不同的机器上的 运维
  一键发布我们的项目  容器


- OS linux mysql mongodb
  独立起来,互不影响 共享动力, 数据储存
  提升机器的性能  VMWare
  测试服务器
- 运维,  发布 更简单  前端可以利用docker 
- 微服务架构 
  端口

- Dockerfile文件
  1. FROM: 拉取一些镜像来到本地 跨机器安装很方便
  2. WORKDIR /app:  设置镜像中的工作目录
  3. COPY package.json /app: 拷贝文件
  4. RUN npm install: 安装node包
  5. COPY . /app: 拷贝全部文件到app文件夹
  6. EXPOSE 8081: 暴露端口
  7. CMD node index.js: 运行项目

- 根据Dockerfile 构建镜像
  docker build -t image-name .
  docker images 