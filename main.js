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

module.exports = {
    capitalize,
    reverseString,
    calculator
}