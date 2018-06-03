const ChecksComposite = require('./index');

describe('the "ChecksComposite" Class', () => {

    const checkTrue = {"test": () => true};
    const checkFalse = {"test": () => false};

    let checksCompMixed = null;
    let checksCompTrue = null;
    let checksCompFalse = null;
    let idTrue1 = null;
    let idFalse1 = null;
    let idTrue2 = null;
    let idFalse2 = null;

    beforeEach(() => {
        checksCompMixed = new ChecksComposite();
        idTrue1 = checksCompMixed.addCheck(checkTrue);
        idFalse1 = checksCompMixed.addCheck(checkFalse);

        checksCompTrue = new ChecksComposite();
        idTrue2 = checksCompTrue.addCheck(checkTrue);

        checksCompFalse = new ChecksComposite();
        idFalse2 =checksCompFalse.addCheck(checkFalse);
    });

    describe('the "addCheck()" method', () => {
        it('adds a check to the checksArray and returns its index', () => {
            expect(checksCompMixed.getCheck(idTrue1)).toEqual(checkTrue);
            expect(checksCompMixed.getCheck(idFalse1)).toEqual(checkFalse);
            expect(checksCompFalse.getCheck(idFalse2)).toEqual(checkFalse);
            expect(checksCompTrue.getCheck(idTrue2)).toEqual(checkTrue)
        });
    });

    describe('the "test(num)" method', () => {
        it('returns true if the true test was added', () => {
            expect(checksCompTrue.test()).toBeTruthy();
        });

        it('returns true if the true test was added', () => {
            expect(checksCompFalse.test()).toBeFalsy();
        });

        it('returns true if one test that returns false test was added', () => {
            expect(checksCompMixed.test()).toBeTruthy();
        });
    });
});