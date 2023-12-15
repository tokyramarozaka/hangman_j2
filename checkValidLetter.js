/** 
 * gestion des lettres existace dans le mot
*/

// Fonction qui doit renvoyé le mot à identifier
function pickAnyOfem(){
    return "wrd lal";
};

/**
* Fonction qui vérifie l'éxistance d'une lettre dans le mot à trouver
* 
* @param {string} letter : lettre à vérifier
* @returns {boolean} ; existance de la lettre
*/
function checkValidLetter(letter) {
   
   // Variable
   let _word = pickAnyOfem();  // mot à vérifié
   let tab_word = _word.split("");  // mot divisé

   // verification des mots existances
   let exist = false
   tab_word.forEach(element => {
       if (element == letter) {
           exist = true;
       }
   });

   // retourne l'éxistance du mot
   return exist;

}

// Test
//console.log(checkValidLetter("o"));