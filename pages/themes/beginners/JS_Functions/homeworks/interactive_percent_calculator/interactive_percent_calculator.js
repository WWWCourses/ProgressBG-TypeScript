function ipc_action(action_name){
    if ( action_name == "Изчисли"){
        console.log("CALC");
    }else{
        console.log("CLEAR");
    };

    showHideNode(document.getElementsByClassName('result_set')[0]);
    clearFieldsConditional(['the_percent', 'the_number', 'result_value']);
    // swapValues(this, 'Изчисли', 'Изчисти')"
};
function showHideNode(effected_node){
    var display = window.getComputedStyle(effected_node, null).getPropertyValue("display");
    console.log("effected_node.style.display", effected_node.style.display);
    if ( display == 'none'){
        effected_node.style.display = 'block';
    }else {
        effected_node.style.display = 'none';
    }
}
function clearFieldsConditional( multibutton, ids ){
    for (var i = 0; i < ids.length; i++) {
        var node = document.getElementById( ids[i] );
        node.value = '';
        node.innerHTML = '';
    };
}
function swapValues( node, val1, val2 ){
    node.innerHTML = node.innerHTML == val1 ? val2 : val1;
}
function calcPercent(percent, number){
    var res = ( percent / 100 ) * number;
    return res.toFixed(2);
};
