setTimeout(myFunction, 2000);

function myFunction() {
    var node = document.getElementById("imga");
    console.log("node=", node);
    node.style.visibility = "hidden";
}

setTimeout(showElem, 3000);
function showElem() {
    document.getElementById("imga").style.visibility = "visible";
}

setTimeout(re, 3000);
function re() {
    location.reload(myFunction);
}
