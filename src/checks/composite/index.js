
class ChecksComposite {

    constructor() {
        this.checks = [];
    }

    addCheck(check) {
        this.checks.push(check);
        return this.checks.length - 1;
    }

    getAllChecks() {
        return this.checks;
    }

    getCheck(id) {
        return this.checks[id];
    }

    test(num) {
        for (let i = 0; i < this.checks.length; i += 1) {
            if (this.checks[i].test(num)) {
                return true;
            }
        }
        return false;
    }
}

module.exports = ChecksComposite;