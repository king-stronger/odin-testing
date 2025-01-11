function capitalize(string){
    return string.at(0).toUpperCase();
}

function reverseString(string){
    let tempArray = [];

    for(let i = string.length - 1; i >=  0; i--){
        tempArray.push(string[i]);
    }

    return tempArray.join('');
}

const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function caesarCipher(string, shift){
    let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    
    let cipher = [...string].map(char => {
        return hash(char, alphabet, shift);
    });

    return cipher.join('');
}

function hash(char, alphabet, shift){
    let tempChar = char.toLowerCase();
    let index = alphabet.indexOf(tempChar);
        
    if(index === -1 || shift % 26 === 0){
        return tempChar;
    }

    let newLetterIndex = index + shift;

    if(newLetterIndex > 26){
        newLetterIndex -= 26;
    }

    return char === char.toUpperCase() ? alphabet.at(newLetterIndex).toUpperCase() : alphabet.at(newLetterIndex);
}


module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
}