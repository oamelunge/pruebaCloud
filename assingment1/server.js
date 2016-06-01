var express= require("express");
var morgan= require("morgan");
var dishRouter = require("./dishRouter");


var hostname = process.env.IP;
var port = process.env.PORT;

var app = express();
app.use(morgan('dev'));


app.use('/dishes',dishRouter);
app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
   console.log('Server running at http://${hostname}:${port}/'); 
});