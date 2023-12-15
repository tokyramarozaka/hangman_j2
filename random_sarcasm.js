/**
 * @function randomSarcasms
 * : use this function if you want to be sarcastic when the player write a wrong answer
 * @returns {String}
 */
function randomSarcasms() {

    let snideWords = ["Bien joué, c'est la bonne réponse. Non, je blague!!",
        "Haha, wrong answer Einstein", "Nope, that's not it. Try again",
        "Mais le mot est facile pourtant, essaie encore.",
        "WROOONG, but never back down and never give up",
        "Ouch, tu y est presque. Essaie encore", "Good job (ironically)",
        "Lol, try again", "Le temps que tu trouve la bonne réponse, je vais me faire un petit café.",
        "Come on, you can do it champs", "Good luck for the next time", "Wrong letter!", "Chose another letter, that ain't it!",
        "You can do it in the next run", "False!", "Try again.", "Don't give up"];
    console.log(snideWords[Math.floor(Math.random() * snideWords.length)]);
}

randomSarcasms();