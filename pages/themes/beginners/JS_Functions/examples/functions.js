// Дефиниция на функция без параметри, върнатия резултат е 'undefined'
function welcome_prompt () {
    var name = prompt("Здравейте! Бихте ли се представили?","моля, въведете Вашето име тук");
    alert("Добре дошли на борда, "+name+"!");
}

// Дефиниция на функция с 1 параметър, върнатия резултат е 'undefined'
function welcome(name){
    var name = "pesho";
    alert("Добре дошли на борда, " + name + "!");
}







// Дефиниция на функция с 1 параметър, и връщане на явен резултат
function is_even(x){
    if( x % 2 == 0){
        return true;
    }else{
        return false;
    }
}

// Дефиниция на функция с 1 параметър, върнатия резултат е 'undefined'
function conditional_statemens(age){
    var status;
    if (age > 19) {
        status = "adult";
    } else if ( age < 19 && age >13) {
        status = "teen";
    }else {
        status = "child"
    }

    alert(status);
}

// Дефиниция на функция с 2 параметъра, върнатия резултат е 'undefined'
function sum(x,y){
    var total = x+y;
    alert("Сумата е "+total);
}

// Дефиниция на функция с 2 параметъра, и връщане на явен резултат
function sum(x,y){
    var total = x+y;
    return total;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

