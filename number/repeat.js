// 14. write  a function repeat that takes three arguments:an array,
// a number(num) and another number(n). The function should return a new 
//array with the number x repeated an additional n times consecutively.
// for Example: repeat([1,2,3,4,5],3,2);// returns=[1,2,3,3,4,5]


function Repeat(arr,num,n){
     let newarr=[];//1,2,3,3

     for(let elem of arr){
          if(elem!==num){
               newarr.push(elem)
          }
          else if(elem===num){
               let i=0;//
               while(i<=n){//1<=2 t  2<=2 t
                    newarr.push(elem)
               }
               i++
          }
     }
     return newarr;
}
console.log(Repeat([1,2,3],3,2))