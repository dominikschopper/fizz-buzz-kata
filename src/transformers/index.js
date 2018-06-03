
class Transformer {
    constructor(word, check) {
        this.word = word;
        this.check = check;
    }

    transform(num) {
        if (this.check.test(num)) {
            return this.word;
        }
        return num;
    }

    transformOrEmpty(num) {
        if (this.check.test(num)) {
            return this.word;
        }
        return '';
    }
}

module.exports = Transformer;