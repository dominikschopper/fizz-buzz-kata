const ContainsCheck = require('./');

describe('the "Contains" class', () => {

    const testFor = "7";
    const transformStrg = 'Snazz';

    const checkContains7 = new ContainsCheck(testFor, transformStrg);

    const contains7 = [7, 17, 27, 9007];
    const containsNo7 = [3, 5, 22, 900];

    describe('the "test" method', () => {

        it(`returns true for [7, 17, 27, 9007]`, () => {
            contains7.forEach((num) => {
                expect(checkContains7.test(num)).toBeTruthy();
            });
        });

        it(`returns false for [3, 5, 22, 900]`, () => {
            containsNo7.forEach((num) => {
                expect(checkContains7.test(num)).toBeFalsy();
            });
        });
    });
});