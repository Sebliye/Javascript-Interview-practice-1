//Linear saerch is slower because you have to loop through all th elem

function LinearSearch(arr,val){

     for(let i=0;i<arr.length-1;i++){
          if(val===arr[i]){
               return i
          }
     }
     return -1;
}
console.log(LinearSearch([1,2,3,4],3))