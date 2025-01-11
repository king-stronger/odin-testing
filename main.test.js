const {
    capitalize,
    reverseString
} = require('./main');


test("The uppercase of j is J", () => {
    expect(capitalize('j')).toMatch("J");
})


test("The reverse string of zero is orez", () => 
    expect(reverseString('zero')).toMatch('orez')
)