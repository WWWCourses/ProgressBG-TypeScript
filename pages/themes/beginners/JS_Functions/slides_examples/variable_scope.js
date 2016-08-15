(function(){
    console.log("Example 1:");
    // променливите, се декларират преди да се изпълни кода:
    function  A(){
        x = 1; // x вече е декларирана, макар и по-долу
        console.log( "x=", x );
        console.log( "y=", y ); // y не е декларирана => грешка
        var x;
    }
    A();
})();

(function(){
    console.log("Example 2:")
    // променливите са локални за функцията/файла в който се дефинират:
    var x;
    function  A(){
        // x е декларирана извън функцията, но стойността й се задава тук
        x = 2;
        console.log( "x=",  x );
    }
    A();
})();

(function(){
    console.log("Example 3:")
    // локалните променливи предефинират външните
    var x;
    x = 3;
    function  A(){
        console.log( x ); // x е декларирана във функцията, но няма зададена стойност;
        var x;
    }
    A();
})();


(function(){
    // тест
    console.log("тест");
    function f() {
        if (1) {
            value = 'yes';
            console.log(value);
        } else {
            var value = 'no';
        }
    }
    f()
})();
