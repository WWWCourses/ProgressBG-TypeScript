/*
    Дефинирайте функция calcPercent(), която изчислява процент от дадено число.
    Функцията има два параметъра, като първия -  представя процента, а втория - числото.
    Резултата от функцията е изчисления процент от даденото число, закръглен до
    2 цифри след десетичната запетая.

    Ресурси:
        Изчисляване на процент: https://bg.wikipedia.org/wiki/Процент
        Закръгляване на число: http://www.w3schools.com/jsref/jsref_tofixed.asp



    Пример за извикване:
    var percent = 20;
    var number  = 10;

    console.log( percent + ' % ' + number + ' = ', calcPercent(percent, number) );
*/
function calcPercent(percent, number){
    var res = ( percent / 100 ) * number;
    return res.toFixed(2);
};

var percent = 20;
var number  = 2000;

console.log( percent + ' % ' + number + ' = ', calcPercent(percent, number) );
