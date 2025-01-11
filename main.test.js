const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} = require('./main');


test("The uppercase of j is J", () => {
    expect(capitalize('j')).toMatch("J");
});


test("The reverse string of zero is orez", () => {
    expect(reverseString('zero')).toMatch('orez');
});

test("1 + 3 equals 4", () => {
    expect(calculator.add(1, 3)).toBe(4);
});

test("10 - 8 equals 2", () => {
    expect(calculator.substract(10, 8)).toBe(2);
});

test("5 * 6 equals 30", () => {
    expect(calculator.multiply(5, 6)).toBe(30);
})

test("27 / 9 equals 3", () => {
    expect(calculator.divide(27, 9)).toBe(3);
});

test("The caesar cipher of def with a shift of -3 is abc", () => {
    expect(caesarCipher("def", -3)).toMatch("abc");
});

test("The average, min, max and length of [1,8,3,4,2,6] are 4, 1, 8, 6", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})