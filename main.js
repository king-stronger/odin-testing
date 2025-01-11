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

module.exports = {
    capitalize,
    reverseString
}