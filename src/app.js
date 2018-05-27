
const stopNumber = process.argv[2] || 20;

console.log(`FizzBuzz program got the commandline parameter ${stopNumber}`);

for (let i = 0; i <= stopNumber; i += 1) {
    console.log(i);
}
