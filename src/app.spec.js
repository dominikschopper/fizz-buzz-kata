/* of course this is something you should write correctly and should require here ... */
const fizzBuzzer = (num) => {
    const values = ['Fizz', 'Buzz', 'FizzBuzz', num, num, num, num, num, num];
    const lastIdx = values.length - 1;
    const int = parseInt(Math.random() * lastIdx, 10) % lastIdx;
    return values[int];
}

describe('input/output of the "fizzBuzzer"', () => {
    it('should return "Fizz" for [ 3, 6, 9, 300, 9003 ]', () => {
        const fizzyNumbers = [ 3, 6, 9, 300, 9003 ];
        fizzyNumbers.forEach((num) => {
            expect(fizzBuzzer(num)).toEqual('Fizz');
        });
    });

    it('should return "Buzz" for [5, 10, 20, 505, 10000]', () => {
        const buzzyNumbers = [5, 10, 20, 505, 10000];
        buzzyNumbers.forEach((num) => {
            expect(fizzBuzzer(num)).toEqual('Buzz');
        });
    });

    it('should return "FizzBuzz" for [15, 30, 45, 1500]', () => {
        const fizzyAndBuzzyNumbers = [15, 30, 45, 1500];
        fizzyAndBuzzyNumbers.forEach((num) => {
            expect(fizzBuzzer(num)).toEqual('FizzBuzz');
        });
    });


    it('should return the number itself for [0, 1, 2, 7, 11, 17]', () => {
        const nonChanginNumbers = [0, 1, 2, 7, 11, 17];
        nonChanginNumbers.forEach((num) => {
            expect(fizzBuzzer(num)).toEqual(num);
        });
    });

});
