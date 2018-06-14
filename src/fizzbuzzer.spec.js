
const fizzbuzzer = require('./fizzbuzzer');

describe('the fizzbuzzer function', () => {
    it('should return Fizz for 3, 6, 9', () => {
        expect(fizzbuzzer(3)).toEqual('Fizz');
        expect(fizzbuzzer(6)).toEqual('Fizz');
        expect(fizzbuzzer(9)).toEqual('Fizz');
    })
})