
class Contains {
    constructor(testString) {
        this.testRegExp = new RegExp(testString);
    }
    test(num) {
        return this.testRegExp.test(num);
    }
}

module.exports = Contains;