var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var chk = [{0:1},{1:0},{2:1},{3:0},{4:0}];
var s = '';

var clues = ["","Son of the head of gang----ditty","Sounds like 'wretch'---drawn hurriedly","A hot drink to wear","Add a dimension to your sight in a closed room"];

var c = [];
var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'wowmuch' && user.pass === 'verymuch') {
    return next();
  } else {
    return unauthorized(res);
  };
};


app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));

//views
app.set('views',__dirname+'/views');

app.get('/', function(req, res){
	s = '';
	clues.forEach(function(w,i){
		if(chk[i][i]){
			s+=w + '\n';
		}
		if(i == 4)	
			res.render('home', {clue:s});
	});
	console.log(s);
});

app.get('/long/wrong', auth, function(req,res){
	res.render('control');
});

app.get('/api/change', function(req, res){
	var v = req.query.v;
	var r = chk[v][v];
	if(r){
		chk[v][v] = 0;
	}else{
		chk[v][v] = 1;
	}	
	console.log(chk);
	res.send('k');
});

app.listen(port);
