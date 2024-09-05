var numbers = [];
var count = 1;
function fizz () {
    while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {numbers.push ("FizzBuzz")}
    else if (count % 5 === 0) {numbers.push ("Buzz")}
    else if (count % 3 === 0) {numbers.push ("Fizz")}
    else  {numbers.push (count)} 
    count++
    }
    console.log (numbers);
}

fizz ();
