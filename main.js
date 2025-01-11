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

function analyzeArray(arr){
    let max = arr[0];
    let min = arr[0];

    console.log(max, min)
    let sum = arr.reduce((prev, cur) => {
        if(cur > max){
            max = cur;
        }

        if(cur < min){
            min = cur;
        }

        return prev + cur;
    })

    return {
        max,
        min,
        length: arr.length,
        average: sum / arr.length
    }
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}