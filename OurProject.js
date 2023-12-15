const prompt = require("prompt-sync")();
/**
@function Menu
* Cette fonction affiche le menu du jeu 
*/
function Menu() {
    console.log("");

    console.log("                                         [ JEU DU PENDU ]");
    console.log("");
    console.log("                                           ...-MENU-...       ");
    console.log("                                     .-----------------------.");
    console.log("                                     |                       |");
    console.log("                                     |      1. Play          |");
    console.log("                                     |      2. Add word      |");
    console.log("                                     |      3. Guides        |");
    console.log("                                     |      4. Exit          |");
    console.log("                                     |                       |");
    console.log("                                     '-----------------------'");
    console.log("");
}

let ArrayOfTheGame = ["algorithme", "saison", "abbreviation", "travaille", "braquage", "sel", "arachide", "pain"];

function HowToPlay() {
    return ("Le jeu consiste a deviner le mot cacher par les * et \nle joueur n'as que 10 tentatives sinon c'est Game Over ");
}

function AddToArray() {
    ArrayOfTheGame.push(prompt("Entrer le mot a ajouter dans le repertoire : "));
}

function ChoiceOfPlayer() {
    return +prompt("Bonjour, Entrer Votre choix : ");
}

function callFunctionFromNumber(){
    
    Menu()

    if(ChoiceOfPlayer()==1){
         word = choosingHiding();
        let star = (params) => console.log("*".repeat(params.length));
        star(word);

        while (word != star) {

            letter = prompt("Write one letter : ")
            isLetter = checkValidLetter(letter);
            if (isLetter = true) {
                randomCongrats()
                addValue()
            }
            else {
                wrongAnswer()
            };
        };
    }
    if(ChoiceOfPlayer()==2){
        AddToArray();
    }
    if(ChoiceOfPlayer()==3){
        HowToPlay();
    }
    if(ChoiceOfPlayer()==4){
        return "thank you for playing";
    }
}

exports.home = Menu;