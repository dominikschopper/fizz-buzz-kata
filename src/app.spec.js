/* of course this is something you should require and that should work correctly  ... */
const fizzBuzzer = (num) => {
    const values = ['Fizz', 'Buzz', 'FizzBuzz', num, num, num, num];
    const maxIdx = values.length - 1;
    const rnd = parseInt(Math.random() * maxIdx, 10) % maxIdx;
    return values[rnd];
}

describe('input/output of the "fizzBuzzer"', () => {
    it('should return "Fizz" for [3, 13, 30, 31, 43, 3001]', () => {
        const fizzyNumbers = [3, 13, 30, 31, 43, 3001];
        fizzyNumbers.forEach((num) => {
            expect(fizzBuzzer(num)).toEqual('Fizz');
        });
    });

    it('should return "Buzz" for [5, 10, 50, 51, 503, 10502]', () => {
        const buzzyNumbers = [5, 10, 50, 51, 503, 10502];
        buzzyNumbers.forEach((num) => {
            expect(fizzBuzzer(num)).toEqual('Buzz');
        });
    });

    it('should return "FizzBuzz" for [15, 30, 45, 51, 150]', () => {
        const fizzyAndBuzzyNumbers = [15, 30, 45, 51, 150];
        fizzyAndBuzzyNumbers.forEach((num) => {
            expect(fizzBuzzer(num)).toEqual('FizzBuzz');
        });
    });


    it('should return the number itself for [0, 1, 2, 4, 11, 14, 17]', () => {
        const nonChangingNumbers = [0, 1, 2, 4, 11, 14, 17];
        nonChangingNumbers.forEach((num) => {
            expect(fizzBuzzer(num)).toEqual(num);
        });
    });

});
