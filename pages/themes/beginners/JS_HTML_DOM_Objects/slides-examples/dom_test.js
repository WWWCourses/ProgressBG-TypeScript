"use strict";
var color = "white";
function F(){
    // var color = "black";
    color = "gray";
    console.log( "Log color in F(): " + color );
}
F();
console.log( "Log color in main: " + color );
