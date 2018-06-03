const Transformer = require('./');

describe('the "Transformer" class', () => {
    const always = 'Always';
    const three = 'Three';
    const transAlways = new Transformer(always, {"test": () => true});
    const transNever = new Transformer('x', {"test": () => false});
    const trans3 = new Transformer(three, {"test": (num) => num === 3});

    describe('the "transform(num)" method', () => {
        const numbers = [4, 5, 6, 7, 8, 9]

        it('should return the numbers', () => {
            numbers.forEach((num) => {
                expect(transNever.transform(num)).toEqual(num);
                expect(trans3.transform(num)).toEqual(num);
            });
        });

        it('should return the String', () => {
            numbers.forEach((num) => {
                expect(transAlways.transform(num)).toEqual(always);
            });
            expect(trans3.transform(3)).toEqual(three);
        });
    })
    describe('the "transformOrEmpty(num)" method', () => {
        const numbers = [4, 5, 6, 7, 8, 9]

        it('should return the numbers', () => {
            numbers.forEach((num) => {
                expect(transNever.transformOrEmpty(num)).toEqual('');
                expect(trans3.transformOrEmpty(num)).toEqual('');
            });
        });

        it('should return the String', () => {
            numbers.forEach((num) => {
                expect(transAlways.transform(num)).toEqual(always);
            });
            expect(trans3.transform(3)).toEqual(three);
        });
    });
});