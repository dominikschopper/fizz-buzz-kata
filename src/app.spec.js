/* of course this is something you should require ... */
const fizzer = (num) => {
    return((num % 3) ? num : 'Fizz');
}

describe('input/output of the main fizzbuzz app', () => {
    it('should return "Fizz"', () => {
        const fizzyNumbers = [ 3, 13, 9, 43, 9003 ];
        fizzyNumbers.forEach((num) => {
            expect(fizzer(num)).toEqual('Fizz');
        });
    });

    it('should return "Buzz"', () => {
        const buzzyNumbers = [5, 10, 20, 505, 10000];
        buzzyNumbers.forEach((num) => {
            expect(fizzer(num)).toEqual('Buzz');
        });
    });

    it('should return "FizzBuzz"', () => {
        const fizzyAndBuzzyNumbers = [15, 30, 35, 45, 1500];
        fizzyAndBuzzyNumbers.forEach((num) => {
            expect(fizzer(num)).toEqual('FizzBuzz');
        });
    });


    it('should return the number itself', () => {
        const nonChanginNumbers = [0, 1, 2, 4, 7, 8, 11, 14, 16, 17];
        nonChanginNumbers.forEach((num) => {
            expect(fizzer(num)).toEqual(num);
        });
    });

});
