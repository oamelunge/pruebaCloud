var express= require("express");
var morgan= require("morgan");
var hostname = process.env.IP;
var bodyParser = require("body-parser")
var port = process.env.PORT;

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes',function(req,res,next){
   res.writeHead(200,{'Content-Type':'text/plain'});
   next();
});

app.get('/dishes', function(req,res,next){
    res.end("iwll send all the sishes to you!");s
    
});
app.post('/dishes',function(req,res,next){
    res.end('Will add the dish: '+ req.body.name + ' with detail: '+ req.body.description);
});
app.delete('/dishes',function(req,res,next){
    res.end('Deleting al dishes');
});


app.get('/dishes/:dishId', function(req,res,next){
    res.end("iwll send details for dish" +req.params.dishId);s
    
});

app.put('/dishes/:dishId',function(req,res,next){
    res.write('Updating the dish : '+ req.params.dishId + '\n');
    res.end('Will update the dish: '+ req.body.name + ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId',function(req, res, next) {
   res.end('Deleting dish: '+ req.params.dishId); 
});

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
   console.log('Server running at http://${hostname}:${port}/'); 
});