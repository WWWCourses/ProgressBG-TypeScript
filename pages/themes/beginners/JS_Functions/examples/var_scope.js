var name = "iva";

function change_name( ){
    var name = "Ada";
    console.log("name in function:", name); // [name in function: Ada]
}

function f(){
    console.log("name in f:", name); // [name in f: iva]
}

change_name(); // function call

console.log("name in main:", name); // [name in main: Iva]



function sum( x, y ){
    return 10;
}

f( sum(2,3) ) ;
var test = sum(2,3) + sum(4,5);



