var koa = require('koa');
var parse = require('co-body');
var hbs = require('koa-hbs');
var router = require('koa-router');
var app = koa();

app.use(hbs.middleware({
	viewPath:__dirname + '/views'
}))

app.use(router(app));

app.get('/', function *(){
	yield this.render('index', {message:'hello'});
})

app.post('/', function *(){

	var user = yield parse(this.request);
	console.log(user.ip,user.id,user.passwd);


	this.response.redirect('/app');
	// console.log(this.request.query);
	// console.log(this.request.query.passwd);
})

app.get('/app', function *(){
	yield this.render('app', {message:"app"});
})

app.listen(4000);