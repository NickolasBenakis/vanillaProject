const { triggerModal } = require('./index');

test('should have input name of city',() => {
    const city = triggerModal("Larissa");
    expect(city).toBe("Larissa");
});

// var assert = require('assert');
// describe('Basic Mocha String Test', function () {
//     it('should return number of charachters in a string', function () {
//         assert.equal("Hello".length, 4);
//     });
//     it('should return first charachter of the string', function () {
//         assert.equal("Hello".charAt(0), 'H');
//     });
// });