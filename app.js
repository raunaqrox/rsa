var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var fs = require('fs');

var path = __dirname + '/clues/';
var f = [0,1,2,3,4,5];
var s = '';


app.set('view engine','jade');

//views
app.set('views',__dirname+'/views');

app.get('/', function(req, res){
//	f.forEach(function(file){
//		var data = fs.readFileSync(path+file);
//		if(data[0] === 65){
//			data[0] = '\n';
//			s+=data + '\n';
//		}
//		if(file == '5')
//			res.send(s);
//		
//		});
res.render('home');
});

app.get('/long', function(req, res){
	res.send('hi');
});

app.listen(port);
