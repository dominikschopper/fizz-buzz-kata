
class Divisable {
    constructor(divisor) {
        this.divisor = divisor;
    }

    test(num) {
        if (num === 0) {
            return false;
        }
        return((num % this.divisor) === 0);
    }
}

module.exports = Divisable;