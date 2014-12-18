var koa = require('koa');
var app = koa();

app.use(function *(next){
	console.log('1');;
	yield next;

	console.log('over');
})

app.use(function *(next){
	console.log('2');
	yield next;
	console.log("4");
})

app.use(function *(){

	console.log("3");
	this.body = 'hello world';

})


app.listen(5000);