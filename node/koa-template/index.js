const Koa = require('koa');

// 应用的实例
const app = new Koa();
const admin = new Koa();
// req res    ctx 封装了req，res
app.use(async (ctx, next) => {
  console.log(1);
  // 输出后 koa 没有回应； 自己处理了 因此返回了Not found
  await next(); // 交给下一个中间件
  console.log(2);
});
app.use(async (ctx, next) => {
  console.log(4);
  await next();
});
app.use(async (ctx) => {
  console.log(3);
  ctx.body = 'hello koa';
});
app.listen(3000, () => {
  console.log('server is running 3000');
});
admin.listen(4000, () => {
  // console.log('server is running 4000');
});