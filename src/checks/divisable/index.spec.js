const Divisable = require('./');

describe('the "Divisable" class', () => {

    const threes = [3, 6, 9, 33];
    const fours = [4, 8, 12, 404];

    const nonDivs = [2, 7, 13, 25];

    const divBy3 = new Divisable(3);
    const divBy4 = new Divisable(4);

    describe('the "test()" method', () => {

        it(`divBy3.test() should return true for [3, 6, 9, 33]`, () => {
            threes.forEach((num) => {
                expect(divBy3.test(num)).toBeTruthy();
            });
        });
        it(`divBy4.test() should return true for [4, 8, 12, 404]`, () => {
            fours.forEach((num) => {
                expect(divBy4.test(num)).toBeTruthy();
            });
        });

        it('should return false for [2, 7, 13, 25]', () => {
            nonDivs.forEach((num) => {
                expect(divBy3.test(num)).toBeFalsy();
            });
            nonDivs.forEach((num) => {
                expect(divBy4.test(num)).toBeFalsy();
            });
        });
    });

});