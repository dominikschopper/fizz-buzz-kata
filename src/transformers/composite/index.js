
class TransformerAggregate {
    constructor() {
        this.transformers = [];
    }
    addTransformer(trans) {
        this.transformers.push(trans);
    }
    transform(num) {
        let re = '';
        this.transformers.forEach((optPrime) => {
            const transOrEmpty = optPrime.transformOrEmpty(num);
            re += transOrEmpty;
        });
        if (re !== '') {
            return re;
        }
        return num;
    }
}

module.exports = TransformerAggregate;