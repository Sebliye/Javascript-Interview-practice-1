// 7. Write a function sumArray that sums an array of the same
//  length and different length. 
// You can return a new array or use one of the arrays to sum.


//samelength
function sumArray(arr1,arr2){
     let sumarr=[];

     if(arr1.length===arr2.length){
          for(let i=0;i<arr1.length;i++){
               sumarr[i]=arr1[i]+arr2[i]
          }
     }
     // if(arr1.length>arr2.length){
     //      let sum;
     //      for(let i=0,j=0;i<arr2.length;i++,j++){
     //           if(j===i){
     //                sumarr.push(arr1[j]+arr2[i])
     //           }
     //           else if(j>i){
     //               sumarr.push(arr1[j])
     //           }
     //      }
     // }
     return sumarr;
}
console.log(sumArray([1,2,3],[1,2,3]))
module.exports=sumArray;
// function sumArray(arr1,arr2){
//      if(arr1.length>arr2.length){
//           for(let i=0;i<arr2.length;i++){
//                arr1[i]=arr1[i]+arr2[i]
//           }
//           return arr1;
//      }else if(arr2.length>arr1.length){
//           for(let i=0;i<arr1.length;i++){
//                arr2[i]=arr2[i]+arr1[i]
//           }
//           return arr2;
//      }else if(arr1.length==arr2.length){
//           for(let i=0;i<arr1.length;i++){
//                arr1[i]=arr1[i]+arr2[i]
//           }
//           return arr1;
//      }
     
// }
// console.log(sumArray([1,2,3,0],[1,2,3]))

