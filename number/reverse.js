// 12. Write a function, reverseDigits, that takes an integer 
//parameter and then returns the number with the digits reversed.
// E.g.,
// reverseDigits(1234) returns 4321

function reverseDigits(int){
     let newint=int.toString().split('').reverse().join('');
     newint=parseInt(newint)
     console.log(typeof(newint));
     console.log(newint)
}
reverseDigits(1234)
