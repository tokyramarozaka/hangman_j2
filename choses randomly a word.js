// fonction 1: mitsapaka mot iray
function randomWord(array) {
    const random = array[Math.floor(Math.random() * array.length)]
    return random
}

// fonction .2 : tsy mamerina intsony ilay mot voatsapaka eto aloha
function noComingBack(result) {
    let anotherArray = []

    
    anotherArray.push(result)
   
for(i = 0; i< 3 ; i++ )
       if(i == 1){
        return result
        
       }
       if(i > 1){
       if (anotherArray.includes(result)) {
            randomWord(array)
        }
        else {
            return result
        }
    }
}

// fonction 3 : manafina ilay mot voatsapaka
function hidenWord(string){
    let hide = "*"
    let hiding = hide.repeat(string.length)
    return hiding
}

// function additional : manambatra ny fonction 1, 2, 3.
function choosingHiding(array){
    let random = randomWord(array)
    let got = noComingBack(random)
    let cache = hidenWord(got)
    return cache
}

console.log(choosingHiding(["Bonjour", "Salut", "hi", "mio"]));