
function addValue(word, hidden, letter){
    let array_0 = word.split('');
    let array_1 = hidden.split('');
    for(let i=0; i<array_0.length; i++){
        if(letter== array_0[i]){
            array_1[i] = letter;
        }
    }
    return array_1.join('');
}

function addNewWord(array){
    const word = prompt("Enter your new word : ");
    const nbr = array.filter((elem)=>(elem==word)).length;
    if(nbr>0){
        console.log("This world existed in the array.")
    }else{
        array.push(word);
    }
    return array;
}