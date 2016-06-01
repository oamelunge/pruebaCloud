var argv = require("yargs")
           .usage("Usage: node $0 --l=[num] --b=[num]")
           .demand(['l','b']).argv;
           
var rect = require("./rectangleCall.js")

function solveRect(l,b){
    console.log("Solvind for rectangle with l= "+ l + " and b ="+ b);
    
    rect(l,b, function(err,rectangle){
       
       if(err){console.log(err);}
       else{
             console.log("The are of a rectangle of dimensions length ="+ l +
                    " and breadth =" + b +" is " + rectangle.area());
        console.log("The perimeter of a rectangle of dimensions length ="+ l +
                    " and breadth =" + b +" is " + rectangle.perimeter());
       }
        
    });
 
  
}

 solveRect(argv.l,argv.b);
  /*  solveRect(3,5);
    solveRect(-3,5)*/