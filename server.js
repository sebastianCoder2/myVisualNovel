var express = require("express");
var app     = express();

app.use(express.static(__dirname + '/public'));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/',function(req,res){
  res.sendFile('index.html');
  
});

app.get('/about',function(req,res){
  res.sendFile('about/index.html',{"root": __dirname+'/public'});
});

app.listen(3000);

console.log("Running at Port 3000");