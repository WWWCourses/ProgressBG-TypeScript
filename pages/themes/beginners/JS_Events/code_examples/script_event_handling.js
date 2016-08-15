function globalEventListeners(){
    addEventListener("click", function() {
        var target = event.target.nodeName;
        console.log("You clicked on "+target);
    });
}

function objectEventListener(){
    var node = document.getElementById('clickable');
    node.addEventListener("click", clickEventHandler);

    function clickEventHandler(){
        this.style.background="red";
    }
}

function objectEventListenerExample(){
    var node = document.getElementById('clickable');
    node.addEventListener("click", clickEventHandler);

    function clickEventHandler(){
        this.style.background="red";
    }
}

function multipleHandlersPerEvent(){
    var node = document.getElementById('clickable');

    node.addEventListener("click", function(){
        console.log("Clicked first");
    });

    node.addEventListener("click", function(){
        console.log("Clicked second");
    });
}
function kbdEventsHandlers(){
    // var node = document.getElementById('clickable');

    var count = 0;
    addEventListener("keydown", function(){
        console.log( "count: ", count++);
    })
}

// Practical Examples:
function confirmExit(){
    window.onbeforeunload = function(){
        return "Are you sure you want to leave me?";
    }
}

// globalEventListeners();
kbdEventsHandlers();

