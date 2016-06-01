var express= require("express");
var morgan= require("morgan");
var hostname = process.env.IP;
var bodyParser = require("body-parser");
var port = process.env.PORT;

var app = express();
app.use(morgan('dev'));

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end('Will send all the dishes to you!')
})
.post(function(req,res,next){
   res.end('Will add the dish: '+ req.body.name + ' with detail: '+ req.body.description);
})
.delete('/dishes',function(req,res,next){
    res.end('Deleting al dishes');
});

dishRouter.route('/:dishId')
.all(function(req, res, next) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end('Will send all the dishes to you!')
})
.post(function(req,res,next){
   res.end('Will add the dish: '+ req.body.name + ' with detail: '+ req.body.description);
})
.delete('/dishes',function(req,res,next){
    res.end('Deleting al dishes');
});

app.use('/dishes',dishRouter);
app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
   console.log('Server running at http://${hostname}:${port}/'); 
});