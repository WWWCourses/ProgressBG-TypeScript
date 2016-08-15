var total = 100;
var name = "Iva";

function change_name( ){
	var name = "Ada";
	var flog = function(msg, variable){
		console.log(msg, variable);
		console.log("name in flog:", name);
	}

	flog("name is: ", name);
	// console.log("name in function:", name); // [name in function: Ada]
}

console.log("name in main:", name); // [name in main: Iva]
change_name();

// f1( 4, 5 );