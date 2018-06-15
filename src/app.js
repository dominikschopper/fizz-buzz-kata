const {range} = require('rxjs');
const {map} = require('rxjs/operators')

const stopNumber = process.argv[2] || 20;

const divisibilityCheckFactory = (divBy) => (check) => check % divBy === 0;
const containsCheckFactory = (contains) => (check) => check.toString().includes(contains);

const checkDivisibilityBy3 = divisibilityCheckFactory(3);
const checkDivisibilityBy5 = divisibilityCheckFactory(5);

const checkContains3 = containsCheckFactory('3');
const checkContains5 = containsCheckFactory('5');

const combineChecks = (...checks) => {
    return (inp) => {
        return checks.reduce((result, currentCheck) => {
            if (!result) {
                result = currentCheck(inp);
            }
            return result;
        }, false);
    };
}

const checksFor3 = combineChecks(checkDivisibilityBy3, checkContains3);
const checksFor5 = combineChecks(checkDivisibilityBy5, checkContains5);

// console.log(`FizzBuzz program got the commandline parameter ${stopNumber}`);

range(1, stopNumber)
    .pipe(
        map((num) => {
            const numbObj = {
                "original": num,
                "output": []
            };
            return numbObj;
        }),
        map((numObj) => {
            if (checksFor3(numObj.original)) {
                numObj.output.push('Fizz');
            }
            return numObj;
        }),
        map((numObj) => {
            if (checksFor5(numObj.original)) {
                numObj.output.push('Buzz');
            }
            return numObj;
        }),
        map((numObj) => {
            let num = numObj.original;
            if (numObj.output.length > 0) {
                num = numObj.output.join('');
            }
            return num;
        })
    )
    .subscribe((num) => {
        console.log(num);
    });