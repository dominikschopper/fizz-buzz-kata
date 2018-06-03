const Divisable = require('./checks/divisable');
const Contains = require('./checks/contains');
const CheckComposite = require('./checks/composite');

const Transformer = require('./transformers');
const TransformerComposite = require('./transformers/composite');

const divBy3 = new Divisable(3);
const divBy5 = new Divisable(5);

const contains3 = new Contains("3");
const contains5 = new Contains("5");

const threeChecks = new CheckComposite();
const fiveChecks = new CheckComposite();

threeChecks.addCheck(divBy3);
threeChecks.addCheck(contains3);

fiveChecks.addCheck(divBy5);
fiveChecks.addCheck(contains5);

const bumblethree = new Transformer('Fizz', threeChecks);
const ironfive = new Transformer('Buzz', fiveChecks);

const optimusPrime = new TransformerComposite();

optimusPrime.addTransformer(bumblethree);
optimusPrime.addTransformer(ironfive);

module.exports = optimusPrime;