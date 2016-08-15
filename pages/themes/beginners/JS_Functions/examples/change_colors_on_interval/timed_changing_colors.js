var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

function changeColor( node, color ){
	node.style.backgroundColor = color;
	node.innerHTML = color;
}

function startTimer( msec, node ){
    var i = 0;
    // искаме първоначално цвета да се смени веднага
    changeColor( node, colors[i++] );

	var timer = setInterval( function(){
		changeColor( node, colors[i++] );
        // нулираме i след като изредим всички цветове
		i = i % colors.length;
        // може да използваме и if( i >= colors.length ){ i = 0 }
	}, msec );

	return timer;
}

function stopTimer( timer ){
    clearInterval( timer );
}
