const {
    capitalize,
    reverseString,
    calculator
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