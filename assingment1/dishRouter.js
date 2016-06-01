var express = require('express');
var bodyParser = require('body-parser');

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
.delete(function(req,res,next){
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
.delete(function(req,res,next){
    res.end('Deleting al dishes');
});

module.exports.dishRouter = dishRouter;
