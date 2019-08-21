const Koa = require('koa');
const fs = require('fs');
const route = require('koa-route');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

// 中间件 即是函数
// const main = ctx => {
//   ctx.response.body = 'Hello World'
//   ctx.response.type = 'html';
//   ctx.response.body = fs.createReadStream('./template.html');  //创建一个可读流


//   if (ctx.request.path !== '/') {
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">index page</a>' 
//   } else {
//     ctx.response.body = 'Hello World'
//   }
// };
const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">Index page</a>'
}
const main = ctx => {
  ctx.response.body = '<a href="/about">Hello Index</a>'
}
const redirect = ctx => {
  ctx.response.redirect('/')
  ctx.response.body = '<a href="/">Index Page</a>'
}

app.use(serve(path.join(__dirname, 'assets'))) // 静态资源
app.use(route.get('/', main));
app.use(route.get('/about', about));
app.use(route.get('/redirect', redirect));
// app.use(main);
app.listen(3000);