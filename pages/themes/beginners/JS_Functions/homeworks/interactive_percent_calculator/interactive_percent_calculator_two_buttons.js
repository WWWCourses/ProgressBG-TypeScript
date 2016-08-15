function ipc_clear( percent_id, number_id, result_set_id, result_value_id ){
    document.getElementById(percent_id).value = '';
    document.getElementById(number_id).value = '';
    document.getElementById(result_set_id).style.display = "none";
    document.getElementById(result_value_id).innerHTML = '';
}
function ipc_calc( percent_id, number_id, result_set_id, result_value_id ){
    var percent = document.getElementById(percent_id).value;
    var number = document.getElementById(number_id).value;
    var result_set_node = document.getElementById(result_set_id);
    var result_value_node = document.getElementById(result_value_id);

    // TODO: check values

    // calculate
    var res = ( percent / 100 ) * number;
    res = res.toFixed(2);

    // show result
    result_value_node.innerHTML = res;
    result_set_node.style.display = "block";
}

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
