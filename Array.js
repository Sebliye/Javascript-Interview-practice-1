/* 
Write a function called findeven that takes an array of numbers as a parameter and 
return true if even and return false if odd. Example: array[3,2,9]
*/

 function findEven(arrnum){
     let arr=[];

     for(let elem of arrnum){
          if(elem%2!==0){
               arr.push(false)
          }else{
             arr.push(true)
          }
     }

     return arr;
 }
 //console.log(findEven([32,1,6]));

 ///other way 

 let findEven2=[1,2,3].map(elem=>elem%2?false:true);
 //console.log(findEven2)

 /* 
 2. Write a function called sumoddIndices that take an array 
 as a parameter and returns the sum of values on the odd indices.
 */

 function sumoddIndices(arr){
     let sum=0;
     for(let i=1;i<=arr.length-1;i+=2){
          sum+=arr[i]
     }
     return sum;
 }
 //console.log(sumoddIndices([1,2,3,4]))

 /* 
 
 3.write a function that takes an array of numbers and 
  returns the number of even numbers in an array.
 */

 function even(arr){
      let count=0;

      for(let elem of arr){
           if(elem%2===0){
                count+=1;
           }
      }
      return count;
 }
 //console.log(even([1,2,3,4]))

 /* 
 4. Write a function swap that swaps the first and last element of the array.
 
 */
 function swap(arr){
      let temp=arr[0]
      arr[0]=arr[arr.length-1];
      arr[arr.length-1]=temp;
      return arr;
 }
 //console.log(swap([1,2,3]))


 /* 
 5. Write a function reverse that takes an array of numbers
  and returns a new array that is in reverse order.
 */

 function reverse(arr){
      return arr.reverse()
 };
 //console.log(reverse([1,2,3,8]))

 function reverse2(arr){
      let x=[];

      for(let i=arr.length-1;i>=0;i--){
           x.push(arr[i])
      }
      return x;
 }
 //console.log(reverse2([8,9,10]))

 /* 
 6. Write a function that takes an array of numbers and removes the second element in the array.
 */
 function removeSecond(arr){
       arr.splice(1,1);
       return arr;
 };
 //console.log(removeSecond([1,2,3]))

 /////remove duplicate from array
 let arr=[1,2,3,3,2];//[1,2,3];

 function removeDuplicate(arr){
      let x=[];

      for(let elem of arr){
           if(!x.includes(elem)){
                x.push(elem);
           }
      }
      return x;
 }
 //console.log(removeDuplicate([1,2,3,3,2]))


function removedup(arr){
     let x=[]//n
     for(let elem of arr){//n
          if(x.indexOf(elem)==-1){//n
               x.push(elem)//n
          }
     }
     return x;
}
//console.log(removedup([1,2,4,4,2]))

//palindrome

function palindrome(str){
     let rev=str.split('').reverse().join('');
     console.log(rev);
     console.log(str);
     if(str===rev){
          return 'palindrome'
     }
     return 'not palindorme'
}
console.log(palindrome('mam'))

//array sort 

