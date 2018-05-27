# FizzBuzz Kata

Write the programm for this kata in a way that everything is as easy to change
and extend as possible!

create a nodejs programm that takes one commandline
argument which should be an integer.

the programm prints out all natural numbers starting at
0 until the given number.

Every time the number it should print out is divisable by 3
it prints out the word "Fizz" instead

Every time the number it should print out is divisable by 5
it prints out the word "Buzz" instead

Every time the number it should print out is divisable by 3 *and* 5
it should print out the word "FizzBuzz" instead

Write tests for all functions before you implement them

The output should look like this:

```bash
me@somewhere:~/fizzbuzz> node src/app.js 16
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
```

Please try take roughly 20min to write that!

I provided the `src` folder with a basic test for the fizzbuzz output.