const stopNumber = process.argv[2] || 20;

const fizzBuzzer = require('./fizzbuzzer');

for (let i = 0; i <= stopNumber; i += 1) {
    console.log(i, ' => ', fizzBuzzer.transform(i));
}
