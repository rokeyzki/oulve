var app          = require('koa')(), // 框架内核
    staticServer = require('koa-static'); // 静态资源服务器

app.use(staticServer('.'));

app.listen(80);
// app.listen(8080);
console.log('oulve start');
