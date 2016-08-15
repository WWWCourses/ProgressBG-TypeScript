var clases = ["red", "green", "blue"];
var node = document.getElementById("page1");
var i = 0;

function ChangeClass( ) {
    node.className = clases[i];
    i++;
    i = i % 3;
}
