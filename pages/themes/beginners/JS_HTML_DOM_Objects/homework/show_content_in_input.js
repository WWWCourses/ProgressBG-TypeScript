function contentToInputText(){
        // взимаме бутона и инпут-а като обекти:
        var btn_content = document.querySelector(".calculator button").textContent;
        var output_node = document.querySelector(".calculator input");

        // гледаме какво и как сме взели:
        console.log("btn_content:", btn_content);
        console.log("output_node:", output_node);

        // стойността на input-a да бъде равна на съдържанието на натиснатия бутон
        output_node.value = btn_content;

        // input елемента няма съдържание, т.е. innerHTML при него не работи. Той има само value, което определя това което виждаме в input елемента
}
