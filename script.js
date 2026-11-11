 function onCLick() {
    let myParagraph = document.getElementById("myParagraph");
    myParagraph.style.color = "gold";

    let myParagraph2 = document.getElementById("myParagraph2");
    myParagraph2.style.color = "blue";

    let myParagraph3 = document.getElementById("myParagraph3");
    myParagraph3.style.color = "green";

    let myparagraphs = document.getElementsByClassName("myClass");
    for (let myparagraph of myparagraphs) {
        myparagraph.style.color = "red";
         }
    
    let allPElements = document.getElementsByTagName("p");
    for (let pElement of allPElements) {
        pElement.style.fontWeight = "bold";
        }
        
}



function init() {
    let buttons = document.getElementsByTagName("button");

    buttons[0].addEventListener("click", onCLick);
}

window.onload = init;