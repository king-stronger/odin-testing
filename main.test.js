const {capitalize} = require('./main');


it("The uppercase of j is J", () => {
    expect(capitalize('j')).toMatch("J");
})