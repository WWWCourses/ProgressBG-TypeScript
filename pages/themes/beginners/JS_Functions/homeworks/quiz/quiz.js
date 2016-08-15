// използваме обект, за да реализираме associative array (dictionary/hash) структура:
var correct_answers = {
    'q1' : 'a',             // въпрос 1
    'q2' : 'b',             // въпрос 2
    'q3' : 'c',             // въпрос 3
}
function CheckAnswer( node ){
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // взимаме необходимите HTMl елменти като DOM обекти
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var question = node.parentNode;
    var question_id = question.id;
    var user_answer = question.querySelector('input:checked').value;
    // console.log("question_id: ", question_id);
    // console.log( "user_answer:", user_answer );

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // проверяваме дали е верен дадения от потребителя отговор
    // и ето тук ни помага синтаксиса за достъп до свойство на обект чрез [],
    // защото question_id е променлива:
    // т.е. използваме object[property] нотацията
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if( correct_answers[question_id] == user_answer ){
        alert("Bravo! Correct");
    }else{
        alert("Failllll :(");
    }
}
