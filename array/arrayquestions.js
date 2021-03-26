// 9. write a function named evenOddCounter which takes a number array and prints.
// the number of odd and even elements inside
// for example if the array is [1,2,3,4] output will be
// oddElements:2   evenElements:2

function evenOddCounter(arr){
     let evencount=0;
     let oddcount=0

     for(let elem of arr){
          if(elem%2===0){
               evencount++
          }else{
               oddcount++
          }
     }
     return {even:evencount,odd:oddcount}
}
console.log(evenOddCounter([1,2,3,4]));
module.exports=evenOddCounter;
