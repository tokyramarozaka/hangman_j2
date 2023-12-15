/**
 * @function randomCongrats
 * : Use this function to congrat the player when he/she find the right words
 * @returns {String}
 */
function randomCongrats() {
    let congrats = ["Nice", "Congratulation", "Bien joué", "Cool", "Super", "Good job", "Success"
        , "Tena mahay ka", "Alefa", "Tohizo fa tsara", "GG", "You're in the right way", "Magnificent", "Goood",
        "Come on, keep it that way, that's wonderfull", "Let him cook, keep it going!!", "You're a great player",
        "I'm proud of you,for real.", "Woaou, you're not disappointing", "If you keep it that way, we'll give you a standing ovation.", "Wonderfull!"];
    console.log(congrats[Math.floor(Math.random() * congrats.length)]);

}

randomCongrats();