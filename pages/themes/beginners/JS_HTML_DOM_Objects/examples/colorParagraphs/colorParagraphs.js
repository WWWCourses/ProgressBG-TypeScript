function paintParagraph( btnNode ){
    // за да вземем всички параграфи в даден секция, трябва да се "изкачим" до секцията,
    // в която се намира бутона (предполагаме, че не знаем в колко елемента е вложен той):
    var sectionNode = btnNode.parentElement;
    while ( sectionNode.tagName != "SECTION"){
        sectionNode = sectionNode.parentElement;
    }
    console.log("sectionNode:", sectionNode);

    // взимаме параграфите, които се намират в елемента "article" в дадената секция:
    var articleNode = sectionNode.getElementsByTagName("article")[0];
    var paragraphNodes = articleNode.getElementsByTagName("p");
    console.log("paragraphNodes:", paragraphNodes);

    // Взимаме input елемента преди бутона, за да разберем кои параграфи ще оцветяваме и с какъв цвят
    var inputNode = btnNode.previousElementSibling;
    if ( inputNode.name == 'even'){
        // взимаме избрания цвят
        var selectedColor = inputNode.value;
        console.log("selectedColor:", selectedColor);

        // цикъл по четните параграфи (2-ри, 4-ти, ...) и оцветяваме:
        for( var i=1; i<paragraphNodes.length; i=i+2){
            paragraphNodes[i].style.backgroundColor = selectedColor;
            // console.log("paragraphNodes[i]:", paragraphNodes[i]);
        }
    }else{
        // взимаме избрания цвят
        var selectedColor = inputNode.value;
        console.log("selectedColor:", selectedColor);

        // цикъл по нечетните параграфи (1-ви, 3-ти, ...) и оцветяваме:
        for( var i=0; i<paragraphNodes.length; i=i+2){
            paragraphNodes[i].style.backgroundColor = selectedColor;
            // console.log("paragraphNodes[i]:", paragraphNodes[i]);
        }
    }
}
